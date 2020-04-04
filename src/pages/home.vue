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
            <a href="#" class="default-outline-btn wow fadeInUp" data-scroll-nav="1" data-wow-delay="0.5s" id="downloadBtn">Start Exploring<i class="fa fa-angle-right ml-2"></i></a>
            <a href="https://www.youtube.com/watch?v=yTHTo28hwTQ" class="default-video-btn popup-youtube wow fadeInUp" data-wow-delay="0.5s"><i class="fa fa-play"></i></a>
          </div>
          <!--// .col //-->
          <div class="col-lg-5 hero-image text-right wow fadeInRight">
            <PhoneFrame imgSrc="images/main.gif" class="img-fluid img-jump"></PhoneFrame>
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
            <PhoneFrame imgSrc="images/screenshots/WechatIMG935.jpeg" class="img-fluid img-jump" style="position: absolute;top:0px;left: 110px;" :doRotate=true></PhoneFrame>
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
              <h3>Voice based NLP AR Avatar</h3>
              <p>
                IBM AR Business Card enables a brand new way to share and view traditional business cards, adding another dimension to representing yourself.
              </p>
              <ul class="features-list">
                <li class="d-flex align-items-center">
                  <i class="mdi mdi-account-box-multiple"></i>
                  <div class="features-box">
                    <h6>Vivid AR Avatar, Wide Selection</h6>
                    <span>Using the latest Unity Vuforia engine, you can view a vivid 3D avatar, for a choice of up to 10 avatars to select.</span>
                  </div>
                </li>
                <li class="d-flex align-items-center">
                  <i class="mdi mdi-translate"></i>
                  <div class="features-box">
                    <h6>AI-Powered NLP Conversations</h6>
                    <span>With IBM Watson powered Natural Language Processing, you can directly speak and ask any question to the 3D Avatar, and get a realistic reply instantly.</span>
                  </div>
                </li>
                <li class="d-flex align-items-center">
                  <i class="mdi mdi-email"></i>
                  <div class="features-box">
                    <h6>Automatic Contact Switcher</h6>
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
              <PhoneFrame imgSrc='images/design/implementation/flutter/new10.jpeg' class="img-fluid img-jump"></PhoneFrame>
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
                <PhoneFrame imgSrc='images/design/implementation/flutter/new13.jpeg' class="img-fluid img-jump"></PhoneFrame>
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
                    <i class="mdi mdi-account-lock"></i>
                    <div class="features-box">
                      <h6>Open Registration, Secure Authentications</h6>
                      <span>Anyone can register and create their own profile, we uses JWT token authentication, ensures data safety. User can even choose to logout all to disable all current logins.</span>
                    </div>
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="mdi mdi-qrcode-scan"></i>
                    <div class="features-box">
                      <h6>QR Code Generator</h6>
                      <span>User can easily export their unique QR code linked to their AR card profile from the app, to share it with friend or print it on their physical business card.</span>
                    </div>
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="mdi mdi-format-list-bulleted"></i>
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


    <!--// video Section Start //-->
    <section id="how-it-works" class="how-it-works-section jarallax bg-gradient-green section-padding" data-jarallax data-speed="0.3s" style="margin-top: 60px;background: #0033CC;">
      <div class="jarallax-img how-it-works-bg"></div>
      <div class="container">
        <!--// .row //-->
        <div class="row justify-content-center align-items-center how-it-work-wrap">
          <div class="col-lg-7 col-md-10 col-sm-12">
            <div class="how-it-works-inner text-center">
              <h3 class="text-white">Video Introduction</h3>
              <p>
                Vue.js Web Console, IBM Watson Assistant, MongoDB database, would like to learn more? Wonder how it work in action? Watch our video below.
              </p>
              <div class="how-it-work-video">
                <img src="images/bg/how-it-work-image.png" alt="How it work image" class="img-fluid">
                <a href="https://www.youtube.com/watch?v=yTHTo28hwTQ" class="how-it-works-video-btn popup-youtube"><i class="mdi mdi-play"></i></a>
              </div>
            </div>
          </div>
          <!--// .col //-->
        </div>
        <!--// .row //-->
        <div class="how-it-work-process">
          <div class="row text-center">
            <div class="col-lg-3 col-md-6 col-sm-6 how-it-work-item">
              <div class="how-it-work-number">
                <a><span>01</span></a>
              </div>
              <h6>Team and Background Introduction</h6>
              <div class="how-it-work-text">
<!--                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>-->
              </div>
            </div>
            <!--// .col //-->
            <div class="col-lg-3 col-md-6 col-sm-6 how-it-work-item">
              <div class="how-it-work-number">
                <a><span>02</span></a>
              </div>
              <h6>Technical Overview</h6>
              <div class="how-it-work-text">
<!--                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>-->
              </div>
            </div>
            <!--// .col //-->
            <div class="col-lg-3 col-md-6 col-sm-6 how-it-work-item">
              <div class="how-it-work-number">
                <a><span>03</span></a>
              </div>
              <h6>Demonstration and Code Review</h6>
              <div class="how-it-work-text">
