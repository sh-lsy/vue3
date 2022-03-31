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

### 组件通信

#### 父子组件之间通信的方式

- 父组件传递给子组件：通过props属性

- 子组件传递给父组件：通过$emit触发事件

  - vue3 里面需要对emit进行注册 

    ```vue
    emits: {
          add: null,
          sub: null,
          addN: (num, name, age) => {
            if (num > 10) {
              return true
            }
            return false;
          }
        },
    ```

    

- 禁用Attribute继承和多根节点

  - 如果我们不希望组件的根元素继承attribute，可以在组件中设置 inheritAttrs: false

    ```vue
    <h2 v-bind="$attrs">{{title}}</h2>
    <h2 :class="$attrs.class">{{title}}</h2>
    ```

  - 多个根节点的attribute(多个根节点的attribute如果没有显示的绑定，那么会报警告，我们必须手动的指定要绑定到哪一个属性上：)

    ```vue
    <template>
      <h2>MultiRootElement</h2>
      <h2>MultiRootElement</h2>
      <h2 :id="$attrs.id">MultiRootElement</h2>
    </template>
    ```

#### 非父子组件的通信

- Provide/Inject
  - Provide/Inject用于非父子组件之间共享数据
- Mitt全局事件总线（vue3 移除了vue实例 事件总线）

### 插槽 slot

- 基本使用

  ```vue
    <div>
      <h2>组件开始</h2>
      <slot>
        <i>我是默认的i元素</i>
      </slot>
      <h2>组件结束</h2>
    </div>
  ```

- 具名插槽的使用

  ```vue
  <template>
    <div class="nav-bar">
      <!-- <slot name="default"></slot> -->
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
        <!-- 动态插槽 -->
      <div class="addition"> 
        <slot :name="name"></slot>
      </div>
    </div>
  </template>
  ```

  动态插槽

  v-slot:[dynamicSlotName]  

  父组件使用

  ```vue
  <template>
    <div>
      <nav-bar :name="name">
        <template #left>
          <button>左边的按钮</button>
        </template>
        <template #center>
          <h2>我是标题</h2>
        </template>
        <template #right>
          <i>右边的i元素</i>
        </template>
        <template #[name]>
          <i>why内容</i>
        </template>
      </nav-bar>
    </div>
  </template>
  ```

  slot缩写

  **(v-slot:) 替换为字符 #**

- 作用域插槽

  ```vue
  <template>
    <div>
      <template v-for="(item, index) in names" :key="item">
        <slot :item="item" :index="index"></slot>
      </template>
    </div>
  </template>
  
  <!-- 使用 -->
  <show-names :names="names">
    <template v-slot="coderwhy">
      <button>{{coderwhy.item}}-{{coderwhy.index}}</button>
    </template>
  </show-names>
  ```


### 动态组件

动态组件是使用 component 组件，通过一个特殊的attribute is 来实现

```vue
<component :is="currentTab"
  name="skye"
  :age="18"
  @pageClick="pageClick">
</component>
```

currentTab的值
- 通过component函数注册的组件
- 组件对象的components对象中注册的组件

### keep-alive

keep-alive有一些属性

- include - string | RegExp | Array。只有名称匹配的组件会被缓存
- exclude - string | RegExp | Array。任何名称匹配的组件都不会被缓存
- max - number | string。最多可以缓存多少组件实例，一旦达到这个数字，那么缓存组件中最近没有被访问的实例会被销毁

对于缓存的组件来说，再次进入时，我们是不会执行created或者mounted等生命周期函数的

- activated 进入
- deactivated 离开

### 异步组件

**defineAsyncComponent**

```vue
import { defineAsyncComponent } from 'vue';
const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"))
export default {
    components: {
      AsyncCategory,
    }
  }
```

也可后面跟对象

```vue
const AsyncCategory = defineAsyncComponent({
	loader: () => import("./AsyncCategory.vue"),
  // 加载过程显示的组件（自定义 loading）
  loadingComponent: Loading,
  // 加载失败时显示的组件
  errorComponent: Error,
  // 在loadingComponent的延迟 |默认值 200ms
  delay: 1000,
  // 定义组件是否可挂起， 默认为true
  suspensible: true
})
```

### $refs的使用

