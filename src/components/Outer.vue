<template>
  <div class="hello">
    <br class="fat-only">
    <div class="ui cards">
      <div class = 'ui card' to='/pair' exact=''>
        <h1>
          1. 韋諾之戰
        </h1>
        <p>
          <iframe width="80%" height="315" src="https://www.youtube.com/embed/xDDKImYOIvA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </p>
        <p class="description">長輩年輕時是軍人嗎?試試這個戰爭遊戲!</p>
        <div class="ui three buttons">
          <a class="ui red button" href = "https://www.wesnoth.org/" target="_blank"><i class =" desktop icon"/><br/>電腦版</a>
          <a class="ui green button" href = "https://itunes.apple.com/us/app/battle-for-wesnoth-hd/id575852062?mt=8" target="_blank"><i class ="app store icon" /><br/>App Store</a>
          <a class="ui blue button" href = "https://play.google.com/store/apps/details?id=it.alessandropira.wesnoth114&hl=zh_TW" target="_blank"><i class = "google play icon" /><br/>Google Play</a>
        </div>
      </div>
      <div class = 'ui card' to='/pair' exact=''>
        <h1>
          2. 黏黏世界
        </h1>
        <p>
          <iframe width="80%" height="315" src="https://www.youtube.com/embed/-A_JfkzPwww" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </p>
        <p class="description">長輩年輕時是工程師嗎?試試這個搭結構遊戲!</p>
        <div class="ui three buttons">
          <a class="ui red button" href = "https://world-of-goo.en.softonic.com/" target="_blank"><i class =" desktop icon"/><br/>電腦版</a>
          <a class="ui green button" href = "https://itunes.apple.com/cn/app/world-of-goo/id401301276?mt=8" target="_blank"><i class ="app store icon" /><br/>App Store</a>
          <a class="ui blue button" href = "https://play.google.com/store/apps/details?id=com.twodboy.worldofgoofull&hl=en_US" target="_blank"><i class = "google play icon" /><br/>Google Play</a>
        </div>
      </div>
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
