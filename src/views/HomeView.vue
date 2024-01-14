<script lang="ts">
import { defineComponent } from 'vue';
import FirstSection from '@/components/home/FirstSection.vue';
import SecondSection from '@/components/home/SecondSection.vue';
import ThirdSection from '@/components/home/ThirdSection.vue';
import ForthSection from '@/components/home/ForthSection.vue';
import ContactUs from '@/components/home/ContactUs.vue';
import OurProgram from '@/components/home/OurProgram.vue';




export default defineComponent({
  components: { FirstSection, SecondSection, ThirdSection, ForthSection, ContactUs, OurProgram },
  name: 'HomeView',
});

</script>

<template>
  <div id="home">
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <OurProgram />
    <ForthSection />
    <ContactUs />
  </div>
</template>

<style scoped>
#home {
  width: 100%;
  height: 100%;
  max-width: 100%;
  color: #2D2C2C;
  overflow: hidden;
}
</style>