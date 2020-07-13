import Main from './pages/Main'
import User from './pages/User'

const routes = [
    {
        path: '/main',
        component: Main,
        layout: '/admin',
        name: 'Página Principal'
    },
    {
        path: '/user',
        component: User,
        layout: '/admin',
        name: 'Usuários'
    }
]

export default routes;
