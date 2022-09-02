<template>
  <el-tag v-for="item in shuffledData" :key="item.name" class="mx-1" effect="dark" :type="item.status">
    {{ item.name }}
  </el-tag>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import type {Tag} from "@/types/Tag";

export default defineComponent({
  name: 'Tags',
  props: {
    data: {
      type: Object as () => Array<Tag>,
      required: true,
    },
  },
  setup(props) {
    function shuffle(array: Array<Tag>): Array<Tag> {
      return array.sort(() => Math.random() - 0.5);
    }

    return {
      shuffledData: shuffle(props.data),
    };
  },
})
</script>
<style scoped>
.mx-1 {
  margin: 0.2rem;
}
</style>