<template>
  <div>
    <section class="hero-section" data-scroll-index="0">
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col-lg-7 col-md-10 col-sm-12">
            <img src="images/logos.png" alt="logo image" style="max-width: 300px;padding-bottom: 20px">
            <h1 class="hero-section-title wow fadeInUp" data-wow-delay="0.2s">
              IBM Augmented Reality Business Card Service
            </h1>
            <p class="hero-section-subtitle wow fadeInUp" data-wow-delay="0.3s">
              Team 13 – UCL Computer Science<br>
              Henry Zhang · Zhiwei Zhang · Jiayi Chen
            </p>
            <a href="#" class="default-outline-btn wow fadeInUp" data-wow-delay="0.4s" id="downloadBtn">Start Exploring<i class="fa fa-angle-right ml-2"></i></a>
            <a href="https://www.youtube.com/watch?v=yTHTo28hwTQ" class="default-video-btn popup-youtube wow fadeInUp" data-wow-delay="0.5s"><i class="fa fa-play"></i></a>
          </div>
          <!--// .col //-->
          <div class="col-lg-5 hero-image text-right wow fadeInRight">
            <PhoneFrame imgSrc="images/design/functionality.gif" class="img-fluid img-jump"></PhoneFrame>
          </div>
          <!--// .col //-->
        </div>
        <!--// .row //-->
      </div>
      <!--// .container //-->
      <a href="#" data-scroll-nav="1" class="down-scroll">
        <i class="fa fa-arrow-down"></i>
      </a>
      <!--// .down-scroll //-->
    </section>
    <!--// Hero Section End  //-->


    <!--//  The problem Section Start //-->
    <section class="services section-padding" data-scroll-index="1" id="services-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="section-heading">
              <h2 class="section-title">The <span>Problem</span></h2>
              <p class="section-sub-title">
                Business cards are very common during meeting and networking events, it is a quick and easy way for people to exchange their information and contacts. However, people gradually found many problems with the physical cards...
              </p>
            </div>
          </div>
          <!--// .col //-->
        </div>
        <!--// .row //-->
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-4 col-md-6 col-sm-6 services-resp-margin wow fadeInUp" data-wow-delay="0.1s">
            <div class="services-item item-shadow">
              <div class="services-icon services-blue-icon">
                <span class="mdi mdi-alert-circle"></span>
              </div>
              <div class="services-body">
                <h5>Hard to Organize</h5>
                <p>
                  People found the physical cards are hard to manage and store, they tend to lose, break or forget them, it is also very hard to find a specific card.
                </p>
              </div>
            </div>
          </div>
          <!--// .col //-->
          <div class="col-lg-4 col-md-6 col-sm-6 services-resp-margin wow fadeInUp" data-wow-delay="0.3s">
            <div class="services-item item-shadow">
              <div class="services-icon">
                <span class="mdi mdi-alert-circle"></span>
              </div>
              <div class="services-body">
                <h5>Old and Outdated</h5>
                <p>
                  Compared to today’s internet-enabled services like LinkedIn, physical business cards are no longer the first choice for businesses.
                </p>
              </div>
            </div>
          </div>
          <!--// .col //-->
          <div class="col-lg-4 col-md-6 col-sm-6 services-resp-margin wow fadeInUp" data-wow-delay="0.3s">
            <div class="services-item item-shadow">
              <div class="services-icon">
                <span class="mdi mdi-alert-circle"></span>
              </div>
              <div class="services-body">
                <h5>Limited Information</h5>
                <p>
                  With the small card and traditional designs, it is really hard for those who would like to use a business card to make themselves stand out.
                </p>
              </div>
            </div>
          </div>
          <!--// .col //-->
        </div>
        <!--// .row //-->
      </div>
      <!--// .container //-->
    </section>
    <!--// The problem Section End //-->


    <!--// Solution Section Start //-->
    <section class="about section-padding" data-scroll-index="2" id="about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 col-lg-6 wow fadeInLeft text-left" style="position: relative;">
            <PhoneFrame imgSrc="images/screenshots/WechatIMG935.jpeg" class="img-fluid img-jump" style="position: absolute;top:0px;left: 110px;" doRotate="true"></PhoneFrame>
            <div style="transform: translateX(-100px)">
            <PhoneFrame imgSrc="images/screenshots/WechatIMG928.jpeg" class="img-fluid img-jump"></PhoneFrame></div>
          </div>
          <!--// .col //-->
          <div class="col-md-7 col-lg-6 wow fadeInUp">
            <div class="about-inner">
              <span class="section-badge">Our Solution</span>
              <h3>AI-Powered Interactive AR Business card</h3>
              <p>
                With today’s advance in Augmented Reality and conversational AI technologies, we have found a way to utilize and merge these two technologies, adding a brand new experience on top of the physical business cards, providing much more information.               </p>
            </div>
            <div class="about-list">
              <ul>
                <li><i class="fa fa-check"></i>Users can simply use their phone camera to scan a QR code</li>
                <li><i class="fa fa-check"></i>A vivid 3D Avatar will be overlayed above the business card</li>
                <li><i class="fa fa-check"></i>Use natural language to ask the avatar any questions</li>
              </ul>
            </div>
