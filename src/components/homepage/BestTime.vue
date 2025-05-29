<template>
  <div class="py-20 bg-gradient-primary md:px-40">
    <div class="container">
      <div class="flex flex-col justify-center md:items-center">
        <h1 class="text-lg md:text-xl p-0 text-primary-foreground mb-1">Best time here</h1>
        <h2 class="text-4xl md:text-[54px] font-semibold text-secondary md:text-center mb-10">
          Better feedback at the right time.
        </h2>
      </div>

      <!-- grid -->
      <div class="gap-4 w-full">
        <div class="bg-black/90 rounded-3xl p-6 md:px-10  md:pb-[91px] md:h-[358px] flex items-center w-full flex-col">
          <div class="md:bg-[#222222] md:px-10 w-full flex items-center rounded-r-3xl rounded-l-3xl md:h-[307px] rounded-t-none">
            <div class="w-full">
              <div class="md:flex justify-between items-center border-b border-muted-foreground pb-4">
                <div class="flex items-center gap-4">
                <span
                    class="bg-slate-800 w-[68px] h-[68px] flex justify-center items-center rounded-lg"
                >
                  <img src="@/assets/images/besttime/code.png" alt=""/>
                </span>
                  <div>
                    <h4 class="text-white text-[22px]">Cloudhub</h4>
                    <p class="text-[19px] text-muted-foreground">2m ago in Brand</p>
                  </div>
                </div>
                <Button class="mt-4 md:mt-0 h-auto md:h-11">View Post</Button>
              </div>
              <div class="flex justify-between items-center mt-4 md:mt-10">
                <div class="flex flex-col md:flex-row gap-4 justify-center md:items-center">
                  <img src="@/assets/images/besttime/userimages.png" alt="" class="w-fit"/>
                  <p class="text-white text-xs md:text-xl max-w-[350px]">
                    3 people are looking for feedback this week
                  </p>
                </div>
                <img src="@/assets/images/besttime/arrow-right.png" alt=""/>
              </div>
            </div>
          </div>
        </div>

        <!-- 3 grid  -->

        <div class="flex flex-col md:flex-row gap-4 mt-4">
          <div class="bg-black/90 rounded-3xl p-6">
            <img src="@/assets/images/besttime/mentions.png" alt=""/>
            <h4 class="text-white">Mentions</h4>
            <p class="text-[#737373]">
              Mention anyone on your team to include them in a post.
            </p>
          </div>
          <div class="bg-black/90 rounded-3xl p-6">
            <img src="@/assets/images/besttime/polls.png" alt=""/>
            <h4 class="text-white">Polls</h4>
            <p class="text-[#737373]">
              Get a quick gut check from the team on design options.
            </p>
          </div>
          <div class="bg-black/90 rounded-3xl p-6">
            <img src="@/assets/images/besttime/check.png" alt=""/>
            <h4 class="text-white">Resolve comments</h4>
            <p class="text-[#737373]">
              Mark comments as resolved to keep the conversation focused.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Badge from '../ui/badge/Badge.vue'
import Button from '../ui/button/Button.vue'

export default {
  components: {
    Button,
    Badge
  }
}
</script>
