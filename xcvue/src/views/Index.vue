<template>
    <div>
    <!-- 轮播图 -->
			
    </div>
</template>
<script>
export default {
    data(){
     return{
         p1:{price:0},
         p2:{price:0},
         p3:{price:0},
         others:[]
     }
    },
    mounted(){
        // this.axios.get("/index")
        // .then(result=>{
        //     // console.log(result.data)
        //     // 基础一般的同学
        //     this.p1=result.data[0];
        //     this.p2=result.data[1];
        //     this.p3=result.data[2];
        //     this.others=result.data.slice(-3);
        //     // 基础好的同学
        //     //                      收集剩余
        //     [this.p1,this.p2,this.p3,...this.others]=result.data;
        // })
    }
}
</script>
<style scoped>
.font_sm{
	font-size: 12px;
	color: #666;
}
.container{
	box-sizing: border-box;
}

</style>