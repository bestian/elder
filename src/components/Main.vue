<template>
  <div class="hello" @keyup.native = "check()">
    <h1>
      <span v-show="!w">{{msg0}}</span>
      <img v-for="(k,index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]" id = "rainbow" :key="index" :title="k" src = "../assets/rainbow.jpg" v-show = "w"/>
    </h1>
    <div>
      <div id = "left" @click="check()">
        <ul v-for="(i, index) in img_list" :key="index">
          <li v-show = "a % img_list.length == index">
            <img :src="i">
          </li>
        </ul>
      </div>
      <div id = "right" @click="win()">
        <img :src="img_list[b]">
      </div>
    </div>
    <h1>
      <span v-show="!w">{{msg}}</span>
      <img v-for="(k,index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]" id = "rainbow" :key="index" :title="k" src = "../assets/rainbow.jpg" v-show = "w"/>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['img_list'],
  data () {
    return {
      a: 0,
      b: 0,
      w: 0,
      msg0: '歡迎！',
      msg: '看到相同的照片時，請按空白鍵'
    }
  },
  methods: {
    go: function () {
      if (!this.w) {
        this.a++
      }
    },
    check: function () {
      if (this.a % this.img_list.length === this.b) {
        this.win()
      }
    },
    reset: function () {
      this.b = Math.floor(Math.random() * this.img_list.length)
      this.w = 0
      this.getLocal()
    },
    win: function () {
      this.w++
      setTimeout(this.reset, 3000)
    },
    getLocal: function () {
      console.log(this.$localStorage.get('img_list'))
      this.img_list = this.$localStorage.get('img_list').split(',')
    }
  },
  mounted () {
    setInterval(this.go, 2000)
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
#left, #right {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: inline-block;
  width: 40%;
}

img {
  max-width: 100%;
  height: 50vmin;
}

#rainbow {
  width: 5%;
  height: auto;
}

</style>
