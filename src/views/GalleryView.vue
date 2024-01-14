<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

type ImageModule = {
  default: string;
};

type ImageItem = {
  path: string;
  image: string;
};

export default defineComponent({
  name: 'GalleryView',

  setup() {
    const items = ref<ImageItem[]>([]);

    async function importImage(path: string): Promise<ImageModule> {
      const module = await import(path);
      return module as ImageModule;
    }

    onMounted(async () => {
      const imageModules = import.meta.glob('/public/images/gallery/*.(png|jpg|jpeg|svg)');
      /* @vite-ignore */
      const importPromises = Object.entries(imageModules).map(async ([path, importer]) => {
        const module = await importImage(path);
        return {
          path,
          image: module.default
        };
      });

      items.value = await Promise.all(importPromises);
    });

    return { items };
  },
});
</script>


<template>
  <div id="gallery">
    <div class="gallery-item" v-for="(item, index) in items" :key="index">
      <img v-lazy="item.image" alt="" class="gallery-image">
    </div>
  </div>
</template>


<style scoped>
#gallery {
  column-count: 3;
  width: 100%;
  min-height: 100vh;
  padding: 3vh;
  padding-top: 15vh;
}

.gallery-item {
  margin-bottom: 1em;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  border-radius: 2vh;
  overflow: hidden;
}

.gallery-item:hover {
  transform: scale(0.9);
}

.gallery-image:hover {
  filter: brightness(1.1);
}

.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  pointer-events: none;
  border-radius: 2vh;
}

@media (max-width: 700px) {
  #gallery {
    column-count: 2;
  }
}

@media (max-width: 500px) {
  #gallery {
    column-count: 1;
  }
}
</style>