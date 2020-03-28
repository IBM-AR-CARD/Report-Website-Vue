<template>
    <div>
    <PageTitle title="Human Computer Interaction"></PageTitle>
        <!-- design principle-->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-center">
                        <h3 class="section-title">Design principles</h3>
                    </div>
                    <div class="bg-gray p-5 mb-4">
                        <div class="media border-bottom py-4">
                            <div class="media-body">
                                <h4 class="mt-0">Visibility</h4>
                                <p>Considering our primary users and potential user, we design a simple and straightforward interface. Also, we choose blue hue in both application and website, it fit out theme Based on that, we use simple icons to represent the main features.</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-5 mb-4">
                        <div class="media-body">
                            <h4 class="mt-0">Feedback</h4>
                            <p>Users are always unsure whether their business card was recognized or is the system working. The progress indicator is essential. For instance, when the camera scans a card.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-gray p-5 mb-4">
                    <div class="media border-bottom py-4">
                        <div class="media-body">
                            <h4 class="mt-0">Affordance</h4>
                            <p>The new user may not know what they should do when they first use the application. Hence we design lots of indicators in the app. For example, when we open the app, the app will notice that'scan a card to begin' and 'point the camera to the QR code on the business card.' Also, when the user finishes scanning, the app will show 'flip your card and scan the image to view the avatar' to make sure the user can see the AR avatar.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-5 mb-4">
                    <div class="media-body">
                        <h4 class="mt-0">Mapping</h4>
                        <p>All pages have clear icons and simple instructors to notice user where he/she are and what they can do.</p>
                    </div>
                </div>
                <div class="bg-gray p-5 mb-4">
                    <div class="media border-bottom py-4">
                        <div class="media-body">
                            <h4 class="mt-0">Consistency</h4>
                            <p>we use a similar layout and the same hue on all pages. The menu and the icon we used to represent each feature is the same.</p>
                        </div>
                    </div>
                </div>

            </div>
    </section>
    <!--/ Design principles-->

    <!-- hand drawn sketches-->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title">Hand-drawn sketches</h3>
                    <img src="images/sketches/1.png" class="img-responsive" style= "width: 90%;">
                    <img src="images/sketches/2.png" class="img-responsive" style= "width: 90%;">
                    <img src="images/sketches/3.png" class="img-responsive" style= "width: 50%;">

                </div>
            </div>
        </div>
    </section>
    <!-- /head drawn sketch -->

    <!-- prototype-->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title">Prototype</h3>

                    <carousel perPage="3" navigationEnabled="true">
                        <slide>
                            <img src="images/prototype/1.png" class="img-responsive slideImg item-shadow">
                        </slide>
                        <slide>
                            <img src="images/prototype/2.png" class="img-responsive slideImg item-shadow">
                        </slide>
                        <slide>
                            <img src="images/prototype/3.png" class="img-responsive slideImg item-shadow">
                        </slide>
                        <slide>
                            <img src="images/prototype/favourite.png" class="img-responsive slideImg item-shadow">
                        </slide>
                        <slide>
                            <img src="images/prototype/history.png" class="img-responsive slideImg item-shadow">
                        </slide>
                        <slide>
                            <img src="images/prototype/profile.png" class="img-responsive slideImg item-shadow">
                        </slide>
                    </carousel>
                    <!--// .screenshots-slider-wrap //-->
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