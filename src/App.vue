<template>
  <div id="app">
    <div class="ui fixed top menu">
      <router-link class = 'item' to='/' exact=''>
        <i class="home icon" />
      </router-link>
      <a class="right item" href="https://github.com/bestian/elder/">
        <i class="github icon" />
      </a>
      <router-link class = 'item' to='/edit' exact=''>
        <i class="cogs icon" />
      </router-link>
    </div>
    <router-view :img_list = "img_list"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      img_list: ['https://i.imgur.com/Qu17dtt.jpg', 'https://i.imgur.com/9xZlAUR.jpg', 'https://i.imgur.com/JImLiGK.jpg', 'https://i.imgur.com/8fd6l63.jpg', 'https://i.imgur.com/keiYrVl.jpg']
    }
  },
  methods: {
    add: function (url) {
      this.img_list.push(url)
    },
    remove: function (index) {
      this.img_list.splice(index, 1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
