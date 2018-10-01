<template>
  <div id="app">
    <div class="ui fixed top labeled icon menu">
      <router-link class = 'item' to='/' exact=''>
        <i class="home icon" />配對
      </router-link>
      <router-link class = 'item' to='/fishing' exact=''>
        <i class="question circle icon" />釣魚
      </router-link>
      <a class="right item" href="https://github.com/bestian/elder/" title="View it on Github">
        <i class="github icon" />專案
      </a>
      <router-link class = 'item' to='/edit' exact='' title="Setting">
        <i class="cogs icon" />編輯照片
      </router-link>
    </div>
    <router-view @add="add" @remove = "remove" :img_list = "img_list" :card_list = "card_list"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      img_list: ['https://i.imgur.com/9g8Snz6.jpg', 'https://i.imgur.com/rPCYQls.png', 'https://i.imgur.com/SuLzJZ3.png'],
      card_list: [
        {img: 'https://i.imgur.com/9g8Snz6.jpg', name: '天使'},
        {img: 'https://i.imgur.com/rPCYQls.png', name: '圓臉'},
        {img: 'https://i.imgur.com/SuLzJZ3.png', name: '蟲蟲'}
      ]
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
      this.$localStorage.set('card_list', this.card_list)
      console.log(this.$localStorage.get('card_list'))
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
body, html {
  height: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
