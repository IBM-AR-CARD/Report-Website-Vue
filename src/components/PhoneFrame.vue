<template>
    <div>
    <div class="screen_frame">
        <img :src="imgSrc"  alt="image" class="screen_content">
    </div>
    </div>
</template>

<script>
    export default {
        name: "PhoneFrame",
        props: {
            imgSrc: String
        },
    }

</script>

<style scoped>
    .screen_frame{
        position: relative;
        background: url("../../public/images/phone_frame.png") no-repeat center center;
        background-size: contain;
    }

    .screen_content{
        /*position: absolute;*/
        box-sizing: border-box;
        margin: 60px 0;
        margin-left: 2%;
        width: 90%;
        height: 20%;
    }
</style>