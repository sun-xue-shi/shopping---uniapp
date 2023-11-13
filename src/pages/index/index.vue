<script setup lang="ts">
import ShopSwiper from '@/components/ShopSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBanner, getHomeCategory, getHomeHot } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { Banner, Category, HotItem } from '@/types/home'

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

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<template>
  <!-- 自定义导航 -->
  <CustomNavbar />
  <!-- 轮播图 -->
  <ShopSwiper :list="bannerList" />
  <!-- 分类 -->
  <CategoryPanel :list="categoryList" />
  <!-- 热门 -->
  <HotPanel :list="hotList" />
  <view class="index">首页</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
