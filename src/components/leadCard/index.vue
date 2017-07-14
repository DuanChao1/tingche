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
				<input v-model="city" type="text" id="province" readonly unselectable="on" v-on:focus="onFocus(1)" />
				<span class="list"></span>
			</div>
			<div class="minBox">
				<label for="area">
					<span class="area"></span>
					区县
				</label>
				<input v-model="area" type="text" id="area" readonly unselectable="on" v-on:focus="onFocus(2)" />
				<span class="list"></span>
			</div>
		</div>
		<div>
			<label for="address">
				<span class="address"></span>
				收件地址
			</label>
			<input type="text" id="address" />
		</div>
		<div class="promptBox">
			<span class="prompt"></span>
			我已阅读并同意
			<span class="promptText">《一卡停用户服务协议》</span>
		</div>
	</section>
	<div class="loginBtn">确定</div>
	<p class="font_text">已有一卡停？<a v-link="{path: '/bindCard'}">立即绑卡</a></p>
	<footer>
		<p>您注册成功后，我们会将一卡停卡，快递至您的收件地址。</p>
		<p>如有任何问题，请致电：<span>4000-123-868</span></p>
	</footer>
	<div class="tipBox" v-bind:class="{'hide': cityCode == 0}" v-on:click="hideTip()">
		<div class="tip">
			<div>
				<label><input name="city" type="radio" value="北京" v-model="city" />北京</label>
			</div>
			<div>
				<label><input name="city" type="radio" value="上海" v-model="city" />上海</label>
			</div>
			<div>
				<label><input name="city" type="radio" value="杭州" v-model="city" />杭州</label>
			</div>
			<div>
				<label><input name="city" type="radio" value="天津" v-model="city" />天津</label>
			</div>
			<div>
				<label><input name="city" type="radio" value="河北" v-model="city" />河北</label>
			</div>
		</div>
	</div>
	<div class="tipBox" v-bind:class="{'hide': areaCode == 0}" v-on:click="hideTip()">
		<div class="tip">
			<div>
				<label><input name="area" type="radio" value="东城区" v-model="area" />东城区</label>
			</div>
			<div>
				<label><input name="area" type="radio" value="朝阳区" v-model="area" />朝阳区</label>
			</div>
			<div>
				<label><input name="area" type="radio" value="海淀区" v-model="area" />海淀区</label>
			</div>
			<div>
				<label><input name="area" type="radio" value="石景山区" v-model="area" />石景山区</label>
			</div>
			<div>
				<label><input name="area" type="radio" value="顺义区" v-model="area" />顺义区</label>
			</div>
		</div>
	</div>
</template>
<script>
export default{
  	data () {
    	return {
    		city: '',
    		cityCode: 0,
    		area: '',
    		areaCode: 0,
    	}
  	},
  	ready: function () {
  		document.setTitle('领卡')
  	},
   	methods: {
   		returnTo () {
   			window.history.back()
   		},
   		onFocus (code) {
   			if(code == 1){
   				this.cityCode = 1
   			}
   			if(code == 2){
   				this.areaCode = 1
   			}
   		},
   		hideTip () {
   			this.cityCode = 0
   			this.areaCode = 0
   		}
  	}
}
</script>
<style scoped>
.tipBox{
	position: absolute;
    background: rgba(0,0,0,0.6);
    z-index: 100;
    top: 0;
    bottom: 0;
    width: 100%;
}
.tip{
	width: 80%;
    height: 3rem;
    position: absolute;
    top: 50%;
    margin-top: -1.5rem;
    margin: -1.5rem auto 0;
    left: 50%;
    margin-left: -40%;
    background: #fff;
    border-radius: .08rem;
    overflow: scroll;
    padding: .2rem;
}
.tip>div{
	margin-bottom: .1rem;
    font-size: .14rem;
    height: .2rem;
    line-height: .18rem;
}
.tip>div>label{
	display: inline-block;
	width: 100%;
}
.tip input{
	margin-right: .1rem;
    vertical-align: top;
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
	padding-left: .7rem;
	padding-right: .2rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    font-size: .12rem;
}
.inputCard input:disabled{
	background: #fff;
	color: #000;
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
.inputCard input#address{
	padding-left: 1rem;
    padding-right: .1rem;
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
.list{
	position: absolute;
    top: 50%;
    margin-top: -.045rem;
    right: .14rem;
	display: inline-block;
	width: .15rem;
	height: .09rem;
	background: url('../../../static/images/ico_bottom.png');
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
.address{
	display: inline-block;
	width: .12rem;
	height: .15rem;
	margin-right: 2px;
	vertical-align: -2px;
	background: url('../../../static/images/ico_address.png');
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
footer{
	position: absolute;
    bottom: .2rem;
}
footer>p{
	font-size: .11rem;
	color: #b5b5b5;
	text-align: center;
}
footer>p>span{
	color: #1aa2ff;
}
</style>
