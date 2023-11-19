<template>
  <!-- eslint-disable vue/no-v-html -->
  <article class="mt-6 md:mt-10 prose prose-sm max-w-none lg:prose-lg" v-html="htmlContent"></article>
  <!-- eslint-enable -->
</template>

<script setup lang="ts">
  import { highlightAll } from "prismjs";
  import "prismjs/components/prism-bash";
  import "prismjs/components/prism-diff";
  import "prismjs/components/prism-docker";
  import "prismjs/components/prism-editorconfig";
  import "prismjs/components/prism-git";
  import "prismjs/components/prism-go";
  import "prismjs/components/prism-javascript";
  import "prismjs/components/prism-json";
  import "prismjs/components/prism-json5";
  import "prismjs/components/prism-nginx";
  import "prismjs/components/prism-sass";
  import "prismjs/components/prism-scss";
  import "prismjs/components/prism-toml";
  import "prismjs/components/prism-typescript";
  import "prismjs/components/prism-yaml";
  import "prismjs/themes/prism-solarizedlight.css";

  export interface Props {
    content: string | undefined;
  }

  const props = withDefaults(defineProps<Props>(), {
    content: undefined,
  });

  onMounted(() => {
    highlightAll();
  });

  const htmlContent = computed(() => props.content ?? "");
</script>
