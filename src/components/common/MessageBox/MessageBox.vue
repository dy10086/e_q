<template>
  <div class="message">
      <div class="icon">
          <i class="iconfont icon-jinggao"></i>
          <p>{{text}}</p>
      </div>
      <div class="text">
          <span v-show="isShow" @click="handleCancel">取消</span>
          <span @click="handleOk">确定</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .message {
        overflow: hidden;
        z-index: 999;
        width: 80%;
        height: calc(100vh - 70%);
        border-radius: 15px;
        background-color: #fff;
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        .icon {
            height: 80%;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            i {
                width: 100%;
                font-size: 100px;
                text-align: center;
                color: rgb(238, 235, 79);
            }
            p {
                width: 100%;
                text-align: center;
            }
        }
        .text {
            display: flex;
            height: 20%;

            span {
                align-items:stretch;
                // align-content:center;
                flex: 1;
                text-align: center;
                line-height: 100%;
                background-color: #4cd964;
                color: #fff;
                font-size: 18px;
                padding: 10px;
            }
        }
    }
</style>