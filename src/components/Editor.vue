<template>
  <div>
    <h1>編輯照片</h1>
    <ul>
      <li>
        <input v-model="url">
        <a @click="add(url)">add</a>
      </li>
      <li v-for = "(i, index) in img_list" :key="index">
        <img :src="i"/>
        <a @click="remove(index)">remove {{i}}</a>
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
    }
  },
  methods: {
    add: function (url) {
      this.img_list.push(url)
    },
    remove: function (index) {
      this.$emit('remove')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    text-align: left;
  }
  img {
    height: 15vmin;
  }
  a {
    cursor: pointer;
  }
</style>
