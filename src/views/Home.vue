<template>
  <div class="home">
    <div id="intro">
      <h1>What is Browser Cleaner?</h1>
      <hr />
      <p>
        Browser Cleaner is a local web based app that goes through and removes
        any unnecessary cookies, scripts, cached images or websites, and old
        search history in order to speed up slow browsers. <br /><br />
        It is perfectly safe, does not store any of your data, and will not
        remove anything that is useful or necessary for your browsing
        experience.
      </p>
    </div>
    <div id="select">
      <h1>Please select your browser</h1>
      <hr />
      <div id="images">
        <router-link  to="/clean">
          <img @click=switchTo(0) class="browserImg" src="../images/Chrome.png" />
        </router-link>
        <router-link  to="/clean">
          <img @click=switchTo(1) class="browserImg" src="../images/Edge.png" />
        </router-link>
        <router-link  to="/clean">
          <img @click=switchTo(2) class="browserImg" src="../images/Firefox.png" />
        </router-link>
        <router-link  to="/clean">
          <img @click=switchTo(3) class="browserImg" src="../images/Opera.png" />
        </router-link>
        <router-link  to="/clean">
          <img @click=switchTo(4) class="browserImg" src="../images/Safari.png" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    switchTo(id) {
      this.$root.$data.browser = id;
    }
  },
}
</script>

<style scoped>
hr {
  width: 50%;
}
p {
  margin-left: 28%;
  width: 44%;
  font-size: 1.2em;
  font-align: center;
}
#select {
  margin-top: 150px;
}
.browserImg {
  width: 13%;
}
</style>
