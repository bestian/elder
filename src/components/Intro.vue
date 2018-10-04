<template>
  <div class="hello">
    <br class="fat-only">
    <div class="ui segment container">
      <router-link class = 'item ' to='/pair' exact=''>
        <h1>
          1. 配對遊戲：反應力
        </h1>
        <p>
          <img src="../assets/認照片遊戲01.jpg" />
        </p>
      </router-link>
      <router-link class = 'item ' to='/name' exact=''>
        <h1>
          2. 認人遊戲：辨識力
        </h1>
        <p>
            <img src="../assets/認照片遊戲02.jpg" />
        </p>
      </router-link>
      <router-link class = 'item ' to='/fishing' exact=''>
        <h1>
          3. 釣魚遊戲：記憶力
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
  max-width: 50vw;
  margin: 1em;
  transition: all 0.5s ease-in;
}

p img:hover {
  transform: scale(1.2);
}

</style>
