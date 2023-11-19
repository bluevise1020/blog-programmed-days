<template>
  <div class="flex flex-wrap justify-start items-center gap-4 mb-1">
    <div v-for="tag in data?.contents" :key="tag.id" class="text-indigo-600">
      <NuxtLink :to="`/tag/${tag.id}`">#{{ tag.name }}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Tags } from "~/types/tag";

  const { data, error } = await useFetch<Tags>("/api/tag/list");
  if (error.value) {
    throw createError(error.value?.data ?? "処理を続行できませんでした。");
  }
</script>
