<template>
  <div class="hello">
    <br class="fat-only">
    <div class="ui segment container">
      <p>
        本站提供3種認照片遊戲，讓您輸入自己家族成員的照片，幫助長輩記得大家。
      </p>
      <h1>
        配對遊戲：反應力
      </h1>
      <p>...
      </p>
      <h1>
        認人遊戲：辨識力
      </h1>
      <p>...
      </p>
      <h1>
        釣魚遊戲：記憶力
      </h1>
      <p>...
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-size: 1.4em;
  text-align: left;
}

p img {
  float: left;
  margin: 1em;
  transition: all 0.5s ease-in;
}

p img:hover {
  opacity: 0.2;
}

</style>
