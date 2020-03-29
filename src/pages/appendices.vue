<template>
    <div>
    <div style="height: 9vh; background: #7e57c2"></div>
<!--        @load="onLoad"-->
<!--        <vue-friendly-iframe :src="'https://ibm-ar-card.github.io/API-Documentation/'" ></vue-friendly-iframe>-->
        <iframe class="embed-responsive-item" src="https://ibm-ar-card.github.io/API-Documentation/" style="border:none;width: 100%;height: 91vh;"></iframe>
    </div>
</template>

<script>
    // import VueFriendlyIframe from 'vue-friendly-iframe';
    export default {
        name: "appendices",
        components: {
            // 'vue-friendly-iframe': VueFriendlyIframe
        }
    }
</script>

<style scoped>
    .footerClass{
        display: none;
    }

    .header{
        padding: 10px 0;
    }

    body{
        overflow: hidden;
    }

    .container {
        max-width: 92%;
        padding-right: 90px;
    }

</style>