<template>
  <div>
    <home-header></home-header>
    <home-swiper :list='swiperList'></home-swiper>
    <home-icon :list='iconList'></home-icon>
    <home-recommend :list='recommendList'></home-recommend>
    <home-weekend :list='weekendList'></home-weekend>
  </div>
</template>

<script type="text/javascript">
import homeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    homeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  computed:{
    ...mapState(['city'])
  },
  data() {
    return {
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]

    }
  },
  methods : {
    getHomeInfo(){
      axios.get('/api/index.json?city='+this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data;
      if(res.ret&&res.data){
        const data=res.data;
        this.swiperList =data.swiperList;
        this.iconList = data.iconList;
        this.recommendList=data.recommendList;
        this.weekendList=data.weekendList;
      }
     
    }
  },
  mounted () {
    this.lastCity=this.city
    this.getHomeInfo()
  },
  activated(){
    if(this.lastCity!==this.city){
       this.lastCity=this.city
       this.getHomeInfo()
    }
  }
}
</script>

<style type="text/css">

</style>
