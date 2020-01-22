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
                        Based on our research, there is no existing application or website, which has the same functionality as us, has been implemented.<br><br>
                        Several related projects focus on designing unique AR business cards for their clients. They can see the AR image using the smartphone camera app. However, there is no app could manage card they receive and change user's information by themselves
                        </p>
                        <br><br>
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
                        <br><br>
                        <p>
                        Both of the example companies design the production of AR  for their clients. Clients enter the personal information and the old business card image to customize their AR business cards. The company will update the AR business card image for adding AR technology.  Then the client can print directly. [1][2]
                        <br><br>
                        The similarity of our projects and the example product is that both of us use AR technology in the business card. But they focus on the AR experience and the appearance of the business card, and we are concentrated on making the user's life more convenient.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- bg image -->
        <img class="img-fluid edu-bg-image w-100" src="images/backgrounds/education-bg.png" alt="bg-image">
    </section>
    <!-- /Related projects-->


    <!-- Reference  -->
    <section class="section position-relative">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title">Reference</h3>
                    <div class="text-left">
                        <p>
                            [1] Aircards.co. (2020). Augmented Reality Business Cards - Aircards. [online] Available at: https://www.aircards.co/augmented-reality-business-cards [Accessed 21 Jan. 2020].
                            <br>
                            [2] Poplar. (2020). Get your own AR business card. [online] Available at: https://poplar.studio/business-cards/ [Accessed 21 Jan. 2020].
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
    import PageTitle from '../components/PageTitle.vue'
    export default {
        name: "research",
        components: {
            PageTitle
        }
    }
</script>

<style scoped>

</style>