import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

// 分类页面一级分类
export const getCategoryTop = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
