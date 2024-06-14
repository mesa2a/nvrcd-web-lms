<template>
    <div>
      <h1>講座一覧</h1>
      <div v-if="data">
        <div v-for="(unit, unitName) in groupedContents" :key="unitName">
          <h2>{{ unitName }}</h2>

          <ul>
            <li v-for="content in unit" :key="content.id">
              <nuxt-link :to="`lessons/${content.id}`">{{ content.name }}</nuxt-link>
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
  </script>