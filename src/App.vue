<template>
  <div id="app">
    <div class="ui fixed top mini menu thin-only no-print">
      <router-link class = 'item ' to='/' exact=''>
        <i class="home icon" />
      </router-link>
      <router-link class = 'item' to='/pair' exact=''>
        配對
      </router-link>
      <router-link class = 'item' to='/spin' exact=''>
        旋轉
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
      <div class="right item fat-only">
        <!--<a href="https://github.com/bestian/elder/" target="_blank" title="View it on Github">
          <i class="github icon" />
        </a>-->
        <amp-iframe sandbox="allow-scripts allow-same-origin" src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fwww.elder.game.tw%2F%23%2F&layout=button_count&size=small&mobile_iframe=true&appId=485195848253155&width=50&height=20" width="50" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></amp-iframe>
      </div>

    </div>
    <div class="ui fixed top labeled icon menu fat-only no-print">
      <router-link class = 'item ' to='/' exact=''>
        <i class="home icon" />回首頁
      </router-link>
      <router-link class = 'item ' to='/pair' exact=''>
        <i class="balance scale icon" />配對遊戲
      </router-link>
      <router-link class = 'item ' to='/spin' exact=''>
        <i class="recycle icon" />旋轉遊戲
      </router-link>
      <router-link class = 'item' to='/name' exact=''>
        <i class="address book icon" />認人遊戲
      </router-link>
      <router-link class = 'item' to='/fishing' exact=''>
        <i class="clone icon" />釣魚遊戲
      </router-link>
      <router-link class = 'item' to='/history' exact=''>
        <i class="comments icon" />生命史
      </router-link>
      <router-link class = 'item' to='/edit' exact=''>
        <i class="cogs icon" />編輯照片
      </router-link>
      <div class="right item">
        <a href="https://github.com/bestian/elder/" target="_blank" title="View it on Github">
          <i class="github icon" />專案頁
        </a>
        <iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fwww.elder.game.tw%2F%23%2F&layout=button_count&size=small&mobile_iframe=true&appId=485195848253155&width=70&height=20" width="70" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
    <router-view @addCard="addCard" @removeCard = "removeCard"
    @addEvent="addEvent" @removeEvent = "removeEvent" @changeEvent = "changeEvent" @saveEvents = "saveEvents"
    @hideShow = "hideShow" @saveCards = "saveCards"
    :card_list = "card_list" :event_list = "event_list"/>
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
      ],
      event_list: [
        {img: 'https://i.imgur.com/9g8Snz6.jpg', title: '啟用認照片遊戲', year: '2018', detail: '啟用認照片遊戲'},
        {img: 'https://i.imgur.com/SuLzJZ3.png', title: '誕生', year: '1985', detail: '誕生'}
      ]
    }
  },
  methods: {
    addCard: function (url, name) {
      this.card_list.push({img: url, name: name})
      this.setLocal('card_list')
    },
    removeCard: function (index) {
      this.card_list.splice(index, 1)
      this.setLocal('card_list')
    },
    saveCards: function (list) {
      this.card_list = list
      this.setLocal('card_list')
    },
    saveEvents: function (list) {
      this.event_list = list
      this.sortEvent()
      this.setLocal('event_list')
    },
    sortEvent: function () {
      this.event_list.sort(function (a, b) {
        var a1 = String(a.year).split('.')[0]
        var a2 = String(a.year).split('.')[1] || 0
        var b1 = String(b.year).split('.')[0]
        var b2 = String(b.year).split('.')[1] || 0

        return Number(b1) + Number(b2) / 100 - Number(a1) - Number(a2) / 100
      })
    },
    addEvent: function (obj) {
      this.event_list.push(obj)
      this.sortEvent()
      this.setLocal('event_list')
    },
    changeEvent: function (index, obj) {
      this.event_list[index] = obj
      this.sortEvent()
      this.setLocal('event_list')
    },
    removeEvent: function (index) {
      this.event_list.splice(index, 1)
      this.setLocal('event_list')
    },
    hideShow: function (index, bool) {
      this.card_list[index].hide = bool
      this.setLocal('card_list')
    },
    getLocal: function (n) {
      console.log('get:' + n)
      this[n] = JSON.parse(this.$localStorage.get(n))
    },
    setLocal: function (n) {
      console.log('set:' + n)
      this.$localStorage.set(n, JSON.stringify(this[n]))
      // console.log(this.$localStorage.get(n))
    }
  },
  mounted () {
    // console.log(this.$localStorage.get(n))
    if (this.$localStorage.get('card_list')) {
      this.getLocal('card_list')
    }
    if (this.$localStorage.get('event_list')) {
      this.getLocal('event_list')
    }
  }
}
</script>

<style amp-boilerplate>
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

.print-only {
  visibility: hidden !important;
  display: none !important;
}

@media print {
  .no-print {
    visibility: hidden !important;
    display: none !important;
    height: 0 !important;
  }
  .print-only {
    visibility: visible !important;
    display: block !important;
  }
  img, div, .card, .column {
    page-break-inside: avoid !important;
  }
}

a, button, .clickable {
  cursor: pointer !important;
}

.ui.card {
  box-shadow: grey 0px 1px 5px 1px;
}

@media screen and (max-width: 600px) {
  .fat-only {
    display: none !important;
  }
  .button {
    max-width: 100% !important;
  }
}

@media screen and (max-width: 991px) {
  .fater-only {
    display: none !important;
  }
}

@media screen and (min-width: 601px) {
  .thin-only {
    display: none !important;
  }
}

.router-link-active {
  background-color: #ccf !important;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 2px solid green;
  color: green;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.null {
  visibility: hidden !important;
}

.nothing {
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
}

</style>
