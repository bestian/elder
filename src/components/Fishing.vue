<template>
  <div>
    <div class="intro">
      <br/>
      <h2>點擊卡片，翻出相同的圖即可消去</h2>
    </div>
    <div class="ui grid">
      <div class="three wide column" v-for = "(f, index) in fishs1" :key="f.img+index" v-bind:class="[face0 == index ? 'face' : 'back', f.img ? 'good' : 'null']" @click = "flip(index,0)">
        <div class="ui centered card">
          <div class="content" v-show="!hard">
            <span class="header">{{face0 == index ? f.name : '?'}}</span>
          </div>
          <div class="image">
            <img v-bind:class="fishs1[face0] == fishs2[face1] ? 'gold' : '' " :src="f.img"/>
          </div>
        </div>
      </div>
    </div>
    <div class="ui grid">
      <div class="three wide r column" v-for = "(f, index) in fishs2" :key="index" v-bind:class="[face1 == index ? 'face' : 'back', f.img ? 'good' : 'null']" @click = "flip(index,1)">
        <div class="ui centered card">
          <div class="content" v-show="!hard">
            <span class="header">{{face1 == index ? f.name : '?'}}</span>
          </div>
          <div class="image">
            <img v-bind:class="fishs1[face0] == fishs2[face1] ? 'gold' : '' " :src="f.img"/>
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
  name: 'Fishing',
  props: ['card_list'],
  components: {
    win
  },
  data () {
    return {
      w: false,
      winning: false,
      fishs1: [],
      fishs2: [],
      face0: -1,
      face1: -1
    }
  },
  methods: {
    flip: function (i, n) {
      if (n === 0 && !this.w) { this.face0 = i }
      if (n === 1 && !this.w) { this.face1 = i }
      if (!this.w && this.fishs1[this.face0].img === this.fishs2[this.face1].img) {
        this.w = true
        setTimeout(this.remove, 1000)
      } else {
        if (!this.w && this.face0 > -1 && this.face1 > -1) {
          this.w = true
          setTimeout(this.flipback, 500)
        }
      }
    },
    isWin: function () {
      var ww = true
      for (var i = 0; i < this.fishs1.length; i++) {
        if (this.fishs1[i].img !== '') { ww = false }
      }
      return ww
    },
    remove: function () {
      this.fishs1[this.face0] = {img: '', name: ''}
      this.fishs2[this.face1] = {img: '', name: ''}
      // this.fishs1.splice(this.face0, 1)
      // this.fishs2.splice(this.face1, 1)
      this.flipback()
      if (this.isWin()) {
        this.win()
        setTimeout(this.reset, 3000)
      }
    },
    flipback: function () {
      this.face0 = -1
      this.face1 = -1
      this.w = false
    },
    reset: function () {
      this.fishs1 = this.card_list.slice().sort(function () { return Math.random() - 0.5 })
      this.fishs2 = this.card_list.slice().sort(function () { return Math.random() - 0.5 })
      this.winning = false
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
  li {
    text-align: center;
    display: inline-block;
    padding: 0 15px;
  }
  img {
    height: 15vmin;
    max-width: 100%;
  }
  img.gold {
    border: 5px gold ridge;
  }
  .grid {
    padding: 15px;
  }
  .card {
    min-height: 20vh;
    margin: 10px;
    border: 3px black solid;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: black 2px 5px 0;
  }
  .image {
    height: 20vh !important;
    overflow: hidden;
  }
  .column.back img {
    opacity: 0;
  }
  .column.back {
    background-color: gray;
  }
  .column.back.r {
    background-color: #faa;
  }
  .column.null {
    visibility: hidden !important;
  }
  a {
    cursor: pointer;
    font-size: 2em;
  }
  .ui.bottom.attached {
    top: -5px;
  }
  .big {
    font-size: 5em;
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
</style>
