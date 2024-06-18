<template>
    <div class="container px-5 py-8 mx-auto">
        <h1>講座一覧ページ</h1>
        <!-- <p>uid :{{ user?.uid }}</p> -->
        <p>email : {{ user?.email }}</p>
        <p>displayName : {{ user?.displayName }}</p>
        <div v-if="data">
  <div v-for="(unit, unitName) in groupedContents" :key="unitName">
    <div @click="toggleAccordion(unitName)" class="cursor-pointer">
      <h2 class="text-3xl flex justify-between items-center">
        {{ unitName }}
        <span class="accordion-icon" :class="{ 'rotate-90': openAccordion[unitName] }">></span>
      </h2>
    </div>

    <ul v-show="openAccordion[unitName]" class="accordion-content">
      <li v-for="content in unit" :key="content.id" class="text-xl">
        <nuxt-link :to="`${content.id}`">{{ content.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</div>
<div v-else>
  Loading...
</div>
    </div>
</template>
<script setup lang="ts">
import { useUser } from "../composables/user";

const { user } = useUser();

const { data } = await useMicroCMSGetList({
    endpoint: "lessons",
  });
  
  const groupedContents = computed(() => {
    const grouped = {};
    if (data.value && data.value.contents) {
      data.value.contents.forEach((content) => {
        const unitName = content.unit.name;
        if (!grouped[unitName]) {
          grouped[unitName] = [];
        }
        grouped[unitName].push(content);
      });
    }
    return grouped;
  });
  const openAccordion = ref({})

function toggleAccordion(unitName) {
  openAccordion.value[unitName] = !openAccordion.value[unitName]
}
useHead({
    meta:[
        { name :"requiresAuth", content: true }
    ]
})
</script>
