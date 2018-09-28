<template>
  <div>
    <h1>編輯照片</h1>
    <ul>
      <li>
        <input v-model="url" placeholder="新增圖片網址">
        <a @click="add(url); url = ''">新增</a>
      </li>
    </ul>
    <ol>
      <li v-for = "(i, index) in img_list" :key="index">
        <img :src="i"/>
        <a @click="remove(index)">x</a>
      </li>
    </ol>
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
    text-align: left;
    display: inline-block;
    padding: 15px;
  }
  img {
    height: 15vmin;
  }
  a {
    cursor: pointer;
    font-size: 3em;
  }
</style>
