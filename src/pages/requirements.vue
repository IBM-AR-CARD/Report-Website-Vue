<template>
    <div>
        <PageTitle title="Requirements"></PageTitle>
    <!-- project background-->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title">Project background</h3>
                    <p>Networking and attending social events are essential for the businessman, people are looking for jobs and HR. It is vital for them to order tons of business cards and receive a lot from others. Data from the internet shows most people are going to need at least 1000 business cards per year at a minimum. It is not very easy to manage them, find the desired card, and extract useful information. Also, when you need to update personal information on the card, the only solution is to throw all old business cards and order a new one. This is wasteful and troublesome because the new business card cannot finish printing simultaneously. Plus, the typical business card is not attractive and unique enough to get other people's attention.</p>
                    <p>To overcome these issues, our client requires an Android app with a service that runs on an Android phone system that 'projects' an AR avatar onto a business card. It should have an associated cloud service to enable generated cards and to have cards that can evolve as a person's CV does over time.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- /project background-->

    <!-- requirement gathering -->
    <section class="section position-relative">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title">Requirement gathering</h3>
                    <p>Except for the requirement about how to getting in touch with the owner of the card, other requirements from our client are full of detailed. Hence we only need to discover the feature helping the user to manage card they have already scanned and find the desired card easily. Hence we gathered requirements about that through short interviews with potential users of our applications. Finally, we decided to add a favorite page and a history page, and the user can search for keywords on each page.</p>
                    <p>For web service, we also add the same features. Based on that, we give the user the option of choosing their own AR image.</p>
                </div>
            </div>
        </div>
        <!-- bg image -->
        <img class="img-fluid edu-bg-image w-100" src="images/backgrounds/education-bg.png" alt="bg-image">
    </section>
    <!-- /requirment gathering-->


    <!-- persona -->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title">Persona</h3>
                    <img src="images/persona/image9.png" class="img-responsive" style= "width: 60%;">
                </div>
            </div>
        </div>
    </section>
    <!-- /persona-->

    <!-- project goals-->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title">Project goals</h3>
                    <p>Our goal its to develop an android app with the front-end app using flutter and the 3D AR interface using Unity. The app can scan the QR code and trigger an AR avatar. It has an associate cloud service that uses IBM Cloud to enable generated cards and to have cards that can evolve as a person's CV does over time(we decided to link the LinkedIn profile and our user account).The database we use in there is SQL. Meanwhile, there is a website that users can update their personal details shown on the business cards and choose their own AR avatar. It builds by Koa and NodeJS. Users can see the details of business cards they set as favorite, and they have already scanned by the android app.</p>

                </div>
            </div>
        </div>
    </section>
    <!-- /project goals-->

    <!-- MosCow list-->
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title">MosCow requirements list</h3>
                </div>
                <div class="bg-gray p-5 mb-4">
                    <div class="media border-bottom py-4">
                        <div class="media-body">
                            <h4 class="mt-0">MUST HAVE</h4>
                            <p>1.Android application that can scan QR code on the business card and 'projects' an AR avatar onto a business card.</p>
                            <p>2.Cloud service that enables generated cards and to have cards that can evolve as a person's CV does over time.</p>
                            <p>3.Web service that allows app users to update their card details add additional information such as avatar information and set schedules for the card details to change.</p>
                            <p>4.The AR avatar can announce itself using Watson Speech to Text and give a 10-second overview of the owner of the card.</p>
                            <p>5.The AR avatar can offer the user(the one who is viewing the AR) the option of a. Listening to a more detailed work history b.listening to interests and hobbies c.listening to a more detailed education history(this could be Donne using Watson Speech)</p>
                            <p>6.The AR avatar can offer the user the option of setting the card as favorite.</p>
                            <p>7.The Android application and web can see the list of business cards that users set it as favorite.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-5 mb-4">
                    <div class="media-body">
                        <h4 class="mt-0">SHOULD HAVE</h4>
                        <p>1.The Android application and web can see the list of business cards that the user has already scanned</p>
                        <p>2.Search feature in the history page and favorite page</p>
                        <p>3.User(the one who scan the QR code) can start a conversion with the user(the owner of the card) directly using android phone.</p>
                    </div>
                </div>
            </div>
            <div class="bg-gray p-5 mb-4">
                <div class="media border-bottom py-4">
                    <div class="media-body">
                        <h4 class="mt-0">COULD HAVE</h4>
                        <p>1.User(the one who is viewing the AR) can see the personal information about the owner of card directly in the app and website.</p>
                        <p>2.The 10-second overview of the owner of the card can be recorded by the user on the website. User can set which voice they want AR avatar use(Watson Speech to text or user’s voice)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--/ MoScow list-->

    <!--User Case Diagram-->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title">User Case Diagram</h3>
                    <table><tr>
                        <td><img src="images/usercase/3.png" class="img=responsive " width="115%"></td>
                        <td><img src="images/usercase/4.png" class="img=responsive" width="115%"></td>
                    </tr></table>
                </div>
            </div>

        </div>
    </section>
    <!-- /User Case Diagram-->
    <section class="section">
        <div class="container">
            <div class = "row">
                <div class = "col-lg-10 mx-auto text-center">
                    <h3 class="section-title">User Case List</h3>
                </div>
                <div class="text-left">

                    <table class="table" witdth = 400>
                        <tbody>
                        <tr>
                            <th scope="row" width = 200>ID</th>
                            <td>UCU1</td>
                        </tr>
                        <tr>
                            <th scope="row">Description</th>
                            <td>a user wants to see the overview of the owner of the card</td>
                        </tr>
                        <tr>
                            <th scope="row">Actor</th>
                            <td>user who receive a new business card</td>
                        </tr>
                        <tr>
                            <th scope="row">Main flow</th>
                            <td>1.the user opens the application
                                <br>2.the user scans the QR code on the business card
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Result</th>
                            <td> the application will show the 10-second overview of the owner of the business card</td>
                        </tr>
                        </tbody>
                    </table>
                    <br>
                    <br>
                    <br>

                    <table class="table" width = 400>
                        <tbody>
                        <tr>
                            <th scope="row" width = 200>ID</th>
                            <td>UCU2</td>
                        </tr>
                        <tr>
                            <th scope="row">Description</th>
                            <td> a user which scan the QR code wants to know more details about education history, work history and interests.</td>
                        </tr>
                        <tr>
                            <th scope="row">Actor</th>
                            <td>user who receive a new business card</td>
                        </tr>
                        <tr>
                            <th scope="row">Main flow</th>
                            <td>1.the user opens the application
                                <br>2.the user scans the  QR code on the business card
                                <br>3.the application will show the 10- second overview of the owner oof the business card
                                <br>4.after that, user can choose what he/she want to know more by saying the option to the application
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Result</th>
                            <td> the application will show the 10-second overview of the owner of the business card</td></tr>
                        </tbody>
                    </table>
                    <br>
                    <br>
                    <br>

                    <table class="table" width = 400>
                        <tbody>
                        <tr>
                            <th scope="row" width = 200>ID</th>
                            <td>UCU3</td>
                        </tr>
                        <tr>
                            <th scope="row">Description</th>
                            <td> a user wants to view his scan history and favorite cards.</td>
                        </tr>
                        <tr>
                            <th scope="row">Actor</th>
                            <td>all users</td>
                        </tr>
                        <tr>
                            <th scope="row">Main flow</th>
                            <td>1.the user opens the application
                                <br>2.the user slides right.
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Result</th>
                            <td>the page is split into two parts, one for scan history, the other one is the list of favorite cards. User can switch two lists through press the corresponding icons</td>
                        </tr>
                        </tbody>
                    </table>
                    <br>
                    <br>
                    <br>

                    <table class="table" width = 400>
                        <tbody>
                        <tr>
                            <th scope="row" width = 200>ID</th>
                            <td>UCU4</td>
                        </tr>
                        <tr>
                            <th scope="row">Description</th>
                            <td> a user wants to update personal information.</td>
                        </tr>
                        <tr>
                            <th scope="row">Actor</th>
                            <td>all users</td>
                        </tr>
                        <tr>
                            <th scope="row">Main flow</th>
                            <td>1.the user opens the application
                                <br>2.the user slides left
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Result</th>
                            <td>applications shows the setting page.User can change information directly and download their own QR code fo printing business card</td>
                        </tr></tbody>
                    </table>
                    <br>
                    <br>
                    <br>

                    <table class="table" width = 400>
                        <tbody>
                        <tr>
                            <th scope="row" width = 200>ID</th>
                            <td>UCU5</td>
                        </tr>
                        <tr>
                            <th scope="row">Description</th>
                            <td>  a user wants to view scan history and favorite cards using desktop.</td>
                        </tr>
                        <tr>
                            <th scope="row">Actor</th>
                            <td>all users</td>
                        </tr>
                        <tr>
                            <th scope="row">Main flow</th>
                            <td>1.the user opens the website
                                <br>2.the user logs into the account
                                <br>3.the user choose history and favorite in the menu bar
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Result</th>
                            <td>user can view the list of history and favorite card.</td></tr>
                        </tbody>
                    </table>
                    <br>
                    <br>
                    <br>

                    <table class="table" width = 400>
                        <tbody>
                        <tr>
                            <th scope="row" width = 200>ID</th>
                            <td>UCU6</td>
                        </tr>
                        <tr>
                            <th scope="row">Description</th>
                            <td> a user wants to update AR avatar details.</td>
                        </tr>
                        <tr>
                            <th scope="row">Actor</th>
                            <td>user who is the owner of the card</td>
                        </tr>
                        <tr>
                            <th scope="row">Main flow</th>
                            <td>1.the user opens the website
                                <br>2.the user logs into the account
                                <br>3.the user choose setting in the menu bar
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Result</th>
                            <td>user can change the setting about AR image direcly.
                            </td></tr>
                        </tbody>
                    </table>
                    <br>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
    import PageTitle from '../components/PageTitle.vue'
    export default {
        name: "requirements",
        components: {
            PageTitle
        }
    }
</script>

<style scoped>

</style>