<template>
  <div class="pt-20 bg-gradient-primary md:px-10">
    <div class="container md:text-center">
      <h2 class="text-4xl md:text-[54px] font-semibold text-secondary mb-3">
        Keep every one in the loop
      </h2>
      <p class="text-secondary mb-3 text-xl leading-9 font-light">
        All good things starts with a homepage. <br />Get inspired without breaking your wallet.
      </p>
      <Button class="bg-background text-secondary-foreground mb-8" size="lg">Start for free</Button>
      <div class="w-full justify-center flex">
        <img src="@/assets/images/theloop/system.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import Button from '../ui/button/Button.vue'

export default {
  components: {
    Button
  }
}
</script>
