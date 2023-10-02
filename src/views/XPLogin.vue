<script setup lang="ts">
import router from '@/router';

const routeToMain = () => {
    router.replace("./mainXP");
}
</script>

<template>
    <header></header>
    <main>
        <div class="img">
            <img src="../assets/logo (1).png" alt="Logo do Windows XP" />
            <h1>To begin, click your user name</h1>
        </div>
        <div class="line"></div>
        <div class="users">
            <section class="profilePic">
                <div class="iconA"></div>
                <div class="user">
                    <h3>Arya</h3>
                    <p>Select your action</p>
                    <div class="input">
                        <button class="green" @click="routeToMain"> Go to portfolio <img src="../assets/Vector (1).png" alt=""> </button>
                        <button class="blue"> <img src="../assets/_.png" alt=""> </button>
                    </div>
                </div>
            </section>
        </div>
    </main>
    <footer>
        <div class="btn">
            <button> <img src="../assets/Group 2.png" alt=""> </button>
            <p>Turn off computer</p>
        </div>
        <div class="informations">
            <p>After you log on, you can add or change accounts</p>
            <p>Just go to your Control Panel and click User Accounts</p>
        </div>
    </footer>
</template>

<style scoped lang="scss" src="./xplogin.scss">

</style>