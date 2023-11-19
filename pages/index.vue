<template>
  <ArchiveTitles :items="data?.contents" />
</template>

<script setup lang="ts">
  import type { Archives } from "~/types/archive";

  import ArchiveTitles from "~/components/archive_titles.vue";

  const { data, error } = await useFetch<Archives>("/api/archive/list");
  if (error.value) {
    throw createError(error.value?.data ?? "処理を続行できませんでした。");
  }
</script>
