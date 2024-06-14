<template>
    <div>
      <h1>{{ lesson?.name }}</h1>
      <p>{{ lesson?.description }}</p>
      <div v-html="lesson?.content"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  const route = useRoute();
  const id = route.params.id;
  
  const { data: lesson } = await useMicroCMSGetListDetail({
    endpoint: "lessons",
    contentId: id,
  });
  </script>