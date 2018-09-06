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
			<div class="tile">
				<div class="tile column main2">
					<div class="column is-6">
						<div id="echarts1" style="width: 300px;height: 200px;"></div>
						<div>昨日 29805</div>
						<div>环比增长 -18.5%<img src="../assets/下箭头.png" height="20px" width="20px"></div>
					</div>
					<div class="column is-6">
						<div class="">目标值   55000(+10.0%<img src="../assets/上箭头.png" height="20px" width="20px">)</div>
						<div class="">上月    5000</div>
						<div class="">今日销售进度   54%(+12.5%<img src="../assets/上箭头.png" height="20px" width="20px">)</div>
						<div class="">昨日销售进度    48%</div>
						<div class="">优惠金额     5300(-23.8%<img src="../assets/下箭头.png" height="20px" width="20px">)</div>
						<div class="">昨日     6800</div>
					</div>
				</div>
				<div class="tile column main2">
					<div class="column is-6">
						<div id="echarts2" style="width: 300px;height: 200px;"></div>
						<div>昨日 29805</div>
						<div>环比增长 -18.5%<img src="../assets/下箭头.png" height="20px" width="20px"></div>
					</div>
					<div class="column is-6">
						<div class="">畅销商品数   55000(+10.0%<img src="../assets/上箭头.png" height="20px" width="20px">)</div>
						<div class="">昨日    5000</div>
						<div class="">滞销商品数   54%(+12.5%<img src="../assets/上箭头.png" height="20px" width="20px">)</div>
						<div class="">昨日    48%</div>
						<div class="">活动商品数     5300(-23.8%<img src="../assets/下箭头.png" height="20px" width="20px">)</div>
						<div class="">昨日     6800</div>
					</div>
				</div>
			</div>
			<div class="tile">
				<div class="tile column main2">
					<div id="echarts3" style="width: 580px;height: 200px;"></div>
				</div>
				<div class="tile column main2">
					<div id="echarts4" style="width: 580px;height: 200px;"></div>
				</div>
			</div>
		</div>
		<table class="table is-bordered">
			<thead>
			    <tr>
			      <th><abbr title="Position">时间</abbr></th>
			      <th>目标销售额</th>
			      <th><abbr title="Played">目标销售额环比</abbr></th>
			      <th><abbr title="Won">销售额</abbr></th>
			      <th><abbr title="Drawn">销售额环比</abbr></th>
			      <th><abbr title="Lost">销售进度</abbr></th>
			      <th><abbr title="Goals for">销售进度环比</abbr></th>
			      <th><abbr title="Goals against">优惠金额</abbr></th>
			      <th><abbr title="Goal difference">优惠金额环比</abbr></th>
			      <th><abbr title="Points">销量</abbr></th>
			      <th><abbr title="Points">销量环比</abbr></th>
			      <th><abbr title="Points">畅销商品数</abbr></th>
			      <th><abbr title="Points">畅销商品数环比</abbr></th>
			      <th><abbr title="Points">滞销商品数</abbr></th>
			      <th><abbr title="Points">滞销商品数环比</abbr></th>
			      <th><abbr title="Points">活动商品数</abbr></th>
			      <th><abbr title="Points">活动商品数环比</abbr></th>
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
			      <td>68</td>
			      <td>36</td>
			      <td>+32</td>
			      <td>81</td>
			      <td>81</td>
			    </tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import Datepicker from 'vue-bulma-datepicker'

export default {
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
    this.$nextTick(function () {
      this.drawGauge('echarts1','#0093ee')
      this.drawGauge('echarts2','#ca8622')
      this.drawLine('echarts3')
      this.drawLine('echarts4')
    })
  },
  methods: {
    drawGauge (id, color) {
      this.charts = this.$echarts.init(document.getElementById(id))
      this.charts.setOption({
        backgroundColor: 'rgba(0, 0, 0, 0)',
        title: {
          text: ''
        },
        toolbox: {
          feature: {
            // saveAsImage: {}
          }
        },
        series: [
          {
            name: '内圈小',
            type: 'gauge',
            pointer: {
              show: false
            },
            radius: '70%',
            startAngle: 200,
            endAngle: -20,
            splitNumber: 4,
            axisLine: { // 坐标轴线
              lineStyle: { // 属性lineStyle控制线条样式
                color: [
                  [1, '#bfcbd9']
                ],
                width: 30
              }
            },
            splitLine: { // 分隔线样式
              show: false,
            },
            axisLabel: { //刻度标签
              show: false,
            },
            axisTick: { //刻度样式
              show: false,
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 60,
              offsetCenter:[0, '20%'],
              formatter: '{value}件',
              color: '#ca8622'
            },
            data: [{
                value: 14264,
                name: ''
            }]
          }, {
            name: '内圈小',
            type: 'gauge',
            title : {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 30,
                fontStyle: 'italic',
                 offsetCenter: [0, '33%'],
            },
            pointer:{
              show: false,  
            },
            radius: '70%',
            startAngle: 200,
            endAngle: 50,
            splitNumber: 4,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [1, color]
                    ],
                    width: 30,
                    shadowColor: color, //默认透明
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 40,
                    opacity: 1,
                }
            },
            splitLine: { //分隔线样式
                show: false,
            },
            axisLabel: { //刻度标签
                show: false,
            },
            axisTick: { //刻度样式
                show: false,
            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 60,
                offsetCenter:[0, '20%'],
                formatter: '{value}件',
                color: color,
            },
            data: [{
                value: 14264,
                name: '',
            }]
          }, 
        ]
      })
    },
    drawLine(id){
    	this.charts = this.$echarts.init(document.getElementById(id))
      	this.charts.setOption({
		    title: {
		        text: '销售额'
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['本周','上周','同比增长']
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    toolbox: {
		        feature: {
		            // saveAsImage: {}
		        }
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['周一','周二','周三','周四','周五','周六','周日']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [
		        {
		            name:'本周',
		            type:'line',
		            stack: '总量',
		            data:[120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name:'上周',
		            type:'line',
		            stack: '总量',
		            data:[220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name:'同比增长',
		            type:'line',
		            stack: '总量',
		            data:[150, 232, 201, 154, 190, 330, 410]
		        }
		    ]
		})
    }
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
