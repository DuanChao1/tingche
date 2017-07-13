<template>
	<header class="white_bg">
		<span class="return" v-on:click="returnTo()"></span>
		<p>登录</p>
	</header>
	<div class="logo"><img src="../../../static/images/logo.png" /></div>
	<section class="inputCard">
		<div>
			<label for="phone">
				<span class="phone"></span>
				<span>手机号码</span>
			</label>
			<input type="text" id="phone" />
		</div>
		<div>
			<label for="safe">
				<span class="safe"></span>
				验证码
			</label>
			<input type="text" id="safe" />
			<div class="getCode">获取验证码</div>
		</div>
	</section>
	<div class="loginBtn">登录</div>
	<p class="font_text">没有账号？<span>立即注册</span></p>
</template>
<script>
export default{
  	data () {
    	return {
    	}
  	},
  	ready: function () {
  		document.setTitle('登录')
  	},
   	methods: {
   		returnTo () {
   			window.history.back()
   		},
  	}
}
</script>
<style scoped>
.logo{
	width: .85rem;
	height: 1.03rem;
	margin: .55rem auto .27rem;
}
.inputCard{
	padding: 0 .15rem;
	margin-top: .16rem;
	overflow: hidden;
}
.inputCard>div{
	position: relative;
	margin-bottom: .1rem;
}
.inputCard label{
	position: absolute;
    top: .11rem;
    left: .18rem;
	font-size: .14rem;
	color: #999999;
}
.inputCard input{
	height: .44rem;
	border: 1px solid #d7d8d9;
	border-radius: .4rem;
	width: 100%;
	padding-left: .9rem;
	padding-right: .2rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    font-size: .14rem;
}
.inputCard input#phone{
	padding-left: 1rem;
}
.inputCard input#safe{
	padding-right: 1.1rem;
}
.phone{
	display: inline-block;
	width: .13rem;
	height: .18rem;
	margin-right: 2px;
	vertical-align: -2px;
	background: url('../../../static/images/ico_phone.png');
	background-size: 100% 100%;
}
.safe{
	display: inline-block;
	width: .13rem;
	height: .17rem;
	margin-right: 2px;
	vertical-align: -2px;
	background: url('../../../static/images/ico_safe.png');
	background-size: 100% 100%;
}
.getCode{
	position: absolute;
    right: .06rem;
    top: .044rem;
	display: inline-block;
	width: .95rem;
	height: .35rem;
	background: #ff9037;
	color: #fff;
	font-size: .14rem;
	text-align: center;
	line-height: .35rem;
	border-radius: .2rem;
}
.loginBtn{
	height: .43rem;
	line-height: .43rem;
	margin: .14rem .15rem .25rem;
	text-align: center;
	color: #fff;
	font-size: .17rem;
	background: #1aa2ff;
	border-radius: .2rem;
}
.font_text{
	font-size: .11rem;
	color: #999999;
	text-align: center;
}
.font_text>span{
	color: #ff9037;
}
</style>
