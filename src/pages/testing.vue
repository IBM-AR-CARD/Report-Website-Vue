<template>
    <div>
        <PageTitle title="Term 2 Plan"></PageTitle>
        <!-- project background-->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto">
                        <h4>1.setup website application using Vue.js</h4>
                        <h4>2.setup server using node.js</h4>
                        <h4>3.setup MongoDB database</h4>
                        <h4>4.finish to setup AI language processing(IBM cloud and IBM Watson)</h4>
                        <h4>5.Setup OAuth API</h4>
                    </div>
                </div>
            </div>
        </section>
        <!-- /project background-->
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