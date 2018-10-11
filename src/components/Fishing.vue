<template>
  <div>
    <div class="intro">
      <br class="fat-only"/>
      <h2>點擊上下排卡片，<br class="thin-only"/>找出相同的，<br class="thin-only"/>對的那組圖會消失，<br class="thin-only"/>直到清空</h2>
    </div>
    <div class="ui grid">
      <div class="doubling six column row">
        <div class="column" v-for = "(f, index) in fishs1" :key="f.img+index" v-bind:class="[!memory || face0 == index ? 'face' : 'back', f.img ? 'good' : 'null', face0 == index ? 'focus' : 'other']">
          <div class="ui centered card" v-tap @click = "flip(index,0) " @mouseover = "flip(index,0)">
            <div class="content">
              <span class="header" v-show="!hard">{{!memory || face0 == index ? f.name : '?'}}</span>
            </div>
            <div class="image">
              <img v-bind:class="fishs1[face0] == fishs2[face1] ? 'gold' : '' " :src="f.img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui grid">
      <div class="doubling six column row">
        <div class="r column" v-for = "(f, index) in fishs2" :key="index" v-bind:class="[!memory || face1 == index ? 'face' : 'back', f.img ? 'good' : 'null', face1 == index ? 'focus' : 'other']">
          <div class="ui centered card" v-tap @click = "flip(index,1)" @mouseover = "flip(index,1)">
            <div class="content">
              <span class="header">{{!memory || face1 == index ? f.name : '?'}}</span>
            </div>
            <div class="image" v-show="!hard">
              <img v-bind:class="fishs1[face0] == fishs2[face1] ? 'gold' : '' " :src="f.img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="ui slider checkbox">
        <input type="checkbox" id="checkbox" v-model="memory">
        <label class = "clickable" for="checkbox" @click="memory=true"><i class = "eye icon" />進階：翻面</label>
      </div>
    </div>
    <div class="field">
      <div class="ui slider checkbox">
        <input type="checkbox" id="checkbox" v-model="hard">
        <label class = "clickable" for="checkbox" @click="hard=true"><i class = "eye icon" />進階：字配圖</label>
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
      memory: false,
      hard: false,
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
      if (!this.w && this.fishs1[this.face0] && this.fishs2[this.face1] && this.fishs1[this.face0].img === this.fishs2[this.face1].img) {
        this.w = true
        setTimeout(this.remove, 1000)
      } else {
        if (!this.w && this.face0 > -1 && this.face1 > -1) {
          this.w = true
          setTimeout(this.flipback, 1000)
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
      this.fishs1 = this.card_list.filter(function (o) { return !o.hide }).slice().sort(function () {
        return Math.random() - 0.5
      }).slice(0, 6)
      this.fishs2 = this.fishs1.filter(function (o) { return !o.hide }).slice().sort(function () {
        return Math.random() - 0.5
      })
      this.winning = false
    },
    win: function () {
      this.winning = true
    }
  },
  mounted () {
    setTimeout(this.reset, 500)
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
    border-radius: 30px !important;
  }
  img.gold {
    border: 5px gold ridge;
  }
  .grid {
    padding: 15px;
  }
  .card {
    background-color: #c9ffc9;
    min-height: 20vh;
    margin: 10px;
    border: 2px black solid;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: gray 0px 2px 3px 3px;
    transition: all 0.5s ease;
  }
  .card:hover {
    background-color: #ffc9c9;
    border: 2px red solid;
    box-shadow: red 2px 5px 0;
  }
  .image {
    height: 20vh !important;
    overflow: hidden;
  }
  .column.back img {
    visibility: hidden;
  }
  .column.r .card {
    background-color: #c9c9ff;
  }
  .column.focus .card {
    background-color: #ffc9c9 !important;
  }
  .column.null {
    visibility: hidden !important;
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
</style>
