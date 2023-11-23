<template>
  <h1 class="text-xl mb-10"
    ><span
      class="rounded border-2 border-indigo-600 px-1.5 py-0.5 text-center font-semibold text-indigo-600"
      >{{ dataCategory?.name }}</span
    >に関する記事</h1
  >

  <ArchiveTitles :items="dataArchives?.contents" />
</template>

<script setup lang="ts">
  import type { Archives } from "~/types/archive";
  import type { Category } from "~/types/category";

  type Retval = { archives?: Archives | null; category?: Category | null };

  const { params } = useRoute();
  const categoryId = computed(() => (Array.isArray(params.id) ? params.id[0] : params.id));

  const cid = categoryId.value ?? "";
  const { data, error } = await useFetch<Retval>(`/api/category/${cid}`);
  if (error.value) {
    throw createError(error.value?.data ?? "処理を続行できませんでした。");
  }

  const dataArchives = ref(data.value?.archives ?? undefined);
  const dataCategory = ref(data.value?.category ?? undefined);

  useHead({ title: `${dataCategory.value?.name ?? "-"}に関する記事` });
</script>
