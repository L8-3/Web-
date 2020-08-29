var baseURL = 'http://localhost:7788'
if(localStorage.getItem('token')){
    var token = localStorage.getItem('token')
}
$.ajaxSetup({
    headers:{
        "Authorization":token
    }
})