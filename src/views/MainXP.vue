<script setup lang="ts">
import soundIcon from '../assets/sound.png';
import driverIcon from '../assets/drivers.png';
import XPWindow from '@/components/XPWindow.vue';
</script>

<template>
    <div class="container">
  <div class="screen">
    
    <div class="taskbar">
      <div class="main-section">
        <input id="start-menu-active" type="checkbox">
        <label class="start-button" for="start-menu-active">
          start
        </label>
        <div class="start-menu">
          <div class="start-menu-header">
            <div class="account-image-wrapper">
                <img src="../assets/user1.png" style="height: 50px;"/>
            </div>
            <h1 class="account-name">Arya Khochare</h1>
          </div>
          <div class="start-menu-body">
            <div class="start-menu-favorites">
              <div class="start-menu-item intent-item">
                <!-- <div class="icon" style="background-image: url('../assets/fileExplorerIcon.png');"></div> -->
                <img class="icon" src="../assets/documents.png"/>
                <div class="label">
                  <div class="intent">File Explorer</div>
                  <div class="program">File Explorer</div>
                </div>
              </div>
              <div class="start-menu-item intent-item">
                <!-- <div class="icon" style="background-image: url('../assets/fileExplorerIcon.png');"></div> -->
                <img class="icon" src="../assets/ie.png"/>
                <div class="label">
                  <div class="intent">Internet</div>
                  <div class="program">Internet Explorer</div>
                </div>
              </div>
              <div class="divider"></div>
              <div class="start-menu-item favorite-item">
                <img src="../assets/notepad.png" alt="" class="icon">
                <div class="label">Notepad</div>
              </div>
              <div class="start-menu-item favorite-item">
                <img src="../assets/msn.png" alt="" class="icon">
                <div class="label">MSN</div>
              </div>
              <div class="start-menu-item favorite-item">
                <img src="../assets/winPlayer.png" alt="" class="icon">
                <div class="label">Windows Media Player</div>
              </div>
              <div class="start-menu-item favorite-item">
                <img src="../assets/calculator.png" alt="" class="icon">
                <div class="label">Calculator</div>
              </div>
              <div class="all-programs">
                <div class="divider"></div>
                <div class="start-menu-item all-programs-button">All Programs</div>
              </div>
            </div>
            <div class="start-menu-shortcuts">
              <div class="start-menu-item my-item">
                <div class="icon" ></div>
                <div class="label">My Information</div>
              </div>
              <div class="start-menu-item my-item">
                <div class="icon" ></div>
                <div class="label">My Skills</div>
              </div>
              <div class="start-menu-item my-item">
                <div class="icon"></div>
                <div class="label">My Projects</div>
              </div>
              <div class="start-menu-item my-item">
                <div class="icon" ></div>
                <div class="label">My Experience</div>
              </div>
              <div class="start-menu-item my-item">
                <img src="../assets/computer.png" alt="" class="icon">
                <div class="label">My Computer</div>
              </div>
              
              <div class="divider"></div>
              
              <a class="start-menu-item" href="https://github.com/Aryakoste">
                <img src="../assets/github-logo.png" alt="" class="icon">
                <div class="label">Github</div>
              </a>
              <a class="start-menu-item" href="https://www.linkedin.com/in/arya-khochare-985027241/">
                <img src="../assets/linkedin.png" alt="" class="icon">
                <div class="label">LinkedIn</div>
              </a>
              
              <div class="divider"></div>
              
              <div class="start-menu-item">
                <img src="../assets/help.png" alt="" class="icon">
                <div class="label">Help and Support</div>
              </div>
              <div class="start-menu-item">
                <img src="../assets/search.png" alt="" class="icon">
                <div class="label">Search</div>
              </div>
              <div class="start-menu-item">
                <img src="../assets/run.png" alt="" class="icon">
                <div class="label">Run...</div>
              </div>
            </div>
          </div>
          <div class="start-menu-footer">
          </div>
        </div>
      </div>
      <div class="quick-section">
        <img :src="soundIcon"/>
        <img :src="driverIcon">
        <p>7:00 PM</p>
      </div>
    </div>
    <div class="mainScreenContent">
    <XPWindow :title="'File Explorer'">
          <div class="fileExplorerHeader">
              <span>File</span>
              <span>View</span>
          </div>
          <div class="fileExplorerContent">
              <div class="fileExplorerSidebar">

              </div>
          </div>
    </XPWindow>
  </div>
  </div>
</div>
</template>

<style scoped lang="scss" src="./mainXP.scss">
</style>