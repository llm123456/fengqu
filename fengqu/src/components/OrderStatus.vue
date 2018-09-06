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
				订单漏斗
			</div>
		</div>
		<div class="main">
			<div class="tile" style="height: 300px">
				订单分析
			</div>
		</div>
		<div class="main">
			<div class="tile" style="height: 300px">
				客单分析分析
			</div>
		</div>
		<table class="table is-bordered">
			<thead>
			    <tr>
			      <th><abbr title="Position">时间</abbr></th>
			      <th>访问用户数</th>
			      <th><abbr title="Played">实收金额</abbr></th>
			      <th><abbr title="Won">实收金额环比</abbr></th>
			      <th><abbr title="Drawn">订单总金额</abbr></th>
			      <th><abbr title="Lost">订单总金额环比</abbr></th>
			      <th><abbr title="Goals for">订单总数</abbr></th>
			      <th><abbr title="Goals against">订单总数环比</abbr></th>
			      <th><abbr title="Goal difference">有效订单数</abbr></th>
			      <th><abbr title="Points">有效订单数环比</abbr></th>
			      <th><abbr title="Points">无效订单数</abbr></th>
			      <th><abbr title="Points">无效订单数环比</abbr></th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <th>1</th>
			      <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
			      </td>
			      <td>38</td>
			      <td>23</td>
			      <td>12</td>
			      <td>3</td>
			      <td>68</td>
			      <td>36</td>
			      <td>+32</td>
			      <td>81</td>
			      <td>12</td>
			      <td>3</td>
			    </tr>
			</tbody>
		</table>
		<table class="table is-bordered">
			<thead>
			    <tr>
			      <th><abbr title="Position">时间</abbr></th>
			      <th>客单价0-20有效订单数</th>
			      <th><abbr title="Played">客单价20-50有效订单数</abbr></th>
			      <th><abbr title="Won">客单价50-100有效订单数</abbr></th>
			      <th><abbr title="Drawn">客单价100以上有效订单数</abbr></th>
			      <th><abbr title="Lost">客单数1件有效订单数</abbr></th>
			      <th><abbr title="Goals for">客单数2件有效订单数</abbr></th>
			      <th><abbr title="Goals against">客单数3件有效订单数</abbr></th>
			      <th><abbr title="Goal difference">客单数4-5件有效订单数</abbr></th>
			      <th><abbr title="Points">客单数5件以上有效订单数</abbr></th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <th>1</th>
			      <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
			      </td>
			      <td>38</td>
			      <td>23</td>
			      <td>12</td>
			      <td>3</td>
			      <td>68</td>
			      <td>36</td>
			      <td>+32</td>
			      <td>81</td>
			    </tr>
			</tbody>
		</table>
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
