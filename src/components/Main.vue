<template>
  <div class="hello">
    <br/>
    <div class="ui equal width grid">
      <div class="column" @click="check()">
        <div class="ui card">
          <div class="content" v-show="!hard">
            <span class="big header">{{card_list[Math.floor(a) % card_list.length].name}}</span>
          </div>
          <div class="image">
            <img class="a" :src="card_list[Math.floor(a) % card_list.length].img">
          </div>
        </div>
      </div>
      <div class="column" @click="check()">
        <div class="ui card">
          <div class="content">
              <span class="big header">{{card_list[b].name}}</span>
          </div>
          <div class="image" v-show="!hard">
            <img class="a" :src="card_list[b].img">
          </div>
        </div>
      </div>
    </div>
    <h1>
      <span v-show="!w">{{msg}}
        <br/>
        <br/>
        <div class="ui center aligned segment">
          <div class="ui form">
            <div class="inline fields">
              <div class="field">
                <router-link class = 'ui huge button' to='/edit' exact='' title="Setting">
                  <i class="cogs icon" />編輯照片
                </router-link>
              </div>
              <label>速度：</label>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" id="one" value="0.25" v-model="speed">
                  <label for="one">慢</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" id="two" value="0.5" v-model="speed">
                  <label for="two">中</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" id="three" value="1" v-model="speed">
                  <label for="three">快</label>
                </div>
              </div>
              <label>難度：</label>
              <div class="ui slider checkbox">
                <input type="checkbox" id="checkbox" v-model="hard">
                <label for="checkbox">較難</label>
              </div>
            </div>
          </div>
        </div>
      </span>
    </h1>
    <win v-show="w" ></win>
  </div>
</template>

<script>

import win from './win'

export default {
  name: 'HelloWorld',
  props: ['card_list'],
  components: {
    win
  },
  data () {
    return {
      a: 0,
      b: 0,
      c: 0,
      w: 0,
      speed: 0.25,
      hard: false,
      msg: '左右出現同一人時，請按空白鍵或圖'
    }
  },
  methods: {
    go: function () {
      if (!this.w) {
        this.a += Number(this.speed)
      }
    },
    check: function () {
      var ma = Math.floor(this.a) % this.card_list.length
      if (this.card_list[ma].name === this.card_list[this.b].name) {
        this.win()
      }
    },
    reset: function () {
      this.b = Math.floor(Math.random() * this.card_list.length)
      this.c = Math.floor(Math.random() * this.card_list.length)
      this.w = 0
    },
    win: function () {
      this.w++
      setTimeout(this.reset, 3000)
    }
  },
  mounted () {
    setInterval(this.go, 500)
    this.reset()
    window.addEventListener('keyup', this.check)
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

img.a {
  max-height: 33vh;
}

.big.header {
  font-size: 4em !important;
}

img {
    animation: tada 3s infinite;
}

/* The animation code */
@keyframes tada {
    0%   {transform: rotate(0deg)}
    50%  {transform: rotate(-5deg)}
    100% {transform: rotate(0deg)}
}

</style>
