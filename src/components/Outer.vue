<template>
  <div class="hello">
    <br class="fat-only">
    <div class="ui two doubling cards container">
      <div class = 'ui card' v-for ="(o, idx) in outers">
        <h1>
          {{idx+1}}. {{o.n}}
        </h1>
        <p>
          <iframe v-if="o.tube" width="100%" height="315" :src="o.tube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </p>
        <p class="description">{{o.d}}</p>
        <div class="ui three massive buttons">
          <a class="ui red button" :href = "o.pc" target="_blank"><i class =" desktop icon"/><br/>電腦版</a>
          <a class="ui green button" :href = "o.ios || o.pc" target="_blank"><i v-if="o.ios" class ="app store icon" /><i v-else class =" desktop icon"/><br/><span>Apple行動版</span></a>
          <a class="ui blue button" :href = "o.and || o.pc" target="_blank"><i v-if="o.ios" class = "google play icon" /><i v-else class =" desktop icon"/><br/><span>Andorid行動版</span></a>
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
      outers: [
        { n: '韋諾之戰',
          d: '長輩年輕時打過仗嗎?試試這個經典的戰爭遊戲!',
          tube: 'https://www.youtube.com/embed/xDDKImYOIvA',
          pc: 'https://www.wesnoth.org/',
          ios: 'https://itunes.apple.com/us/app/battle-for-wesnoth-hd/id575852062?mt=8',
          and: 'https://play.google.com/store/apps/details?id=it.alessandropira.wesnoth114&hl=zh_TW'
        },
        { n: '黏黏世界',
          d: '長輩年輕時做過工程嗎?試試這個經典的搭結構遊戲!',
          tube: 'https://www.youtube.com/embed/-A_JfkzPwww',
          pc: 'https://world-of-goo.en.softonic.com/',
          ios: 'https://itunes.apple.com/cn/app/world-of-goo/id401301276?mt=8',
          and: 'https://play.google.com/store/apps/details?id=com.twodboy.worldofgoofull&hl=en_US'
        },
        { n: '網路下棋',
          d: '長輩年輕時喜歡下棋嗎?在線遊戲-和其他真人玩家對弈!有象棋, 圍棋, 五子棋, 西洋棋, 黑白棋等',
          tube: 'https://www.youtube.com/embed/duXjgFYkHpM',
          pc: 'https://www.playok.com/'
        }
      ]
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
