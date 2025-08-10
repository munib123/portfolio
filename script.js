// Enhanced Professional Loading System
window.addEventListener('load', () => {
  const loadingOverlay = document.getElementById('loadingOverlay');
  
  // Add sophisticated loading completion
  setTimeout(() => {
    loadingOverlay.style.opacity = '0';
    loadingOverlay.style.visibility = 'hidden';
    loadingOverlay.style.transform = 'scale(1.1)';
    loadingOverlay.style.filter = 'blur(10px)';
    
    // Remove from DOM after transition with enhanced cleanup
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
      // Initialize page navigation system
      initializePageNavigation();
      // Trigger enhanced home section animations
      triggerEnhancedHomeAnimations();
      // Initialize resume button
      initializeResumeButton();
      // Initialize project links
      initializeProjectLinks();
      // Initialize contact form
      initializeContactForm();
    }, 400);
  }, 800);
});

// Page Navigation System
let currentPage = 'home';
let isAnimating = false;

function initializePageNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  const pages = document.querySelectorAll('.page');
  
  // Set initial state
  pages.forEach(page => {
    if (page.id === 'home-page') {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
  
  // Add click handlers to navigation buttons
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (isAnimating) return;
      
      const targetPage = btn.dataset.page;
      if (targetPage === currentPage) return;
      
      navigateToPage(targetPage);
      updateActiveNavButton(btn);
      
      // Add click ripple effect
      createNavButtonRipple(btn);
    });
  });
  
  console.log('Page navigation system initialized');
}

function navigateToPage(targetPage) {
  if (isAnimating) return;
  
  isAnimating = true;
  const currentPageElement = document.getElementById(`${currentPage}-page`);
  const targetPageElement = document.getElementById(`${targetPage}-page`);
  
  if (!currentPageElement || !targetPageElement) {
    isAnimating = false;
    return;
  }
  
  // Quick and smooth slide transition
  currentPageElement.style.transition = 'all 0.4s var(--professional-ease)';
  targetPageElement.style.transition = 'all 0.4s var(--professional-ease)';
  
  // Slide out current page
  currentPageElement.style.transform = 'translateX(-50px)';
  currentPageElement.style.opacity = '0';
  
  setTimeout(() => {
    currentPageElement.classList.remove('active');
    
    // Prepare target page for entrance
    targetPageElement.classList.add('active');
    targetPageElement.style.transform = 'translateX(50px)';
    targetPageElement.style.opacity = '0';
    
    // Small delay for smooth transition
    requestAnimationFrame(() => {
      // Slide in target page
      targetPageElement.style.transform = 'translateX(0)';
      targetPageElement.style.opacity = '1';
      
      // Complete animation and trigger page-specific effects
      setTimeout(() => {
        triggerPageAnimations(targetPage);
        isAnimating = false;
      }, 200);
      
      currentPage = targetPage;
    });
  }, 200);
}

function updateActiveNavButton(activeBtn) {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => btn.classList.remove('active'));
  activeBtn.classList.add('active');
}

function createNavButtonRipple(button) {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 800);
  });
}

function triggerPageAnimations(pageName) {
  const pageElement = document.getElementById(`${pageName}-page`);
  if (!pageElement) return;
  
  // Trigger animations based on page
  switch(pageName) {
    case 'home':
      triggerEnhancedHomeAnimations();
      break;
    case 'about':
      triggerAboutAnimations(pageElement);
      break;
    case 'education':
      triggerEducationAnimations(pageElement);
      break;
    case 'experience':
      triggerExperienceAnimations(pageElement);
      break;
    case 'skills':
      triggerSkillsAnimations(pageElement);
      break;
    case 'projects':
      triggerProjectsAnimations(pageElement);
      break;
    case 'certificates':
      triggerCertificatesAnimations(pageElement);
      break;
    case 'contact':
      triggerContactAnimations(pageElement);
      break;
  }
}

// Initialize Resume Button
function initializeResumeButton() {
  const resumeBtn = document.getElementById('resumeBtn');
  if (resumeBtn) {
    // Ensure the button is clickable with proper z-index
    resumeBtn.style.position = 'relative';
    resumeBtn.style.zIndex = '100';
    
    // Add enhanced click feedback
    resumeBtn.addEventListener('click', (e) => {
      // Create click ripple effect
      createClickRipple(e, resumeBtn);
      
      // Add download feedback
      resumeBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        resumeBtn.style.transform = 'scale(1)';
      }, 150);
      
      // Optional: Add open notification
      showOpenNotification();
    });
    
    // Add enhanced hover effects
    addMicroInteractions(resumeBtn.parentElement);
  }
}

