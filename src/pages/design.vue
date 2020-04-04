<template>
  <div>
    <PageTitle title="Design"></PageTitle>
      <!--Implantation of finished functionality-->
      <section class="section">
          <div class="container">
              <div class="row">
                  <div class="col-lg-10 mx-auto text-center">
                      <h3 class="section-title">Feature Implementation</h3>

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
                              <carousel :perPage="1" :navigationEnabled="true" style="text-align: center">
                                  <slide v-for="n in 9" v-bind:key="n">
                                      <img :src="'images/design/implementation/unity'+n+'.png'" class="img-responsive slideImg">
                                  </slide>
                              </carousel>
                              <br>
                              We have also added head look controller, as the avatar can be viewed from any angle in AR (the user can tilt or rotate the business card as they like), the avatar's head will always
                              looking straight, which is unnatural. With the head look controller, the avatar will look at the camera like he/she is talking to the user in real life. We have limited the angle of
                              the head, thus the avatar won't have excessive head motion (e.g. turning all the way to back). However, when playing animations, the head rotation might be imposed by the animation,
                              causing a little bit of unnatural movements. This should be improved in the future.
                              <br><br>
                              Apart form the AR scene, we have later added a non-AR scene, in case user do not wish to hold their camera to be able to talk or interact with the avatar. The scene uses
                              an open source unity office as background. To make the scene more interactive, we have also added a pan and drag controller, that user can view the avatar in 360 degrees
                              by using finger to pan the camera.
                          </p>
                          <br><br>
                          <h4>Backend + Database</h4>
                          <p>In the server-side, we used Node.js and express to build our backend that handles the request from the mobile app, including user registration and authentication, user profile and favourites storage etc. MongoDB is chosen for our database, it’s a NoSQL database that stores data in JSON-like format.
                              As both Node.js and MongoDB have better support in JSON format during network request, this makes our progress faster and more straightforward than expected. </p>
                          <br><br>
                          <carousel :perPage="1" :navigationEnabled="true" style="text-align: center">
                              <slide v-for="n in 12" v-bind:key="n">
                                  <img :src="'images/design/implementation/backend'+n+'.png'" class="img-responsive slideImg">
                              </slide>
                          </carousel>
                          <br>
                          <p>
                              We have hosted our backend on Azure B1s virtual machine at a cost of £6.42 per month, provided by UCL. In order to efficiently manage the backend server, I have set up
                              a github webhook in our server, in order to automatically pull and deploy the latest github changes.
                          </p>
                          <br><br>
                          <h4>Flutter</h4>
                          <p>We have decided to use flutter in the mobile app frontend, as it's a cross-platform mobile framework backed by Google, which means we can easily design our UI and implement it across Android and iOS in the future. Flutter uses dart as its programming language, which is a client-optimised language for fast mobile development. Flutter uses the latest structural
                              design pattern MVVM that provide rapid mobile development and has many powerful packages. Additionally, we have also built a web front-end using Vue.js.</p>
                          <br><br>
                          <carousel :perPage="3" :navigationEnabled="true" style="text-align: center">
                              <slide v-for="n in 11" v-bind:key="n">
                                  <img :src="'images/design/implementation/flutter/new'+n+'.jpeg'" class="img-responsive slideImg">
                              </slide>
                          </carousel>
                          <p>
                              Scan history and favourites is enabled when the user login, user can store the preferred card into the favourite list. User can modify their detail, including phone number, email, website, education, etc., and any changes will be store into the cloud. The app uses Used Google API achieves nature language recognition and text to voice to implement chat function. The Flutter application can perform URL schemes launching automatically such as open user website in the default browser, Write an email to user define email address, Make a phone call to user define phone number and send an SMS message to user define phone number if user fill in their detail.
                          </p>
                          <br><br>
                          <h4>Vue.js</h4>
                          <carousel :perPage="1" :navigationEnabled="true" style="text-align: center">
                              <slide v-for="n in 15" v-bind:key="n">
                                  <img :src="'images/design/implementation/web'+n+'.png'" class="img-responsive slideImg">
                              </slide>
                          </carousel>
                          <p>We used Vue a progressive javascript framework for web application development together with the Material design which backed by Google. Vue using latest design structure MVVM to keep track of data, if the data changes the view will also update to the corresponding layout.

                              The web application is responsive means it can optimize its layout in different size of the screen, and the design when running on mobile models tend to be like a native application rather than a web application.

                              User can log in or register on the web application. Once login, user can modify their detail such as choosing AR model, upload image as profile and filling the detail. The history and favourite list are up to date with the mobile application. User can delete or view the detail of each item from the list.</p>
                          <br><br>

                          <h4>IBM Watson</h4>
                          <carousel :perPage="1" :navigationEnabled="true" style="text-align: center">
                              <slide v-for="n in 8" v-bind:key="n">
                                  <img :src="'images/design/implementation/watson'+n+'.png'" class="img-responsive slideImg">
                              </slide>
                          </carousel>
                          <p>We use Watson assistant that utilizes machine learning that can be trained to understand natural human language, we train the assistant instance with common questions our target users might ask, and the instance will be able to recognize any question in different expressions correctly, enables our
                              system to understand user’s intent and reply with correct answers. </p>
                      </div>
                  </div>
              </div>



          </div>
      </section>
      <!--/Implentation of finished functionality-->

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

      <section class="section">
          <div class="container">
              <div class="row">
                  <div class="col-lg-10 mx-auto text-center">
                      <h3 class="section-title">User Chat Sequence Diagram</h3>
                      <img src="images/design/sequence-chat.png" class="img-responsive" style="width: 100%; margin-left: -100px" /><br><br>
                      <p class="text-left">When the server is initially launched, it will establish a connection with the Watson Assistant API, once the user sends a message from front-end via the chat endpoint, the backend will first search for any existing Watson session ID, if there isn’t, then create one and log it in memory, also establish a session with Watson server. This session ID will be used for Watson to identify any conversations, therefore understanding the context of the question better with all the historical conversations. Any session will be deleted after 5 minutes of inactivity (e.g. no further questions asked). That’s why there might be a noticeable lag when user first asks a question to our server, but no lag with any other question asked later, as our backend is trying to create a session with Watson. If the session is created, the backend only needs to relay the question to Watson.</p>
                  </div>
              </div>
          </div>
      </section>

      <section class="section">
          <div class="container">
              <div class="row">
                  <div class="col-lg-10 mx-auto text-center">
                      <h3 class="section-title">User Authentication Sequence Diagram</h3>
                      <img src="images/design/sequence-user.png" class="img-responsive" style="width: 70%;" />
                  </div>
              </div>
          </div>
      </section>


      <section class="section">
          <div class="container">
              <div class="row">
                  <div class="col-lg-10 mx-auto text-center">
                      <h3 class="section-title">Data Storage ER Diagram</h3>
                      <img src="images/design/mongodb.png" class="img-responsive" style="width: 100%;" />
                  </div>
              </div>
          </div>
      </section>



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
                  <svg width="100%" height="600px"><image x="0" y="0" width="100%" height="100%" xlink:href="images/design/flutter.svg" /></svg>
                </SvgPanZoom>
                <br>Use mouse to pan, double tap to zoom.
              </div>

              <hr>
              <div class="class-diagram">
                  <h4>Backend App (Node.JS)</h4>
                  <carousel :perPage="1" :navigationEnabled="true">
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
                      <svg width="100%" height="300px"><image x="0" y="0" width="100%" height="100%" xlink:href="images/design/node.svg" /></svg>
                  </SvgPanZoom>
                  <br>Use mouse to pan, double tap to zoom.
              </div>

          </div>
        </div>
      </div>
    </section>
    <!-- /ER Diagram-->








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