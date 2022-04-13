<template>
  <div class="tea-cup-container">
    <div class="frame">
      <div class="plate"></div>
      <div class="cup">
        <div class="top">
          <div class="vapour">
            <span style="--i: 6"></span>
            <span style="--i: 13"></span>
            <span style="--i: 7"></span>
            <span style="--i: 18"></span>
            <span style="--i: 3"></span>
            <span style="--i: 20"></span>
            <span style="--i: 14"></span>
            <span style="--i: 17"></span>
            <span style="--i: 12"></span>
            <span style="--i: 4"></span>
            <span style="--i: 9"></span>
            <span style="--i: 19"></span>
            <span style="--i: 8"></span>
            <span style="--i: 2"></span>
            <span style="--i: 11"></span>
            <span style="--i: 15"></span>
            <span style="--i: 1"></span>
            <span style="--i: 10"></span>
            <span style="--i: 16"></span>
            <span style="--i: 5"></span>
          </div>
          <div class="circle">
            <div class="tea"></div>
          </div>
        </div>
        <div class="handle">
          <svg viewBox="0 0 5 9">
            <path d="M 0 9 C 4 9 7 0 0 0 M 0 1 C 5 1 3 8 0 8 Z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>

<style scoped lang="less">
.tea-cup-container {
  margin: 0 auto;
  padding: 0;
  height: 200px;
  aspect-ratio: 1;
  resize: both;
  overflow: auto;
  background-color: #607d8b;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.tea-cup-container * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.tea-cup-container .frame {
  position: relative;
  padding: 1rem;
  width: 90%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column-reverse;
}

.tea-cup-container .cup {
  position: relative;
  width: 56%;
  aspect-ratio: 1;
  border-bottom-left-radius: 45%;
  border-bottom-right-radius: 45%;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
}

.tea-cup-container .top {
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 14/3;
  margin-top: -10.7%;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tea-cup-container .circle {
  width: 92.9%;
  height: 83.3%;
  border-radius: 50%;
  background: linear-gradient(to left, #f9f9f9, #d9d9d9);
  overflow: hidden;
}

.tea-cup-container .tea {
  background: linear-gradient(#c57e65, #e28462);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin-top: 7.1%;
}

.tea-cup-container .handle {
  width: 35%;
  aspect-ratio: 5 / 9;
  margin-left: auto;
  margin-right: -30%;
  margin-top: -2%;
}

.tea-cup-container .handle path {
  fill: #dcdcdc;
}

.tea-cup-container .handle > svg {
  width: 100%;
  height: 100%;
}

.tea-cup-container .plate {
  position: relative;
  background: green;
  margin-top: -32%;
  width: 100%;
  aspect-ratio: 5 / 2;
  background: linear-gradient(to right, #f9f9f9, #e7e7e7);
  border-radius: 50%;
  box-shadow: 0 35px 35px rgba(0, 0, 0, 0.2);
}

.tea-cup-container .plate::before {
  content: "";
  position: absolute;
  top: 3%;
  left: 2%;
  right: 2%;
  bottom: 3%;
  border-radius: 50%;
  background: linear-gradient(to left, #f9f9f9, #e7e7e7);
}

.tea-cup-container .plate::after {
  content: "";
  position: absolute;
  top: 6%;
  left: 6%;
  right: 6%;
  bottom: 6%;
  border-radius: 50%;
  background: radial-gradient(rgba(0, 0, 0, 0.2) 25%, transparent, transparent);
}

.tea-cup-container .vapour {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  padding: 0 7%;
  /* background-color: rgba(0, 255, 0, 0.5); */
}

.tea-cup-container .vapour span {
  position: relative;
  bottom: 0px;
  display: block;
  margin-top: 0px;
  margin-bottom: 16.7%;
  width: 6%;
  aspect-ratio: 1 / 9;
  background: white;
  border-radius: 50%;
  opacity: 0;
  filter: blur(10px);
  animation: vapour-animate 5s linear infinite;
  animation-delay: calc(var(--i) * -0.5s);
}

@keyframes vapour-animate {
  0% {
    transform: translateY(0) scaleX(1) rotate(0deg);
  }
  15% {
    opacity: 1;
  }
  50% {
    transform: translateY(-125%) scaleX(5) rotate(calc((var(--i) - 10) * -2deg));
  }
  95% {
    opacity: 0;
  }
  100% {
    transform: translateY(-250%) scaleX(10) rotate(calc((var(--i) - 10) * 2deg));
    opacity: 0;
  }
}
</style>
