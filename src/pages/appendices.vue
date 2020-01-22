<template>
    <div>
        <PageTitle title="Appendices"></PageTitle>
        <!-- Deploy manual-->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto">
                        <h3 class="section-title">To start the demo...</h3>
                        <p> 1. Download and install our application. You will have to enable internet and microphone permission for the application.<br>
                            <br>2. You can now use our application.
                        </p>
                    </div>

                    <div class="col-lg-10 mx-auto" style="padding-top: 50px;">
                        <h3 class="section-title">Interface instruction</h3>
                        <h4>Android application</h4>
                        <p><br>
                            Users can scan the QR code on the business card using our application. Once the application is opened, the camera is opened directly.<br><br>

                            If the User slides right, the application presents the list of scan history and favorite cards. Users can search for keywords for the list of business cards.<br><br>

                            If the user slide left, the application presents the setting page of the account. Users can change personal information directly.<br>

                        </p>
                    </div>

                </div>
                <!-- bg image -->
                <img class="img-fluid edu-bg-image w-100" src="images/backgrounds/education-bg.png" alt="bg-image">
            </div>
        </section>
        <!-- /Deploy manual-->
    </div>
</template>

<script>
    import PageTitle from '../components/PageTitle.vue'
    export default {
        name: "appendices",
        components: {
            PageTitle
        }
    }
</script>

<style scoped>

</style>