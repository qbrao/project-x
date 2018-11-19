<style lang="less">
</style>

<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{desc}}</p>
    <img :src="img" :alt="title">
  </div>
</template>

<script>
import typeConfig from "./type-config";

export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title: typeConfig[this.type].title,
      desc: typeConfig[this.type].desc,
      img: typeConfig[this.type].img
    };
  },
  methods: {}
};
</script>
