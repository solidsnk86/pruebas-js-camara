// Menu Nav
const botonMenu = document.getElementById('menuButton');
const listaMenu = document.getElementById('ulMenu');

botonMenu.onclick = function() {
  if (listaMenu.style.display === '') {
    listaMenu.style.display = 'block';
  } else {
    listaMenu.style.display = '';
  }
  document.addEventListener('click', clickAfueraMenu);
};

function clickAfueraMenu(event) {
  if (!listaMenu.contains(event.target) && event.target !== botonMenu) {
    listaMenu.style.display = '';
    document.removeEventListener('click', clickAfueraMenu);
  }
}


// Crear Carta
const comentarios = document.getElementById('comentario');

comentarios.onclick = function() {
  Carta = document.createElement('div');
  Carta.classList.add('comentar');
  Carta.innerHTML = `
  <div class="comentarios-container">
  <div class="hr-container">
    <hr />
    <h4>Comentarios</h4>
    <hr />
  </div>
  <p>Comentario:</p>
  <textarea></textarea><br>
  <ul>
  <div class="Icon-Container">
    <img id="" src="me-gusta.png" width="18px" height="auto" alt="icono"><span id="contadorLikes"></span>
    </div>
    <div class="Icon-Container">
    <img src="compartir.png" width="18px" height="auto" alt="icono">
    </div>
  </ul>
  </div>
  <img id="cerrarComent" onclick="cerrarComentarios()" src="suelta-la-flecha.png" width="25px" height="auto"/>
</div>
  `
document.body.appendChild(Carta);
};
var cerrarComent = document.getElementById('cerrarComent');

function cerrarComentarios() {
  Carta.remove();
}

// Likes // localStorage
const contadorLikes = document.getElementById('contadorLikes');
const botonLike = document.getElementById('botonLike');

let likes = 0;

// Obtener el contador de likes del Local Storage al cargar la página
if (localStorage.getItem('likes')) {
  likes = parseInt(localStorage.getItem('likes'));
}

function actualizarContadorLikes() {
  contadorLikes.textContent = likes.toString();
  // Guardar el contador de likes en el Local Storage
  localStorage.setItem('likes', likes.toString());
}

botonLike.onclick = function() {
  likes++;
  actualizarContadorLikes();
};
// Actualizar el contador de likes inicial
actualizarContadorLikes();

//Link a Git-Hub
const linkG = document.getElementById('github');

linkG.onclick = function() {
  window.open('https://github.com/solidsnk86?tab=repositories_blank');
};
// Función Cámara 
let videoStream = null;

function toggleCamera() {
  const toggleButton = document.getElementById('toggleCameraButton');
  const videoElement = document.getElementById('videoElement');

  if (videoStream) {
    // Si ya hay un stream de video, detener la cámara y limpiar el stream
    videoStream.getTracks().forEach(track => track.stop());
    videoStream = null;
    toggleButton.textContent = 'Activar Cámara';
    videoElement.srcObject = null;
  } else {
    // Si no hay un stream de video, solicitar acceso a la cámara
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        videoStream = stream;
        videoElement.srcObject = videoStream;
        toggleButton.textContent = 'Desactivar Cámara';
      })
      .catch(function(error) {
        console.error('Error al acceder a la cámara:', error);
      });
  }
}


