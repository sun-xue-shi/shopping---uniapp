<script setup lang="ts">
import type { Category } from '@/types/home'

const props = defineProps<{
  list: Category[]
}>()
</script>

<template>
  <!-- 首页分类 -->
  <view class="category">
    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
      v-for="item in list"
      :key="item.id"
    >
      <image class="icon" :src="item.icon"> </image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
/* 前台类目 */
@import './style/CategoryPanel.css';
</style>