// Show open notification
function showOpenNotification() {
  const notification = document.createElement('div');
  notification.innerHTML = '<i class="bx bx-link-external"></i> Resume opening in new tab...';
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, var(--main-color), #00d4ff);
    color: var(--bg-color);
    padding: 15px 25px;
    border-radius: 10px;
    font-size: 1.4rem;
    font-weight: 600;
    box-shadow: 0 10px 30px rgba(0, 171, 240, 0.3);
    z-index: 10000;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Animate out and remove
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 400);
  }, 2500);
}

// Enhanced Home Section Animation Sequence
function triggerEnhancedHomeAnimations() {
  const animationSequence = [
    { selector: '.home-content h1', delay: 50, extraClass: 'slide-in-left' },
    { selector: '.home-content .text-animate', delay: 150, extraClass: 'slide-in-right' },
    { selector: '.home-content p', delay: 250, extraClass: 'fade-in-up' },
    { selector: '.btn-box', delay: 350, extraClass: 'bounce-in' },
    { selector: '.home-sci', delay: 450, extraClass: 'slide-in-bottom' },
    { selector: '.pic', delay: 550, extraClass: 'scale-in-rotate' }
  ];

  animationSequence.forEach(({ selector, delay, extraClass }) => {
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element) {
        element.classList.add('show', extraClass);
        addMicroInteractions(element);
      }
    }, delay);
  });
}

// Page-specific animation functions
function triggerAboutAnimations(pageElement) {
  const animationSequence = [
    { selector: '.heading', delay: 100, animation: 'fadeInUp' },
    { selector: '.about-img', delay: 300, animation: 'scaleInRotate' },
    { selector: '.about-content', delay: 600, animation: 'slideInRight' }
  ];
  
  executeAnimationSequence(pageElement, animationSequence);
}

function triggerEducationAnimations(pageElement) {
  const heading = pageElement.querySelector('.heading');
  if (heading) animateElement(heading, 'fadeInUp', 100);
  
  const contents = pageElement.querySelectorAll('.education-content .content');
  contents.forEach((content, index) => {
    animateElement(content, 'slideInLeft', 300 + (index * 150));
  });
}

function triggerExperienceAnimations(pageElement) {
  const heading = pageElement.querySelector('.heading');
  if (heading) animateElement(heading, 'fadeInUp', 100);
  
  const contents = pageElement.querySelectorAll('.education-content .content');
  contents.forEach((content, index) => {
    animateElement(content, 'slideInRight', 300 + (index * 150));
  });
}

function triggerSkillsAnimations(pageElement) {
  const heading = pageElement.querySelector('.heading');
  if (heading) animateElement(heading, 'fadeInUp', 100);
  
  const skillBoxes = pageElement.querySelectorAll('.skill-box');
  skillBoxes.forEach((box, index) => {
    animateElement(box, 'bounceInScale', 300 + (index * 80));
    addSkillBoxInteractions(box);
  });
}

function triggerProjectsAnimations(pageElement) {
  const heading = pageElement.querySelector('.heading');
  if (heading) animateElement(heading, 'fadeInUp', 100);
  
  const projectBoxes = pageElement.querySelectorAll('.project-box');
  projectBoxes.forEach((box, index) => {
    animateElement(box, 'scaleInPerspective', 400 + (index * 200));
    addProjectBoxInteractions(box);
  });
}

function triggerCertificatesAnimations(pageElement) {
  const heading = pageElement.querySelector('.heading');
  if (heading) animateElement(heading, 'fadeInUp', 100);
  
  const certificateBoxes = pageElement.querySelectorAll('.certificate-box');
  certificateBoxes.forEach((box, index) => {
    animateElement(box, 'flipInY', 300 + (index * 100));
  });
  
  const sliderControls = pageElement.querySelector('.slider-controls');
  if (sliderControls) animateElement(sliderControls, 'slideInUp', 400);
}

function triggerContactAnimations(pageElement) {
  const heading = pageElement.querySelector('.heading');
  if (heading) animateElement(heading, 'fadeInUp', 100);
  
  const formElements = pageElement.querySelectorAll('.input-box, .textarea-field, .btn-box.btns');
  formElements.forEach((element, index) => {
    animateElement(element, 'slideInUp', 150 + (index * 75));
  });
}

