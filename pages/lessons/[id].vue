<template>
  <div class="lesson-page">
    <h1 class="lesson-title">{{ lesson?.name }}</h1>
    <p class="lesson-description">{{ lesson?.description }}</p>
    <div class="lesson-content pb-20" v-html="lesson?.content"></div>
  </div>
</template>
  
  <script setup lang="ts">
  const route = useRoute();
  const id = route.params.id;
  
  const runtimeConfig = useRuntimeConfig();

const { data:lesson } = await useFetch(`https://${runtimeConfig.public.serviceDomain}.microcms.io/api/v1/lessons/${id}`, {
  headers: { 'X-MICROCMS-API-KEY': runtimeConfig.public.CMSapiKey }
});
  </script>
 <style scoped>
 .lesson-page {
   max-width: 800px;
   margin: 0 auto;
   padding: 2rem;
   font-family: Arial, sans-serif;
   color: #333;
 }
 
 .lesson-title {
   font-size: 2rem;
   font-weight: bold;
   margin-bottom: 1rem;
 }
 
 .lesson-description {
   font-size: 1.1rem;
   color: #666;
   margin-bottom: 2rem;
 }
 
 .lesson-content {
   line-height: 1.6;
 }
 
 .lesson-content h2 {
   font-size: 1.4rem;
   font-weight: bold;
   margin-top: 2rem;
   margin-bottom: 1rem;
 }
 
 .lesson-content p {
   margin-bottom: 1rem;
 }
 
 .lesson-content ul,
 .lesson-content ol {
   margin-left: 1.5rem;
   margin-bottom: 1rem;
 }
 
 .lesson-content li {
   margin-bottom: 0.5rem;
 }
 
 .lesson-content pre {
   background-color: #f8f8f8;
   padding: 1rem;
   border-radius: 4px;
   overflow-x: auto;
 }
 
 .lesson-content code {
   font-family: 'Courier New', Courier, monospace;
   font-size: 0.9rem;
 }
 </style>