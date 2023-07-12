<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount, type Ref} from 'vue';
const words: string[] = [
        'Developer',
        'ProblemSolver',
        'Programmer'
    ];
    const part: Ref = ref('');
    let i: number = 0;
    let offset = 0;
    const len: number = words.length;
    let forwards: boolean = true;
    let skip_count: number = 0;
    const skip_delay: number = 15;
    const speed: number = 70;
    let intervalId: any = null;

    const wordFlick = () => {
      intervalId = setInterval(() => {
        if (forwards) {
          if (offset >= words[i].length) {
            skip_count++;
            if (skip_count === skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        } else {
          if (offset === 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
              i = 0;
            }
          }
        }
        part.value = words[i].substr(0, offset);
        if (skip_count === 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
      }, speed);
    };

    onMounted(() => {
      wordFlick();
    });

    onBeforeUnmount(() => {
      clearInterval(intervalId);
    });
</script>

<template>
    <div class="intro-container">
     <div class="intro-text">
                <!-- <div>
                    I am Arya Khochare
                </div>
                I am <span class="changing-text">{{ part }}</span> -->
                <pre>
                  <code>
<span class="keyword">class</span> <span class="keyword2">{{ part }}</span> 
<span class="keyword">extends</span> <span class="keyword2">Dedication, Inspiration</span> {
  constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
  }
}

const obj = new <span>{{ part }}</span>();
obj.firstName = <span class="string">"Arya"</span>;
obj.lastName = <span class="string">"Khochare"</span>;
                  </code>
                </pre>
            </div>
            <div>
              Side Text
            </div>
        </div>
</template>

<style scoped>
@import './intro.css';
</style>