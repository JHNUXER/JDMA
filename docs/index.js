function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

(function() {
  if (getURLParameter("updateCheck")) {
    document.getElementById("body").innerHTML+="<h1>UPDATECHECK</h1>";
  }
})();
