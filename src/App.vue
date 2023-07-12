<script setup lang="ts">
import Header from './components/Header.vue';
import Image from './assets/introImage.jpg';

const image = Image;


</script>
<template>
    <Header>
    </Header>
    <div class="content">
        <div class="intro">
            <div class="container">
                <transition name="slide" mode="out-in">
                    <RouterView />
                </transition>              
            </div>
        </div>
    </div>   
</template>

<style scoped>

.container {
  height: 100%;  
}
.intro {
    height: 100vh;   
    background-color: black;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

</style>
