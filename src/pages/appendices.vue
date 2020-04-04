<template>
    <div>
    <div style="height: 9vh; background: #7e57c2"></div>
        <iframe ref="iframe" class="embed-responsive-item" :src="src" style="border:none;width: 100%;height: 92vh;" @load="load"></iframe>
        <div class="alert" v-if="showWarning">
            <span class="closebtn" @click="hide">&times;</span>
            <strong>That didn't work, to make sure the appendices page is displaying correctly, please try right click the link and open the external link in a new tab.</strong>
        </div>
    </div>
</template>

<script>

    export default {
        name: "appendices",
        data: function () {
            return {
                src:"appendices/index.html",
                lastSrc: "appendices/",
                showWarning:false
            }
        },
        methods: {
            hide: function(){
                this.showWarning = false
            },
            load: function(){
                try{
                    if(this.$refs["iframe"].contentWindow.location.host == window.location.host){
                        this.lastSrc = this.$refs["iframe"].contentWindow.location.href
                    }else{
                        // eslint-disable-next-line no-console
                        // console.error("aaaaaa",this.lastSrc)
                        this.src=this.lastSrc+"?"+Math.random();
                        this.showWarning = true
                    }
                }catch (e) {
                    // eslint-disable-next-line no-console
                    // console.error(e,"aaaaaa",this.lastSrc)
                    this.src=this.lastSrc+"?"+Math.random();
                    this.showWarning = true
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
    .alert {
        padding: 20px;
        background-color: #ff9800;
        color: white;
        position: fixed;
        top: 190px;
        left:50%;
        transform: translateX(-50%);
    }

    .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
    }

    .closebtn:hover {
        color: black;
    }

</style>