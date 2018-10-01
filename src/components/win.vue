<template>
  <div>
    <div class = "page">
      <div class="ui image card">
        <img src="../assets/th.jpg" />
        <h1>讚!</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'win',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  img {
    z-index: 99999;
    width: 300px;
    border-radius: 30px;
  }

  .page {
    z-index: 99999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-name: example;
    animation-duration: 3s;
  }

  .page img {
  }

  /* The animation code */
  @keyframes example {
      0%   {transform: scale(1)}
      50%  {transform: scale(2)}
      100% {transform: scale(1)}
  }

</style>
