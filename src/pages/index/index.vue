<script setup lang="ts">
import CustomNavbar from '@/components/CustomNavbar.vue'
import ShopSwiper from '@/components/ShopSwiper.vue'
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
  <view class="index">首页</view>
</template>

<style lang="scss">
//
</style>
