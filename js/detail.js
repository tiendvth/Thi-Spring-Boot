function loadDetail(id) {
    var  xmlHttpRequest = new  XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function (){
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            var  jsonResponse = JSON.parse(xmlHttpRequest.responseText);
            document.getElementById('content').innerHTML = xmlHttpRequest.responseText
        }
    }
    xmlHttpRequest.open('GET', API_URl + `${id}`);
    xmlHttpRequest.send();
}
document.addEventListener('DOCContentLoaded', function (){
    var id = getPrameterFormUrl('id');
    loadDetail(id)
})