<template>
  <div class="g-home">
    <Carousel  v-model="value1" loop autoplay :autoplay-speed="autoplaySpeed">
        <CarouselItem v-for="item in data">      
         <div class="m-oneword">
            <h1>{{item}}</h1>
          </div>           
          <div style="z-index:0">
              <img src="../assets/img/back6.jpg" alt="">
            </div>
        </CarouselItem>
    </Carousel>
      <div class="m-drawer">
        <Button @click="status = true">NEW</Button>
        <Drawer v-model="status" title="Create">
          <Form  :model="word">        
            <FormItem>
             <Input type="text" v-model="word.title" placeholder="标题">
             </Input>
           </FormItem>
           <FormItem>
             <Input type="text" v-model="word.author" placeholder="作者">
             </Input>
           </FormItem>
             <FormItem>
             <Input type="text" v-model="word.content" placeholder="内容">
             </Input>
           </FormItem>
         <FormItem>
            <Button type="primary" @click="hundlesubmit()">NEW One Word</Button>
        </FormItem>
           </Form> 

        </Drawer>
      </div>
  </div>
</template>

<script>
import Api from "@/assets/js/api.js";
export default {
  data() {
    return {
      autoplaySpeed:10000,
      value1:0,
      oneword:'',
      data: '',
      status: false,
      imgs: [
        "../assets/img/back1.jpg",
        "../assets/img/back2.jpg",
        "../assets/img/back3.jpg",
        "../assets/img/back4.jpg",
        "../assets/img/back5.jpg",
        "../assets/img/back6.jpg",
        "../assets/img/back7.jpg"
      ],
      word: {
        author: "",
        title: "",
        content: ""
      }
    };
  },
  methods: {
    hundlesubmit(){
        Api.postword(this.word).then(res => {
          if(res.success){
            this.$Message.success('添加成功！')
            this.status = false
          }
          else{
            this.$Message.error(res.err)
          }
        })
    },
    getWord() {
      var that = this;
      Api.getword().then(res => {
        if (res.success) {
          that.data = res.data.map(item=>{
            return item.content
          })
        }
      });
    },
  },
  mounted() {
    this.getWord();

  }
};
</script>

<style lang="less">
.g-home {
  height: 100vh;
  background-color: #5cadff;
  position: relative;
  .ivu-carousel-item{
    position: relative;
    height: 100vh;
    .m-oneword {
      width: 800px;
      height: 60px;
      position: absolute;
      color: white;
      font-size: 20px;
      font-family: "SimSun", "宋体";
      background-color: rgba(0, 0, 0, .3);
      border-radius: 10px;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }

  img {
   width: 100%;
    height: 100vh;
  }
  .m-drawer{
    position: absolute;
    bottom: 0;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
