// Loading animation
window.addEventListener('load', () => {
  const loadingOverlay = document.getElementById('loadingOverlay');
  setTimeout(() => {
    loadingOverlay.classList.add('hidden');
  }, 1000);
});

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
      // Trigger enhanced home section animations
      triggerEnhancedHomeAnimations();
      // Initialize scroll-based animations
      initializeScrollAnimations();
      // Initialize resume button
      initializeResumeButton();
      // Initialize project links
      initializeProjectLinks();
      // Initialize navigation
      initializeNavigation();
    }, 800);
  }, 1500);
});

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
    { selector: '.home-content h1', delay: 100, extraClass: 'slide-in-left' },
    { selector: '.home-content .text-animate', delay: 400, extraClass: 'slide-in-right' },
    { selector: '.home-content p', delay: 700, extraClass: 'fade-in-up' },
    { selector: '.btn-box', delay: 1000, extraClass: 'bounce-in' },
    { selector: '.home-sci', delay: 1300, extraClass: 'slide-in-bottom' },
    { selector: '.pic', delay: 1600, extraClass: 'scale-in-rotate' }
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

// For Navigation Bar (Header of the webpage)
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Professional Section Reveal System
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Enhanced Professional Section Reveal System with Intersection Observer
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '-50px 0px -50px 0px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        const sectionId = section.getAttribute('id');
        
        // Add show-animate class with enhanced timing
        section.classList.add('show-animate');
        
        // Trigger sophisticated section-specific animations
        triggerEnhancedSectionAnimations(sectionId, section);
        
        // Update active navigation with smooth transition
        updateActiveNavigation(sectionId);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
  });
}

