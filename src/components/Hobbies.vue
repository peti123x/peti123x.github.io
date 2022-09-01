<template>
  <el-tag v-for="item in data" :key="item.name" class="mx-1" effect="dark" :type="item.status">
    {{ item.name }}
  </el-tag>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Hobbies',
  setup() {
    const data: Array<object> = [
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

    function shuffle(array: Array<object>): Array<object> {
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