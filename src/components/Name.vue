<template>
  <div>
    <br class="fat-only" />
    <h1 class="lead" v-show="hard">誰不在裡面？</h1>
    <h1 class="lead" v-show="!hard">這是誰啊？</h1>
    <div class="ui slider checkbox">
      <input type="checkbox" id="checkbox" v-model="record">
      <label for="checkbox"><i class = "eye icon" />顯示紀錄
        <span v-show = "record">
          <i class="smile icon"/>:{{good}}
          <i class="thumbs down icon"/>:{{bad}}
        </span>
      </label>
    </div>
    <div class="ui centered card" v-show="!hard">
      <div class="image">
        <img :src="card_list[a].img"/>
      </div>
    </div>
    <div class="ui six doubling cards" v-show="hard">
      <div class="ui card"  v-for = "(c, index) in card_list" :key = "c.name" v-show="card_list[a].name != card_list[index].name && !c.hide">
        <div class="image">
          <img :src="c.img"/>
        </div>
      </div>
    </div>
    <br/>
    <div class="ui doubling grid fat-only">
      <div class="three wide doubling column" v-for = "(c, index) in card_list" :key = "index" v-show="noDup(index) && !c.hide" >
        <div class="ui green basic massive button" v-tap @click = "b = index; check()">{{ c.name }}
        </div>
      </div>
    </div>
    <div class="ui massive vertical buttons thin-only">
      <div class="ui green basic button" v-for = "(c, index) in card_list" :key = "index" v-show="noDup(index) && !c.hide" v-tap @click = "b = index; check()">{{ c.name }}
      </div>
    </div>
    <br/><br/>
    <div class="ui form">
      <div class="grouped fields">
        <div class="ui header">
          速度調整
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" id="one" value="0" v-model="speed">
            <label class = "clickable" @click="speed=0"><i class = "clock icon" />停止</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" id="one" value="0.25" v-model="speed">
            <label class = "clickable" @click="speed=0.25"><i class = "wheelchair icon" />慢速</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" id="two" value="0.5" v-model="speed">
            <label class = "clickable" @click="speed=0.5"><i class = "blind icon" />中速</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" id="three" value="1" v-model="speed">
            <label class = "clickable" @click="speed=1"><i class = "paper plane icon" />快速</label>
          </div>
        </div>
        <div class="field">
          <div class="ui slider checkbox">
            <input type="checkbox" id="checkbox" v-model="hard">
            <label for="checkbox" class = "clickable" @click="hard=true"><i class = "eye icon" />進階：找消失的人</label>
          </div>
        </div>
      </div>
    </div>
    <win v-show="winning"></win>
  </div>
</template>

<script>

import win from './win'

export default {
  name: 'Name',
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
      t: 0.25,
      b: -1,
      hard: false,
      speed: 0
    }
  },
  methods: {
    isWin: function () {
      return this.card_list[this.a].name === this.card_list[this.b].name
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
      this.winning = false
      this.a = Math.floor(Math.random() * this.card_list.length)
      if (this.card_list[this.a].hide) {
        this.reset()
      }
    },
    win: function () {
      this.winning = true
      this.t = 0.25
      this.good++
    },
    go: function () {
      if (!this.winning) {
        if (Math.floor(this.t) < Math.floor(this.t + Number(this.speed))) {
          this.bad++
          this.reset()
        }
        this.t += Number(this.speed)
      }
    },
    noDup: function (idx) {
      for (var i = 0; i < idx; i++) {
        if (this.card_list[i].name === this.card_list[idx].name) {
          return false
        }
      }
      return true
    }
  },
  mounted () {
    this.reset()
    setInterval(this.go, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.big.header {
  font-size: 2em !important;
}

.card {
  height: 50vh !important;
  overflow: hidden;
}

img {
  border-radius: 15px !important;
  max-height: 50vh;
  animation: tada 3s infinite;
}

.ui.form label {
  font-size: 1.5em;
}

/* The animation code */
@keyframes tada {
  0%   {transform: rotate(0deg)}
  50%  {transform: rotate(-15deg)}
  100% {transform: rotate(0deg)}
}

</style>
