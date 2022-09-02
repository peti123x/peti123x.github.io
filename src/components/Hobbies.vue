<template>
  <Tags :data="data" />
</template>
<script lang="ts">
import {defineComponent} from "vue";
import type {Tag} from "@/types/Tag";
import Tags from "@/components/Tags.vue";

export default defineComponent({
  name: 'Hobbies',
  components: {Tags},
  setup() {
    const data: Array<Tag> = [
      {
        name: 'LEGO',
        status: 'danger',
      },
      {
        name: 'Cars',
        status: '',
      },
      {
        name: 'Gym',
        status: 'info',
      },
      {
        name: 'Reading',
        status: 'success',
      },
    ];

    return {
      data,
    };
  },
});
</script>
<style scoped>
.mx-1 {
  margin: 0.2rem;
}
</style>