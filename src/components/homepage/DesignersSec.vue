<template>
  <div class="py-20 md:px-40">
    <div class="container">
      <h2 class="text-4xl md:text-6xl mb-6 md:mb-20 md:text-center pr-20 md:pr-0 font-semibold">Loved By Desginers At</h2>
      <div class="grid grid-cols-2 md:flex md:flex-wrap gap-8 justify-between">
        <div
            class="bg-secondary rounded-lg p-5 md:min-w-[296px] w-fit flex justify-center items-center"
            v-for="data in designersData"
            :key="data"
        >
          <img :src="data.desginImg" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CroudStrike from '@/assets/images/designers/1.png'
import AirBus from '@/assets/images/designers/2.png'
import Hays from '@/assets/images/designers/3.png'
import Sentry from '@/assets/images/designers/4.png'
import Medwig from '@/assets/images/designers/5.png'
import Cathy from '@/assets/images/designers/6.png'
import Liquid from '@/assets/images/designers/7.png'
import Autotrader from '@/assets/images/designers/8.png'

export default {
  data() {
    return {
      designersData: [
        {
          desginImg: CroudStrike
        },
        {
          desginImg: AirBus
        },
        {
          desginImg: Hays
        },
        {
          desginImg: Sentry
        },
        {
          desginImg: Medwig
        },
        {
          desginImg: Cathy
        },
        {
          desginImg: Liquid
        },
        {
          desginImg: Autotrader
        }
      ]
    }
  }
}
</script>
