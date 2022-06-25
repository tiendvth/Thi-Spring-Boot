var API_URl = 'http://localhost:8080/api/v1/employee/';

function getPrameterFormUrl(name){
    var url_string = window.location.href;
    var url = new  URL(url_string);
    return url.searchParams.get(name);
}