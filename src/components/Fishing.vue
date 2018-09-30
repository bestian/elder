<template>
  <div>
    <div class="ui grid">
      <div class="three wide column" v-for = "(f, index) in fishs1" :key="f" v-bind:class="[face0 == index ? 'face' : 'back', f ? 'good' : 'null']" @click = "flip(index,0)">
        <img v-bind:class="fishs1[face0] == fishs2[face1] ? 'gold' : '' " :src="f"/>
        <span class="big" v-show="!f">x</span>
      </div>
    </div>
    <div class="ui grid">
      <div class="three wide r column" v-for = "(f, index) in fishs2" :key="index" v-bind:class="[face1 == index ? 'face' : 'back', f ? 'good' : 'null']" @click = "flip(index,1)">
        <img v-bind:class="fishs1[face0] == fishs2[face1] ? 'gold' : ''" :src="f"/>
        <span class="big" v-show="!f">x</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  props: ['img_list'],
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
      if (!this.w && this.fishs1[this.face0] === this.fishs2[this.face1]) {
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
        if (this.fishs1[i] !== '') { ww = false }
      }
      return ww
    },
    remove: function () {
      this.fishs1[this.face0] = ''
      this.fishs2[this.face1] = ''
      // this.fishs1.splice(this.face0, 1)
      // this.fishs2.splice(this.face1, 1)
      this.flipback()
      if (this.isWin()) {
        this.win()
        this.reset()
      }
    },
    flipback: function () {
      this.face0 = -1
      this.face1 = -1
      this.w = false
    },
    reset: function () {
      this.fishs1 = this.img_list.slice().sort(function () { return Math.random() - 0.5 })
      this.fishs2 = this.img_list.slice().sort(function () { return Math.random() - 0.5 })
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
  }
  img.gold {
    border: 5px gold ridge;
  }
  .grid {
    padding: 15px;
  }
  .column {
    min-height: 20vh;
    margin: 10px;
    border: 3px black solid;
    border-radius: 15px;
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
</style>