// Enhanced Micro-Interactions
function addMicroInteractions(element) {
  if (element.classList.contains('btn') || element.querySelector('.btn')) {
    const btn = element.classList.contains('btn') ? element : element.querySelector('.btn');
    
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-4px) scale(1.05)';
      btn.style.boxShadow = '0 15px 35px rgba(0, 171, 240, 0.5)';
      btn.style.borderColor = 'var(--main-color)';
      btn.style.background = 'transparent';
      btn.style.color = 'var(--main-color)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0) scale(1)';
      btn.style.boxShadow = '0 4px 15px rgba(0, 171, 240, 0.3)';
      btn.style.borderColor = 'var(--main-color)';
      btn.style.background = 'var(--main-color)';
      btn.style.color = 'var(--bg-color)';
    });

    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'translateY(-2px) scale(0.98)';
      btn.style.color = 'var(--main-color)';
    });

    btn.addEventListener('mouseup', () => {
      btn.style.transform = 'translateY(-4px) scale(1.05)';
      btn.style.color = 'var(--main-color)';
    });
  }

  if (element.classList.contains('home-sci')) {
    const links = element.querySelectorAll('a');
    links.forEach((link, index) => {
      link.style.animationDelay = `${index * 0.1}s`;
      link.classList.add('bounce-in-scale');
    });
  }
}

// Enhanced animation execution helper
function animateElement(element, animationType, delay) {
  setTimeout(() => {
    if (element && !element.classList.contains('reveal')) {
      element.classList.add('reveal', animationType);
      element.style.opacity = '1';
      element.style.visibility = 'visible';
      element.style.transform = getAnimationTransform(animationType);
      element.style.filter = 'blur(0)';
      element.style.transition = 'all 0.4s var(--professional-ease)';
    }
  }, delay);
}

// Get transform values for different animation types
function getAnimationTransform(animationType) {
  const transforms = {
    'fadeInUp': 'translateY(0) scale(1)',
    'slideInLeft': 'translateX(0) scale(1)',
    'slideInRight': 'translateX(0) scale(1)', 
    'slideInUp': 'translateY(0) scale(1)',
    'scaleInRotate': 'scale(1) rotateY(0deg)',
    'bounceInScale': 'scale(1) rotateX(0deg)',
    'scaleInPerspective': 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)',
    'flipInY': 'translateY(0) scale(1) rotateY(0deg)'
  };
  
  return transforms[animationType] || 'translateY(0) scale(1)';
}

// Execute animation sequence helper
function executeAnimationSequence(container, sequence) {
  sequence.forEach(({ selector, delay, animation }) => {
    const element = container.querySelector(selector);
    if (element) {
      animateElement(element, animation, delay);
    }
  });
}

// Enhanced skill box interactions
function addSkillBoxInteractions(skillBox) {
  skillBox.addEventListener('mouseenter', () => {
    skillBox.style.transform = 'translateY(-15px) scale(1.05) rotateY(5deg)';
    skillBox.style.zIndex = '10';
  });
  
  skillBox.addEventListener('mouseleave', () => {
    skillBox.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
    skillBox.style.zIndex = '1';
  });
}

// Enhanced project box interactions  
function addProjectBoxInteractions(projectBox) {
  projectBox.addEventListener('mouseenter', () => {
    projectBox.style.transform = 'translateY(-20px) scale(1.05) rotateY(-5deg)';
    projectBox.style.zIndex = '10';
  });
  
  projectBox.addEventListener('mouseleave', () => {
    projectBox.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
    projectBox.style.zIndex = '1';
  });
  
  // Add click ripple effect
  projectBox.addEventListener('click', (e) => {
    createClickRipple(e, projectBox);
  });
}

// Initialize project links functionality
function initializeProjectLinks() {
  const projectLinks = document.querySelectorAll('.project-link');
  
  projectLinks.forEach(link => {
    // Ensure proper styling and functionality
    link.style.position = 'relative';
    link.style.zIndex = '100';
    link.style.pointerEvents = 'auto';
    
    // Add enhanced hover effects
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
      this.style.boxShadow = '0 8px 25px rgba(0, 171, 240, 0.4)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'none';
    });
  });
}

