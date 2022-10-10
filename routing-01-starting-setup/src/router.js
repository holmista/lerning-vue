import {createRouter, createWebHistory} from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', redirect: '/teams'},
        {name:"teams", path: '/teams', component: TeamsList, children: [
            {name:"team-members", path: ':teamId', component: TeamMembers, props: true},
        ]},
        {path: '/users', component: UsersList, beforeEnter(to, from, next){
            next()
        }},
        {path: '/:notFound(.*)', component: NotFound},
    ],
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition;
        }
        return {left: 0, top: 0};
    }
})
router.beforeEach(function(to, from, next){
    next();
})

export default router;