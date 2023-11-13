import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

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
