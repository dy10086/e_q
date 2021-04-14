<template>
  <div class="list">
    <h4 v-show="addressList.length === 0">搜索记录</h4>
    <ul v-if="addressList.length === 0">
      <li
        v-for="(item, index) in recordList"
        :key="index"
        class="record"
        @click="addressClick(item,false)"
      >
        {{item.title}}
        <button type="button" @click="removClick(index)">x</button>
      </li>
    </ul>
    <ul v-else>
      <li
        v-for="(item,index) in addressList"
        :key="index"
        @click="addressClick(item,true)"
      >{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    addressList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      recordList: []
    }
  },
  created() {
    if (window.localStorage.getItem('record')) {
      this.recordList = JSON.parse(window.localStorage.getItem('record'))
    }
  },
  methods: {
    addressClick(address, isRecor) {
      if (isRecor) {
        this.recordList.push(address)
        window.localStorage.setItem('record', JSON.stringify(this.recordList))
      }
      window.localStorage.setItem('address', JSON.stringify(address))

      this.$router.push('/home')
    },
    removClick(index) {
      this.recordList.splice(index, 1)
      window.localStorage.setItem('record', JSON.stringify(this.recordList))
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 96%;
  margin: 0 auto;
  h4 {
    font-weight: 400;
    color: #9c9494;
  }
  ul {
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    li {
      line-height: 40px;
      padding-left: 10px;
      padding-right: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-bottom: 1px dashed #c0c4cc;
    }
  }
  .record {
    position: relative;
    button {
      position: absolute;
      right: 10px;
      top: 10px;
      outline: none;
      background-color: #fff;
      border: none;
    }
  }
}
</style>