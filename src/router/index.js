import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import ContactManager from '../views/ContactManager.vue';
import AddContact from '../views/AddContact.vue';
import EditContact from '../views/EditContact.vue';
import ViewContact from '../views/ViewContact.vue';

const routes = [
  {
    path: '/',
    redirect: '/contacts',
  },
  {
    path: '/contacts',
    name: 'ContactManager',
    component: ContactManager,
  },
  {
    path: '/contacts/add',
    name: 'AddContact',
    component: AddContact,
  },
  {
    path: '/contacts/edit/:Id',
    name: 'EditContact',
    component: EditContact,
  },
  {
    path: '/contacts/view/:Id',
    name: 'ViewContact',
    component: ViewContact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
