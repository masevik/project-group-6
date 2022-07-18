//loader with javascript with custom time
var loader = document.getElementById('loading');
window.addEventListener('load', function () {
  setTimeout(function () {
    loader.style.display = 'none';
  }, 2000);
});
