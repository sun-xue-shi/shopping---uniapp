import type { AddressItem, AddressParams } from '@/types/address'
import { http } from '@/utils/http'

// 新建地址
export const postMemberAddress = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

// 获取地址列表
export const getMemberAddress = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

// 获取单个地址
export const getMemberAddressById = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

// 修改单个地址
export const putMemberAddressById = (id: string, data: AddressParams) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

// 删除单个地址
export const deleteMemberAddressById = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
