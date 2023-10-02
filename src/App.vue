<script setup lang="ts">



</script>
<template>
    <!-- <Header>
    </Header> -->
    <div class="content">
        <div class="intro">
            <div class="container">
                <RouterView>

                </RouterView>           
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
