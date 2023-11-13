<script setup lang="ts">
import ShopSwiper from '@/components/ShopSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { getHomeBanner } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { Banner } from '@/types/home'

const bannerList = ref<Banner[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBanner()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <CustomNavbar />
  <ShopSwiper :list="bannerList" />
  <CategoryPanel />
  <view class="index">首页</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
