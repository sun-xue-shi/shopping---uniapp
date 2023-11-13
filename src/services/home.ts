import type { Banner } from '@/types/home'
import { http } from '@/utils/http'

export const getHomeBanner = (distributionSite = 1) => {
  return http<Banner[]>({
    method: 'GET',
    url: '/home/banner',
    data: { distributionSite },
  })
}
