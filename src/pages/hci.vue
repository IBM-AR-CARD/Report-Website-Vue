<template>
    <div>
    <PageTitle title="Human Computer Interaction"></PageTitle>


    <!-- hand drawn sketches-->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title">Hand-drawn<span>Sketches</span></h3>
                    <img src="images/sketches/1.png" class="img-responsive" style= "width: 90%;">
                    <img src="images/sketches/2.png" class="img-responsive" style= "width: 90%;">
                    <img src="images/sketches/3.png" class="img-responsive" style= "width: 50%;">
                    <img src="images/sketches/6.png" class="img-responsive" style= "width: 50%;">
                    <img src="images/sketches/4.png" class="img-responsive" style= "width: 90%;">
                    <img src="images/sketches/7.png" class="img-responsive" style= "width: 90%;">
                    <img src="images/sketches/5.png" class="img-responsive" style= "width: 90%;">
                </div>
            </div>
        </div>
    </section>
    <!-- /head drawn sketch -->

        <!-- design principle-->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-center">
                        <h3 class="section-title">Design Principles</h3>
                    </div>
                    <div class="col-md-4">
                        <img
                                src="images/design/functionality.gif"
                                class="img-responsive alignright"
                                style="width: 100%;"
                        />
                    </div>

                    <div class="col-md-8">
                        <div class="bg-gray p-5 mb-4">
                            <div class="media border-bottom py-4">
                                <div class="media-body">
                                    <h4 class="mt-0">Visibility</h4>
                                <p>To make the app easy to use for our primary and potential users, we design a simple and straightforward interface. Because our main feature involves camera, we decide to use a creative layout that focuses the camera page at the centre, instead of using tab menu or hamburger menu in Material Design.
                                    This design can be found used in apps like Snapchat, Shazam, where their main function is focused in the centre, secondary functions as side pages.
                                    W use material icons in our navigation, where most people are very familiar with, this also minimises the learning curve to use the app.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-5 mb-4">
                            <div class="media-body">
                                <h4 class="mt-0">Mappings</h4>
                                <p>All pages have clear icons, title texts and simple text instructors to tell user where he/she are and what they can do next.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="bg-gray p-5 mb-4">
                    <div class="media-body">
                        <h4 class="mt-0">Feedback</h4>
                        <p>Users are always unsure whether their action is acknowledged by the application or not, for example, is the QR code scanned, is the card being tracked successfully. The app feedback is essential, this will be used throughout the app design, we will use prominent colours, that are easily distinguishable from background, and sometimes we will use animation (such as shaking) and phone vibrations to notify the user of any acknowledgement or errors.</p>
                    </div>
                </div>


                <div class="bg-white p-5 mb-4">
                    <div class="media py-4">
                        <div class="media-body">
                            <h4 class="mt-0">Affordance</h4>
                            <p>The new user may not know what they should do when they first use the application. Hence, we design many indicators in the app. For example, when we open the app, notices such as 'scan a card to begin' and 'point the camera to the QR code on the business card' are presented prominently, telling user exactly what they should do.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-gray p-5 mb-4">
                    <div class="media py-4">
                        <div class="media-body">
                            <h4 class="mt-0">Consistency</h4>
                            <p>We use a consistent layout and the same hue and design on all pages. We keep all the icons for each function the same (such as heart shape or star shape for favourite), ensures the consistency.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <!--/ Design principles-->


    <!-- prototype-->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title"><span>Mobile</span>Prototypes</h3>

                    <carousel :perPage="3" :navigationEnabled="true">
                            <slide v-for="x in 20" v-bind:key="x">
                                <img :src="'images/xd/'+x+'.png'" class="img-responsive slideImg item-shadow">
                            </slide>
                    </carousel>
                    <br><br>
                    We have designed all of our interactive prototypes in Adobe XD, designed by ourselves from the sketches. We have refined our design several times based on the requirement changes and
                    practicality considerations.
                    <!--// .screenshots-slider-wrap //-->
                </div>
            </div>
        </div>
    </section>

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-center">
                        <h3 class="section-title">Web<span>Prototypes</span></h3>

                        <carousel :perPage="1" :navigationEnabled="true">
                            <slide v-for="n in 6" v-bind:key="n">
                                <img :src="'images/xd/web'+n+'.png'" class="img-responsive slideImg item-shadow">
                            </slide>
                        </carousel>
                        <!--// .screenshots-slider-wrap //-->
                    </div>
                </div>
            </div>
        </section>


        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-center">
                        <h3 class="section-title">HCI<span>Slides</span></h3>

                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRFZbaW823W7lLG9MXn9F27Gy7DC-UNrgUWPaUbIG_sSg_v6M5nUfQtG8QGETMtRoZSCH900VSd5Jgc/embed?start=false&loop=true&delayms=60000" frameborder="0" width="100%" height="547" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

                    </div>
                </div>
            </div>
        </section>

    <!-- /prototype -->
        </div>
</template>

<script>
    import PageTitle from '../components/PageTitle.vue'
    import { Carousel, Slide } from 'vue-carousel';
    export default {
        name: "hci",
        components: {
            PageTitle,
            Carousel,
            Slide
        }
    }
</script>

<style scoped>
    .slideImg{
        max-height: 500px;
    }
</style>