import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 拦截器设置
const httpInterceptor = {
  invoke(option: UniApp.RequestOptions) {
    if (!option.url.startsWith('http')) {
      option.url = baseURL + option.url
    }

    option.timeout = 10000
    // 小程序请求头标识
    option.header = {
      'source-client': 'miniapp',
      ...option.header,
    }

    // token请求头标识
    const token = memberStore.profile?.token
    if (token) {
      option.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  message: string
  result: T
}

// 请求函数
export const http = <T>(option: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((reslove, reject) => {
    uni.request({
      ...option,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          reslove(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401未授权
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          // 其他错误
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).message || '请求错误',
          })
          reject(res)
        }
      },
      // 请求失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误',
        })
        reject(err)
      },
    })
  })
}
