<template>
  <div id="app">
    <div id="nav">
      <div id="links">
        <router-link to="/">Cleaner</router-link> |
        <router-link to="/share">Testimonials</router-link>
      </div>
    </div>
    <router-view />
    <div class="footer">
      <a
        class="footer-text"
        href="https://github.com/JazzWeller/BrowserCleaner"
      >
        Repo
      </a>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route (to) {
      document.title = to.meta.title || "Cleaner";
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none none side";
  margin-bottom: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 15px;
  margin-left: 15px;
}

#nav a.router-link-exact-active {
  color: #1299b3;
}

#links {
  font-size: 1.8em;
  grid-area: side;
  display: flex;
  justify-content: center;
}

.footer {
  background-color: #128493;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  padding-top: 10px;
  padding-right: 30px;
  margin-top: 30px;
  text-align: right;
}

.footer a {
  color: black;
  margin-right: 1em;
  font-size: 1.5em;
}
</style>
