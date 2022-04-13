<template>
  <canvas id="Mycanvas" ref="canvas" width="1000" height="600"></canvas>
</template>
<script lang="ts" setup>
import { onMounted } from "vue"

function getColor() {
  let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
  let color = "#"
  for (let i = 0; i < 6; i++) {
    let j = Math.floor(arr.length * Math.random())
    color += arr[j]
  }
  return color
}

onMounted(() => {
  let canvas = document.getElementById("Mycanvas")
  let ctx = (canvas as any).getContext("2d")
  let width = (canvas as any).width as number
  let height = (canvas as any).height as number
  let ballArr: Ball[] = []
  class Ball {
    x: number
    y: number
    r: number
    color: string
    dx: number
    dy: number
    index: number
    constructor() {
      this.x = Math.floor(Math.random() * width) + 20
      this.y = Math.floor(Math.random() * height) + 20
      this.r = Math.floor(Math.random() * 20 + 3)
      this.color = getColor()
      this.dx = Math.floor(Math.random() * 10) - 5
      this.dy = Math.floor(Math.random() * 10) - 5
      if (this.x < 800 && this.y < 600) {
        ballArr.push(this)
      }
      this.index = ballArr.length - 1
    }
    render() {
      ctx.beginPath()
      ctx.globalAlpha = 1
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
      ctx.fillStyle = this.color
      ctx.fill()
      for (let i = this.index; i < ballArr.length; i++) {
        if (Math.abs(ballArr[i].x - this.x) < 150 && Math.abs(ballArr[i].y - this.y) < 150) {
          ctx.strokeStyle = "#000"
          ctx.beginPath()
          ctx.globalAlpha =
            10 / Math.sqrt(Math.pow(ballArr[i].x - this.x, 2) + Math.pow(ballArr[i].y - this.y, 2))
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(ballArr[i].x, ballArr[i].y)
          ctx.closePath()
          ctx.stroke()
        }
      }
    }
    update() {
      this.x += this.dx
      this.y += this.dy
      if (this.x < this.r || this.x > width - this.r) {
        this.dx = -this.dx
      }
      if (this.y < this.r || this.y > height - this.r) {
        this.dy = -this.dy
      }
    }
  }
  for (let i = 0; i < 20; i++) {
    new Ball()
  }
  setInterval(() => {
    ctx.clearRect(0, 0, width, height)
    for (let i = 0; i < ballArr.length; i++) {
      ballArr[i].update()
      ballArr[i].render()
    }
  }, 16)
})
</script>
<style scoped lang="less"></style>
