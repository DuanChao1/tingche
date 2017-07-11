<template>
	<header>
		<span class="return"></span>
		<p>个人中心</p>
		<span class="refresh"></span>
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
		<div class="rechargeBtn"></div>
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
  	}
}
</script>
<style scoped>
body{
	background: #eff3f8;
}
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
	background: url('../../../static/images/recharge_bg.png');
	background-size: 100% 100%;
}
</style>
