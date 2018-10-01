<template>
  <div>
    <br/>
    <div class="ui centered card">
      <div class="content">
        <span class="header">這是誰啊？</span>
      </div>
      <div class="image">
        <img :src="card_list[a].img"/>
      </div>
    </div>
    <div class="ui massive green button" v-for = "(c, index) in card_list" :key = "index" @click = "b = index; check()">{{ c.name }}</div>
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
      b: -1
    }
  },
  methods: {
    isWin: function () {
      return this.a === this.b
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
    }
  },
  mounted () {
    this.reset()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
