<template>
  <div
    class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center"
  >
    <slot />
    <NuxtLink to="/landing" class="underline">Go Home</NuxtLink>
  </div>
</template>
