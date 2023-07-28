<template>
  <Toast />
  <div class="center" >
    <h2>Login To System!</h2>
<div class="flex align-items-stretch flex-wrap card-container blue-container">
    <label for="username">Username</label>
    <InputText v-model="username" id="username" type="text" class="flex align-items-center justify-content-center text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
</div>
<div class="field">
    <label for="password">Password</label>
    <InputText v-model="password" id="password" type="text" class="flex align-items-center justify-content-center	text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
</div>

<Button label="Login" @click="login"></Button>
</div>
</template>

<script>
import { AuthenticationModel } from '@/models/AuthenticationModel';
export default {
  name: 'LoginScreen',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods : {
    login(){
      if(this.username == '' || this.password == ''){
        this.showErrorToast('username and password cant be empty');
      }

      this.$store.dispatch('login', new AuthenticationModel({username: this.username,password: this.password})).then(
          () => {
            this.$router.push('/');
          }, (error) => {
            debugger;
            this.loading = false;
            this.errorMessage =error.response.data;
            this.$toast.add({severity: 'error', summary: 'Hata Mesajı', detail: this.errorMessage, life: 3000});
          }
      );    
    },
    showErrorToast(message){
      this.$toast.add({severity: 'error', summary: 'Hata Mesajı', detail: message, life: 3000});   
     }  
}
}

</script>


<style>
.center{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50% , -50%)
}
</style>
