<template>
  <div id="app">
  <Counter />
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'app',
  components: {
    Counter
  }
}
</script>

<style>
html, body {
  width: 100%;
  margin: 0;
}

#header {
  color: darkorchid;
  font-family: Baloo Bhai, cursive;
}

.saltcount {
  width: 100%;
  display: block;
  margin: auto;
  text-align: center;
}

.title {
  font-size: 3rem;
  bottom: 20vh;
  text-align: center;
  white-space: nowrap;
}

.buttons {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  bottom: 20vh;
  text-align: center;
}

.button1, .button2 {
  font-family: Montserrat, sans-serif;
  color: white;
  border: none;
  background-color: darkorchid;
  font-size: 3rem;
  margin-left: 2vw;
  margin-right: 2vw;
}
.button1:hover, .button2:hover {
  background-color: white;
  color: darkorchid;
  border: 1px solid darkorchid;
}
@media screen and (max-width: 768px) {
  .button1, .button2 {
    font-size: 1.8rem;
  }
}

.reactionpic {
  display: block;
  margin: auto;
  max-height: 40vh;
  max-width: 90vw;
  min-width: 30vw;
  vertical-align: middle;
  border: 5px solid darkorchid;
}
@media screen and (max-width: 768px) {
  .reactionpic {
    margin-top: 10vh;
  }
}

</style>
