<template>
  <div class="duibi">
    <div>
      源文件地址：<el-input class="inputValue" v-model="input1" ref="input1">
        placeholder="源文件地址"></el-input
      >
      目标文件地址：<el-input class="inputValue" v-model="input2" ref="input2">
        placeholder="对比目标文件地址"></el-input
      >
    </div>
  <!-- <div> -->
      <!-- 差异数据保存地址:<el-input class="inputValue" v-model="column2" ref="column2">
        placeholder="KEY:伙伴工号"></el-input
      >
    </div> -->
    <div>
      共有列(KEY):<el-input class="inputValue" v-model="column1" ref="column1">
        placeholder="KEY:伙伴工号"></el-input
      > CSV/EXCEL:<el-input class="inputValue" v-model="oror" ref="oror">
        placeholder="CSV/EXCEL"></el-input
      >
    </div> 
    <div>
      <el-button
        round
        @click="getDuibi"
        style="word-break: break-all; width: 200px"
      >
        对比</el-button
      >
    </div>
    <textarea name="" id="" v-model="reText" ref="reText" cols="300" rows="50">asd</textarea>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      input1: "/Users/tayli/Desktop/project/python/薪资数据20210208.xlsx",
      input2: "/Users/tayli/Desktop/project/python/SF.xlsx",
      oror: "xlsx",
      column1: "员工编号",
      reText:'return'
    };
  },
  methods: {
    getDuibi: function () {
      var that=this
      console.log(this.$refs.input1.value + " 成功!");
      var params = [
        {
          a1: this.$refs.input1.value,
          a2: this.$refs.input2.value,
          column1: this.$refs.column1.value, 
          oror: this.$refs.oror.value, 
        },
      ];
      this.$axios({
        method: "post",
        url: "/api/contrast/",
        contentType: "application/x-www-form-urlencoded",
        data: params,
      }).then(function (response) {
        console.log(response);
        that.$data.reText=response.data
         
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.duibi {
  color: #42b983;
}
.inputValue {
  width: 500px;
  position: relative;
}
</style>
