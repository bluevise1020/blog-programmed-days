<template>
  <div class="flex flex-col justify-start gap-4 mb-1">
    <template v-for="category in data?.contents" :key="category.id">
      <NuxtLink :to="`/category/${category.id}`">
        <div
          class="rounded border-2 border-indigo-600 px-1.5 py-0.5 text-center text-sm font-semibold text-indigo-600"
          >{{ category.name }}</div
        >
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
  import type { Categories } from "~/types/category";

  const { data, error } = await useFetch<Categories>("/api/category/list");
  if (error.value) {
    throw createError(error.value?.data ?? "処理を続行できませんでした。");
  }
</script>
