import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

// 添加购物车
export const postMemberCart = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: `/member/cart`,
    data,
  })
}

// 获取购物车数据
export const getMemberCart = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: `/member/cart`,
  })
}

// 删除/清空购物车数据
export const deleteMemberCart = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: `/member/cart`,
    data,
  })
}

// 修改步进器
export const putMemberCart = (skuId: string, data: { selected?: boolean; count?: number }) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

// 修改步进器
export const putMemberCartSelect = (data: { selected: boolean }) => {
  return http({
    method: 'PUT',
    url: `/member/cart/select`,
    data,
  })
}
