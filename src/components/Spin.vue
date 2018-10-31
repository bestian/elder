<template>
  <div>
    <br class="fat-only" />
    <div class="ui slider checkbox">
      <input type="checkbox" id="checkbox" v-model="record">
      <label for="checkbox"><i class = "eye icon" />顯示紀錄
        <span v-show = "record">
          <i class="smile icon"/>:{{good}}
          <i class="thumbs down icon"/>:{{bad}}
        </span>
      </label>
    </div>
    <h1>轉到正中間時，<br class="thin-only"/>請按空白鍵或圖
    </h1>
    <div class="ui centered card clickable" v-bind:class="{good: isWin()}" v-if="!hard" v-bind:style="{ transform: 'rotate(-'+ deg +'deg)' }" v-show = "!winning" v-tap @click="check()" @touchstart="check()">
      <div class="content">
          <span class="big header">{{card_list[a].name}}</span>
      </div>
      <div class="image">
        <img class="a" :src="card_list[a].img">
      </div>
    </div>
    <div class="ui centered card clickable" v-if="hard" v-bind:style="{ transform: 'rotateY(-'+ deg +'deg) rotateZ(-'+ deg +'deg)' }" v-show = "!winning" v-tap @click="check()" @touchstart="check()">
      <div class="content">
          <span class="big header">{{card_list[a].name}}</span>
      </div>
      <div class="image">
        <img class="a" :src="card_list[a].img">
      </div>
    </div>
    <br/>
    <br/>
    <div class="ui form">
      <div class="grouped fields">
        <div class="ui header">
          速度調整
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" id="one" value="3" v-model="speed">
            <label class = "clickable" @click="speed=3"><i class = "clock icon" />最慢</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" id="one" value="5" v-model="speed">
            <label class = "clickable" @click="speed=5"><i class = "wheelchair icon" />慢速</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" id="two" value="10" v-model="speed">
            <label class = "clickable" @click="speed=10"><i class = "blind icon" />中速</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" id="three" value="20" v-model="speed">
            <label class = "clickable" @click="speed=20"><i class = "paper plane icon" />快速</label>
          </div>
        </div>
        <div class="field">
        <div class="ui slider checkbox">
          <input type="checkbox" id="checkbox" v-model="hard">
          <label class = "clickable" for="checkbox" @click="hard=true"><i class = "eye icon" />進階：8字旋</label>
        </div>
      </div>
      </div>
    </div> <!-- form END -->
    <win v-show="winning"></win>
  </div>
</template>

<script>

import win from './win'

export default {
  name: 'Spin',
  props: ['card_list'],
  components: {
    win
  },
  data () {
    return {
      winning: false,
      record: false,
      good: 0,
      bad: 0,
      a: 0,
      deg: 0,
      speed: 5,
      hard: false
    }
  },
  methods: {
    isWin: function () {
      return Math.abs((this.deg + 30) % 360) < 60
    },
    check: function () {
      if (this.isWin()) {
        this.win()
        setTimeout(this.reset, 3000)
      } else {
        this.bad++
      }
    },
    reset: function () {
      this.deg = 0
      this.winning = false
      this.a = Math.floor(Math.random() * this.card_list.length)
      if (this.card_list[this.a].hide) {
        this.reset()
      }
    },
    win: function () {
      this.winning = true
      this.deg = 0
      this.good++
    },
    go: function () {
      if (!this.winning) {
        if (Math.floor(this.deg / 360) < Math.floor((this.deg + Number(this.speed)) / 360)) {
          this.bad++
        }
        this.deg += Number(this.speed)
      }
    }
  },
  mounted () {
    setTimeout(this.reset, 500)
    setInterval(this.go, 50)
    window.addEventListener('keydown', this.check)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.big.header {
  font-size: 2em !important;
}

img {
  border-radius: 15px !important;
  max-height: 50vh;
  width: 300px;
  height: 300px;
  border-radius: 50% !important;
  background-color: transparent !important;
}

.image {
  background-color: transparent !important;  
}

.card {
  position: relative;
  z-index: 2;
  transition: all 0.05s linear;
  background-color: transparent;
  box-shadow: none;
}

.card .header {
  background-color: transparent;
  transition: all 0.3s ease;
  border-radius: 15px;
}

.card.good .header {
  background-color: #3f9 !important;
}

.image {
  border-color: transparent !important;
}

.ui.form label {
  font-size: 1.5em;
}

</style>
