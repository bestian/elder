<template>
  <div>
    <br/>
    <h1 class="lead" v-show="hard">誰不在裡面？</h1>
    <div class="ui centered card" v-show="!hard">
      <div class="content">
        <span class="big header">這是誰啊？</span>
      </div>
      <div class="image">
        <img :src="card_list[a].img"/>
      </div>
    </div>
    <div class="ui six cards" v-show="hard">
      <div class="ui card"  v-for = "(c, index) in card_list" :key = "c.name" v-show="card_list[a].name != card_list[index].name ">
        <div class="image">
          <img :src="c.img"/>
        </div>
      </div>
    </div>
    <div class="ui massive green button" v-for = "(c, index) in card_list" :key = "index" v-show="noDup(index)" @click = "b = index; check()">{{ c.name }}
    </div>
    <br/><br/>
    <div>
      <label>難度：</label>
      <div class="ui slider checkbox">
        <input type="checkbox" id="checkbox" v-model="hard">
        <label for="checkbox">較難</label>
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
      a: -1,
      b: -1,
      hard: false
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
      }
    },
    reset: function () {
      this.winning = false
      this.a = Math.floor(Math.random() * this.card_list.length)
    },
    win: function () {
      this.winning = true
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.big.header {
  font-size: 2em !important;
}

img {
    animation: tada 3s infinite;
}

/* The animation code */
@keyframes tada {
    0%   {transform: rotate(0deg)}
    50%  {transform: rotate(-15deg)}
    100% {transform: rotate(0deg)}
}

</style>
