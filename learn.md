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