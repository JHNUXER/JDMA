function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function getClientIP() {
  var nxl;
  $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
    nxl = data;
  });
  return nxl["ip"];
}

window.onload = function() {
  if (getURLParameter("updateCheck")) {
    httpGetAsync(getClientIP(),"Yo");
  }
}
