<script setup lang="ts">
import { ref } from 'vue';
const dropDownOpen = ref(false);

const setDropDown = () => {
    dropDownOpen.value = !dropDownOpen.value;
}
</script>

<template>
    <div class="navItem">
    <span @click="setDropDown">File</span>
    <div class="dropDown" v-if="dropDownOpen">
        <ul class="dropDownItems">
            <li>Clear</li>
            <li>Save</li>
        </ul>
    </div>
    </div>
</template>

<style scoped>
    .navItem{
        position: relative;
    }

    .dropDown {
        position: absolute;
        top: 130%;
        left: 0;
        height: 100px;
        background-color: white;
        padding-inline: 20px;
        border: 1px solid black;
    }

    .dropDownItems li{
        list-style-type: none;
        margin-top: 10px
    }
</style>

