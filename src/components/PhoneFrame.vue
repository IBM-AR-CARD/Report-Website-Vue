<template>
    <div>
    <div style="position: relative;">
        <img src="../../public/images/phone_frame.png" class="screen_frame">
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
    .screen_content{
        position: absolute;
        box-sizing: border-box;
        top: 66px;
        transform: translateX(-327px);
        height: auto;
        max-width:312px;
    }
</style>