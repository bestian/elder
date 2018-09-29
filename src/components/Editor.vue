<template>
  <div>
    <h1>
      <router-link class = 'ui huge button' to='/' exact=''>
        <i class="home icon" />玩照片
      </router-link>
    </h1>
    <ol>
      <li v-for = "(i, index) in img_list" :key="index">
        <img :src="i" @click="url = i"/>
        <a class="ui bottom attached red basic button" @click="remove(index)" title="刪除"><i class="window close icon" />刪除</a>
      </li>
    </ol>
    <ul>
      <li>
        <div class="ui action input">
          <input type ="text" v-model="url" placeholder="新增圖片網址">
          <img v-show = "url" :src="url"/>
          <a v-show = "url" class = "ui green button" @click="add(url); url = ''"><i class="plus icon"/>新增照片</a>
          <a v-show = "!url" class = "ui blue button" href="https://imgur.com/" target = "_blank" title = "上傳照片"><i class="cloud upload icon"/>上傳照片</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  props: ['img_list'],
  data () {
    return {
      url: ''
    }
  },
  methods: {
    add: function (url) {
      this.$emit('add', url)
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
    height: 15vmin;
    border: 3px gold ridge;
  }
  a {
    cursor: pointer;
    font-size: 2em;
  }
  .ui.bottom.attached {
    top: -5px;
  }
</style>
