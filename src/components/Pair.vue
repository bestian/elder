<template>
  <div class="hello">
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
    <h1>左右出現同一人時，<br class="thin-only"/>請按空白鍵或圖
    </h1>
    <div class="ui equal width grid">
      <div class="column" v-tap @click="check()" @touchstart="check()">
        <div class="ui card">
          <div class="content" v-show="!hard">
            <span class="big header">{{card_list[Math.floor(a) % card_list.length].name}}</span>
          </div>
          <div class="image">
            <img class="a" :src="card_list[Math.floor(a) % card_list.length].img">
          </div>
        </div>
      </div>
      <div class="column" v-tap @click="check()" @touchstart="check()">
        <div class="ui card">
          <div class="content">
              <span class="big header" v-bind:class="{ only: hard}">{{card_list[b].name}}</span>
          </div>
          <div class="image" v-show="!hard">
            <img class="a" :src="card_list[b].img">
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div class="ui form">
      <div class="grouped fields">
        <div class="ui header">
          速度調整
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" id="one" value="0.1" v-model="speed">
            <label class = "clickable" @click="speed=0.1"><i class = "clock icon" />最慢</label>
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
      </div>
      <div class="field">
        <div class="ui slider checkbox">
          <input type="checkbox" id="checkbox" v-model="hard">
          <label class = "clickable" for="checkbox" @click="hard=true"><i class = "eye icon" />進階：字配圖</label>
        </div>
      </div>
    </div> <!-- form END -->
    <win v-show="w" ></win>
  </div>
</template>

<script>

import win from './win'

export default {
  name: 'Pair',
  props: ['card_list'],
  components: {
    win
  },
  data () {
    return {
      a: 0,
      b: 0,
      w: 0,
      speed: 0.25,
      hard: false,
      record: false,
      good: 0,
      bad: 0
    }
  },
  methods: {
    go: function () {
      if (!this.w) {
        this.a += Number(this.speed)
        if (this.card_list[Math.floor(this.a) % this.card_list.length].hide) {
          this.go()
        }
      }
    },
    check: function () {
      // console.log('a')
      var ma = Math.floor(this.a) % this.card_list.length
      if (this.card_list[ma].name === this.card_list[this.b].name) {
        this.win()
      } else {
        this.bad++
      }
    },
    reset: function () {
      this.b = Math.floor(Math.random() * this.card_list.length)
      this.w = 0
      if (this.card_list[this.b].hide) {
        this.reset()
      }
    },
    win: function () {
      this.w++
      this.good++
      setTimeout(this.reset, 3000)
    }
  },
  mounted () {
    setInterval(this.go, 500)
    this.reset()
    window.addEventListener('keydown', this.check)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
  cursor: pointer;
  padding: 3px;
  background-color: #ccc;
  border-radius: 5px;
}

#rainbow {
  width: 5%;
  height: auto;
}

#win1, #win2 {
  z-index: 99999;
  position: fixed;
  width: 300px;
  border-radius: 30px;
  border: 5px gold ridge;
}

#win1 {
  top: 0;
  left: 0;
}

#win2 {
  bottom: 0;
  right: 0;
}

.column {
  display: inline-flex !important;
  justify-content: center;
}

.ui.card {
  height: 50vh;
  overflow: hidden;
}

.content {
  padding: 2em !important;
  display: inline-table;
}

img.a {
  max-height: 33vh;
}

.big.header {
  font-size: 4em !important;
}

@media screen and (max-width: 600px) {
  .big.header {
    font-size: 2em !important;
  }
}

.only {
  margin-top: 20% !important;
}

img {
/* animation: tada 3s infinite; */
    border-radius: 15px !important;
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
