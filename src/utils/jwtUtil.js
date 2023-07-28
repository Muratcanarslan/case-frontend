export function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}


export function checkIfTokenIsExpired(token){
    const parsedToken = parseJwt(token);
    if(parsedToken.exp * 1000 < new Date().getTime()){
        return true;
    }
    return false;
}