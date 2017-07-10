<template>
	<header>
		<p>个人中心</p>
		<span class="refresh"></span>
	</header>
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
header{
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
</style>
