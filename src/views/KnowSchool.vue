<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'KnowSchool',


});

</script>

<template>
    <div id="know-school">
        <video autoplay loop controls>
            <source src="/videos/know-school.mp4" type="video/mp4">
        </video>

    </div>
</template>

<style scoped>
#know-school {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    color: #2D2C2C;
}

#know-school video {
    margin: 0;
    margin-top: 10vh;
    width: 100%;
    height: auto;
    min-height: 100vh;
    object-fit: cover;
    z-index: -1;
}
</style>