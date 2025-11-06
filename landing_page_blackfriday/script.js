// Configuração da data de abertura (25/11/2025 às 9h)
const targetDate = new Date('2025-11-25T09:00:00').getTime();

// Função para inicializar e atualizar o countdown automaticamente
function initCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    // Verificar se os elementos existem
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        return;
    }
    
    // Função para atualizar o countdown
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Se a data já passou
        if (distance < 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }

        // Cálculos de tempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualizar os elementos
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    // Atualizar imediatamente ao carregar
    updateCountdown();
    
    // Atualizar o countdown automaticamente a cada segundo
    setInterval(updateCountdown, 1000);
}

// Inicializar countdown quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initCountdown);

// Função para configurar links do WhatsApp
// SUBSTITUA '#whatsapp-link' pelo link real do seu grupo do WhatsApp
// Exemplo: 'https://chat.whatsapp.com/SEUCODIGODEGRUPO'

function setupWhatsAppLinks() {
    // Link do grupo do WhatsApp (SUBSTITUA pelo link real)
    const whatsappLink = 'https://chat.whatsapp.com/SEUCODIGODEGRUPO';
    
    // Selecionar todos os botões CTA
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    // Adicionar link e abrir em nova aba
    ctaButtons.forEach(button => {
        button.href = whatsappLink;
        button.target = '_blank';
        button.rel = 'noopener noreferrer';
    });
}

// Configurar links quando a página carregar
document.addEventListener('DOMContentLoaded', setupWhatsAppLinks);

// Adicionar efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar animação de entrada aos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.expectation-content, .closing-content, .hero-image-placeholder, .clock-image-placeholder, .carousel-container');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// CARROSSEL - Funcionalidade
function initCarousel() {
    const slides = document.getElementById('carouselSlides');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    
    if (!slides || !indicatorsContainer || !prevBtn || !nextBtn) {
        return;
    }
    
    const slideElements = slides.querySelectorAll('.carousel-slide');
    const totalSlides = slideElements.length;
    let currentSlide = 0;
    
    // Criar indicadores
    slideElements.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.classList.add('carousel-indicator');
        if (index === 0) {
            indicator.classList.add('active');
        }
        indicator.setAttribute('aria-label', `Ir para slide ${index + 1}`);
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    // Função para atualizar o carrossel
    function updateCarousel() {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Atualizar indicadores
        const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Função para ir para um slide específico
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }
    
    // Função para próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    // Função para slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Auto-play (opcional - descomente se quiser)
    // let autoPlayInterval = setInterval(nextSlide, 5000);
    
    // Pausar auto-play ao passar o mouse
    // const carouselWrapper = slides.closest('.carousel-wrapper');
    // if (carouselWrapper) {
    //     carouselWrapper.addEventListener('mouseenter', () => {
    //         clearInterval(autoPlayInterval);
    //     });
    //     carouselWrapper.addEventListener('mouseleave', () => {
    //         autoPlayInterval = setInterval(nextSlide, 5000);
    //     });
    // }
}

// Inicializar carrossel quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initCarousel);
