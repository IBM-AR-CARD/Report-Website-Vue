<template>
    <div>
    <div style="position: relative;" :class="doRotate?'rotate':''">
        <img src="../../public/images/phone_frame.png" class="screen_frame">
        <img :src="imgSrc"  alt="image" class="screen_content">
    </div>
    </div>
</template>

<script>
    export default {
        name: "PhoneFrame",
        props: {
            imgSrc: String,
            doRotate: Boolean,
        },
    }

</script>

<style scoped>
    .screen_content{
        position: absolute;
        box-sizing: border-box;
        top: 66px;
        transform: translateX(-327px);
        height: 555px;
        width: 312px;
        background: white;
    }
    .rotate{
        transform: rotate(10deg);
    }

</style>