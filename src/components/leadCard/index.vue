<template>
	<header>
		<span class="return" v-on:click="returnTo()"></span>
		<p>领卡</p>
	</header>
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
		<div>
			<label for="user">
				<span class="user"></span>
				姓名
			</label>
			<input type="text" id="user" />
		</div>
		<div>
			<div class="minBox">
				<label for="province">
					<span class="province"></span>
					省市
				</label>
				<select id="province">
				  	<option value ="volvo">Volvo</option>
				  	<option value ="saab">Saab</option>
				  	<option value="opel">Opel</option>
				  	<option value="audi">Audi</option>
				</select>
			</div>
			<div class="minBox">
				<label for="area">
					<span class="area"></span>
					区县
				</label>
				<select id="area">
				  	<option value ="volvo">Volvo</option>
				  	<option value ="saab">Saab</option>
				  	<option value="opel">Opel</option>
				  	<option value="audi">Audi</option>
				</select>
			</div>
		</div>
		<div class="promptBox">
			<span class="prompt"></span>
			我已阅读并同意
			<span class="promptText">《一卡停用户服务协议》</span>
		</div>
	</section>
	<div class="loginBtn">确定</div>
	<p class="font_text">已有一卡停？<a v-link="{path: '/bindCard'}">立即绑卡</a></p>
</template>
<script>
export default{
  	data () {
    	return {
    	}
  	},
  	ready: function () {
  		document.setTitle('领卡')
  	},
   	methods: {
   		returnTo () {
   			window.history.back()
   		},
  	}
}
</script>
<style scoped>
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
	padding-left: .7rem;
	padding-right: .2rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    font-size: .14rem;
}
.inputCard select{
	height: .44rem;
	border: 1px solid #d7d8d9;
	border-radius: .4rem;
	width: 100%;
	padding-left: .7rem;
	padding-right: .2rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    font-size: .14rem;
    appearance:none;
  	-moz-appearance:none;
  	-webkit-appearance:none;
}
.inputCard input#phone{
	padding-left: 1rem;
}
.inputCard input#safe{
	padding-left: .9rem;
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
.user{
	display: inline-block;
	width: .13rem;
	height: .16rem;
	margin-right: 2px;
	vertical-align: -2px;
	background: url('../../../static/images/user.png');
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
.font_text>a{
	color: #ff9037;
}
.promptBox{
	font-size: .11rem;
	color: #999999;
}
.prompt{
	display: inline-block;
	width: .17rem;
	height: .17rem;
	background: url('../../../static/images/ico_check.png');
	background-size: 100% 100%;
	vertical-align: -4px;
    margin-right: 4px;
}
.promptText{
	font-size: .11rem;
	color: #1aa2ff;
}
.minBox{
	display: inline-block;
    width: 49%;
    position: relative;
}
</style>
