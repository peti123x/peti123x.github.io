<template>
  <a :href="data.link" target="_blank" class="title">
    <h3>{{ data.name }}</h3>
    <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
  </a>
  <Tags :data="data.tags" />
  <p v-for="line in data.description">{{ line }}</p>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import type {TProject} from "@/types/Project";
import Tags from "@/components/Tags.vue";

export default defineComponent({
  name: 'Project',
  components: {Tags},
  props: {
    data: {
      type: Object as () => TProject,
      required: true,
    },
  },
  setup(props) {

    return {
      data: props.data,
    };
  },
})
</script>
<style scoped>
h3 {
  font-weight: bold;
  display: inline-block;
  margin-right: 0.25rem;
}
.title {
  display: block;
}
</style>