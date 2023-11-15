import type GuessLike from '@/components/GuessLike.vue'
import { ref } from 'vue'

export const useGuessList = () => {
  const guessRef = ref<InstanceType<typeof GuessLike>>()
  // 滚动触底
  const onScrollToLower = () => {
    guessRef.value?.getMore()
  }

  return {
    guessRef,
    onScrollToLower,
  }
}
