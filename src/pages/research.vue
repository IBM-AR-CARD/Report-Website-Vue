<template>
  <div>
    <PageTitle title="Research"></PageTitle>
    <!-- Related projects -->
    <section class="section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">

            <h3  class="section-title">Augmented Reality<span>Overview</span></h3>
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
            <h3 class="section-title">Related<span>Technologies</span></h3>
            <div class="text-left">
              <h4>AR Capability</h4>

                  <div class="services-item item-shadow margin">
                    <div class="services-body">
                      <h5>Unity + Vuforia</h5>
                      <p>
                        Unity is a cross-platform game engine developed in 2005, it is widely used in both game and VR/AR development, it is relatively very stable and supported by many developers, with a wide selection of libraries. Vuforia is a Unity library that is very mature for AR tracking.
                        We decided to use Unity as our choice for AR tracking, also because it has very good support for integration with android and web apps.
                      </p>
                    </div>
                  </div>

                  <div class="services-item item-shadow margin">
                    <div class="services-body">
                      <h5>Unreal</h5>
                      <p>
                        The Unreal Engine is a game engine developed by Epic Games, first showcased in the 1998 first-person shooter game Unreal. It focuses more on the quality of the 3D rendering. It is mainly designed for demanding applications such as 3A games and filmmaking. It also supports AR. However, due to its
                        harder requirement on hardware and energy efficiency, we would choose the more widely used cross platform Unity engine over Unreal.
                      </p>
                    </div>
                  </div>

                  <div class="services-item item-shadow margin" >
                    <div class="services-body">
                      <h5>AR Core / AR Kit</h5>
                      <p>
                        AR Core and AR Kit are the latest AR framework, designed for mobile devices and specifically for AR applications, developed by Google and Apple. It should have the best support and best experience compared to other library for frameworks.
                        However, due to their requirement on new Apple or Android devices, and lack of community support as they are relatively new, they haven't been taken into our final consideration.
                      </p>
                    </div>
                  </div>

              <br />
              <br />
              <h4>Frontend - Android App</h4>
              <div class="services-item item-shadow margin">
                <div class="services-body">
                  <h5>Flutter</h5>
                  <p>
                    Flutter is a cross-platform mobile framework developed by Google, which means we can easily design our UI and implement it across Android and iOS in the future. Flutter uses Dart as its programming language, which is a client-optimised language for fast mobile development. Flutter uses the latest structural design pattern MVVM that provides rapid mobile development and has many powerful packages.
                    <br><br>Although Flutter is relatively very new, there are very high interactivity of community supports, and there are already lots of useful libraries designed for flutter, this includes Unity support which is important for us. If we can’t find the library we want, we can even bridge Flutter to native APIs.  Thus, we have decided to use flutter in the mobile app frontend, mostly because compared to native development, it saves considerable time and effort.
                  </p>
                </div>
              </div>

              <div class="services-item item-shadow margin">
                <div class="services-body">
                  <h5>Native development</h5>
                  <p>
                    Native development is the best choice if we are building a frequently used, or always running app such as instant messaging apps. It has consistent look and feel, better compliance with app store guidelines, and most importantly, unparalleled performance, much faster than hybrid frameworks like React native, and faster than Flutter. However, the downside is that it is quite time consuming to develop compared with flutter or react. Also, it means it is very difficult to design and style the application based on our prototype.
                    <br><br>
                    It also means we need to write two different code base if we would like to deploy our app to both iOS and Android. As our application isn’t performance heavy and used frequently by the users, we decided not go with native development.
                  </p>
                </div>
              </div>

              <div class="services-item item-shadow margin" >
                <div class="services-body">
                  <h5>Reactive Native</h5>
                  <p>
                    Reactive Native is an open-source mobile application framework created by Facebook. It uses JavaScript as the programming language. Compared with Dart, react native uses more complicated libraries and code structure, it might slow the progress down considerably even compared with native development, as none of us have learned react before.
                    <br><br>
                    Additionally, app performance wise, React native has worse performance than flutter and native development because developers need the help of an intermediary bridge for interacting with native components, in contrast Flutter uses low level painting system, which is sometimes even faster than native. Thus, React Native didn’t make into our choice.
                  </p>
                </div>
              </div>
              <br />
              <br />



              <h4>Frontend - Web App</h4>
              <div class="services-item item-shadow margin">
                <div class="services-body">
                  <h5>Vue.js</h5>
                  <p>
                    Vue is the front-end framework we choose for the front-end of the website.
                    Vue.js is an open-source MVV JavaScript framework for building user interfaces. It is easy to integrate with other libraries or existing projects. The default method of styling in Vue is through style tags in single-file components, which means we can get full access to CSS in the same file as the rest of your component code. The reason why we chose Vue is that it has a smoother learning curve compared to React, and some of us had experience with it before.
                  </p>
                </div>
              </div>

              <div class="services-item item-shadow margin">
                <div class="services-body">
                  <h5>React</h5>
                  <p>
                    React is a JavaScript library for building user interfaces. It is maintained by Facebook. It is component-based, which means you can easily pass rich data through app and keep state out of the DOM because component logic is written in Javascript. If we would, we can choose React and React native both for our mobile and web application, as it only need us to “learn once, write anywhere”. However this still require us to maintain two code bases, as we have decided to use Flutter, we decide to use Vue.js who has better component structure than React, for our web application.
                  </p>
                </div>
              </div>

              <br />
              <br />
              <h4>Back-end Server</h4>

              <div class="services-item item-shadow margin">
                <div class="services-body">
                  <h5>Node.js + Express</h5>
                  <p>
                    Express.js is an open-source web application framework for Node.js. It is designed for building web applications and APIs. Developers can define routes based on HTTP methods and URLs. It allows developers to create a REST API server. Compared to PHP, it has better performance on request per second because of the asynchronous request handling, which can process concurrent requests at the same time. Node.js is also better at handling JSON, and very easy to integrate with no SQL databases like MongoDB.
                  </p>
                </div>
              </div>

              <div class="services-item item-shadow margin">
                <div class="services-body">
                  <h5>PHP</h5>
                  <p>
                    PHP is an open-source server-side scripting language. It is easier to maintain and stable, used by many as it is also much older than Node.js. Many popular content management systems such as WordPress, Drupal both uses php. However, compared to node, php is not as compatible with no SQL DB as node, and it is also relatively more vulnerable to security problems than newer frameworks.
                  </p>
                </div>
              </div>

              <div class="services-item item-shadow margin" >
                <div class="services-body">
                  <h5>Koa</h5>
                  <p>
                    Koa is a new web framework designed by the team behind Express. It is a smaller and robust foundation for web applications than other frameworks. However, Koa’s community support is not as strong as Express, as it is even newer than node. Also, it seems that many important features Express has is omitted or simplified.
                  </p>
                </div>
              </div>
              <br />
              <br />

              <h4>Database</h4>
                <div class="services-item item-shadow margin">
                  <div class="services-body">
                    <h5>MongoDB</h5>
                    <p>
                      MongoDB is a cross-platform document-oriented database program. It is a NoSQL database that uses JSON-like documents with schemas. We decided to use MongoDB because it provides flexible schema types, and we think Json would be a great way to store and manage individual user profile, and all the web and flutter frontend can handle Json easily.
                    </p>
                  </div>
                </div>

                <div class="services-item item-shadow margin">
                  <div class="services-body">
                    <h5>SQL</h5>
                    <p>
                      MySQL is the top database choice of many. It is excellent for complex queries. Also, it is restrictive. For example, all of the data must follow the same structure. However, our project doesn’t have complex relations between each table or collections. Therefore we think MongoDB might be better suited for this project than SQL.
                    </p>
                  </div>
                </div>
              <br />
              <br />


              <h4>AI language processing</h4>
              <p>We use Watson's Speech to Text as the client's request. Also, we use Watson's assistant to give the user the option of getting more details about the specific area(by keyword detection). For AI processing, we choose to use the IBM cloud.</p>
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

              <p>[1]B. Poetker, &ldquo;A Brief History of Augmented Reality (+Future Trends &amp; Impact),&rdquo; G2.com, 2019. [Online]. Available: https://learn.g2.com/history-of-augmented-reality.<br><br>
                [2]Blippar, &ldquo;Infographic: History of Augmented Reality - Blog - Blippar,&rdquo; Blippar, 2018. [Online]. Available: https://www.blippar.com/blog/2018/06/08/history-augmented-reality. [Accessed: 28-Mar-2020].<br><br>
                [3]B. Hofheimer, &ldquo;Virtual Yellow 1st and Ten line debuted on ESPN 15 years ago today,&rdquo; ESPN Front Row, 27-Sep-2013. [Online]. Available: https://www.espnfrontrow.com/2013/09/virtual-yellow-1st-and-ten-line-debuted-on-espn-15-years-ago-today/. [Accessed: 28-Mar-2020].<br><br>
                [4]jonas, &ldquo;Augmented Business Card,&rdquo; Vimeo, 01-Jan-2009. [Online]. Available: https://vimeo.com/5651466. [Accessed: 28-Mar-2020].<br><br>
                [5]J. Share, &ldquo;Top 10 Coolest-Looking Augmented Reality Business Card Designs,&rdquo; JobMob, 17-Feb-2010. [Online]. Available: https://jobmob.co.il/blog/augmented-reality-business-card-designs/. [Accessed: 28-Mar-2020].<br><br>
                [6]M. N. Billinghurst and A. Henrysson, &ldquo;Research Directions in Handheld AR,&rdquo; International Journal of Virtual Reality, vol. 5, no. 2, pp. 51&ndash;58, Jan. 2006.<br><br>
                [7]Poplar, &ldquo;AR Campaigns On Demand,&rdquo; Poplar. [Online]. Available: https://poplar.studio/. [Accessed: 28-Mar-2020].<br><br>
                [8]Aircards, &ldquo;Aircards - App-less Augmented Reality Marketing,&rdquo; www.aircards.co. [Online]. Available: https://www.aircards.co/. [Accessed: 28-Mar-2020].<br><br>
                [9]&ldquo;Vuforia - Engine,&rdquo; Vuforia.com, 2020. [Online]. Available: https://engine.vuforia.com/engine.<br><br>
                [10]&ldquo;What is the best game engine: is Unreal Engine right for you?,&rdquo; Games Industry, 19-Jan-2020.<br>
                &#8204;</p>
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
    margin: 30px 0;
    width: 90%;
  }

  .margin{
    margin: 30px 0;
  }

  h4{
    text-align: center;
    /*padding-left: 30px;*/

  }

</style>