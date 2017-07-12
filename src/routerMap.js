const routers = {
	'/center': {
    	component (resolve) {
      		require(['./components/userCenter/index.vue'], resolve)
    	}
  	},
  	'/bindCard': {
    	component (resolve) {
      		require(['./components/bindCard/index.vue'], resolve)
    	}
  	},
}

export default routers
