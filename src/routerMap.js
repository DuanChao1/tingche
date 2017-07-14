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
  '/leadCard': {
    component (resolve) {
      require(['./components/leadCard/index.vue'], resolve)
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
  '/register': {
    component (resolve) {
      require(['./components/register/index.vue'], resolve)
    }
  },
  '/rechargeRecord': {
    component (resolve) {
      require(['./components/rechargeRecord/index.vue'], resolve)
    }
  },
}

export default routers
