<template>
	<div style="background-color: white">
		<div class="title">Wow数据看板</div>
		<div class="tile is-ancestor">
			<div class="tile is-parent is-5">
				<a class="button is-normal">商圈</a>
				<div class="control">
	                <div class="select is-fullwidth">
	                  <select v-model="selected1">
	                    <option v-for="mode in modes" :value="mode.value">{{mode.name}}</option>
	                  </select>
	                </div>
	              </div>
	         </div>
	         <div class="tile is-parent is-5">
`	        	<a class="button is-normal">店铺</a>
				<div class="control">
	                <div class="select is-fullwidth">
	                  <select v-model="selected2">
	                    <option v-for="mode in modes2" :value="mode.value">{{mode.name}}</option>
	                  </select>
	                </div>
	              </div>
	        </div>
	    </div>
	    <div class="tile column">
		        <p class="control column is-4">
		            <datepicker :inputClass="{ test: true }" :config="{ wrap: true }" readonly>
			            <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
			            <a class="button" data-clear><i class="fa fa-close"></i></a>
			          </datepicker>
		        </p>
		        <div class="control column is-2">
	                <div class="select is-fullwidth">
	                  <select v-model="selected3">
	                    <option value="0">类目1</option>
	                  </select>
	                </div>
	              </div>
	             <div class="column is-2 is-offset-4">
		              <a class="button is-normal">天</a>
		              <a class="button is-normal">周</a>
		              <a class="button is-normal">月</a>
	              </div>
		</div>
		<div class="main">
			<div class="tile" style="height: 300px">
				<div class="column is-2">
					畅销排行榜
	              </div>
				<div class="column is-2 is-offset-4">
					商品名称<input class="input" type="text" placeholder="" style="width:120px">
	              </div>
	              <div class="column is-2">
					商品编号<input class="input" type="text" placeholder="" style="width:120px">
	              </div>
	              <div class="column is-1">
					<a class="button is-normal">搜索</a>
	              </div>
			</div>
			<div class="tile" style="height: 300px">
				<div class="column is-2">
					滞销排行榜
	              </div>
			</div>
		</div>
	</div>	
</template>
<script>
import Datepicker from 'vue-bulma-datepicker'
export default{
  components: {
    Datepicker
  },
  data () {
    return {
      modes: [
        {name: '全部', value: 0},
        {name: '重庆解放碑商圈', value: 1},
        {name: '贵阳商圈', value: 2}],
      selected1: 0,
      modes2: [
        {name: '全部', value: 0},
        {name: '重庆解放碑商圈', value: 1},
        {name: '贵阳商圈', value: 2}],
      selected2: 0,
      selected3: 0,
      value: '2016-12-12'
    }
  },
  mounted () {
  },
  watch: {
  }
}
</script>
<style scoped>
.tile.is-parent {
  min-width: 50%;
}
.main{
	position: relative;
	border:1px solid grey;
}
.main2{
	border:0px;
	margin:10px 10px;
	background-color: #f2f2f2;
}
.table{
	margin-top:40px;
}	
</style>
