<template>
  <div class="hello">
    <br class="fat-only">
    <div class="ui cards">
      <router-link class = 'ui card' to='/pair' exact=''>
        <h1>
          1. 配對遊戲：反應力
        </h1>
        <p>
          <img src="../assets/認照片遊戲01.jpg" />
        </p>
      </router-link>
      <router-link class = 'ui card' to='/spin' exact=''>
        <h1>
          2. 旋轉遊戲：視知覺
        </h1>
        <p>
          <img src="../assets/旋轉遊戲01.jpg" />
        </p>
      </router-link>
      <router-link class = 'ui card' to='/name' exact=''>
        <h1>
          3. 認人遊戲：辨識力
        </h1>
        <p>
            <img src="../assets/認人遊戲01.jpg" />
        </p>
      </router-link>
      <router-link class = 'ui card' to='/fishing' exact=''>
        <h1>
          4. 釣魚遊戲：記憶力
        </h1>
        <p>
            <img src="../assets/認照片遊戲03.jpg" />
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Intro',
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
  text-align: center;
}

p img {
  max-width: 33vmin;
  margin: 1em;
  transition: all 0.5s ease-in;
}

p img:hover {
  transform: scale(1.2);
}

</style>
