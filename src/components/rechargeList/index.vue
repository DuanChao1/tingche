<template>
	<header>
		<span class="return" v-on:click="returnTo()"></span>
		<p>我要充值</p>
	</header>
	<section>
		<div class="listBox">
			<div class="time">
				<p class="timeNum">200</p>
				<p class="timeText">小时</p>
			</div>
			<div class="timeInfo">
				<p class="parkTime">200小时畅停</p>
				<p class="addTime">另送15小时</p>
			</div>
			<div class="price">
				<p class="priceNum">￥2000</p>
				<p>立即购买</p>
			</div>
		</div>
		<div class="listBox">
			<div class="time">
				<p class="timeNum">200</p>
				<p class="timeText">小时</p>
			</div>
			<div class="timeInfo">
				<p class="parkTime">200小时畅停</p>
				<p class="addTime">另送15小时</p>
			</div>
			<div class="price">
				<p class="priceNum">￥2000</p>
				<p>立即购买</p>
			</div>
		</div>
		<div class="listBox">
			<div class="time">
				<p class="timeNum">200</p>
				<p class="timeText">小时</p>
			</div>
			<div class="timeInfo">
				<p class="parkTime">200小时畅停</p>
				<p class="addTime">另送15小时</p>
			</div>
			<div class="price">
				<p class="priceNum">￥2000</p>
				<p>立即购买</p>
			</div>
		</div>
	</section>
</template>
<script>
export default{
  	data () {
    	return {
    	}
  	},
  	ready: function () {
  		document.setTitle('充值')
  	},
   	methods: {
   		returnTo () {
   			window.history.back()
   		},
  	}
}
</script>
<style scoped>
.listBox{
	margin: .15rem;
	height: 1.05rem;
	background: url('../../../static/images/rechargeList_bg.png');
	background-size: 100% 100%;
	overflow: hidden;
}
.time{
	width: .8rem;
    text-align: center;
    height: .84rem;
    margin: .08rem 0;
    border-right: 1px dashed #d8d8d8;
    float: left;
}
.timeNum{
	margin-top: .1rem;
	font-size: .3rem;
	color: #333333;
}
.timeText{
	font-size: .12rem;
	color: #a0a0a0;
}
.timeInfo{
	margin-left: .15rem;
    float: left;
    margin-top: .28rem;
}
.parkTime{
	font-size: .16rem;
	color: #333333;
}
.addTime{
	font-size: .12rem;
	color: #ff9037;
}
.price{
	width: .96rem;
	float: right;
	height: 1.01rem;
	background: url('../../../static/images/price_bg.png');
	background-size: 100% 100%;
	text-align: center;
    font-size: .13rem;
    color: #fff;
}
.price .priceNum{
	margin-top: .26rem;
	font-size: .18rem;
}
</style>
