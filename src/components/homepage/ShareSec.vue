<template>
  <div class="md:px-40 md:py-40 py-20">
    <div class="container">
      <div class="flex flex-col-reverse md:grid grid-cols-2 grid-rows-1 gap-4 md:mb-40">
        <div class="flex flex-col items-start py-10 md:pe-10">
          <Badge class="mb-4">Share</Badge>
          <h2 class="text-4xl md:text-[57px]  md:leading-[63px] mb-6 font-semibold -tracking-[1.5px]">
            Share anything you’re working on.
          </h2>
          <p class="text-2xs leading-[30px] mb-10 text-muted-foreground">
            Campsite has been instrumental in keeping designers aware of each others'
            work-in-progress in a way that was previously slowing us down. It's also one of the only
            channels where.
          </p>
          <div class="flex gap-4 mb-10">
            <div class="flex gap-4 justify-center items-center">
              <img src="@/assets/images/roundcheck.png" alt="" class="w-[24px]"/>
              <p>Coded</p>
            </div>
            <div class="flex gap-4 justify-center items-center">
              <img src="@/assets/images/roundcheck.png" alt="" class="w-[24px]"/>
              <p>100% Secure</p>
            </div>
          </div>

          <Button variant="simple" class="px-0">
            <div
                class="flex justify-center items-center size-[24px] bg-gradient-primary rounded-full">
              <img src="@/assets/images/play.png" alt=""/>
            </div>
            See how it works
          </Button>

        </div>
        <div class="flex justify-center items-center bg-secondary rounded-[24px]">
          <img src="@/assets/images/share/code1.png" alt=""/>
        </div>
      </div>

      <!-- section 02 -->

      <div class="md:grid grid-cols-2 grid-rows-1 gap-4">
        <div class="flex justify-center items-center bg-secondary rounded-[24px]">
          <img src="@/assets/images/share/code2.png" alt=""/>
        </div>
        <div class="flex flex-col items-start py-10 md:pl-20">
          <Badge class="mb-4">Feedback</Badge>
          <h2 class="text-4xl md:text-[57px] md:leading-[63px] mb-6 font-semibold -tracking-[1.5px]">
            Better feedback at the right time.
          </h2>
          <p class="text-2xs leading-[30px] mb-10 text-muted-foreground">
            Campsite has been instrumental in keeping designers aware of each others'
            work-in-progress in a way that was previously slowing us down. It's also one of the only
            channels where.
          </p>


          <Button variant="simple" class="px-0">
            <div
                class="flex justify-center items-center size-[24px] bg-gradient-primary rounded-full">
              <img src="@/assets/images/play.png" alt=""/>
            </div>
            See how it works
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Check } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import Button from '../ui/button/Button.vue'


export default {
  components: {
    Button,
    Check,
    Badge,
  }
}
</script>