// Enhanced navigation update with smooth transitions
function updateActiveNavigation(sectionId) {
  const navLinks = document.querySelectorAll("header nav a");
  
  navLinks.forEach((link) => {
    link.classList.remove("active");
    link.style.transform = 'translateY(0)';
  });
  
  // Find the link that corresponds to the current section
  const activeLink = document.querySelector(`header nav a[href="#${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
    activeLink.style.transform = 'translateY(-2px)';
    
    // Add ripple effect
    createRippleEffect(activeLink);
  }
}

// Create ripple effect for navigation
function createRippleEffect(element) {
  const ripple = document.createElement('span');
  ripple.classList.add('nav-ripple');
  ripple.style.left = '50%';
  ripple.style.top = '50%';
  element.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Enhanced Section-Specific Animation System
function triggerEnhancedSectionAnimations(sectionId, sectionElement) {
  
  if (sectionId === 'about') {
    const animationSequence = [
      { selector: '.heading', delay: 100, animation: 'fadeInUp' },
      { selector: '.about-img', delay: 300, animation: 'scaleInRotate' },
      { selector: '.about-content', delay: 600, animation: 'slideInRight' }
    ];
    
    executeAnimationSequence(sectionElement, animationSequence);
  }
  
  if (sectionId === 'education') {
    const heading = sectionElement.querySelector('.heading');
    if (heading) animateElement(heading, 'fadeInUp', 100);
    
    const contents = sectionElement.querySelectorAll('.education-content .content');
    contents.forEach((content, index) => {
      animateElement(content, 'slideInLeft', 300 + (index * 150));
    });
  }
  
  if (sectionId === 'experience') {
    const heading = sectionElement.querySelector('.heading');
    if (heading) animateElement(heading, 'fadeInUp', 100);
    
    const contents = sectionElement.querySelectorAll('.education-content .content');
    contents.forEach((content, index) => {
      animateElement(content, 'slideInRight', 300 + (index * 150));
    });
  }
  
  if (sectionId === 'skills') {
    const heading = sectionElement.querySelector('.heading');
    if (heading) animateElement(heading, 'fadeInUp', 100);
    
    const skillBoxes = sectionElement.querySelectorAll('.skill-box');
    skillBoxes.forEach((box, index) => {
      animateElement(box, 'bounceInScale', 300 + (index * 80));
      
      // Add enhanced hover interactions
      addSkillBoxInteractions(box);
    });
  }
  
  if (sectionId === 'projects') {
    const heading = sectionElement.querySelector('.heading');
    if (heading) animateElement(heading, 'fadeInUp', 100);
    
    const projectBoxes = sectionElement.querySelectorAll('.project-box');
    projectBoxes.forEach((box, index) => {
      animateElement(box, 'scaleInPerspective', 400 + (index * 200));
      
      // Add enhanced project interactions
      addProjectBoxInteractions(box);
    });
  }

  if (sectionId === 'contact') {
    const heading = sectionElement.querySelector('.heading');
    if (heading) animateElement(heading, 'fadeInUp', 100);
    
    const formElements = sectionElement.querySelectorAll('.input-box, .textarea-field, .btn-box.btns');
    formElements.forEach((element, index) => {
      animateElement(element, 'slideInUp', 300 + (index * 150));
    });
  }
  
  if (sectionId === 'certificates') {
    const heading = sectionElement.querySelector('.heading');
    if (heading) animateElement(heading, 'fadeInUp', 100);
    
    const certificateBoxes = sectionElement.querySelectorAll('.certificate-box');
    certificateBoxes.forEach((box, index) => {
      animateElement(box, 'flipInY', 300 + (index * 100));
    });
    
    const sliderControls = sectionElement.querySelector('.slider-controls');
    if (sliderControls) animateElement(sliderControls, 'slideInUp', 800);
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
      element.style.transition = 'all 1.2s var(--professional-ease)';
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
    
    // Remove the duplicate click handler since the default browser behavior works
    // Just add enhanced hover effects
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

// Initialize navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll('header nav a');
  
  if (navLinks.length === 0) {
    console.log('No navigation links found, retrying...');
    setTimeout(initializeNavigation, 500);
    return;
  }
  
  navLinks.forEach(link => {
    // Remove any existing click listeners to prevent duplicates
    link.removeEventListener('click', handleNavClick);
    link.addEventListener('click', handleNavClick);
  });
  
  window.navigationInitialized = true;
  console.log('Navigation initialized successfully with', navLinks.length, 'links');
}

// Navigation click handler
function handleNavClick(e) {
  e.preventDefault();
  
  // Get the target section id from href
  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  
  if (targetSection) {
    // Calculate offset for fixed header
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 80;
    const targetPosition = targetSection.offsetTop - headerHeight - 10;
    
    // Smooth scroll to target section
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    // Update active navigation
    updateActiveNavigation(targetId);
    
    // Close mobile menu if open
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('#menu-icon');
    if (navbar && navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      if (menuIcon) {
        menuIcon.classList.remove('bx-x');
      }
    }
  }
}

// Enhanced smooth scroll with offset for fixed header
function smoothScrollToSection(targetId) {
  const targetSection = document.getElementById(targetId);
  const header = document.querySelector('.header');
  
  if (targetSection && header) {
    const headerHeight = header.offsetHeight;
    const targetPosition = targetSection.offsetTop - headerHeight - 20;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

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

// Enhanced Sticky Header and Scroll Management
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
  
  // Remove mobile menu on scroll
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  if (menuIcon && navbar) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
  
  // Footer animation
  const footer = document.querySelector("footer");
  if (footer) {
    const footerOffset = window.innerHeight + scrollTop - document.documentElement.scrollHeight;
    footer.classList.toggle("show-animate", footerOffset >= -50);
  }
});

// Enhanced Mobile Menu with Animation
if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    const isActive = navbar.classList.contains("active");
    
    // Animate menu icon
    menuIcon.classList.toggle("bx-x");
    
    // Animate navbar with enhanced effects
    navbar.classList.toggle("active");
    
    if (!isActive) {
      // Opening animation
      navbar.style.transform = 'translateY(0)';
      navbar.style.opacity = '1';
      
      // Animate individual nav items
      const navItems = navbar.querySelectorAll('a');
      navItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.transform = 'translateX(0)';
          item.style.opacity = '1';
        }, index * 100);
      });
    } else {
      // Closing animation
      navbar.style.transform = 'translateY(-20px)';
      navbar.style.opacity = '0';
    }
  };
}

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

// Test navigation functionality
function testNavigation() {
  console.log('Testing navigation functionality...');
  const navLinks = document.querySelectorAll('header nav a');
  console.log('Found navigation links:', navLinks.length);
  
  navLinks.forEach((link, index) => {
    const href = link.getAttribute('href');
    const targetId = href ? href.substring(1) : 'none';
    const targetSection = document.getElementById(targetId);
    console.log(`Link ${index}: href="${href}", target="${targetId}", section found:`, !!targetSection);
  });
}

// Initialize everything when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing navigation...');
  
  // Small delay to ensure all elements are rendered
  setTimeout(() => {
    initializeNavigation();
    initializeProjectLinks();
    testNavigation();
  }, 100);
});

// Fallback navigation initialization - run after a delay to ensure everything is loaded
setTimeout(() => {
  if (!window.navigationInitialized) {
    console.log('Fallback navigation initialization...');
    initializeNavigation();
    window.navigationInitialized = true;
  }
}, 2000);

// Also initialize on window load as a final fallback
window.addEventListener('load', () => {
  setTimeout(() => {
    if (!window.navigationInitialized) {
      console.log('Window load navigation initialization...');
      initializeNavigation();
      window.navigationInitialized = true;
    }
  }, 500);
});
