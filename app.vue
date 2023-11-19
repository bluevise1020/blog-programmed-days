<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const RunConf = useRuntimeConfig();
  const siteTitle = RunConf.public.siteTitle;
  useHead({
    titleTemplate: (pageTitle) => {
      return pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
    },
  });
</script>
