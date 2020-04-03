<template>
    <div>
    <div style="height: 9vh; background: #7e57c2"></div>
        <iframe class="embed-responsive-item" src="appendices/" style="border:none;width: 100%;height: 91vh;"></iframe>
    </div>
</template>

<script>

    export default {
        name: "appendices",
        components: {
        },
        mounted(){
            let style = document.getElementById("appendicesStyle");
            style.href = "css/appendices.css";
        },
        beforeDestroy(){
            let style = document.getElementById("appendicesStyle");
            style.href = "";
        }
    }
</script>

<style scoped>


</style>