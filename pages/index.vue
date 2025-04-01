<template>
  <NuxtLink
    class="underline font-medium bg-blue-500 py-2 px-4 rounded-xl text-white my-5"
    :href="firstLesson.path"
  >
    Go to first lesson
  </NuxtLink>
  <NuxtLink
    class="underline font-medium bg-blue-500 py-2 px-4 rounded-xl text-white"
    to="/landing"
  >
    Back to first page
  </NuxtLink>
</template>

<script setup lang="ts">
import { useCourseProgress } from "~/stores/courseProgress";
const firstLesson = await useFirstLesson();

const Progress = useCourseProgress();
Progress.initialize();
</script>
