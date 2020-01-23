<template>
    <div>
    <!-- title area -->
    <section class="hero-area bg-primary" id="parallax">
        <div class="container">
            <div class="row">
                <div class="col-lg-11 mx-auto">
                    <h1 class="text-white font-tertiary">ARGUMENTED REALITY<br>BUSINESS CARD SERVICE</h1>
                    <h4 class="text-white font-tertiary">TEAM 13</h4>>
                </div>
            </div>
        </div>

    </section>
    <!-- /title area -->

    <!-- abstract -->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title">Abstract</h3>
                    <p class="font-secondary paragraph-lg text-dark text-left">Business cards is very common and popular in all kinds of situations. People receive and send many business cards during events like networking. However, they are not easy to manage, people tends to lose the physical cards, and it is very limited for others to extract useful information about the owner. The typical business card is also not attractive and unique enough to get other people's attention.
                        <br><br>
                        Our project provides android and web application service for people to view and share business cards using AI-powered interactive 3D AR avatar. Users can simply scan a QR code on the physical business card to trigger the AR avatar using Android app, which will introduce itself using Watson Speech to Text and give a 10-second overview of the owner of the card. The user (the one who scans the QR code) can just speak using natural language to ask the avatar what details they want to know about the owner of the card, even creating interactive dialogs. User can store the card and avatar into their favourite card list for easy searching. The business card will also get stored in their history instantly when they scan the QR code.
                        <br><br>
                        User can make their own AR business card either in the app or in our web user dashboard. They can update their card details, design their own 3D AR avatar and easily view scan history and list of favourite cards everywhere without the app.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- /abstract -->

    <!-- key features -->
    <section class="section position-relative">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h3 class="section-title">Key features</h3>
                </div>
                <div class="col-lg-6 col-md-6 mb-80">
                    <div class="d-flex">
                        <div class="mr-lg-5 mr-3">
                        </div>
                        <div>
                            <h4>AR avatar</h4>
                            <p class="mb-0 text-light">view and share business cards using AI-powered interactive 3D AR avatar</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 mb-80">
                    <div class="d-flex">
                        <div class="mr-lg-5 mr-3">
                        </div>
                        <div>
                            <h4>History and favorite</h4>
                            <p class="mb-0 text-light">can view scan history and list of favorite cards</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 mb-80">
                    <div class="d-flex">
                        <div class="mr-lg-5 mr-3">
                        </div>
                        <div>
                            <h4>Update details </h4>
                            <p class="mb-0 text-light">can update personal details directly using app and website</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 mb-80">
                    <div class="d-flex">
                        <div class="mr-lg-5 mr-3">
                        </div>
                        <div>
                            <h4>Watson Assistant and Watson Speech to Text</h4>
                            <p class="mb-0 text-light">users can use natural language to ask the avatar anything they want to know about the card owner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- bg image -->
        <img class="img-fluid edu-bg-image w-100" src="images/backgrounds/education-bg.png" alt="bg-image">
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
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>