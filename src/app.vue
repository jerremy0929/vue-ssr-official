<template lang="pug">
  .app
    #nav
      router-link(to="/") Home |
      router-link(to="about")  About
    router-view
</template>

<style lang="scss" scoped>
/** @define app */

.app {
  text-align: center;
}
</style>