<!--            <a href="#0" class="default-btn">Get Started-->
<!--              <i class="ml-2 fa fa-angle-right"></i>-->
<!--            </a>-->
          </div>
          <!--// .col //-->
        </div>
        <!--// .row //-->
      </div>
      <!--// .container //-->
    </section>
    <!--// Solution Section End //-->



    <section>
      <div class="container">
      <div class="features-row features-row-mt">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-7 col-lg-6 about-content-wrap wow fadeInLeft">
            <div class="features-inner">
              <span class="section-badge">Key Features</span>
              <h3>Voice based NPL AR Avatar</h3>
              <p>
                IBM AR Business Card enables a brand new way to share and view traditional business cards, adding another dimension to representing yourself.
              </p>
              <ul class="features-list">
                <li class="d-flex align-items-center">
                  <i class="mdi mdi-desktop-mac"></i>
                  <div class="features-box">
                    <h6>Vivid AR Avatar, Wide Selection</h6>
                    <span>Using the latest Unity Vuforia engine, you can view a vivid 3D avatar, for a choice of up to 10 avatars to select.</span>
                  </div>
                </li>
                <li class="d-flex align-items-center">
                  <i class="mdi mdi-ruler-square"></i>
                  <div class="features-box">
                    <h6>AI-Powered NPL Conversations</h6>
                    <span>With IBM Watson powered Natural Language Processing, you can directly speak and ask any question to the 3D Avatar, and get a realistic reply instantly.</span>
                  </div>
                </li>
                <li class="d-flex align-items-center">
                  <i class="mdi mdi-face-agent"></i>
                  <div class="features-box">
                    <h6>Automatic Contact Opener</h6>
                    <span>Want to contact the card owner? That's what business cards are used for. Simply ask for email or phone number, the app will automatically open for you!</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--// .col //-->
          <div class="col-md-5 col-lg-5 text-center features-image-order features-image-resp wow slideInRight">
            <div class="features-circle"></div>
            <div class="feature-image-wrap wow zoomIn" data-wow-delay="0.8s">
              <PhoneFrame imgSrc="images/screenshots/WechatIMG530.jpeg" class="img-fluid img-jump"></PhoneFrame>
            </div>
          </div>
          <!--// .col //-->
        </div>
        <!--// .row //-->
      </div>

