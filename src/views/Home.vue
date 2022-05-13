<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>芝士UI</h1>
      <h2>一个很厉害的 UI 框架</h2>
      <p class="actions">
        <a href="javascript()">Github</a>
        <a href="javascript()">开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
$bg: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: $bg;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
