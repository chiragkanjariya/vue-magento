
export default {
    list:[
        //{ path: '/:controller/:action/category/view/:id', component: () => import('./controllers/front')  },
        { path: '/:controller', component: () => import('./../controllers/core/front')  },
        { path: '/:controller/:action', component: () => import('./../controllers/core/front')  },
        { path: '/:controller/:action/id/:id', component: () => import('./../controllers/core/front')  },
        { path: '/:controller/:action/tab/:tab', component: () => import('./../controllers/core/front')  },
        { path: '/:controller/:action/id/:id/tab/:tab', component: () => import('./../controllers/core/front')  },
        { path: '/*', component: () => import('./../controllers/core/front')  },
    ]
}