<template>
  <div>
    <PageTitle title="Research"></PageTitle>
    <!-- Related projects -->
    <section class="section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">

            <h3  class="section-title">Augmented Reality Overview</h3>
            <div class="text-left">

              <p>
                Augmented reality technology can be dated back many decades ago, from NASA's ‘Virtual Fixtures’ which helps military personnel to virtually control and guide machinery for training purposes, to overlaying virtual yellow lines on large sport matches broadcasts back in 1990s [1].
                Entering 2000s, AR technologies have been used more and more in gaming and TV. From around 2005, AR can be seen on mobile devices, such as the AR Tennis, a two-player AR game developed for Nokia phones [2], since then, with the help of iPhone and Android, AR technology is increasingly accelerating alone with research in VR.
              </p>
              <div class="row">
                <div class="col-sm text-center">
                  <img src="images/research/yellow-line.png" class="products img-responsive item-shadow">
                  <h6>Yellow line overlayed in broadcasts (1998) [3]</h6>
                </div>

                <div class="col-sm text-center">
                  <img src="images/research/AR-Tennis-Application.png" class="products img-responsive item-shadow">
                  <h6>Nokia AR Tennis (2005) [6]</h6>
                </div>

                <div class="col-sm text-center">
                  <img src="images/research/early-ar-card.png" class="products img-responsive item-shadow">
                  <h6>Early AR Business cards (2009) [4]</h6>
                </div>

              </div>
              <br>
              <p>
              During our research, we can find the earliest application of AR in business cards [5] in around 2008-2010. At that time the tracking of the card was very limited, there must be a highly visible 2D mark for the camera to locate and track the postion of the card.
                Also, due to the limitation of mobile phone camera quality and the tracking technology, it is very difficult to make this idea into a mobile application, often result in poor quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Related projects-->

    <!-- Related projects -->
    <section class="section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">

            <h3 class="section-title">Related Projects</h3>
            <div class="text-left">

              <p>
                <br>
                There are several similar services that provides AR functions which works with existing business card or a pre-define image, however none has provided functions like NLP conversation, user customizable profile features in our project.
                We have found two most developed project that are related to ours.
              </p>
              <br />
              <br />
              <div class="row">
                <div class="col-sm text-center">
                  <h4>POPLAR STUDIO [7]</h4>
                  <img src="images/research/poplar.png" class="products img-responsive item-shadow">
                  <p>"Poplar offers easy and affordable AR creation with our AR solutions, including face filters, world lenses, portals, image trackers and mini-games."</p>
                </div>
                <div class="col-sm text-center">
                  <h4>AIRCARDS [8]</h4>
                  <img src="images/research/aircards.png" class="products img-responsive item-shadow">
                  <p>"App-less Augmented Reality advertising for brands, marketers & entrepreneurs."</p>
                </div>
              </div>
              <br />
              <br />
              <p>
                Polar Studio mainly creates AR campaigns for large cooperation like BBC, Disney etc. They have services that include image tracking, which is similar to our idea for an augmented reality business card,
                their service usually involves a team of people dedicated to design the campaign for the client, not something a client can do it themselves. Although the end result is usually promising, as it is
                strictly customized, it is very expensive for this service, and it is very hard to share or reproduce for the mass public.
                <br><br>
                Aircards is more close to our idea, however, they are also campaign based, means a user cannot use their service to make one for themselves. They are more consistent with the end product, which is normally business card based,
                or a physical product that is easy to track. They uses in browser AR technologies, which means no app install is required (we can also achieve this in the future with flutter web). However, the experience is usually limited on playing videos or asking the user to interact with virtual buttons.
                <br />
                <br />Both project focus more on the AR experience and the appearance of the business card, and mostly campaign based, user lacks the freedom to make a card themselves, and usually expensive to make.
                Both project also lacks the ability to update profile in real time (presumably very hard after the campaign is released). Most importantly, they lack the key feature our project provides - NLP interaction with the avatar.
                <br><br>
                Overall, we have learned many useful insights and ideas on how we should build our AR card, and what we should and shouldn't do with reference to the existing products on the internet.
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
            <h3 class="section-title">Related technologies</h3>
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
  .products{
    margin: 30px;
    width: 90%;
  }

</style>