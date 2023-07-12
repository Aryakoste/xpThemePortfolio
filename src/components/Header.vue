<script setup lang="ts">
import { useMainStore } from '../stores/mainStore';
    let headerArr = ["Home", "Skills","Projects", "Contact" ];
    const store = useMainStore();
</script>

<template>
    <nav class="header" >
        <ul class="header-items" :class="{'headerSkills': store.hTab !== 'Home'}">
            [<li v-for="item in headerArr" :class="{'active': store.hTab == item}">
                <router-link class="nav-link" :to="`/${item.toLowerCase()}`" @click="store.hTab = item">
                    {{ item }} ,
                </router-link>
            </li>]
        </ul>
    </nav>
</template>

<style scoped>

.header{
    position: fixed;
    top: 2%;
    width: 100%;
    height: 60px;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center; 
    border-radius: 20px; 
}

.headerSkills {
    background: rgba( 255, 255, 255, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 50px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.header-items {
    display: flex;
    justify-content: center;
    list-style-type: none;
    gap: 20px;
    font-size: 20px;  
    padding: 10px
}

.active {
    border-bottom: 3px solid white;
}

.header-items li {
    cursor: pointer;
}

.nav-link {
    text-decoration: none;
    color: white;
}

@media (max-width: 800px) {
    .header-items {
        font-size: 18px;
        gap: 10px;
        padding: 13px;
    }

    .header {
        top: 10px;
        padding-inline: 10px;
    }
}

</style>