<template>
  <Tags :data="data" />
</template>
<script lang="ts">
import {defineComponent} from "vue";
import type {Tag} from "@/types/Tag";
import Tags from "@/components/Tags.vue";

export default defineComponent({
  name: 'Skills',
  components: {
    Tags,
  },
  setup() {
    const data: Array<Tag> = [
      {
        name: 'PHP',
        status: '',
      },
      {
        name: 'Laravel',
        status: 'success',
      },
      {
        name: 'Vue',
        status: 'success',
      },
      {
        name: 'TypeScript',
        status: '',
      },
      {
        name: 'CSS / SASS',
        status: 'info',
      },
      {
        name: 'MySQL',
        status: 'info',
      },
      {
        name: 'Python',
        status: 'danger',
      },
      {
        name: 'Docker',
        status: 'info',
      },
      {
        name: 'Testing',
        status: 'danger',
      },
      {
        name: 'CI/CD',
        status: 'info',
      },
    ];

    return {
      data,
    };
  },
});
</script>