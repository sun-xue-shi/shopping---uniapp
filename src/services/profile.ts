import type { ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

// 个人信息
export const getMemberProfile = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

// 修改个人信息
export const putMemberProfile = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
