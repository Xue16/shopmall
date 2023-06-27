<template>
  <div class="pagination">
    <button :disabled="pageNo==1"  @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button  v-if="startAndEnd.start>1" @click="$emit('getPageNo',1)" :class="{active: pageNo==1}">1</button>
    <button v-if="startAndEnd.start>2">···</button>


    <button v-for="(page) in startAndEnd.end" :key="page" v-if="page>=startAndEnd.start" @click="$emit('getPageNo',page)" :class="{active: pageNo==page}">{{page}}</button>

    <button v-if="startAndEnd.end<totalPage-1">···</button>
    <button v-if="startAndEnd.end<totalPage" @click="$emit('getPageNo',totalPage)" :class="{active: pageNo==totalPage}">{{totalPage}}</button>
    
    <button  @click="$emit('getPageNo',PageNo+1)" :disabled="pageNo==totalPage">下一页</button> 
    <button style="margin-left: 30px">共{{total}}条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props:['pageNo',"pageSize","total","continues"],
    computed:{
      totalPage(){
        return Math.ceil(this.total/this.pageSize)
      },
      startAndEnd(){
        const {continues,pageNo,totalPage } =this
        let start=0, end=0
        if(continues>totalPage){
           start = 1,
           end = totalPage
        }else{
          start = this.pageNo - parseInt(continues/2)
          end = this.pageNo + parseInt(continues/2)
          if(start<1){
            start = 1
            end = continues
          }
          if(end>totalPage){
            end =totalPage;
            start = totalPage-continues+1
          }
        }
        return {start,end}
      }
    },
    // watch:{
		// 	pageNo:{
		// 		// 此处监听variable变量，当期有变化时执行
		// 		handler(item1,item2){
		// 			// item1为新值，item2为旧值
    //       item2=item1
    //       return item2
		// 		}
		// 	}
		// }
  }
</script>

<style lang="less" scoped>
  .pagination {
    text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>