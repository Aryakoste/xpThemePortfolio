<script setup lang="ts">
    import video from '../assets/waterVideo.mp4';
    import { data } from '../data';
    console.log(data);
</script>

<template>
    <div class="skills-container">
        <video autoplay loop muted>
            <source :src="video" type="video/mp4"/>
        </video>
        <div class="skills-content">
            <div class="accordion">
                <v-expansion-panels variant="popout">
                    <v-expansion-panel v-for="item in Object.keys(data.iconSet)" class="panel-container">
                        <v-expansion-panel-title>{{ item }}</v-expansion-panel-title>
                        <v-expansion-panel-text class="panel-content">
                            <div class="skill-element-container">
                                <div class="skill-element" v-for="i in data.iconSet[item]">
                                    <font-awesome-icon :icon="i.icon" style="width: 50px; height: 26px;"/>
                                    <div>{{ i.name }}</div>
                                </div>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skills-container {
    height: 100%;
}

.skills-content {
    display: flex;
    align-items: center;
    position: absolute;
    height: 100%;
    z-index: 5;
    width: 100%;
    padding-inline: 8%;
}

.skill-element {
    border: 1px solid red;
    display: inline-block;
    padding: 10px;
    text-align: center;
}

.skill-element-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
}

.panel-container {
    margin-bottom: 20px;
}

video {
    position: absolute; 
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.accordion {
    width: 100%;
}

.panel-content {
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 101px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.v-expansion-panel-text__wrapper {
    display: flex;
    gap: 20px;
}

@media (max-width: 800px) {
    .skills-content {
        padding-inline: 20px;
        align-items: start;
        top: 90px;
    }
}

</style>../data