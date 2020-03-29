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
              *We have decided to use JWT authentication instead of LinkedIn OAuth, however this can be added in the future.
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
            <h3 class="section-title">Class Diagrams (Entity Relationship)</h3>
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
            <h3 class="section-title">Feature Implantation</h3>

              <div class="text-left">
                  <br />
                  <br />

                  <h4>Unity</h4>
                  <p>We have designed a dedicated Unity application, used to handle business card locating and tracking with Vuforia engine, it also handles the 3D AR avatar model rendering,
                      with more than 10 custom models for users to select. The unity app is integrated within the flutter UI, both communicates by serial messaging signals. Model is programmatically loaded,
                      as we need to handle different choice of avatar from different requests. Each model has two separate animator controller, which uses script to randomly generate animations. For example,
                      around 8 different idle animations (rub shoulder etc) will be played when the avatar is idle, to make them more realistic. While talking, different talking gestures will also be randomly played,
                      mouth animation will also be played, which imitates speak, however, not all of the avatars is able to play the mouth animation, as they have different bone rigs, this should be improved in the future.
                      <br><br>
                      We have also added head look controller, as the avatar can be viewed from any angle in AR (the user can tilt or rotate the business card as they like), the avatar's head will always
                      looking straight, which is unnatural. With the head look controller, the avatar will look at the camera like he/she is talking to the user in real life. We have limited the angle of
                      the head, thus the avatar won't have excessive head motion (e.g. turning all the way to back). However, when playing animations, the head rotation might be imposed by the animation,
                      causing a little bit of unnatural movements. This should be improved in the future.
                      <br><br>
                      Apart form the AR scene, we have later added a non-AR scene, in case user do not wish to hold their camera to be able to talk or interact with the avatar. The scene uses
                      an open source unity office as background. To make the scene more interactive, we have also added a pan and drag controller, that user can view the avatar in 360 degrees
                      by using finger to pan the camera.
                  </p>
                  <br>
                  <h4>Backend</h4>
                  <p>In the server-side, we used Node.js and express to build our backend that handles the request from the mobile app, including user registration and authentication, user profile and favourites storage etc. MongoDB is chosen for our database, it’s a NoSQL database that stores data in JSON-like format.
                      As both Node.js and MongoDB have better support in JSON format during network request, this makes our progress faster and more straightforward than expected. </p>
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