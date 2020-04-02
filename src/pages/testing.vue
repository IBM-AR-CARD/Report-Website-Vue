<template>
    <div>
        <PageTitle title="Testing"></PageTitle>

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-left">
                        <h3 class="section-title">Testing<span>Strategy</span></h3>
                        <p>To make sure that our applications worked as expected, we have tried our best to test the app in limited time.
                            We first carried out manual testing to check that the frontend shown as expected with dummy data and backend worked well.
                            Then we tested the integration between Unity application and flutter frontend application, backend and IBM Watson, backend
                            and database by integration testing. Meanwhile, integration testing is used to test the integration connecting frontend and
                            backend API. Then we used compatibility testing for the website and android app. After that, we tested our website for responsive
                            design testing. Performance testing is highly essential for the whole project. Lastly, we found several testers to experience our
                            app and gave us feedback, which is shown below.</p>
                        <br><br>
                        <h6>Unit Testing</h6>
                        <p>Unit testing in an unity and flutter integrated app is very challenging, however we tested every individual part of application during the development process to make sure the unit testing is correctly coded and carries out the intended functionalities.
                            <br><br><b>Features we tested in android application</b>
                            <br>1.	scan function
                            <br>2.	search feature in the history page and favorite page
                            <br><br><b>Features we tested in website application</b>
                            <br>1.	search feature in the history page and favorite page
                            <br>2.	redirect the web page successful with a specific username
                            <br><br><b>Features we tested in backend application</b>
                            <br>1.	get request
                            <br>2.	push request
                            <br>3.	auth function(including login and logout)
                            <br>4.	file upload
                        </p>
                        <br><br>
                        <h6>Integration Testing</h6>
                        <p>
                        Integration testing is to test how parts of the system work together.<br><br>
                        At this stage, we focus on verifying the following separate systems work together.<br><br>


                        1.Unity 3D application and Flutter mobile application<br>
                        2.backend and IBM Watson<br>
                        3.backend and database<br>
                        4.frontend and backend API<br><br>


                        We tested most of those cases manually. This is because, firstly, automated testing for them is hard to find. Secondly, we could see whether the test passes directly using dummy data.
                        For testing the backend API endpoint, we use Postman - simple, secure and collaborative automated testing for API to check if we get the right response from GET/PUSH request.
                        The image is the example when we use Postman to testing API endpoints.
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-left">
                        <h3 class="section-title"><span>Responsive</span>Design Testing</h3>
                        <p>PLACEHOLDER</p>
                    </div>
                </div>
            </div>
        </section>


        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-left">
                        <h3 class="section-title">Performance &<span>Stress</span>Testing</h3>
                        <p>PLACEHOLDER</p>
                    </div>
                </div>
            </div>
        </section>


        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-left">
                        <h3 class="section-title">User Acceptance Testing</h3>
                        <p>PLACEHOLDER</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import PageTitle from '../components/PageTitle.vue'
    export default {
        name: "plan",
        components: {
            PageTitle
        }
    }
</script>

<style scoped>

</style>