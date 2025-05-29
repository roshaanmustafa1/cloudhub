<template>
  <div class="mx-auto">
    <HeroSec />
    <ClientsSec />
    <ShareSec />
    <BestTime />
    <ArchiveSec />
    <ReviewSec   />
    <DesignersSec />
    <TheLoop />
    <RequestDemo />
  </div>
</template>
<script>
import ArchiveSec from '@/components/homepage/ArchiveSec.vue'
import BestTime from '@/components/homepage/BestTime.vue'
import ClientsSec from '@/components/homepage/ClientsSec.vue'
import ReviewSec from '@/components/homepage/ReviewSec.vue'
import HeroSec from '@/components/homepage/HeroSec.vue'
import ShareSec from '@/components/homepage/ShareSec.vue'
import DesignersSec from '@/components/homepage/DesignersSec.vue'
import TheLoop from '@/components/homepage/TheLoop.vue'
import RequestDemo from '@/components/homepage/RequestDemo.vue'
export default {
  components: {
    HeroSec,
    ClientsSec,
    ShareSec,
    BestTime,
    ArchiveSec,
    ReviewSec,
    DesignersSec,
    TheLoop,
    RequestDemo
  }
}
</script>
