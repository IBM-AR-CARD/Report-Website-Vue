<template>
    <div>
        <PageTitle title="Requirements"></PageTitle>

    <!-- project background-->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="section-title">Project background</h3>
                    <div class="text-left">
                        <p>Business cards are very common during any meeting and networking events, it is a quick and easy way for people to exchange their information and contacts. However, many people found physical cards are quite hard to organize, as it tends to lose and being forgotten, and it's very hard to find a specific card from many. It is also limited and outdated to share any useful information compared to today’s internet-enabled services like LinkedIn, making it harder and harder for those who would like to use a business card to showcase themselves and make themselves stand out.</p>
                        <br>
                        <p>With today’s advance in Augmented Reality and conversational AI technologies, we have found a way to utilize and merge these two technologies, adding a brand new experience on top of the physical business cards, providing much more information. Our project provides both android and web application service for people to view and share business cards using AI-powered interactive 3D AR avatar. The user can simply use their mobile phone camera to scan a unique QR code on the business card, instantly a vivid 3D Avatar will be overlayed standing above the card in Augmented Reality. Thanks to the powerful IBM Watson AI, the user can use their nature language to directly interact and ask questions with the avatar about anything they would like to know about the owner of the card, even creating interactive dialogs.</p>
                        <br>
                        <p>Everyone can register this service with their existing business card design, greatly extends the ability a physical business card can bring. User can make their own AR business card either in the app or in our web user dashboard. They can update their card details, design their own 3D AR avatar and easily view scan history and list of favourite cards everywhere without the app.</p>
                    </div>
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
                    <div class="text-left">
                    <p>Except for the requirement about how to getting in touch with the owner of the card, other requirements from our client are full of detailed. Hence we only need to discover the feature helping the user to manage card they have already scanned and find the desired card easily. Hence we gathered requirements about that through short interviews with potential users of our applications. Finally, we decided to add a favorite page and a history page, and the user can search for keywords on each page.</p>
                    <p>For web service, we also add the same features. Based on that, we give the user the option of choosing their own AR image.</p>
                    </div>
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
                    <img src="images/persona/image9.png" class="img-responsive item-shadow" style= "width: 90%; box-shadow: #0b0b0b">
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
                    <div class="text-left">
                        <p>IBM Watson Assistant is a quite matured machine learn conversational chatbot solution, which developers can train them using rules and word matches to program a model for recognizing user input and deciding what to do or reply. Watson Assistant is used commonly in website support chatbot, hotel, restaurant or flight booking systems. However, it hasn’t been experimented much in the field of AR and voice-enabled conversations. Our client would love to see us integrate AR with business cards and also utilizing Watson Assistant.</p>
                        <br>
                        <p>Hence our goals are, to make a mobile app that could display the 3D AR figure on top of a business card and precisely tracks the card’s location, rotation etc, making the AR figure realistic, to achieve this, we need to use Unity engine and Vuforia. To store different card detail, user profile and user favourites and browsing histories, we also need data storage and user authentication backend using Node.js, Express and MongoDB. Last but not least, we need to integrate IBM Watson services into our application for Natural Language Processing, and we also need to find a way to connect Watson into our data storage to grab the user profile data.</p>
                    </div>
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
                            <p>1. Unity Application that can track business card using only phone camera and display 3D model over it using AR.</p>
                            <p>2. Android application UI that can integrate the unity app using Flutter, and be able to exchange information between flutter and unity.</p>
                            <p>3. User can scan a QR code to determine the profile or information for a specific business card.</p>
                            <p>4. 3D models need to have natural idle and talking animations, models needs to be varies for user to choose from.</p>
                            <p>5. Users can register and login their account, creating their own profile, including details like work experience, education etc.</p>
                            <p>6. The user can interact with the avatar via microphone using natural language, asking for their details from the card profile.</p>
                            <p>7. The message should be converted to text via voice recognition, send to Watson Assistant for processing, and determine the desired reply in the backend, and sent back into the front-end, speak out using corresponding gender's TTS of the user's choice.</p>
                            <p>8. Users can view a list of business cards that has already scanned, e.g. scan history.</p>
                            <p>9. Users can set or unset a card as favourite, and view all favourite cards in a list.</p>
                            <p>10. The user can update their profile directly in the app, and the user can upload or change their profile picture using photos from the gallery or using camera.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-5 mb-4">
                    <div class="media-body">
                        <h4 class="mt-0">SHOULD HAVE</h4>
                        <p>1. Web-based application which provides the same functions such as registration and profile update, favourite and history list management, for user to view their details anytime even without the app.</p>
                        <p>2. Search feature in the history page and favorite page</p>
                        <p>3. Chat bubbles for viewing the conversation history, which can be hidden or displayed</p>
                        <p>4. User profile page for text represented details of any specific user (e.g. enter from history list)</p>
                        <p>5. User can ask the avatar for contact details, the app should open automatically (e.g. to compose email, to phone call)</p>
                        <p>6. The Unity model should be able to look at the camera naturally, making it more engaging</p>

                    </div>
                </div>
            </div>
            <div class="bg-gray p-5 mb-4">
                <div class="media border-bottom py-4">
                    <div class="media-body">
                        <h4 class="mt-0">COULD HAVE</h4>
                        <p>1. Provide more choice and customization of 3D models, this can be done in the web end for more detailed customizes.</p>
                        <p>2. Provide LinkedIn OAuth abilities, that could parse the user profile directly from LinkedIn.</p>
                        <p>3. The 10-second overview of the owner of the card can be recorded by the user using their own voice instead of TTS.</p>
                        <p>4. The user can ask the avatar to dance (as an easter egg).</p>
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