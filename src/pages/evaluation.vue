<template>
    <div>
        <PageTitle title="Evaluation"></PageTitle>
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-center">
                        <h3 class="section-title">Achievement Table</h3>
                    </div>
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col" style="width: 5%;">ID</th>
                            <th scope="col">Requirement</th>
                            <th scope="col">Priority</th>
                            <th scope="col">State</th>
                            <th scope="col">Contributors</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Android application that can scan QR code on the business card and 'projects' an AR avatar onto a business card.</td>
                            <td>Must</td>
                            <td>✅</td>
                            <td>Henry, John</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>The AR avatar can announce itself using Watson Speech to Text and give a 10-second overview of the owner of the card.</td>
                            <td>Must</td>
                            <td>✅</td>
                            <td>John</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Search feature in the history page and favorite page</td>
                           <td>Must</td>
                            <td>❌</td>
                            <td>John, Jiayi</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>User(the one who scan the QR code) can start a conversion with the user(the owner of the card) directly using android phone.</td>
                            <td>Must</td>
                            <td>✅</td>
                            <td>John</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>The AR avatar can respond to different questions the user asks</td>
                            <td>Must</td>
                            <td>✅</td>
                            <td>Henry, John</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>The AR avatar can offer the user the option of setting the card as favorite.</td>
                            <td>Must</td>
                            <td>❌</td>
                            <td>Henry, John</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>The Android application and web can see the list of business cards that users set it as favorite.</td>
                            <td>Must</td>
                            <td>❌</td>
                            <td>Jiayi, John</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>The Android application and web can see the list of business cards that the user has already scanned</td>
                            <td>Should</td>
                            <td>✅</td>
                            <td>Henry, John</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>Web service that allows app users to update their card details add additional information such as avatar information and set schedules for the card details to change.</td>
                            <td>Should</td>
                            <td>❌</td>
                            <td>Henry, John</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Cloud service that enables generated cards and to have cards that can evolve as a person's CV does over time</td>
                            <td>Should</td>
                            <td>❌</td>
                            <td>Henry</td>
                        </tr>
                        <tr>
                            <th scope="row">11</th>
                            <td>User(the one who is viewing the AR) can see the personal information about the owner of card directly in the app and website.</td>
                            <td>Could</td>
                            <td>❌</td>
                            <td>Jiayi, John</td>
                        </tr>
                        <tr>
                            <th scope="row">12</th>
                            <td>The 10-second overview of the owner of the card can be recorded by the user on the website. User can set which voice they want AR avatar use(Watson Speech to text or user’s voice)</td>
                            <td>Could</td>
                            <td>❌</td>
                            <td>Henry</td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="2">Key functionalities</th>
                            <td colspan="3">70% completed</td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="2">Optional functionalities</th>
                            <td colspan="3">60% completed</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>


        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-center">
                        <h3 class="section-title">Known<span>Bugs</span></h3>
                    </div>
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col" style="width: 2%;">ID</th>
                            <th scope="col">Description</th>
                            <th scope="col">Priority</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Screen will blink when change unity status</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Timeout function does not work as expect cause internet request loading forever</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Speech recognizer crash for no reason</td>
                            <td>Very High</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>When dialog pop to upper page it will pop multiple times</td>
                            <td>Low</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Unity cannot run in background</td>
                            <td>Medium</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-center">
                        <h3 class="section-title">Individual Contribution Table</h3>
                    </div>
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Work packages</th>
                            <th scope="col">Henry Zhang</th>
                            <th scope="col">John Zhang</th>
                            <th scope="col">Jiayi Chen</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Project Partners liaison</th>
                            <td>50%</td>
                            <td>25%</td>
                            <td>25%</td>
                        </tr>
                        <tr>
                            <th scope="row">Requirement analysis</th>
                            <td>33%</td>
                            <td>33%</td>
                            <td>33%</td>
                        </tr>
                        <tr>
                            <th scope="row">UI Design</th>
                            <td>33%</td>
                            <td>33%</td>
                            <td>33%</td>
                        </tr>
                        <tr>
                            <th scope="row">Research and Experiments</th>
                            <td>33%</td>
                            <td>33%</td>
                            <td>33%</td>
                        </tr>
                        <tr>
                            <th scope="row">Programming</th>
                            <td>30%</td>
                            <td>35%</td>
                            <td>25%</td>
                        </tr>
                        <tr>
                            <th scope="row">Bi-weekly Reports</th>
                            <td>33%</td>
                            <td>33%</td>
                            <td>33%</td>
                        </tr>
                        <tr>
                            <th scope="row">Report Website</th>
                            <td>35%</td>
                            <td>30%</td>
                            <td>35%</td>
                        </tr>
                        <tr>
                            <th scope="row">Video Editing</th>
                            <td>50%</td>
                            <td>25%</td>
                            <td>25%</td>
                        </tr>
                        <tr>
                            <th scope="row">Overall Contribution</th>
                            <td>33%</td>
                            <td>33%</td>
                            <td>33%</td>
                        </tr>
                        <tr>
                            <th scope="row">Main Roles</th>
                            <td>Project Partner liaison, UI designer, researcher, programmer, report editor</td>
                            <td>UI designer, researcher, programmer, report editor</td>
                            <td>UI designer, researcher, report editor, tester</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>


        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-left">
                        <h3 class="section-title">Critical<span>Evaluation</span>of the Project</h3>
                        <h4>UI / UX</h4>
                            <p>We take user experience the priority during development. To improve user experience, we take the feedback from many people such as our friends, family or even the people who are working on UI/UX design.

                                Both of our web and mobile applications are using Material Design. Material design is a design language developed by Google. Since material design has support in flutter and Vue, this reduces the difficulty of UI implementation and develop responsibly web application.

                                We also improve the feedback from interaction when using the applications, such as add progress bar when loading, customize empty state when nothing is displayed and add animation effect on transition with reasonable curves.</p>

                        <h4>Functionality</h4>
                            <p>Since the integrated Unity is not stable under the flutter framework, this could cause the programme crash irregularity. Apart from the Unity, all packages we used in the flutter is open-source and secure by the Dart team or Flutter team.

                                To make sure the functionality of each package work as expected, we always choose the package published by the programmer verified by official and widely used by many developers.</p>

                        <h4>Stability</h4>
                            <p>The mobile and web application is fully tested under black box testing and white box testing. The application may issue problems under different OS or various Android version. We will do further testing in the future.</p>

                        <h4>Efficiency</h4>
                        <h6>Mobile application</h6>
                            <p>
                                The FPS(frames per second) varies in different page, but no page is lower than 70 FPS:
                            </p>
                        <div class="col-lg-10 mx-auto text-center">
                            <div class="row">
                                <div class="col-sm text-center">
                                    <img src="images/evaluation/ar.jpg" class="img-responsive item-shadow">
                                    <h6>Unity AR Page: 72FPS average</h6>
                                </div>

                                <div class="col-sm text-center">
                                    <img src="images/evaluation/login.jpg" class="img-responsive item-shadow">
                                    <h6>Login Page: 83 Fps average</h6>
                                </div>

                                <div class="col-sm text-center">
                                    <img src="images/evaluation/mycards.jpg" class="img-responsive item-shadow">
                                    <h6>MyCards Page: 110 Fps average</h6>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-sm text-center">
                                    <img src="images/evaluation/userprofile.jpg" class="img-responsive item-shadow">
                                    <h6>Profile Page: 100 Fps average</h6>
                                </div>

                                <div class="col-sm text-center">
                                    <img src="images/evaluation/scanqr.jpg" class="img-responsive item-shadow">
                                    <h6>Scan QR Code Page: 270 Fps average</h6>
                                </div>

                                <div class="col-sm text-center">
                                </div>

                            </div>
                        </div><br><br>

                        <h6>Web application</h6>
                                <p>
                                The Fps for web application is remain at 60 Fps, may reduce to about 40 Fps when refresh data:
                                </p>
                        <img src="images/evaluation/vue.png" class="img-responsive item-shadow">

                        <h4>Compatibility</h4>
                            <p>The web application is compatible in all browsers that are ES5-compliant (IE8 and below are not supported) either running on mobile or desktop.

                                Since flutter can run both on IOS or Android, due to the Vuforia is supported on Android platform only with flutter, our mobile application is compatible with Android devices that has Jelly Bean, v16, 4.1.x or newer operating systems.

                                When Vuforia is supported by flutter_unity_widget, we will update the mobile application that can run in IOS.</p>

                        <h4>Maintainability</h4>
                            <p>The mobile application use pubspec.yml(provide by flutter) to maintain the version of each packages required to build the project.</p>

                        <h4>Project Management</h4>
                            <p>We do team meeting once per week; during the meeting, we assign the task to each one. Any problem will be mentioned during the session, and we will solve the issue together.

                                We used Trello to allocate work to each team member and used Github as the workflow during coding.

                                For the git part, we used the dev branch for developing a new feature, and the dev branch will merge into master when a minimum of two members thoroughly tests the new function.</p>

                    </div>
                </div>
            </div>
        </section>




        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-left">
                        <h3 class="section-title"><span>Future</span>Work</h3>
                        <p>We will try to rewrite the code to native language Since it is much stable and has better performance compare to flutter. But we still using flutter for developing desktop version including macOS, Linux and windows. At last, The mobile application will be released to Google store.

                            For the unity side, we will use the model which create by our self, and the user can customize their models such as height, hair colour, gender, skin or even the emotion.</p>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>

<script>
    import PageTitle from '../components/PageTitle.vue'
    export default {
        name: "achievement",
        components: {
            PageTitle
        }
    }
</script>

<style scoped>
    h4{
        margin-top: 30px;
    }
    img{
        margin: 30px 0;
        width: 100%;
    }
</style>