<template>
  <div class="shops-nav">
      <img class="bg-img" :src="'http://192.168.0.103:3000/uploads/shopimg/' + img" />
      <div class="bg-color"></div>
      <div class="shops-nav-item">
        <img class="my-img" :src="'http://192.168.0.103:3000/uploads/shopimg/' + img" />
        <div>
          <h4>{{name}}</h4>
          <p>商家配送/分钟送达</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:['img','name']
}
</script>

<style lang="scss" scoped>
.shops-nav {
    position: relative;
    height: 120px;
    width: 100%;
    overflow: hidden;

    .bg-img {
      width: 100%;
      filter: blur(8px);
      background: no-repeat center center;
    }
    .bg-color {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .shops-nav-item {
      display: flex;
      flex-wrap: nowrap;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      color: #fff;
      align-items: center;
      .my-img {
        width: 80px;
        margin: 0 10px;
        border-radius: 12px;
      }
      p {
        margin-top: 10px;
        font-size: 12px;
        color: #e4e4e4;
      }
    }
  }
</style>