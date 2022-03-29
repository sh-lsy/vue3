## VUE基础
### v-bind

缩写 :

v-bind用于绑定一个或多个属性值，或者向另一个组件传递props值
#### v-bind 绑定class
对象
```vue
  <template id="my-app">
    <div :class="className">哈哈哈哈</div>
    <!-- 对象语法: {'active': boolean} -->
    <div :class="{'active': isActive}">呵呵呵呵</div>
    <button @click="toggle">切换</button>

    <!-- 也可以有多个键值对 -->
    <div :class="{active: isActive, title: true}">呵呵呵呵</div>

    <!-- 默认的class和动态的class结合 -->
    <div class="abc cba" :class="{active: isActive, title: true}">
      呵呵呵呵
    </div>

    <!-- 将对象放到一个单独的属性中 -->
    <div class="abc cba" :class="classObj">呵呵呵呵</div>

    <!-- 将返回的对象放到一个methods(computed)方法中 -->
    <div class="abc cba" :class="getClassObj()">呵呵呵呵</div>      
  </template>
```
数组
```vue
<template id="my-app">
  <div :class="['abc', title]">哈哈哈哈</div>
  <div :class="['abc', title, isActive ? 'active': '']">哈哈哈哈</div>
  <div :class="['abc', title, {active: isActive}]">哈哈哈哈</div>
</template>
```
#### v-bind 绑定style
```vue
  <template id="my-app">
    <!-- :style="{cssPropertyName: cssPropertyValue}" -->
    <div :style="{color: finalColor, 'font-size': '30px'}">哈哈哈哈</div>
    <div :style="{color: finalColor, fontSize: '30px'}">哈哈哈哈</div>
    <div :style="{color: finalColor, fontSize: finalFontSize + 'px'}">哈哈哈哈</div>

    <!-- 绑定一个data中的属性值, 并且是一个对象 -->
    <div :style="finalStyleObj">呵呵呵呵</div>
    <!-- 调用一个方法 -->
    <div :style="getFinalStyleObj()">呵呵呵呵</div>
  </template>

  <script>
    const App = {
      template: '#my-app',
      data() {
        return {
          message: "Hello World",
          finalColor: 'red',
          finalFontSize: 50,
          finalStyleObj: {
            'font-size': '50px',
            fontWeight: 700,
            backgroundColor: 'red'
          }
        }
      },
      methods: {
        getFinalStyleObj() {
          return {
            'font-size': '50px',
            fontWeight: 700,
            backgroundColor: 'red'
          }
        }
      }
  </script>
```

### v-on

缩写: @	

修饰符

- .stop - 调用 event.stopPropagation()。
- .prevent - 调用 event.preventDefault()。
-  .capture - 添加事件侦听器时使用 capture 模式。
- .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
- .{keyAlias} - 仅当事件是从特定键触发时才触发回调。
-  .once - 只触发一次回调。
- .left - 只当点击鼠标左键时触发。
- .right - 只当点击鼠标右键时触发。
- .middle - 只当点击鼠标中键时触发。
- .passive - { passive: true } 模式添加侦听器

### v-if v-else v-else-if

v-if的渲染原理

- v-if是惰性的；
- 当条件为false时，其判断的内容完全不会被渲染或者会被销毁掉
- 当条件为true时，才会真正渲染条件块中的内容

### v-show

v-show元素无论是否需要显示到浏览器上，它的DOM实际都是有渲染的，只是通过CSS的display属性来进行 切换

### v-show和v-if的区别

- 用法区别
  - v-show是不支持template
  - v-show不可以和v-else一起使用
- 本质的区别
  - v-show元素无论是否需要显示到浏览器上，它的DOM实际都是有渲染的，只是通过CSS的display属性来进行 切换
  - v-if当条件为false时，其对应的原生压根不会被渲染到DOM中
- 开发选择
  - 如果我们的原生需要在显示和隐藏之间频繁的切换，那么使用v-show
  - 如果不会频繁的发生切换，那么使用v-if
  - 权限判断等操作必须使用v-if

### v-for

- v-for的基本格式是 "item in 数组" "(item, index) in 数组"
- v-for也支持遍历对象，并且支持有一二三个参数
  - "(value, key, index) in object"

### 数组更新检测

Vue 将被侦听的数组的变更方法进行了包裹(重写），所以它们也将会触发视图更新

- ppush()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

### v-for中的key是什么作用？

- key属性主要用在Vue的虚拟DOM算法，在新旧nodes对比时辨识VNodes；
- 如果不使用key，Vue会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法
- 而使用key时，它会基于key的变化重新排列元素顺序，并且会移除/销毁key不存在的元素

### computed 和methods区别

- 计算属性有缓存，多次使用只执行一次
- 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变

### computed和watch之间的区别

- computed能完成的功能，watch都可以完成
- watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作

### v-model 收集表单数据

- <input type="text"/>，则v-model收集的是value值，用户输入的就是value值
- <input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。
- <input type="checkbox"/>
  - 没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）
  - 配置input的value属性
    - v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
    - v-model的初始值是数组，那么收集的的就是value组成的数组

v-model的三个修饰符：

- lazy：失去焦点再收集数据
- number：输入字符串转为有效的数字
- trim：输入首尾空格过滤