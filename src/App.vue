<template>
  <div>
    导航栏 ｜
    <router-link to="/">one</router-link> |
    <router-link to="/xx">ha</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
