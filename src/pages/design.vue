<template>
    <div>
        <PageTitle title="Design"></PageTitle>
        <!--System Arthitecture Diagram-->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-center">
                        <h3 class="section-title">System Arthitecture Diagram</h3>
                        <img src="images/design/system architecture.png" class="img-responsive" style= "width: 100%;">
                    </div>
                </div>
            </div>
        </section>
        <!-- /System Arthitecture Diagram-->

        <!--ER Diagram-->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-center">
                        <h3 class="section-title">Entity Relationship Diagram</h3>
                        <img src="images/design/architecture.png" class="img-responsive" style= "width: 100%;">
                    </div>
                </div>
            </div>
        </section>
        <!-- /ER Diagram-->

        <!--Implentation of finished functionality-->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-center">
                        <h3 class="section-title">Implentation of finished functionality</h3>
                    </div>
                    <div class="col-md-4">
                        <img src="images/design/functionality.gif" class="img-responsive alignright" style= "width: 100%;">
                    </div>
                    <div class="col-md-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.

                            Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.

                            Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                    </div>
                </div>
            </div>
        </section>
        <!--/Implentation of finished functionality-->
    </div>
</template>

<script>
    import PageTitle from '../components/PageTitle.vue'
    export default {
        name: "design",
        components: {
            PageTitle
        }
    }
</script>

<style scoped>

</style>