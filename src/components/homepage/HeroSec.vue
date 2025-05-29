<template>
  <div
    class="container flex justify-center items-center flex-col md:text-center md:pb-40 pt-[93px] md:px-10"
  >
    <div
      class="max-w-7xl w-full md:bg-[url(@/assets/images/herobg.png)] bg-top bg-no-repeat bg-cover md:pb-80"
    >
      <h2
        class="text-4xl md:text-[84px] md:leading-[89px] font-semibold tracking-[-3.2px] mb-6"
      >
        Create, inspect, and apply synthetic surveillance broadly.
      </h2>
      <p class="md:text-xl mb-8 text-muted-foreground">
        Start with a stunning homepage. Stay motivated without hurting your
        pocket.
      </p>
      <Button class="mb-6 rounded-full" size="lg">Start for free</Button>
      <img
        class="block md:hidden w-full"
        src="@/assets/images/hero-bg-mobile.png"
        alt="mobile-graphic"
      />
      <div class="text-xs text-center md:text-sm">
        <span class="text-muted-foreground"
          >Want to talk or get a live demo?
        </span>
        <Button
          variant="link"
          class="text-secondary-foreground pl-0 text-xs md:text-sm"
          >Get in touch →</Button
        >
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../ui/button/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
<style></style>
