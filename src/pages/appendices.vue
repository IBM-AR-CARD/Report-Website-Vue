<template>
    <div>
    <div style="height: 9vh; background: #7e57c2"></div>
        <iframe ref="iframe" class="embed-responsive-item" :src="src" style="border:none;width: 100%;height: 92vh;" @load="load"></iframe>
    </div>
</template>

<script>

    export default {
        name: "appendices",
        data: function () {
            return {
                src:"appendices/",
                lastSrc: "appendices/"
            }
        },
        methods: {
            load: function(){
                try{
                    if(this.$refs["iframe"].contentWindow.location.host == window.location.host){
                        this.lastSrc = this.$refs["iframe"].contentWindow.location.href
                    }else{
                        // eslint-disable-next-line no-console
                        // console.error("aaaaaa",this.lastSrc)
                        this.src=this.lastSrc+"?"+Math.random();
                        alert("That didn't work, please try right click and open in a new tab.")
                    }
                }catch (e) {
                    // eslint-disable-next-line no-console
                    // console.error(e,"aaaaaa",this.lastSrc)
                    this.src=this.lastSrc+"?"+Math.random();
                    alert("That didn't work, please try right click and open in a new tab.")
                }
            }
        },
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