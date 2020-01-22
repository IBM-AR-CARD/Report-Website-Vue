<template>
  <div>
    <PageTitle title="Prototype"></PageTitle>
    <!--System Arthitecture Diagram-->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">
            <h3 class="section-title">System Architecture Diagram 1</h3>
            <img
              src="images/design/techarch.png"
              class="img-responsive"
              style="width: 100%;"
            />
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
            <h3 class="section-title">System Architecture Diagram 2</h3>
            <img src="images/design/architecture.png" class="img-responsive" style="width: 100%;" />
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

            </div>
          </div>

          <div class="col-lg-12">
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
    </section>
    <!--/Implentation of finished functionality-->
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  name: "design",
  components: {
    PageTitle
  }
};
</script>

<style scoped>
</style>