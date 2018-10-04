<template>
  <div id="app">
    <div class="ui fixed top mini menu thin-only no-print">
      <router-link class = 'item ' to='/' exact=''>
        <i class="home icon" />
      </router-link>
      <router-link class = 'item ' to='/pair' exact=''>
        配對
      </router-link>
      <router-link class = 'item' to='/name' exact=''>
        認人
      </router-link>
      <router-link class = 'item' to='/fishing' exact=''>
        釣魚
      </router-link>
      <router-link class = 'item' to='/edit' exact=''>
        編輯
      </router-link>
      <a class="right item" href="https://github.com/bestian/elder/" target="_blank" title="View it on Github">
        <i class="github icon" />
      </a>
    </div>
    <div class="ui fixed top labeled icon menu fat-only no-print">
      <router-link class = 'item ' to='/' exact=''>
        <i class="home icon" />回首頁
      </router-link>
      <router-link class = 'item ' to='/pair' exact=''>
        <i class="balance scale icon" />配對遊戲
      </router-link>
      <router-link class = 'item' to='/name' exact=''>
        <i class="address book icon" />認人遊戲
      </router-link>
      <router-link class = 'item' to='/fishing' exact=''>
        <i class="clone icon" />釣魚遊戲
      </router-link>
      <router-link class = 'item' to='/edit' exact=''>
        <i class="cogs icon" />編輯照片
      </router-link>
      <a class="right item" href="https://github.com/bestian/elder/" target="_blank" title="View it on Github">
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
      // console.log(this.$localStorage.get('card_list'))
    }
  },
  mounted () {
    // console.log(this.$localStorage.get('card_list'))
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

@media print {
  .no-print {
    visibility: hidden !important;
    display: none !important;
  }
}

a, button, .clickable {
  cursor: pointer !important;
}

@media screen and (max-width: 600px) {
  .fat-only {
    display: none !important;
  }
  .button {
    max-width: 100% !important;
  }
}

@media screen and (min-width: 601px) {
  .thin-only {
    display: none !important;
  }
}

</style>
