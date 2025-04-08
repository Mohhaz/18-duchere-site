document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour agrandir la vidéo en plein écran
  const video = document.querySelector('video');
  video.addEventListener('click', function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
      video.webkitRequestFullscreen();
    }
  });
});
