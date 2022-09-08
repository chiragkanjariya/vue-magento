// make sure key will be the controller key passed in url
require('./style.css');
export default {
    list:{
        admin: () => import('./../controllers/admin'),
        customer: () => import('./../controllers/customer'),    
        dashboard: () => import('./../controllers/dashboard'),  
        categories: () => import('./../controllers/categories'),
        cron: () => import('./../controllers/cron')  
    },
    defaultController:'dashboard',
    defaultAction:'index'
}