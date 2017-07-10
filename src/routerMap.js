const routers = {
	'/center': {
    	component (resolve) {
      		require(['./components/userCenter/index.vue'], resolve)
    	}
  	},
}

export default routers
