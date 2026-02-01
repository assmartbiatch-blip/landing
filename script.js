// script.js - Efectos elegantes para landing page de ingeniero eléctrico

// ===== 1. MENÚ SUAVE PARA NAVEGACIÓN INTERNA =====
document.addEventListener('DOMContentLoaded', function() {
  
  // Suavizar el scroll cuando se clickean enlaces internos (#)
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ===== 2. TU BOTÓN ORIGINAL =====
  const btn = document.querySelector('.btn');
  if (btn) {
    btn.addEventListener('click', function(e) {
      // Solo activar si el botón NO es un enlace interno
      if (!this.getAttribute('href') || !this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        alert('Gracias por tu interés, pronto te contactaré!');
      }
    });
  }
  
  // ===== 3. EFECTO DE BRILLO EN TARJETAS/SECCIONES =====
  const shineElements = document.querySelectorAll('.service-card, .info-card, .stat-card');
  
  shineElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 20px rgba(224, 224, 224, 0.2)';
      this.style.transition = 'box-shadow 0.3s ease';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
  });
  
  // ===== 4. EFECTO EN INPUTS DEL FORMULARIO =====
  const formInputs = document.querySelectorAll('input, textarea, select');
  
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.borderColor = '#00f0ff';
      this.style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.3)';
    });
    
    input.addEventListener('blur', function() {
      this.style.borderColor = '';
      this.style.boxShadow = '';
    });
  });
  
  // ===== 5. NAVBAR CON EFECTO AL SCROLL =====
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
      } else {
        navbar.style.backgroundColor = '';
        navbar.style.backdropFilter = '';
      }
    }
  });
  
  // ===== 6. ANIMACIÓN SUTIL AL CARGAR =====
  window.addEventListener('load', function() {
    // Pequeño delay para que se note
    setTimeout(() => {
      document.body.classList.add('loaded');
      
      // Efecto en el hero
      const heroTitle = document.querySelector('.hero h1');
      if (heroTitle) {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
      }
    }, 100);
  });
  
  // ===== 7. CONSOLA ELEGANTE (DETALLE PROFESIONAL) =====
  console.log(
    '%c⚡ Ingeniería Eléctrica de Precisión ⚡\n%cSitio profesional - Robert Hurtado',
    'color: #00f0ff; font-size: 14px; font-weight: bold;',
    'color: #94a3b8; font-size: 12px;'
  );
});

// ===== 8. FUNCIÓN PARA FORMULARIO (OPCIONAL) =====
function handleFormSubmit(event) {
  event.preventDefault();
  
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  
  // Simular envío
  submitBtn.innerHTML = 'Enviando...';
  submitBtn.disabled = true;
  
  // Envío real a Formspree (se mantiene tu endpoint)
  setTimeout(() => {
    alert('Mensaje enviado correctamente. ¡Gracias por contactarme!');
    
    // Resetear formulario
    event.target.reset();
    
    // Restaurar botón
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 1500);
  
  return false;
}

// Si querés usar esta función, agregá onsubmit="return handleFormSubmit(event)" al formulario