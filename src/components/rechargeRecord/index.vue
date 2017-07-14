<template>
	<header class="white_bg">
		<span class="return" v-on:click="returnTo()"></span>
		<p>充值记录</p>
	</header>
	<div class="banner"><img src="../../../static/images/banner_recharge.jpg" /></div>
	<div class="record">
		<div class="leftLine"></div>
		<div class="record_list">
			<p><span></span></p>
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
</style>
