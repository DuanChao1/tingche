<template>
	<header class="white_bg">
		<span class="return" v-on:click="returnTo()"></span>
		<p>充值记录</p>
	</header>
	<div class="banner"><img src="../../../static/images/banner_recharge.jpg" /></div>
	<div class="record">
		<div class="leftLine"></div>
		<div class="record_list">
			<div class="ico_recharge">
				<div class="recharge"><img src="../../../static/images/ico_recharge.png" /></div>
			</div>
			<p><span>充值时间：</span>2017年05月03日15:36</p>
			<div class="recordBox">
				<div class="recordLeft">
					<p class="price"><span>￥</span>350</p>
					<p class="priceText">充值金额</p>
				</div>
				<div class="recordRight">
					<p class="time">100小时畅停</p>
					<p class="addTime">另送5小时</p>
				</div>
			</div>
		</div>
		<div class="record_list">
			<div class="ico_recharge">
				<div class="recharge"><img src="../../../static/images/ico_recharge.png" /></div>
			</div>
			<p><span>充值时间：</span>2017年05月03日15:36</p>
			<div class="recordBox">
				<div class="recordLeft">
					<p class="price"><span>￥</span>350</p>
					<p class="priceText">充值金额</p>
				</div>
				<div class="recordRight">
					<p class="time">100小时畅停</p>
					<p class="addTime">另送5小时</p>
				</div>
			</div>
		</div>
	</div>
	<div class="promptBox">
		<span class="prompt"></span>
		<span class="promptText">温馨提示：</span>
		如需开具发票，请致电4000-123-868
	</div>
</template>
<script>
export default{
  	data () {
    	return {
    	}
  	},
  	ready: function () {
  		document.setTitle('充值记录')
  		document.body.style.background = '#fff'
  	},
   	methods: {
   		returnTo () {
   			window.history.back()
   		},
  	}
}
</script>
<style scoped>
.white_bg>.return{
	background: url('../../../static/images/ico-leftBlue.png');
	background-size: 100% 100%;
}
.white_bg>p{
	color: #1aa2ff;
}

.leftLine{
	position: absolute;
	top: 0;
    bottom: 0;
    z-index: -1;
	left: .32rem;
	border-right: 1px solid #dbdbdb;
}
.record_list{
	margin-top: .28rem;
}
.recharge{
	display: inline-block;
	width: .19rem;
	height: .15rem;
}
.ico_recharge{
	display: inline-block;
	width: .32rem;
	height: .32rem;
	text-align: center;
	line-height: .28rem;
    border: 1px solid #dbdbdb;
    border-radius: .32rem;
    margin-left: .16rem;
    margin-right: .14rem;
    background: #fff; 
}
.record_list>p{
	display: inline-block;
	font-size: .14rem;
	color: #333;
}
.record_list>p>span{
	color: #999;
}
.recordBox{
	height: .9rem;
	margin-left: .62rem;
	margin-right: .15rem;
	margin-top: .04rem;
	background: url('../../../static/images/list_bg.png');
	background-size: 100% 100%;
}
.recordBox .recordLeft{
	float: left;
    height: .9rem;
    display: table;
    width: 33%;
    text-align: center;
}
.recordBox .recordLeft .price{
	display: table-cell;
    vertical-align: bottom;
	color: #fa4a11;
	font-size: .27rem;
}
.recordBox .recordLeft .price>span{
	font-size: .15rem;
}
.recordBox .recordLeft .priceText{
	display: table-row;
    vertical-align: middle;
    font-size: .1rem;
    color: #999999;
}
.recordBox .recordRight{
	float: left;
    height: .9rem;
    display: table;
    width: 67%;
    padding: .17rem .18rem;
}
.recordBox .recordRight .time{
	font-size: .14rem;
	color: #333333;
}
.recordBox .recordRight .addTime{
	font-size: .12rem;
	color: #666666;
}

.promptBox{
	position: absolute;
    bottom: .14rem;
    left: .62rem;
    margin-top: .2rem;
	font-size: .11rem;
	color: #999999;
}
.prompt{
	display: inline-block;
	width: .17rem;
	height: .17rem;
	background: url('../../../static/images/prompt.png');
	background-size: 100% 100%;
	vertical-align: -4px;
    margin-right: 4px;
}
.promptText{
	font-size: .11rem;
	color: #ff9037;
}
</style>