<!--        ROW 2-->

        <div class="features-row features-row-mt">
          <div class="row align-items-center justify-content-between">
            <div class="col-md-5 col-lg-5 text-center features-image-order features-image-resp wow slideInLeft">
              <div class="features-circle"></div>
              <div class="feature-image-wrap wow zoomIn" data-wow-delay="0.8s">
                <PhoneFrame imgSrc="images/screenshots/WechatIMG930.jpeg" class="img-fluid img-jump"></PhoneFrame>
              </div>
            </div>
            <!--// .col //-->
            <div class="col-md-7 col-lg-6 about-content-wrap wow fadeInRight">
              <div class="features-inner">
                <span class="section-badge">Key Features</span>
                <h3>Fully Open, Fully Costumizable</h3>
                <p>
                  Any one can register their own AR Business Card, securely and easily, powered by our strong Node.js backend server.
                </p>
                <ul class="features-list">
                  <li class="d-flex align-items-center">
                    <i class="mdi mdi-desktop-mac"></i>
                    <div class="features-box">
                      <h6>Open Registration, Secure Authentications</h6>
                      <span>Anyone can register and create their own profile, we uses JWT token authentication, ensures data safety. User can even choose to logout all to disable all current logins.</span>
                    </div>
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="mdi mdi-ruler-square"></i>
                    <div class="features-box">
                      <h6>QR Code Generator</h6>
                      <span>User can easily export their unique QR code linked to their AR card profile from the app, to share it with friend or print it on their physical business card.</span>
                    </div>
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="mdi mdi-face-agent"></i>
                    <div class="features-box">
                      <h6>History and Favourite Card List</h6>
                      <span>The app will store every history card the user had viewed, and sync it safely in the cloud. Users can also set a card as favourite and view them as a list anytime anywhere.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!--// .col //-->
          </div>
          <!--// .row //-->
        </div>
      </div>
    </section>

    <!-- key features -->
    <section class="section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h3 class="section-title">Key features</h3>
          </div>
          <div class="col-lg-6 col-md-6 mb-80">
            <div class="d-flex">
              <div class="mr-lg-5 mr-3"></div>
              <div>
                <h4>AR avatar</h4>
                <p
                  class="mb-0 text-light"
                >view and share business cards using AI-powered interactive 3D AR avatar</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 mb-80">
            <div class="d-flex">
              <div class="mr-lg-5 mr-3"></div>
              <div>
                <h4>History and favorite</h4>
                <p class="mb-0 text-light">can view scan history and list of favorite cards</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 mb-80">
            <div class="d-flex">
              <div class="mr-lg-5 mr-3"></div>
              <div>
                <h4>Update details</h4>
                <p
                  class="mb-0 text-light"
                >can update personal details directly using app and website</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 mb-80">
            <div class="d-flex">
              <div class="mr-lg-5 mr-3"></div>
              <div>
                <h4>Watson Assistant and Watson Speech to Text</h4>
                <p
                  class="mb-0 text-light"
                >users can use natural language to ask the avatar anything they want to know about the card owner</p>
              </div>
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
    <!-- /key features -->

    <!-- Intoduction video-->
    <!--    <section class="section">-->
    <!--        <div class="container">-->
    <!--            <div class ="row">-->
    <!--                <div class="col-lg-10 mx-auto text-center">-->
    <!--                    <h3 class="section-title">Introduction video</h3>-->
    <!--                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/r3GGV2TG_vw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </section>-->
    <!-- /Introduction video-->
    <!-- development team -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h3 class="section-title">Development team</h3>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="card hover-shadow shadow">
              <div class="card-body text-center px-4 py-5">
                <i class="ti-palette icon mb-5 d-inline-block"></i>
                <h4 class="mb-4">John Zhang</h4>
                <p>UI designer, Programmer</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="card hover-shadow shadow">
              <div class="card-body text-center px-4 py-5">
                <i class="ti-vector icon mb-5 d-inline-block"></i>
                <h4 class="mb-4">Henry Zhang</h4>
                <p>Team Leader, Programmer</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="card hover-shadow shadow">
              <div class="card-body text-center px-4 py-5">
                <i class="ti-panel icon mb-5 d-inline-block"></i>
                <h4 class="mb-4">Jiayi Chen</h4>
                <p>UI designer, Researcher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /development team -->




  </div>
</template>

<script>
  import PhoneFrame from '../components/PhoneFrame.vue'
  export default {
    name: "home",
    components: {
      PhoneFrame
    }
  };
</script>

<style scoped>
</style>