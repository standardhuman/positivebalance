'use strict'
function sendData(data) {
  const XHR = new XMLHttpRequest();
  const formElement = document.querySelector("#newActivity")
  const FD  = new FormData(formElement);

  // We define what will happen if the data are successfully sent
  XHR.addEventListener('load', function(event) {
    alert('Yeah! Data sent and response loaded.');
  });

  // We define what will happen in case of error
  XHR.addEventListener('error', function(event) {
    alert('Problemo, amigo.');
  });

  // We setup our request
  XHR.open('POST', 'http://4b65b569.ngrok.io/v1/activities');

  // We just send our FormData object, HTTP headers are set automatically
  XHR.send(FD);
}
