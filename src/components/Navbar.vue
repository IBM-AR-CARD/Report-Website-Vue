<template>
  <header class="navigation fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand font-tertiary h3" href="home.html">
        <img src="images/logo.png" style="max-height: 60px;" alt="Team 13">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
              aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse text-center" id="navigation">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/" >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/requirements" >Requirements</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/research" >Research</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/hci" >Hci</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/design" >Design</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/achievement" >Achievement</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/plan" >Term 2 Plan</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/appendices" >Appendices</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
