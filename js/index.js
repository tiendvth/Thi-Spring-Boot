var API_URl = 'http://localhost:8080/api/v1/employee/';

function loadData() {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {

        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            console.log(xmlHttpRequest.response);
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
            var contentHtml = '';
            for (let i = 0; i < jsonResponse.length; i++) {
                // alert(jsonRespon[i].name);

                contentHtml += `
                         
                            <td>                           
                            ${jsonResponse[i].name}
                          
                            <a href="https://www.w3school.com/w3css/w3css_panels.asp"
                            data-id = "${jsonResponse[i].id}" 
                            </td>
                             <td>
                             ${jsonResponse[i].wage}                        
                            <a href="https://www.w3school.com/w3css/w3css_panels.asp"
                            data-id = "${jsonResponse[i].id}" 
                             </td> `;

            }
            document.getElementById('data').innerHTML = contentHtml
        }
    }
    xmlHttpRequest.open('GET', API_URl);
    xmlHttpRequest.send();
}

document.addEventListener('DOMContentLoaded', function () {
    loadData();
})