<template>
  <header class="navigation fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand font-tertiary h3" href="home.html"><img src="assets/images/logo.png" alt="Team 13"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
              aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse text-center" id="navigation">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="home.html">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="requirements.html">REQUIREMENTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="research.html">RESEARCH</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="hci.html">HCI</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="design.html">DESIGN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="achievement.html">ACHIEVEMENT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="plan.html">PLAN FOR TERM2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="appendices.html">APPENDICES</a>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
