<script setup lang="ts">
import { getGuessLike } from '@/services/home'
import type { PageParams, PageResult } from '@/types/global'
import type { GuessItem } from '@/types/home'
import { onMounted, ref } from 'vue'

// 获取首页猜你喜欢数据
let finish = ref(false)
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}
const guessLikeList = ref<GuessItem[]>([])
const getGuessLikeData = async () => {
  if (finish.value) {
    return uni.showToast({ icon: 'none', title: '已经到底了~' })
  }
  const res = await getGuessLike(pageParams)
  guessLikeList.value.push(...res.result.items)

  // 页码增加的条件
  if (res.result.pages > pageParams.page) {
    pageParams.page++
  } else {
    finish.value = true
  }
}

// 下拉刷新时重置数据
const resetData = () => {
  pageParams.page = 1
  guessLikeList.value = []
  finish.value = false
}

// 组件挂载后
onMounted(() => {
  getGuessLikeData()
})

// 暴露方法给父组件
defineExpose({
  resetData,
  getMore: getGuessLikeData,
})
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessLikeList"
      :key="item.id"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text"> {{ finish ? '已经到底了~' : '正在加载...' }} </view>
</template>

<style lang="scss">
@import '@/components/style/GuessLike.css';
</style>
