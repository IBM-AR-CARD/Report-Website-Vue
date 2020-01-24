<template>
  <div>
    <PageTitle title="Research"></PageTitle>
    <!-- Related projects -->
    <section class="section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">
            <h3 class="section-title">Related projects</h3>
            <div class="text-left">
              <p>
                Based on our research, there is no existing application or website, which has the same functionality as us, has been implemented.
                <br />
                <br />Several related projects focus on designing unique AR business cards for their clients. They can see the AR image using the smartphone camera app. However, there is no app could manage card they receive and change user's information by themselves
              </p>
              <br />
              <br />
              <div class="row">
                <div class="col-sm text-center">
                  <h4>POPLAR STUDIO</h4>
                  <p>"Poplar offers easy and affordable AR creation with our AR solutions, including face filters, world lenses, portals, image trackers and mini-games."</p>
                </div>
                <div class="col-sm text-center">
                  <h4>AIRCARDS</h4>
                  <p>"App-less Augmented Reality advertising for brands, marketers & entrepreneurs."</p>
                </div>
              </div>
              <br />
              <br />
              <p>
                Both of the example companies design the production of AR for their clients. Clients enter the personal information and the old business card image to customize their AR business cards. The company will update the AR business card image for adding AR technology. Then the client can print directly. [1][2]
                <br />
                <br />The similarity of our projects and the example product is that both of us use AR technology in the business card. But they focus on the AR experience and the appearance of the business card, and we are concentrated on making the user's life more convenient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Related projects-->

    <!-- Related technology -->
    <section class="section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">
            <h3 class="section-title">Research of technology</h3>
            <div class="text-left">
              <h4>AR capability</h4>

              <p>Based on our research and advice from clients, we use Unity to handle business card tracking and AR 3D Avatar display.</p>
              <br />
              <br />
              <h4>Android App</h4>
              <p>
                We use flutter as our app SDK because there are several SDKs that suitable for our project. Hence we decide to use the one we are familiar with. Moreover, the language flutter use is Dart
                Besides, we use third-party libraries:
                Vuforia and flutter-unity-widget.
              </p>
              <br />
              <br />
              <h4>Website</h4>
              <p>
                We use vue.js to create the front-end of our website service.
                It is built for user interfaces, which is suitable for our project. Also, there are lots of templates and resources online. It is easy to understand and integrate.
              </p>
              <br />
              <br />
              <h4>Text to speech/Keyword detection (AI language processing)</h4>
              <p>We use Watson's Speech to Text as the client's request. Also, we use Watson's assistant to give the user the option of getting more details about the specific area(by keyword detection). For AI processing, we choose to use the IBM cloud.</p>
              <br />
              <br />

              <h4>Storage of data</h4>
              <p>Initially, we choose MySQL for our datastore. However, with more in-depth research, we found that the NoSQL database is more suitable for us. Then we decide to use MongoDB as our database. MongoDB is a cross-platform document-oriented database.It is document-oriented. Besides, it is built for the cloud. We need to use the IBM cloud for our back-end.</p>
              <br />
              <br />
              <h4>Back-end server</h4>
              <p>The server framework we use is the Express. It is a web application framework for Node.js.It is designed for building web applications and APIs. Using Express.js can decrease the line of code you need to write compared with plain Node.js.</p>
              <br />
              <br />
              <h4>Summary of final decision</h4>
              <p>
                For the front-end, we use flutter SDK(Dart) and Unity for Android app and Vue.js for website service.
                For the back-end, we use node.js for the back-end server,
                Plus, we use IBM Watson and IBM Cloud for AI language processing.
                For data store, we use MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- bg image -->
      <img
        class="img-fluid edu-bg-image w-100"
        src="images/backgrounds/education-bg.png"
        alt="bg-image"
      />
    </section>
    <!-- /Related technology-->

    <!-- Reference  -->
    <section class="section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">
            <h3 class="section-title">Reference</h3>
            <div class="text-left">
              <p>
                [1] Aircards.co. (2020). Augmented Reality Business Cards - Aircards. [online] Available at: https://www.aircards.co/augmented-reality-business-cards [Accessed 21 Jan. 2020].
                <br />[2] Poplar. (2020). Get your own AR business card. [online] Available at: https://poplar.studio/business-cards/ [Accessed 21 Jan. 2020].
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Reference-->
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  name: "research",
  components: {
    PageTitle
  }
};
</script>

<style scoped>
</style>