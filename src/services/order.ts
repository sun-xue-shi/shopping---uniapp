import type { OrderCreateParams, OrderPreResult, OrderResult } from '@/types/order'
import { http } from '@/utils/http'

// 获取预付订单
export const getOrderPre = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

// 获取立即购买订单
export const getOrderPreNow = (data: { skuId: string; count: string; addressId?: string }) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}

// 获取立即购买订单
export const postOrderPre = (data: OrderCreateParams) => {
  return http<{ id: string }>({
    method: 'POST',
    url: '/member/order',
    data,
  })
}

// 获取订单详情
export const getOrderById = (id: string) => {
  return http<OrderResult>({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}

// 再次购买
export const getMemberOrderRepurchaseByIdAPI = (id: string) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: `/member/order/repurchase/${id}`,
  })
}
