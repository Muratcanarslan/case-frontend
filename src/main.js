import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext';
import "primevue/resources/themes/lara-light-blue/theme.css";
import "/node_modules/primeflex/primeflex.css";
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import store from './vuex/vuexStore'
import FileUpload from 'primevue/fileupload';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import TreeTable from 'primevue/treetable';


createApp(App).use(router).use(PrimeVue).use(store).component('FileUpload',FileUpload).component('DataTable',DataTable).component('TreeTable',TreeTable).component('Column',Column).component('Button',Button).component('Toast',Toast).component('InputText',InputText).use(ToastService).mount('#app')
