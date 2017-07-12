<template>
	<header>
		<span class="return" v-on:click="returnTo()"></span>
		<p>查询余额</p>
	</header>
	<section>
		<div class="balance-pic"><img src="../../../static/images/balance_pic.png" /></div>
		<p class="content">
			<span class="cardId"></span>
			卡内余额：
			<span class="balance_time">20小时50分</span>
		</p>
		<p class="content">
			<span class="user"></span>
			所属用户：
			<span class="no_card">未绑卡</span>
		</p>
		<div class="btn bind">绑卡</div>
		<div class="btn recharge">我要充值</div>
	</section>
</template>
<script>
export default{
  	data () {
    	return {
    	}
  	},
  	ready: function () {
  		document.setTitle('查询余额')
  	},
   	methods: {
   		returnTo () {
   			window.history.back()
   		},
  	}
}
</script>
<style scoped>
.balance-pic{
	width: 3.12rem;
	height: 2.01rem;
	margin: .25rem auto;
}
.content{
	margin: 0 .15rem .13rem;
	font-size: .14rem;
	color: #999999;
}
.cardId{
	display: inline-block;
	width: .18rem;
	height: .13rem;
	margin-right: 4px;
	vertical-align: -2px;
	background: url('../../../static/images/card_id.png');
	background-size: 100% 100%;
}
.content .balance_time{
	color: #333333
}
.user{
	display: inline-block;
	width: .13rem;
	height: .16rem;
	margin-right: 9px;
	vertical-align: -2px;
	background: url('../../../static/images/user.png');
	background-size: 100% 100%;
}
.content .no_card{
	color: #fa4a11;
}
.btn{
	margin: 0 .15rem .18rem;
	height: .43rem;
	line-height: .43rem;
	text-align: center;
	border-radius: 1rem;
	font-size: .17rem;
	color: #fff;	
}
.bind{
	margin-top: .4rem;
	background: #ff9037;
}
.recharge{
	background: #1aa2ff;
}
</style>
