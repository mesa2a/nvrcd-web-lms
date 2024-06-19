<template>
  <div class="px-5 py-8 mx-auto">
      <h1 class="text-4xl font-bold mb-8">講座一覧ページ</h1>
      <div v-if="data">
        <div v-for="(unit, unitName) in groupedContents" :key="unitName" class="mb-8">
            <div @click="toggleAccordion(unitName)" class="cursor-pointer bg-gray-100 rounded-lg p-4">
                <h2 class="text-2xl font-semibold flex justify-between items-center">
                    {{ unitName }}
                    <span class="accordion-icon transform transition-transform duration-300" :class="{ 'rotate-90': openAccordion[unitName] }">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </h2>
            </div>

            <ul v-show="openAccordion[unitName]" class="accordion-content mt-4 space-y-2">
                <li v-for="content in unit" :key="content.id" class="text-lg">
                    <nuxt-link :to="`${content.id}`" class="text-blue-500 hover:text-blue-700">{{ content.name }}</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
    <div v-else class="text-gray-500">
        Loading...
    </div>
</div>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const { data } = await useFetch(`https://${runtimeConfig.public.serviceDomain}.microcms.io/api/v1/lessons`, {
  headers: { 'X-MICROCMS-API-KEY': runtimeConfig.public.CMSapiKey }
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
// definePageMeta({
//   middleware: ['auth']
// })
</script>
