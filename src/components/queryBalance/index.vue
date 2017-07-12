<template>
	<header>
		<span class="return" v-on:click="returnTo()"></span>
		<p>查询余额</p>
	</header>
	<section class="inputCard">
		<div>
			<label>
				<span class="cardId"></span>
				卡号
			</label>
			<input type="text" />
		</div>
		<div>
			<label>
				<span class="password"></span>
				密码
			</label>
			<input type="password" />
		</div>
		<div class="promptBox">
			<span class="prompt"></span>
			<span class="promptText">温馨提示：</span>
			密码在一卡停卡条形码下方，需刮开图层
		</div>
	</section>
	<section>
		<div class="card-pic"><img src="../../../static/images/card_pic.png" /></div>
	</section>
	<div class="bindBtn">查询</div>
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
	padding-left: .8rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    font-size: .14rem;
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
.password{
	display: inline-block;
	width: .13rem;
	height: .16rem;
	margin-right: 9px;
	vertical-align: -2px;
	background: url('../../../static/images/card_password.png');
	background-size: 100% 100%;
}
.promptBox{
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
.card-pic{
	width: 3.12rem;
	margin: 0 auto;
}
.bindBtn{
	height: .44rem;
	line-height: .44rem;
	background: #1aa2ff;
	color: #fff;
	font-size: .17rem;
	text-align: center;
	border-radius: .3rem;
	margin: .18rem .15rem .25rem;
}
</style>
