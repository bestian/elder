<template>
  <div id="app">
    <div class="ui fixed top labeled icon menu">
      <router-link class = 'item' to='/' exact=''>
        <i class="home icon" />配對遊戲
      </router-link>
      <router-link class = 'item' to='/fishing' exact=''>
        <i class="question circle icon" />釣魚遊戲
      </router-link>
      <router-link class = 'item' to='/edit' exact='' title="Setting">
        <i class="cogs icon" />編輯照片
      </router-link>
      <a class="right item" href="https://github.com/bestian/elder/" title="View it on Github">
        <i class="github icon" />專案頁
      </a>
    </div>
    <router-view @add="add" @remove = "remove" :card_list = "card_list"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      card_list: [
        {img: 'https://i.imgur.com/9g8Snz6.jpg', name: '天使'},
        {img: 'https://i.imgur.com/rPCYQls.png', name: '圓臉'},
        {img: 'https://i.imgur.com/SuLzJZ3.png', name: '蟲蟲'}
      ]
    }
  },
  methods: {
    add: function (url, name) {
      this.card_list.push({img: url, name: name})
      this.setLocal()
    },
    remove: function (index) {
      this.card_list.splice(index, 1)
      this.setLocal()
    },
    getLocal: function () {
      this.card_list = JSON.parse(this.$localStorage.get('card_list'))
    },
    setLocal: function () {
      this.$localStorage.set('card_list', JSON.stringify(this.card_list))
      console.log(this.$localStorage.get('card_list'))
    }
  },
  mounted () {
    console.log(this.$localStorage.get('card_list'))
    if (this.$localStorage.get('card_list')) {
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
