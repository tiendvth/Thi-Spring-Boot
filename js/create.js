document.addEventListener('DOMContentLoaded', function () {
    var productForm = document.forms['product-form'];
    var btnSubmit = productForm ['submit'];
    var textName = productForm['name'];
    var textWage = productForm['wage'];


    if (btnSubmit !== null && btnSubmit !== undefined) {
        btnSubmit.onclick = function (event) {
            if(productForm.checkValidity()){ // gọi đến hàm validate của form
                event.preventDefault(); // ngăn việc form bị submit đi.
                // get data from form.
                var objData = {
                    name: textName.value,
                    wage: textWage.value,

                }
                postData(objData);
            }
        }
    }
})

function postData(objData) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);
            alert('Action success');
            window.location.href = '/DangVanTienClient/index.html';
        }
    }
    xmlHttpRequest.open('POST', API_URl);
    xmlHttpRequest.setRequestHeader('Content-Type', 'application/json');
    xmlHttpRequest.send(JSON.stringify(objData));
}
