<template>
  <!-- page title -->
  <section class="page-title how-it-works-bg" :style="{ backgroundPosition: '0 ' + Math.random()*500 +'px' }">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="text-white font-tertiary">{{title}}</h1>
        </div>
      </div>
    </div>
  </section>
  <!-- /page title -->
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: String
  }
};
</script>

<style scoped>
@media (max-width: 1372px) {
  .page-title {
    padding: 170px 20px 50px;
    transition: all 2s;
  }
  .text-white {
    font-size: 50px;
    overflow: hidden;
  }
}
</style>