import type { GoodsItem } from './global'

// bannerList数组中每一项的类型
export type Banner = {
  // 跳转链接
  hrefUrl: string

  // 图片链接
  imgUrl: string

  // id
  id: string

  // 跳转类型
  type: number
}

// 首页分类
export type Category = {
  // id
  id: string

  // 小标题
  name: string

  // icon链接
  icon: string
}

// 热门推荐
export type HotItem = {
  /** 说明 */
  alt: string
  /** id */
  id: string
  /** 图片集合[ 图片路径 ] */
  pictures: string[]
  /** 跳转地址 */
  target: string
  /** 标题 */
  title: string
  /** 推荐类型 */
  type: string
}

// 猜你喜欢
export type GuessItem = GoodsItem
