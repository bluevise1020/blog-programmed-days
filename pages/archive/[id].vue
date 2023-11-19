<template>
  <template v-if="data">
    <h1 class="text-xl font-semibold mb-4 md:text-3xl">{{ data.title }}</h1>

    <div class="flex justify-start items-center gap-2 mb-4">
      <NuxtLink :to="`/category/${data.category?.id}`">
        <div class="rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600">
          {{ data.category?.name }}
        </div>
      </NuxtLink>
      <div v-for="tag in data.tags" :key="tag.id" class="text-indigo-600">
        <NuxtLink :to="`/tag/${tag.id}`">#{{ tag.name }}</NuxtLink>
      </div>
    </div>

    <div class="text-xs text-gray-700 flex justify-start items-center gap-2 mb-4">
      <div>{{ fmtYMD(data.publishedAt ?? data.createdAt) }} 作成</div>
      <div>{{ fmtYMD(data.updatedAt ?? data.publishedAt ?? data.createdAt) }} 更新</div>
    </div>

    <img :src="data.eyecatch?.url" :width="data.eyecatch?.width" :height="data.eyecatch?.height" />

    <ArchiveContent :content="data.content" />
  </template>
</template>

<script setup lang="ts">
  import type { Archive } from "~/types/archive";

  import ArchiveContent from "~/components/archive_content.vue";

  const { fmtYMD } = useFormatter();

  const { params } = useRoute();
  const contentId = computed(() => (Array.isArray(params.id) ? params.id[0] : params.id));

  const cid = contentId.value ?? "";
  const { data, error } = await useFetch<Archive>(`/api/archive/${cid}`);
  if (error.value) {
    throw createError(error.value?.data ?? "処理を続行できませんでした。");
  }

  useHead({ title: data.value?.title });
</script>
