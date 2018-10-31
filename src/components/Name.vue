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
    <div class="ui doubling centerd cards" v-bind:class="hard ? 'six' : 'four'">
      <div class="ui card fater-only" style="visibility: hidden;" v-show="!hard">
      </div>
      <div class="ui raised card" v-show="!hard">
        <div class="image" v-bind:class="[memory ? 'm' : 'n']">
          <img :src="card_list[a].img"/>
        </div>
      </div>
      <div class="ui raised card">
        <div class="ui vertical buttons">
          <div class="ui massive green button" v-for = "(c, index) in card_list" :key = "index" v-show="noDup(index) && !c.hide" v-tap @click = "b = index; check()" @touchstart="b = index; check()">{{ c.name }}<img class="avatar fat-only" :src="c.img"/>
          </div>
        </div>
      </div>
      <div class="ui raised card" v-for = "(c, index) in card_list" :key = "c.name" v-if="card_list[a].name != card_list[index].name && !c.hide && hard">
        <div class="image" v-bind:class="[memory ? 'm' : 'n']">
          <img :src="c.img"/>
        </div>
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
            <input type="checkbox" id="checkbox" v-model="memory">
            <label for="checkbox" class = "clickable" @click="memory=true;"><i class = "eye icon" />進階：翻面</label>
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
      memory: false,
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
    setTimeout(this.reset, 500)
    setInterval(this.go, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.big.header {
  font-size: 2em !important;
}

.massive {
  font-size: 2rem !important;
  font-weight: 900 !important;
}

.avatar {
  height: 2rem !important;
  width: 2rem !important;
}

.card {
}

img {
  border-radius: 15px !important;
  max-height: 50vh;
/* animation: tada 5s infinite; */
}

.m {
  opacity: 0 !important;
  transition: all 0.3s ease;
}

.m:hover {
  opacity: 1 !important;
}

.ui.form label {
  font-size: 1.5em;
}

/* The animation code */
@keyframes tada {
  0%   {transform: rotate(0deg)}
  50%  {transform: rotate(-5deg)}
  100% {transform: rotate(0deg)}
}

</style>
