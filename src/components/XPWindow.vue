<script setup lang="ts">
    const props = defineProps(['style', 'title', 'iconPath']);
</script>

<template>
    <div class="window" :style="props.style">
  <h2 class="windowHeader"><div class="text"><span class="windowHeaderTitle">
    <img v-if="props.iconPath" :src="props.iconPath"/>
  {{ props.title }}</span></div> 
    <a href="#" class="close">Close</a></h2>
  <div class="content">
       <slot></slot>
  </div>
</div>
</template>

<style scoped lang="scss">
    .window {
  background: green;
  border: 1px solid black;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
  border-color: #0072ef #01279e #01279e #0236d8;
  background: linear-gradient(
      to right,
      #034fe1,
      #1682f2 1px,
      #006ee4 2px,
      rgba(0, 0, 0, 0) 3px
    ),
    linear-gradient(
      to left,
      #0034b0,
      #0056e1 1px,
      #0064f4 2px,
      rgba(0, 0, 0, 0) 3px
    ),
    linear-gradient(
      to top,
      #0034b1,
      #0056e1 1px,
      #0064f4 2px,
      rgba(0, 0, 0, 0) 3px
    );
  * {
    cursor: default;
  }

  .windowHeaderTitle img {
    height: 20px;
  }

  .windowHeaderTitle {
    display: flex;
    align-items: center;
    gap: 5px;
  }
    .windowHeader {
    background: #006fea;
    line-height: 32px;
    height: 30px;
    position: relative;
    margin: 0;
    padding: 0;
    border-radius: 3px 3px 0 0;
    background-image: linear-gradient(
        to right,
        #0050db,
        rgba(255, 255, 255, 0.1) 4px,
        rgba(255, 255, 255, 0) 200px
      ),
      linear-gradient(
        to left,
        #0034b0,
        #0056e1 1px,
        #0064f4 2px,
        rgba(0, 0, 0, 0) 3px
      ),
      linear-gradient(
        to bottom,
        #4aa9ff,
        #33a4ff 1px,
        #008aff 2px,
        #007ef4 3px,
        #0075f0 4px,
        rgba(0, 0, 0, 0) 5px
      ),
      linear-gradient(
        to top,
        #005dd9,
        #0067e9 1px,
        #007afb 2px,
        #0081fb 3px,
        rgba(0, 0, 0, 0) 4px
      );
    font-family: sans-serif;
    color: white;
    font-weight: normal;
    font-size: 14px;
    padding-left: 8px;
    text-shadow: 1px 1px 0 #0a2a95;
  }

  .content {
    flex: 1;
    margin: 0;
    border: 1px solid #91adc6;
    margin: 0 2px 2px;
  }
  .close {
    position: absolute;
    right: 6px;
    top: 6px;
    height: 19px;
    padding-left: 19px;
    width: 0;
    overflow: hidden;
    border: 1px solid white;
    border-radius: 3px;
    background: radial-gradient(
        circle at 20px 20px,
        #e84f00,
        rgba(255, 255, 255, 0)
      ),
      radial-gradient(
        circle at -5px -5px,
        white,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(
        to right,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
      );
    background-color: #e81000;
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      border: 1px solid rgba(33, 0, 0, 0.2);
      border-radius: 2px;
    }
    &:before {
      content: "×";
      position: absolute;
      left: 2.5px;
      top: -7px;
      color: white;
      text-shadow: none;
      font-size: 23px;
    }
  }
}
</style>