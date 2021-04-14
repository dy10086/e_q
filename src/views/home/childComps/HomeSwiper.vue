<template>
  <Swiper class="swiper">
    <SwiperItem>
      <ul>
        <li v-for="item in swiperList.listOne" :key="item.id">
          <img :src="'http://192.168.0.103:3000' + item.img" :alt="item.name" />
          <p>{{item.name}}</p>
        </li>
      </ul>
    </SwiperItem>
    <SwiperItem>
      <ul>
        <li v-for="item in swiperList.listTwo" :key="item.id">
          <img :src="'http://192.168.0.103:3000' + item.img" :alt="item.name" />
          <p>{{item.name}}</p>
        </li>
      </ul>
    </SwiperItem>
  </Swiper>
</template>

<script>
import Swiper from '@/components/common/Swiper/Swiper'
import SwiperItem from '@/components/common/Swiper/SwiperItem'
export default {
  props: {
    swiperList: {
      type: Object,
      default: {}
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-around;
  height: 100%;
  li {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 50%;
    }
    p {
      font-size: 14px;
    }
  }
}
.swiper {
    background-color: #fff;
    border-bottom: 4px solid #f4f4fc;
}
</style>