直接获取到元素对象或者子组件实例

### $parent和$root

### 在Vue3中已经移除了$children的属性，

### 生命周期

- beforeCreate
- created
- beforeMount
- mounted
- beforeUnmount
- unmounted
- beforeUpdate
- updated

### 组件v-model的实现

- 其 value attribute 绑定到一个名叫 modelValue 的 prop 上
- 新的值通过自定义的 update:modelValue 事件抛出

多个v-model

```vue
<template>
  <div>
    <input type="text" v-model="myvalue">
    <input type="text" v-model="myTitle">
  </div>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    myvalue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    myTitle: {
      get() {
        return this.title
      },
      set(value) {
        this.$emit('update:title', value)
      }
    }
  }
}
</script>
```

使用

```vue
<my-input-vue v-model="msg" v-model:title="title" />
```

### 动画

#### transition

Vue 提供了 transition 的封装组件

过渡动画class

- v-enter-from
- v-enter-active
- v-enter-to
- v-leave-from
- v-leave-active
- v-leave-to

显示的指定动画时间    **通过 duration 属性**

过渡的模式mode

- in-out: 新元素先进行过渡，完成之后当前元素过渡离开
- out-in: 当前元素先进行过渡，完成之后新元素过渡进入

appear初次渲染

可以通过以下 attribute 来自定义过渡类名：

- enter-from-class
- enter-active-class
- enter-to-class
- leave-from-class
- leave-active-class
- leave-to-class

transition组件给我们提供的JavaScript钩子

- beforeEnter
- enter
- afterEnter
- beforeLeave
- leave
- afterLeave

#### 列表的过渡

使用<transition-group>组件

- 默认情况下，它不会渲染一个元素的包裹器，但是你可以指定一个元素并以 tag attribute 进行渲染
- 过渡模式不可用，因为我们不再相互切换特有的元素
- 过渡模式不可用，因为我们不再相互切换特有的元素
- CSS 过渡的类将会应用在内部的元素中，而不是这个组/容器本身

第三方css库

- animate.css
- gsap

## composition api

### setup函数

主要有两个参数

- 第一个参数：props
- 第二个参数：context  包含以下属性
  - attrs：所有的非prop的attribute；
  - slots：父组件传递过来的插槽
  - emit：当我们组件内部需要发出事件时会用到emit

setup函数的返回值 ：setup的返回值可以在模板template中被使用

setup不可以使用this

- this并没有指向当前组件实例
- 在setup被调用之前，data、computed、methods等都没有被解析；

### Reactive

传入的是一个对象或者数组类型：

### Ref

在模板中引入ref的值时，Vue会自动帮助我们进行解包操作，所以我们并不需要在模板中通过 ref.value 的方式来使用(浅解析)

### readonly

readonly会返回原生对象的只读代理（也就是它依然是一个Proxy，这是一个proxy的set方法被劫持，并且不 能对其进行修改）

### Reactive判断的API

- isProxy
  - 检查对象是否是由 reactive 或 readonly创建的 proxy。
- isReactive
  - 检查对象是否是由 reactive创建的响应式代理
  - 如果该代理是 readonly 建的，但包裹了由 reactive 创建的另一个代理，它也会返回 true
- isReadonly
  - 检查对象是否是由 readonly 创建的只读代理。
- toRaw
  - 返回 reactive 或 readonly 代理的原始对象（不建议保留对原始对象的持久引用。请谨慎使用）
- shallowReactive
  - 创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套对象的深层响应式转换 (深层还是原生对象)
- shallowReadonly
  - 创建一个 proxy，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换（深层还是可读、可写的）。

### toRefs

如果我们使用ES6的解构语法，对reactive返回的对象进行解构获取值，那么之后无论是修改结构后的变量，还是修改reactive 返回的state对象，数据都不再是响应式的

```vue
const info = reactive({name: "why", age: 18})
let { name, age } = toRefs(info)
```

### toRef

如果我们只希望转换一个reactive对象中的属性为ref, 那么可以使用toRef的方法

```vue
 let age = toRef(info, "age");
```

### ref其他的API

- unref
  - 如果参数是一个 ref，则返回内部值，否则返回参数本身
  - val = isRef(val) ? val.value : val 的语法糖函数
