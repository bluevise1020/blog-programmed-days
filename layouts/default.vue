<template>
  <div class="py-1 lg:py-6">
    <Html lang="ja" />
    <Body class="bg-gray-50 text-black dark:bg-gray-900 dark:text-white" />

    <header class="flex justify-between items-center max-w-2xl px-4 py-4 mx-auto lg:px-1">
      <h1 class="font-bold text-gray-500 lg:text-2xl">{{ siteTitle }}</h1>
      <div class="space-x-3 transition text-xs text-gray-500 lg:text-base">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/categories">Categories</NuxtLink>
        <NuxtLink to="/tags">Tags</NuxtLink>
      </div>
    </header>

    <main
      class="px-4 py-10 m-auto max-w-2xl bg-white ring-1 ring-gray-200 sm:px-8 sm:shadow sm:rounded-lg dark:bg-gray-800 dark:ring-gray-700"
    >
      <slot name="default" />
    </main>

    <footer class="flex justify-center items-center max-w-2xl px-4 py-4 mx-auto sm:px-8">
      <div class="text-xs text-gray-500">© {{ thisYear }} {{ siteTitle }}</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  const RunConf = useRuntimeConfig();
  const siteTitle = ref(RunConf.public.siteTitle);
  const thisYear = ref(new Date().getFullYear());
</script>
