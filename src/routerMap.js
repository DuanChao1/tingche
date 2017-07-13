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
  '/query': {
    component (resolve) {
      require(['./components/queryBalance/index.vue'], resolve)
    }
  },
  '/balance': {
    component (resolve) {
      require(['./components/balance/index.vue'], resolve)
    }
  },
  '/login': {
    component (resolve) {
      require(['./components/login/index.vue'], resolve)
    }
  },
}

export default routers
