<template>
  <div class="city-list">
    <div v-for="(value,key) in citylist" :key="key">
      <h4>{{key}}</h4>
      <ul>
        <li v-for="item in value" :key="item.id" @click="routerJump(item.name)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    citylist: {
      type: Object,
      default: {}
    }
  },
  methods: {
    routerJump(name){
      this.$router.push('/address/' + name)
    }
  },
}
</script>

<style lang="scss" scoped>
.city-list {
  width: 96%;
  margin: 40px auto 0 auto;
  div {
    background-color: #fff;
    border-radius: 7px;
    overflow: hidden;
    margin-top: 10px;
  }
  h4 {
    margin-left: 30px;
    line-height: 30px;
    
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    background-color: #fff;
    list-style: none;
    border-top: 1px solid #e4e4e4;
    li {
      width: 25%;
      line-height: 34px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-bottom: 1px solid #e4e4e4;
      border-right: 1px solid #e4e4e4;
      padding: 0 4px;
    }
    li:nth-of-type(4n) {
      border-right: none;
    }
  }
}
</style>