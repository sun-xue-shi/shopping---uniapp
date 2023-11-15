import type { Banner, Category, GuessItem, HotItem } from '@/types/home'
import type { PageParams, PageResult } from '@/types/global'
import { http } from '@/utils/http'

// 轮播图
export const getHomeBanner = (distributionSite = 1) => {
  return http<Banner[]>({
    method: 'GET',
    url: '/home/banner',
    data: { distributionSite },
  })
}

// 前台分类
export const getHomeCategory = () => {
  return http<Category[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

// 热门
export const getHomeHot = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

// 首页猜你喜欢
export const getGuessLike = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
