<template>
  <div id="app">
    <div class="ui fixed top menu">
      <router-link class = 'item' to='/' exact=''>
        <i class="home icon" />
      </router-link>
      <a class="right item" href="https://github.com/bestian/elder/" title="View it on Github">
        <i class="github icon" />
      </a>
      <router-link class = 'item' to='/edit' exact='' title="Setting">
        <i class="cogs icon" />
      </router-link>
    </div>
    <router-view @add="add" @remove = "remove" :img_list = "img_list"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      img_list: ['https://i.imgur.com/rPCYQls.png', 'https://i.imgur.com/SuLzJZ3.png']
    }
  },
  methods: {
    add: function (url) {
      this.img_list.push(url)
      this.setLocal()
    },
    remove: function (index) {
      this.img_list.splice(index, 1)
      this.setLocal()
    },
    getLocal: function () {
      console.log(this.$localStorage.get('img_list'))
      this.img_list = this.$localStorage.get('img_list').split(',')
    },
    setLocal: function () {
      this.$localStorage.set('img_list', this.img_list)
      console.log(this.$localStorage.get('img_list'))
    }
  },
  mounted () {
    console.log(this.$localStorage.get('img_list'))
    if (this.$localStorage.get('img_list')) {
      this.getLocal()
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
