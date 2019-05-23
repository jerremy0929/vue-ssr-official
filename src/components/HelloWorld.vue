<template lang="pug">
  .hello
    h1 {{ msg }}
    p.hello__container-c
      | For guide and recipes on how to configure / customize this project,<br> check out the
      a.hello__a(href="https://cli.vuejs.org", target="_blank", rel="noopener") vue-cli documentation
    h3 Installed CLI Plugins
    ul.hello__ul
      li.hello__li
        a.hello__a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel", target="_blank", rel="noopener")
          | babel
      li.hello__li
        a.hello__a(href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint", target="_blank", rel="noopener")
          | eslint
    h3 Essential Links
      ul.hello__ul
        li.hello__li
          a.hello__a(href="https://vuejs.org", target="_blank", rel="noopener") Core Docs
        li.hello__li
          a.hello__a(href="https://forum.vuejs.org", target="_blank", rel="noopener") Forum
        li.hello__li
          a.hello__a(href="https://twitter.com/vuejs", target="_blank", rel="noopener") Community Chat
        li.hello__li
          a.hello__a(href="https://twitter.com/vuejs", target="_blank", rel="noopener") Twitter
        li.hello__li
          a.hello__a(href="https://news.vuejs.org", target="_blank", rel="noopener") News
    h3 Ecosystem
      ul.hello__ul
        li.hello__li
          a.hello__a(href="https://router.vuejs.org", target="_blank", rel="noopener") vue-router
        li.hello__li
          a.hello__a(href="https://vuex.vuejs.org", target="_blank", rel="noopener") vuex
        li.hello__li
          a.hello__a(href="https://github.com/vuejs/vue-devtools#vue-devtools", target="_blank", rel="noopener") vue-devtools
        li.hello__li
          a.hello__a(href="https://vue-loader.vuejs.org", target="_blank", rel="noopener") vue-loader
        li.hello__li
          a.hello__a(href="https://github.com/vuejs/awesome-vue", target="_blank", rel="noopener") awesome-vue
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
/** @define hello */

.hello {
  margin: 40px 0 0;

  &__container-c {
    background-color: #fff;
  }

  &__ul {
    padding: 0;
    list-style-type: none;
  }

  &__li {
    display: inline-block;
    margin: 0 10px;
  }

  &__a {
    color: #42b983;
  }
}
</style>