- isRef
  - 判断值是否是一个ref对象
- shallowRef
  - 创建一个浅层的ref对象
- triggerRef
  - 手动触发和 shallowRef 相关联的副作用

### customRef

创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显示控制

- 需要一个工厂函数，该函数接受 track 和 trigger 函数作为参数
- 返回一个带有 get 和 set 的对象；

```vue
import { customRef } from 'vue';

// 自定义ref
export default function(value, delay = 300) {
  let timer = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      }
    }
  })
}
```

### computed

- 接收一个getter函数，并为 getter 函数返回的值，返回一个不变的 ref 对象
- 接收一个具有 get 和 set 的对象，返回一个可变的（可读写）ref 对象

### watchEffect

- watchEffect传入的函数会被立即执行一次，并且在执行的过程中会收集依赖
- 只有收集的依赖发生变化时，watchEffect传入的函数才会再次执行

watchEffect的停止侦听

- 获取watchEffect的返回值函数，调用该函数即可

watchEffect清除副作用

- 给watchEffect传入的函数被回调时，其实可以获取到一个参数：onInvalidate

  ```vue
  const stop = watchEffect((onInvalidate) => {
          const timer = setTimeout(() => {
            console.log("网络请求成功~");
          }, 2000)
  
          // 根据name和age两个变量发送网络请求
          onInvalidate(() => {
            // 在这个函数中清除额外的副作用
            // request.cancel()
            clearTimeout(timer);
            console.log("onInvalidate");
          })
          console.log("name:", name.value, "age:", age.value);
        });
  ```

  **setup中使用ref**

```vue
<template>
  <div>
    <h2 ref="el">{{ msg }}</h2>
  </div>
</template>
<script>
import { ref, watchEffect } from "vue"
export default {
  setup() {
    const msg = ref('watch msg')
    const el = ref(null)
    watchEffect(() => {
      console.log(el.value)
    }, {
        flush: "post"
    })

    return {
      msg,
      el,
    }
  }
}
</script>
```

### Watch的使用

- 侦听watch时,传入一个getter函数

- 传入一个可响应式对象: reactive对象/ref对象

  - reactive对象获取到的newValue和oldValue本身都是reactive对象

    - 如果希望newValue和oldValue是一个普通的对象

      ```js
      watch(() => ({...person}), (val, oldVal) => {
        console.log("val:", val, "oldVal",oldVal);
      })
      ```

      

  - ref对象获取newValue和oldValue是value值的本身

- watch 传入ractive对象 默认开启deep

  - watch第三个参数可以开启immediate， deep



## webpack

```js
const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
module.exports = {
  target: "web",
  // 设置模式
  // development 开发阶段, 会设置development
  // production 准备打包上线的时候, 设置production
  mode: "development",
  // 设置source-map, 建立js映射文件, 方便调试代码和错误
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  devServer: {
    // contentBase: "./public", // 已经弃用
    static: { // 打包的资源没有时， 从这里获取
      directory: path.join(__dirname, './public'),
    },
    hot: true, // 模块热替换
    // host: "0.0.0.0",
    port: 5000,
    open: true,
    // compress: true,   // 压缩 是否为静态文件开启gzip
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": ""
        },
        secure: false, // 默认情况下不接收转发到https的服务器上，如果希望支持，可以设置为false
        changeOrigin: true // 表示是否更新代理后请求的headers中host地址
      }
    }
  },
  resolve: {
    extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx", ".tsx"],
    alias: { // 添加别名
      "@": path.resolve(__dirname, "./src"),
      "js": path.resolve(__dirname, "./src/js")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer")
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      },
      //  不单独使用babel.config.js外部配置
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       // plugins: [
      //       //   "@babel/plugin-transform-arrow-functions",
      //       //   "@babel/plugin-transform-block-scoping",
      //       // ]
      //       presets: [
      //         "@babel/preset-env"
      //       ]
      //     }
      //   }
      // }
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "test"
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "public",
    //       to: "./", // 可以不写
    //       globOptions: { // 忽略文件
    //         ignore: [
    //           "**/index.html"
    //         ]
    //       }
    //     }
    //   ]
    // }),
    new VueLoaderPlugin()
  ]
}
```