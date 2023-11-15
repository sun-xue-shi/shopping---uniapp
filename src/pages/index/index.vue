<script setup lang="ts">
import ShopSwiper from '@/components/ShopSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import GuessLike from '@/components/GuessLike.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { getHomeBanner, getHomeCategory, getHomeHot } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { Banner, Category, HotItem } from '@/types/home'
import { useGuessList } from '@/composables'

// 轮播图数据
const bannerList = ref<Banner[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBanner()
  bannerList.value = res.result
}

// 首页分类数据
const categoryList = ref<Category[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategory()
  categoryList.value = res.result
}

// 热门数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHot()
  hotList.value = res.result
}

//加载中标记
const isLoading = ref(false)
// 页面加载前获取数据
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})

// 猜你喜欢
const { guessRef, onScrollToLower } = useGuessList()

// 下拉刷新
const isTriggered = ref(false)
const onRefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  // 一次性发送加载数据请求
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航 -->
  <CustomNavbar />
  <!-- 滚动区域 -->
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrollToLower"
    class="scroll-view"
    scroll-y
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 轮播图 -->
      <ShopSwiper :list="bannerList" />
      <!-- 分类 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <GuessLike ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
