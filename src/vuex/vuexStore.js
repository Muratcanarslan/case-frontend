import {createStore} from "vuex";
import AuthService from "../services/AuthService";
import FileService from "@/services/FileService";
import FileModule from "@/modules/FileModule";
const user = localStorage.getItem('user');
const initialState = user ? {status: {loggedIn: true}, user}
    : {status: {loggedIn: false}, user: null};

const store = createStore({
    state:initialState,
    modules: {
        FileModule
    },
    mutations: {
        loginSuccess(state,user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state){
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    },
    actions: {
        login(context,user) {
          return AuthService.login(user).then(
              user => {
                  context.commit('loginSuccess',user);
                  return Promise.resolve(user);
              },
              error =>{
                  context.commit('loginFailure');
                  return Promise.reject(error);
              }
          )
        },
        uploadFile(context,data){
            data.fileName = data.username;
            data.extension = data.password;
            return FileService.uploadFile(data).then(
                fileDto => {
                    return Promise.resolve(fileDto);
                },
                error =>{
                    return Promise.reject(error);
                }
            )
        }

    },
    getters: {
        getUserIsLoggedIn(state) {
            return state.status.loggedIn;
        }
    }

});


export default store;