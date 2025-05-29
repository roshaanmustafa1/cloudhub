<template>
  <div class="">
    <TheHeader />
    <RouterView></RouterView>
    <TheFooter />
  </div>
</template>
<script setup lang="ts">
import TheHeader from '@/components/common/TheHeader.vue'
import TheFooter from '@/components/common/TheFooter.vue'
</script>
