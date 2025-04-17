// 📬 Manejo del formulario de contacto
document.getElementById("formularioContacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  const datos = {
    nombre,
    email,
    mensaje
  };

  console.log("Mensaje recibido:", datos);

  document.getElementById("formularioContacto").style.display = "none";
  document.getElementById("mensajeGracias").style.display = "block";
});


// Animación de barras de habilidades
const skills = document.querySelectorAll('.skill');

const showSkills = () => {
  skills.forEach(skill => {
    const progress = skill.querySelector('.progress');
    const value = progress.textContent.trim();

    const rect = skill.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !progress.classList.contains('animate')) {
      progress.style.width = value;
      progress.classList.add('animate');
    }
  });
};

window.addEventListener('scroll', showSkills);
window.addEventListener('load', showSkills);
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Guardar preferencia en localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // cambia a sol
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // cambia a luna
  }
});

// Cargar tema guardado al iniciar
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }
});
//email
document.getElementById("formularioContacto").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_o8z2gtm", "service_o8z2gtm", this)
    .then(() => {
      document.getElementById("formularioContacto").style.display = "none";
      document.getElementById("mensajeGracias").style.display = "block";
    }, (error) => {
      alert("Error al enviar el mensaje. Intentalo más tarde.");
      console.log(error);
    });
});

