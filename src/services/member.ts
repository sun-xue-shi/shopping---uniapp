import type { PageParams, PageResult } from '@/types/global'
import type { GuessItem } from '@/types/home'
import { http } from '@/utils/http'

// 首页猜你喜欢
export const getGuessLike = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
