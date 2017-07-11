<template>
	<header>
		<span class="return" v-on:click="returnTo()"></span>
		<p>个人中心</p>
		<span class="refresh" v-on:click="refresh()"></span>
	</header>
	<section class="userInfo">
		<div class="userMessage clx">
			<div class="userPic"><img src="../../../static/images/user_pic.jpg" /></div>
			<p class="userName">郭小鸣</p>
			<p class="card">
				<span class="ico_card"><img src="../../../static/images/card_num.png" /></span>
				2017004918
			</p>
			<div class="userData">个人资料</div>
		</div>
		<div class="account">
			<p class="accountTitle">账户余额（小时）</p>
			<p class="accountTime">20时50分</p>
		</div>
		<div class="rechargeBtn">
			<span class="ico_money"></span>
			去充值
		</div>
		<div class="bg"></div>
	</section>
	<section class="userMenu">
		<div class="menuBox leftMenu">
			<div class="park"><img src="../../../static/images/parkRecord.png" /></div>
			<p>停车记录</p>
		</div>
		<div class="menuBox">
			<div class="recharge"><img src="../../../static/images/rechargeRecord.png" /></div>
			<p>充值记录</p>
		</div>
		<div class="menuBox leftMenu">
			<div class="getcard"><img src="../../../static/images/card.png" /></div>
			<p>领卡</p>
		</div>
		<div class="menuBox">
			<div class="bindcard"><img src="../../../static/images/bindCard.png" /></div>
			<p>绑卡</p>
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
  		document.setTitle('会员菜单')
  	},
   	methods: {
   		returnTo () {
   			window.history.back()
   		},
   		refresh () {
   			window.location.reload()
   		}
  	}
}
</script>
<style scoped>
header{
	position: relative;
	height: .5rem;
	line-height: .5rem;
	background: #1aa2ff;
}
header p{
	text-align: center;
	font-size: .17rem;
	color: #fff;
	font-family: '黑体';
}
.userInfo{
	height: 2.35rem;
	background: url('../../../static/images/centerBg.jpg');
	background-size: 100% 100%;
}
.userMessage{
	position: relative;
	padding: .25rem .15rem 0;
}
.userPic{
	display: inline-block;
	float: left;
	width: .56rem;
	border-radius: .56rem;
    overflow: hidden;
    border: 4px solid rgba(255,255,255,0.2);
    margin-right: .14rem;
}
.userName{
	font-size: 0.15rem;
	color: #fff;
	margin-top: .06rem;
	margin-left: .14rem;
}
.ico_card{
	display: inline-block;
	width: .13rem;
	height: .12rem;	
}
.card{
	font-size: .12rem;
	color: #fff;
}
.userData{
	position: absolute;
	top: .4rem;
	right: .15rem;
	width: .6rem;
	height: .24rem;
	line-height: .22rem;
	text-align: center;
	font-size: .12rem;
	color: #fff;
	border: 1px solid #fff;
	border-radius: 4px;
}
.account{
	margin-top: .28rem;
}
.accountTitle{
	font-size: .11rem;
	color: #deeeff;
	text-align: center;
}
.accountTime{
	font-size: .3rem;
	color: #fff;
	text-align: center;
	margin-top: .1rem;
}
.rechargeBtn{
	position: absolute;
    bottom: -0.25rem;
    left: 50%;
    margin-left: -0.8rem;
	width: 1.61rem;
	height: .5rem;
	line-height: .45rem;
	text-align: center;
	background: url('../../../static/images/recharge_bg.png');
	background-size: 100% 100%;
	z-index: 2;
	font-size: .16rem;
	color: #f16143;
}
.bg{
	position: absolute;
    bottom: -0.28rem;
    left: 50%;
    margin-left: -0.85rem;
    width: 1.7rem;
    height: .6rem;
    background: #eff3f8;
    border-radius: .26rem;
}
.ico_money{
	display: inline-block;
	width: .17rem;
	height: .17rem;
	background: url('../../../static/images/money.png');
	background-size: 100% 100%;
	vertical-align: -2px;
}
.userMenu{
	margin-top: .3rem;
	padding: 0 .15rem;
}
.userMenu .leftMenu{
	margin-right: 2%;
}
.menuBox{
	display: inline-block;
	width: 48%;
	height: 1.3rem;
	background: #fff;
	text-align: center;
	border-radius: 0.06rem;
	overflow: hidden;
    margin-bottom: .05rem;
}
.menuBox p{
	font-size: .15rem;
	color: #666666;
	margin-top: .12rem;
}
.park{
	display: inline-block;
	width: .64rem;
	height: .69rem;
	margin-top: .15rem;
}
.recharge{
	display: inline-block;
	width: .65rem;
	height: .68rem;
	margin-top: .15rem;
}
.getcard{
	display: inline-block;
	width: .77rem;
	height: .59rem;
	margin-top: .15rem;
}
.bindcard{
	display: inline-block;
	width: .68rem;
	height: .61rem;
	margin-top: .15rem;
}
</style>
