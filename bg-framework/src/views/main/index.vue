<style lang="less">
@import "./index";
</style>

<template>
  <div class="layout">
    <header class="layout__header">header</header>
    <aside class="layout__aside">
      <aside-menu></aside-menu>
    </aside>
    <div class="layout__content"><router-view/></div>
  </div>
</template>

<script>
import AsideMenu from "@/components/aside-menu";

export default {
  name: "",
  components: {
    AsideMenu
  },
  data() {
    return {};
  }
};
</script>
