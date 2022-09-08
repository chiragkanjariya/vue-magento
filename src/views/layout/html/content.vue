<template>
  <div>
    <div
      class="border px-3 py-3 mt-2"
      v-for="(component, index) in getComponents()"
      :key="index"
    >
      <component v-bind:is="component" :layout="getLayout()"></component>
    </div>
  </div>
</template>

<script>
import Template from "./../../core/template";

export default {
  name: "layoutContent",
  extends: Template,
  methods: {
    getComponents() {
      return this.getLayout().getAction().getContent();
    },
  },
};
</script>