// Enhanced Sticky Header Management (simplified without mobile menu)
window.addEventListener('scroll', () => {
  const header = document.querySelector("header");
  const scrollTop = window.scrollY;
  
  // Enhanced sticky header with blur effect
  if (scrollTop > 100) {
    header.classList.add("sticky");
    header.style.background = 'rgba(8, 27, 41, 0.95)';
    header.style.backdropFilter = 'blur(20px)';
    header.style.boxShadow = '0 4px 30px rgba(0, 171, 240, 0.1)';
  } else {
    header.classList.remove("sticky");
    header.style.background = 'transparent';
    header.style.backdropFilter = 'blur(0px)';
    header.style.boxShadow = 'none';
  }
  
  // Hide/show header on scroll direction
  let lastScrollTop = window.lastScrollTop || 0;
  if (scrollTop > lastScrollTop && scrollTop > 200) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  window.lastScrollTop = scrollTop;
});

// Create click ripple effect
function createClickRipple(event, element) {
  const rect = element.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.cssText = `
    position: absolute;
    border-radius: 50%;
    background: rgba(0, 171, 240, 0.3);
    transform: scale(0);
    animation: ripple 0.6s linear;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    pointer-events: none;
  `;
  
  element.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Certificates Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('certificatesSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('sliderDots');
  
  if (!slider || !prevBtn || !nextBtn || !dotsContainer) return;
  
  const slides = slider.querySelectorAll('.certificate-slide');
  const totalSlides = slides.length;
  let currentSlide = 0;
  
  // Create dots
  function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }
  
  // Update slider position
  function updateSlider() {
    const translateX = -currentSlide * 100;
    slider.style.transform = `translateX(${translateX}%)`;
    
    // Update dots
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
    
    // Update button states
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
  }
  
  // Go to specific slide
  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
  }
  
  // Next slide
  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlider();
    }
  }
  
  // Previous slide
  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  }
  
  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });
  
  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  
  slider.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  slider.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide(); // Swipe left - go to next
      } else {
        prevSlide(); // Swipe right - go to previous
      }
    }
  }
  
  // Auto-play (optional - can be enabled/disabled)
  let autoPlayInterval;
  const autoPlayDelay = 5000; // 5 seconds
  
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      if (currentSlide === totalSlides - 1) {
        goToSlide(0); // Go back to first slide
      } else {
        nextSlide();
      }
    }, autoPlayDelay);
  }
  
  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }
  
  // Pause auto-play on hover
  slider.addEventListener('mouseenter', stopAutoPlay);
  slider.addEventListener('mouseleave', startAutoPlay);
  
  // Initialize
  createDots();
  updateSlider();
  startAutoPlay(); // Start auto-play
});

// Add ripple keyframe animation to CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .nav-ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(0, 171, 240, 0.3);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
  }
  
  .bounce-in-scale {
    animation: bounceInScale 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }
