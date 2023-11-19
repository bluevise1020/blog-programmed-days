<template>
  <ul class="grid grid-cols-1 gap-8 divide-y">
    <li v-for="item in items" :key="item.id" class="pt-6 first:pt-0">
      <NuxtLink :to="`/archive/${item.id}`">
        <h1 class="text-lg font-semibold mb-1 md:text-2xl">{{ item.title }}</h1>
      </NuxtLink>

      <div class="flex justify-start items-center gap-2 mb-1">
        <NuxtLink :to="`/category/${item.category?.id}`">
          <div class="rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600">
            {{ item.category?.name }}
          </div>
        </NuxtLink>
        <div v-for="tag in item.tags" :key="tag.id" class="text-indigo-600">
          <NuxtLink :to="`/tag/${tag.id}`">#{{ tag.name }}</NuxtLink>
        </div>
      </div>

      <div class="text-xs text-gray-700 flex justify-start items-center gap-2">
        <div>{{ fmtYMD(item.publishedAt ?? item.createdAt) }} 作成</div>
        <div>{{ fmtYMD(item.updatedAt ?? item.publishedAt ?? item.createdAt) }} 更新</div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import type { Archives } from "~/types/archive";

  export interface Props {
    items: Archives["contents"];
  }

  withDefaults(defineProps<Props>(), {
    items: () => [],
  });

  const { fmtYMD } = useFormatter();
</script>