<!--                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>-->
              </div>
            </div>
            <!--// .col //-->
            <div class="col-lg-3 col-md-6 col-sm-6 how-it-work-item">
              <div class="how-it-work-number">
                <a><span>04</span></a>
              </div>
              <h6>Achievements and Summaries</h6>
              <div class="how-it-work-text">
<!--                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>-->
              </div>
            </div>
            <!--// .col //-->
          </div>
          <!--// .row //-->
        </div>
      </div>
      <!--// .container //-->
    </section>
    <!--// video Section End //-->

    <!--// Our Team Section Start //-->
    <section class="our-team-section section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="section-heading">
              <h2 class="section-title">Meet Our<span>Team</span></h2>
              <p class="section-sub-title">
              </p>
            </div>
          </div>
          <!--// .col //-->
        </div>
        <!--// .row //-->
        <div class="row">
          <div class="col-md-4 col-sm-12 text-center team-card-margin wow fadeInLeft" data-wow-delay="0.2s">
            <div class="team-card item-shadow">
              <div class="team-img">
                <img src="images/bg/zzh.png" alt="Team image" class="img-fluid">
                <ul class="team-social">
                  <li><a href="https://github.com/henryz00"><i class="fab fa-github"></i></a></li>
<!--                  <li><a href="mailto:henryzhang9802@gmail.com"><i class="fab fa-envelope"></i></a></li>-->
                </ul>
              </div>
              <div class="team-card-content">
                <h5 class="title">Henry Zhang</h5>
                <div class="email"><a href="mailto:henry.zhang.18@ucl.ac.uk">henry.zhang.18@ucl.ac.uk</a></div>
                <span class="desc">Team Leader</span>&nbsp;
                <span class="desc">Designer, Developer</span>
              </div>
            </div>
          </div>
          <!--// .col //-->
          <div class="col-md-4 col-sm-12 text-center team-card-margin wow fadeInUp" data-wow-delay="0.4s">
            <div class="team-card item-shadow">
              <div class="team-img">
                <img src="images/bg/zzw.jpeg" alt="Team image" class="img-fluid">
                <ul class="team-social">
                  <li><a href="https://github.com/KZHIWEI"><i class="fab fa-github"></i></a></li>
                </ul>
              </div>
              <div class="team-card-content">
                <h5 class="title">John Zhang</h5>
                <div class="email"><a href="mailto:1010482029@qq.com">1010482029@qq.com</a></div>
                <span class="desc">UI designer</span>&nbsp;
                <span class="desc">Developer</span>
              </div>
            </div>
          </div>
          <!--// .col //-->
          <div class="col-md-4 col-sm-12 text-center team-card-margin wow fadeInDown" data-wow-delay="0.6s">
            <div class="team-card item-shadow">
              <div class="team-img">
                <img src="images/bg/cjy.jpeg" alt="Team image" class="img-fluid">
                <ul class="team-social">
                  <li><a href="https://github.com/jychen1002"><i class="fab fa-github"></i></a></li>
                </ul>
              </div>
              <div class="team-card-content">
                <h5 class="title">Jiayi Chen</h5>
                <div class="email"><a href="mailto:maggiechen201002@gmail.com">maggiechen201002@gmail.com</a></div>
                <span class="desc">UI designer</span>&nbsp;
                <span class="desc">Researcher</span>
              </div>
            </div>
          </div>
          <!--// .col //-->
        </div>
        <!--// .row //-->
      </div>
      <!--// .container //-->
    </section>
    <!--// Our Team Section End //-->


    <!--// Download Section Start //-->
    <section class="testimonial-section-bg download-wrap section-padding">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6 download-image wow slideInLeft">
            <img src="images/logo.png" style="max-width: 90%" class="img-fluid">
          </div>
          <!--// .col //-->
          <div class="col-lg-6 col-md-12 col-sm-11 col-xs-12 wow fadeInUp" data-wow-delay="0.3s">
            <div class="download-section-inner">
              <h2>Download Now</h2>
              <p>For user manual, test users and how to get started, click "Go to Download" below.</p>
              <div class="download-buttons d-flex justify-content-start">
                <a href="#/appendix" class="download-btn">
                  <i class="fa fa-external-link-alt"></i>
                  <span>Go to</span>
                  <span>Download</span>
                </a>
                <a href="http://ar-card.henryz.cc/app" target="_blank" class="download-btn">
                  <i class="fa fa-tachometer-alt"></i>
                  <span>Launch</span>
                  <span>Dashboard</span>
                </a>
              </div>
            </div>
          </div>
          <!--// .col //-->
        </div>
        <!--// .row //-->
      </div>
      <!--// .container //-->
    </section>
    <!--// Download Section End //-->


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
  .email{
    padding-bottom: 20px;
  }
</style>