`;
document.head.appendChild(rippleStyle);

// Keyboard accessibility for menu icon
const menuIconEl = document.getElementById('menu-icon');
if (menuIconEl) {
  menuIconEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      menuIconEl.click();
    }
  });
}

// Keyboard accessibility for page navigation
document.addEventListener('keydown', function(e) {
  if (isAnimating) return;
  
  const pages = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'certificates', 'contact'];
  const currentIndex = pages.indexOf(currentPage);
  
  if (e.key === 'ArrowLeft' && currentIndex > 0) {
    const targetPage = pages[currentIndex - 1];
    const navBtn = document.querySelector(`[data-page="${targetPage}"]`);
    if (navBtn) {
      navigateToPage(targetPage);
      updateActiveNavButton(navBtn);
    }
  } else if (e.key === 'ArrowRight' && currentIndex < pages.length - 1) {
    const targetPage = pages[currentIndex + 1];
    const navBtn = document.querySelector(`[data-page="${targetPage}"]`);
    if (navBtn) {
      navigateToPage(targetPage);
      updateActiveNavButton(navBtn);
    }
  }
});

// Web3Forms Contact Form Integration
function initializeContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const formMessage = document.getElementById('form-message');

  if (!form || !submitBtn || !formMessage) {
    console.error('Contact form elements not found');
    return;
  }

  console.log('Contact form initialized successfully');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      showMessage('Please fill in all required fields correctly.', 'error');
      return;
    }

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    hideMessage();

    // Get form data
    const formData = new FormData(form);
    
    // Debug: Log form data
    console.log('Form submission started...');
    console.log('Access key:', formData.get('access_key'));
    console.log('Name:', formData.get('name'));
    console.log('Email:', formData.get('email'));
    console.log('Phone:', formData.get('phone'));
    console.log('Subject:', formData.get('subject'));
    console.log('Message:', formData.get('message'));

    // Try multiple methods for maximum compatibility
    let success = false;

    // Method 1: JSON format (preferred)
    try {
      console.log('Trying JSON method...');
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '59f4edff-8d09-480e-bde5-17e5328595af',
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone') || '',
          subject: formData.get('subject'),
          message: formData.get('message')
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('JSON method response:', data);
        
        if (data.success) {
          showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
          form.reset();
          success = true;
        } else {
          throw new Error(data.message || 'Failed to send message');
        }
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.log('JSON method failed:', error);
    }

    // Method 2: FormData (fallback)
    if (!success) {
      try {
        console.log('Trying FormData method...');
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const data = await response.json();
          console.log('FormData method response:', data);
          
          if (data.success) {
            showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
            form.reset();
            success = true;
          } else {
            throw new Error(data.message || 'Failed to send message');
          }
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        console.log('FormData method failed:', error);
      }
    }

    // Method 3: XMLHttpRequest (final fallback)
    if (!success) {
      try {
        console.log('Trying XMLHttpRequest method...');
        await submitWithXHR(formData);
        showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
        form.reset();
        success = true;
      } catch (error) {
        console.log('XMLHttpRequest method failed:', error);
      }
    }

    // If all methods fail
    if (!success) {
      showMessage('Unable to send message. Please try again later or contact me directly at your-email@example.com', 'error');
    }

    // Remove loading state
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
  });

  // XMLHttpRequest fallback method
  function submitWithXHR(formData) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.web3forms.com/submit');
      xhr.setRequestHeader('Accept', 'application/json');
      
      xhr.onload = function() {
        if (xhr.status === 200) {
          try {
            const data = JSON.parse(xhr.responseText);
            if (data.success) {
              resolve(data);
            } else {
              reject(new Error(data.message || 'XHR: Failed to send message'));
            }
          } catch (e) {
            reject(new Error('XHR: Invalid response format'));
          }
        } else {
          reject(new Error(`XHR: HTTP ${xhr.status}`));
        }
      };
      
      xhr.onerror = function() {
        reject(new Error('XHR: Network error'));
      };
      
      xhr.send(formData);
    });
  }

  function validateForm() {
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const subject = form.querySelector('input[name="subject"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !subject || !message) {
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    return true;
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        hideMessage();
      }, 5000);
    }
  }

  function hideMessage() {
    formMessage.style.display = 'none';
    formMessage.className = 'form-message';
  }
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeContactForm();
  
  // Test Web3Forms connection (remove this after testing)
  testWeb3FormsConnection();
});

// Test function to validate Web3Forms setup
async function testWeb3FormsConnection() {
  console.log('Testing Web3Forms connection...');
  
  try {
    // Test with JSON format first
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: '59f4edff-8d09-480e-bde5-17e5328595af',
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'This is a test message to verify Web3Forms integration.'
      })
    });
    
    console.log('Test response status:', response.status);
    console.log('Test response ok:', response.ok);
    
    if (response.ok) {
      const data = await response.json();
      console.log('Test response data:', data);
      
      if (data.success) {
        console.log('✅ Web3Forms connection successful!');
      } else {
        console.log('❌ Web3Forms test failed:', data.message);
      }
    } else {
      console.log('❌ HTTP Error:', response.status, response.statusText);
    }
  } catch (error) {
    console.log('❌ Web3Forms test error:', error);
    
    // Try fallback with FormData
    console.log('Trying fallback test with FormData...');
    try {
      const testData = new FormData();
      testData.append('access_key', '59f4edff-8d09-480e-bde5-17e5328595af');
      testData.append('name', 'Test User');
      testData.append('email', 'test@example.com');
      testData.append('subject', 'Test Subject');
      testData.append('message', 'This is a fallback test message.');
      
      const fallbackResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: testData
      });
      
      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json();
        console.log('✅ Fallback test successful:', fallbackData);
      } else {
        console.log('❌ Fallback test failed:', fallbackResponse.status);
      }
    } catch (fallbackError) {
      console.log('❌ Fallback test also failed:', fallbackError);
    }
  }
}
