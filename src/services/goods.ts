import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

// 商品详情数据
export const getGoods = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
