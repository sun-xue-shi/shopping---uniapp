<script setup lang="ts">
import type { HotItem } from '@/types/home'

defineProps<{
  list: HotItem[]
}>()
</script>

<template>
  <!-- 推荐专区 -->
  <view class="panel hot">
    <view class="item" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator :url="`/pages/hot/hot?type=${item.type}`" class="cards">
        <image class="image" mode="aspectFit" :src="item.pictures[0]"></image>
        <image class="image" mode="aspectFit" :src="item.pictures[1]"></image>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
/* 热门推荐 */
@import './style/HotPanel.css';
</style>
