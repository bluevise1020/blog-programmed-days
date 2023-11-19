<template>
  <h1 class="text-xl mb-10"
    ><span class="text-indigo-600">#{{ dataTag?.name }}</span
    >に関する記事</h1
  >

  <ArchiveTitles :items="dataArchives?.contents" />
</template>

<script setup lang="ts">
  import type { Archives } from "~/types/archive";
  import type { Tag } from "~/types/tag";

  type Retval = { archives?: Archives | null; tag?: Tag | null };

  const { params } = useRoute();
  const tagId = computed(() => (Array.isArray(params.id) ? params.id[0] : params.id));

  const tid = tagId.value ?? "";
  const { data, error } = await useFetch<Retval>(`/api/tag/${tid}`);
  if (error.value) {
    throw createError(error.value?.data ?? "処理を続行できませんでした。");
  }

  const dataArchives = ref(data.value?.archives ?? undefined);
  const dataTag = ref(data.value?.tag ?? undefined);
</script>
