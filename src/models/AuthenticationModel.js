export class AuthenticationModel{
    username = '';
    password = '';

    constructor(data){
        this.username = data.username;
        this.password = data.password;
    }
}