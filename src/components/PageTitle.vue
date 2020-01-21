<template>
    <!-- page title -->
    <section class="page-title bg-primary position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1 class="text-white font-tertiary">{{title}}</h1>
                </div>
            </div>
        </div>
    </section>
    <!-- /page title -->
</template>

<script>
    export default {
        name: "PageTitle",
        props: {
            title: String
        }
    }
</script>

<style scoped>

</style>