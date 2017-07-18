<template>
	<header class="white_bg">
		<span class="return" v-on:click="returnTo()"></span>
		<p>停车记录</p>
	</header>
	<div class="banner"><img src="../../../static/images/banner_parking.jpg" /></div>
	<div class="record">
		<div class="leftLine"></div>
		<div class="record_list">
			<div class="ico_recharge">
				<div class="recharge"><img src="../../../static/images/ico_parking.png" /></div>
			</div>
			<p class="date">2016年12月31日</p>
			<p class="address">望京SOHO</p>
			<p class="date-info date-first">进场时间： <span>07:31</span></p>
			<p class="date-info">离场时间： <span>08:59</span></p>
			<div class="recordBox">
				<p>补贴时长： <span>4小时6分钟</span></p>
				<p>停车时长： <span>8小时12分钟</span></p>
			</div>
		</div>
		<div class="record_list">
			<div class="ico_recharge">
				<div class="recharge"><img src="../../../static/images/ico_parking.png" /></div>
			</div>
			<p class="date">2016年12月31日</p>
			<p class="address">望京SOHO</p>
			<p class="date-info date-first">进场时间： <span>07:31</span></p>
			<p class="date-info">离场时间： <span>08:59</span></p>
			<div class="recordBox">
				<p>停车时长： <span>8小时12分钟</span></p>
			</div>
		</div>
	</div>
</template>
<script>
export default{
  	data () {
    	return {
    	}
  	},
  	ready: function () {
  		document.setTitle('停车记录')
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
	margin-bottom: .28rem;
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
	line-height: .24rem;
    border: 1px solid #dbdbdb;
    border-radius: .32rem;
    margin-left: .16rem;
    margin-right: .14rem;
    background: #fff; 
}
.record_list .date{
	display: inline-block;
	width: 1.13rem;
	height: .25rem;
	background: #1aa2ff;
	font-size: .12rem;
	color: #fff;
	line-height: .25rem;
    text-align: center;
    border-radius: .2rem;
    vertical-align: middle;
}
.record_list .address{
	float: right;
	margin-right: .15rem;
	font-size: .15rem;
	color: #333333;
	line-height: .27rem;
}
.date-first{
	margin-left: .74rem;
}
.date-info{
	display: inline-block;
	font-size: .14rem;
	color: #666666;
	margin-right: .1rem;
	margin-top: .15rem;
	margin-bottom: .15rem;
}
.date-info>span{
	color: #333333;
}
.recordBox{
	margin-left: .62rem;
	padding: .17rem 0 .17rem .11rem;
	background: #f8f8f8;
	border-top: 1px solid #e1e4e4;
	border-bottom: 1px solid #e1e4e4;
}
.recordBox>p{
	color: #666666;
	font-size: .14rem;
	margin-bottom: .15rem;
}
.recordBox>p:last-child{
	margin-bottom: 0;
}
.recordBox>p>span{
	color: #ff9037;
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
