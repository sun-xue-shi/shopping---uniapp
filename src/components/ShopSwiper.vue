<script setup lang="ts">
import type { Banner } from '@/types/home'
import { ref } from 'vue'

let activeIndex = ref(0)
const onChange: UniHelper.SwiperOnChange = (event) => {
  activeIndex.value = event.detail.current
}

defineProps<{
  list: Banner[]
}>()
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="true" :interval="3000" @change="onChange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
// :host {
// }
@import '@/components/style/ShopSwiper.css';
</style>
