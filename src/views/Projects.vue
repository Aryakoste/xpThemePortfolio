<script setup lang="ts">
import {projectData} from '../data';

const randomRotate = () => {
 const deg = Math.random() * (5 - -5) + -5;
    return 'rotate(' + deg + 'deg)';
}
</script>

<template>
    <div class="projects-container">
        <div class="card-container"> 
        <div class="card" v-for="item in projectData" :style="{transform: randomRotate()}">
            <h2>{{ item.title }}</h2>
            <p>{{ item.desc }}</p>
        </div>
    </div>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap");
    .projects-container {
        height: 100%;
        background-image: url('../assets/projects_background.jpg');
        background-size: cover;
    }
    .card-container {
        height: 100%;
        padding-top: 100px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        padding-inline: 1rem;
        gap: 0rem;
    }
    .card {
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 2rem;
  background: #f8f3e8;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.card > img {
  width: 100%;
  height: auto;
  aspect-ratio: 600/300;
}

.card > h2 {
  margin-top: 1rem;
  font-family: "Kalam", cursive;
  font-weight: normal;
  font-size: 2rem;
  color: #4a4a7d;
  text-align: center;
}

.card > p {
  font-family: "Kalam", cursive;
  font-size: 1rem;
  color: #5e5e89;
  text-align: center;
}
</style>