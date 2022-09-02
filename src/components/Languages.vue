<template>
  <Tags :data="data" />
</template>
<script lang="ts">
import {defineComponent} from "vue";
import type {Tag} from "@/types/Tag";
import Tags from "@/components/Tags.vue";

export default defineComponent({
  name: 'Languages',
  components: {Tags},
  setup() {
    const data: Array<Tag> = [
      {
        name: 'Hungarian',
        status: 'success',
      },
      {
        name: 'English',
        status: '',
      },
    ];

    return {
      data,
    };
  },
});
</script>
<style scoped>
</style>