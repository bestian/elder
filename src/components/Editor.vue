<template>
  <div>
    <h1>
      <router-link class = 'ui huge button' to='/' exact=''>
        <i class="home icon" />玩照片
      </router-link>
    </h1>
    <ol>
      <li v-for = "(c, index) in card_list" :key="index">
        <img :src="c.img" @click="url = c.img; name = c.name"/>
        <a class="ui bottom attached red huge basic button" @click="remove(index)" title="刪除"><i class="window close icon" />刪除{{c.name}}</a>
      </li>
    </ol>
    <div class="ui action input">
      <input type ="text" v-model="url" placeholder="新增圖片網址">
      <input type ="text" v-model="name" placeholder="新增名字">
      <img v-show = "url" :src="url"/>
      <a v-show = "url" class = "ui green button" @click="add(url, name); url = ''; name = ''"><i class="plus icon"/>新增照片</a>
      <a v-show = "!url" class = "ui blue button" href="https://imgur.com/" target = "_blank" title = "上傳照片"><i class="cloud upload icon"/>上傳照片</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  props: ['card_list'],
  data () {
    return {
      url: '',
      name: ''
    }
  },
  methods: {
    add: function (url, name) {
      this.$emit('add', url, name)
    },
    remove: function (index) {
      this.$emit('remove', index)
    }
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
    height: 20vmin;
    border: 3px gold ridge;
  }
  a {
    cursor: pointer;
    font-size: 2em;
  }
  .ui.bottom.attached {
    top: -5px;
  }
  input {
    max-width: 30vw !important;
  }
</style>
