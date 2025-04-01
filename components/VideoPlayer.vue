<template>
  <iframe
    v-if="isYoutube !== 100"
    width="460"
    height="315"
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    title="Video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>

  <iframe
    v-if="isYoutube === 100"
    width="100%"
    height="99%"
    :src="`https://www.youtube.com/embed/${videoId}`"
    title="Video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script setup lang="ts">
const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
  isYoutube: {
    type: Number,
    required: true,
  },
});
</script>
