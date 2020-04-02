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
                        <img src="images/testing/1.png" class="img-responsive item-shadow" style= "width: 100%;">
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
                        <h3 class="section-title">Compatibility Testing</h3>
                        <p>To check whether the application is capable of running on different devices, operating system or software,
                            We tested our Android application to make sure that it works in different Android System and different Android devices.
                            We have found the app working ok on all of our available Android 9+ devices. If the department could provide more devices we can expand our testing range.
                            <br><br>
                            For website application, we tested it on three browsers across three operating systems by "BrowserStack" - which is a compatibility testing and responsive testing platform for website application and mobile application. The result shows that the web application is compatible with all browsers that are ES5-compliant.
                        </p><br><br>
                        Here are some screenshots about testing stage.
                        <img src="images/testing/2.png" class="img-responsive item-shadow" style= "width: 100%;">
                        Firefox73 in Windows 10
                        <img src="images/testing/3.png" class="img-responsive item-shadow" style= "width: 100%;">
                        Google Chrome 82 in Windows 10
                        <br><br>
                        <p>The test result shows that there is no major display problem with different browsers and different operating systems.</p>
                    </div>
                </div>
            </div>
        </section>


        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-left">
                        <h3 class="section-title"><span>Responsive</span>Design Testing</h3>
                        <p>For responsive design testing, we can use Chrome developer tools to test this
                            on different screen sizes in both mobile devices and PC.  Our website application has passed all tests with different screen sizes.
                            Here are some screenshots when we tested our website application in different sizes.
                        </p>
                        <img src="images/testing/4.png" class="img-responsive item-shadow" style= "width: 100%;">
                        <img src="images/testing/5.png" class="img-responsive item-shadow" style= "width: 100%;">
                        <img src="images/testing/6.png" class="img-responsive item-shadow" style= "width: 100%;">
                        <img src="images/testing/7.png" class="img-responsive item-shadow" style= "width: 100%;">
                        <img src="images/testing/8.png" class="img-responsive item-shadow" style= "width: 100%;">
                        <img src="images/testing/9.png" class="img-responsive item-shadow" style= "width: 100%;">
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
    img{
        margin: 30px 0;
    }
</style>