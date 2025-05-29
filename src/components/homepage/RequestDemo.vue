<template>
  <div class="py-40">
    <div class="container flex flex-col items-center">
      <img src="@/assets/images/Requestdemo/codeicon.png" alt="" class="mb-8" />
      <h2 class="text-2xl font-bold leading-10 mb-4 text-center md:text-left">
        Increase your team’s visibility and alignment
      </h2>
      <p class="text-xl leading-7 text-muted-foreground mb-12">
        Start for free, flexible for all teams.
      </p>

      <div>
        <Button variant="link" class="text-secondary-foreground"
          >Request a demo</Button
        >
        <Button class="" size="lg">Starts for free</Button>
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
