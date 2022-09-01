<template>
  <el-tag v-for="item in data" :key="item.name" class="mx-1" effect="dark" :type="item.status">
    {{ item.name }}
  </el-tag>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import type {Tag} from "@/types/Tag";

export default defineComponent({
  name: 'Skills',
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

    function shuffle(array: Array<Tag>): Array<Tag> {
      return array.sort(() => Math.random() - 0.5);
    }

    return {
      data: shuffle(data),
    };
  },
});
</script>
<style scoped>
.mx-1 {
  margin: 0.2rem;
}
</style>