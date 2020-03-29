<template>
  <div>
    <PageTitle title="Design"></PageTitle>
    <!--System Arthitecture Diagram-->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">
            <h3 class="section-title">System Architecture Diagram</h3>
            <img src="images/design/techarch.png" class="img-responsive" style="width: 100%;" />
          </div>
        </div>
      </div>
    </section>
    <!-- /System Arthitecture Diagram-->

    <!--ER Diagram-->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">
            <h3 class="section-title">Class Diagrams</h3>
              <div class="class-diagram">
                <h4>Mobile App (Flutter)</h4>
                <SvgPanZoom
                        style="width: 100%; height: 600px; "
                        :zoomEnabled="true"
                        :controlIconsEnabled="true"
                        :fit="true"
                        :center="true"
                        :contain="true"
                >
                  <svg width="100%" height="auto"><image x="0" y="0" width="100%" height="100%" xlink:href="images/design/flutter.svg" /></svg>
                </SvgPanZoom>
                <br>Use mouse to pan, double tap to zoom.
              </div>

              <hr>
              <div class="class-diagram">
                  <h4>Backend App (Node.JS)</h4>
                  <carousel perPage="1" navigationEnabled="true">
                      <slide v-for="n in 6" v-bind:key="n">
                          <img :src="'images/design/node/'+n+'.png'" class="img-responsive slideImg">
                      </slide>
                  </carousel>
                  <SvgPanZoom
                          style="width: 100%; height: 300px; "
                          :zoomEnabled="true"
                          :controlIconsEnabled="true"
                          :fit="true"
                          :center="true"
                          :contain="true"
                  >
                      <svg width="100%" height="auto"><image x="0" y="0" width="100%" height="100%" xlink:href="images/design/node.svg" /></svg>
                  </SvgPanZoom>
                  <br>Use mouse to pan, double tap to zoom.
              </div>

          </div>
        </div>
      </div>
    </section>



    <!-- /ER Diagram-->

    <!--Implantation of finished functionality-->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">
            <h3 class="section-title">Implantation of finished functionality</h3>
          </div>

          <div class="col-md-4">
            <img
              src="images/design/functionality.gif"
              class="img-responsive alignright"
              style="width: 100%;"
            />
          </div>

          <div class="col-md-8">
            <div class="text-left">
              <br />
              <br />

              <h4>AR capability</h4>
              <p>When the user scans the QR code on the business card using an Android phone, the application can get the userid of the user(the owner of the card). Through the database, we can get personal information by userid, including AR avatar. Then the AR avatar will be triggered.</p>
              <br />

              <h4>Self-introduction</h4>
              <p>By using Watson Speech to Text, the AR avatar can announce itself and provide an overview of the owner of the card. The application allows users to upload their information, including the overview.</p>
              <br />

              <h4>Respond to user questions</h4>
              <p>The AR avatar can respond to the different questions the user asks by using Watson's assistant.</p>
              <br />

              <h4>Starting a conversion</h4>
              <p>The user who scans the QR code can start a conversation with the owner of the card directly after scanning the QR code and watching the overview of the owner.</p>
              <br />

              <h4>Scan history</h4>
              <p>The Android application and website application can see the list of business cards that the user has already scanned.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/Implentation of finished functionality-->
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import SvgPanZoom from 'vue-svg-pan-zoom';
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: "design",
  components: {
    PageTitle,
    SvgPanZoom,
    Carousel,
    Slide
  }
};
</script>

<style scoped>
    .class-diagram{
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .slideImg{
        max-height: 500px;
        max-width: 100%;
    }
</style>