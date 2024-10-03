
                  document.addEventListener('DOMContentLoaded', function() {
                    const contactSection = document.querySelector('.contact-section');
                    const profileElements = document.querySelectorAll('.profile h1, .profile h2, .profile p');
                    const socialLinks = document.querySelectorAll('.social-link');
                    const profilePic = document.querySelector('.profile-pic');
                    const profile = document.querySelector('.profile');
                    const themeToggle = document.getElementById('themeToggle');
              
                    // Animate contact section
                    contactSection.style.opacity = '1';
                    contactSection.style.transform = 'translateY(0)';
              
                    // Animate profile elements
                    profileElements.forEach((element, index) => {
                      setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                      }, 300 * (index + 1));
                    });
              
                    // Animate social links
                    socialLinks.forEach((link, index) => {
                      setTimeout(() => {
                        link.style.opacity = '1';
                        link.style.transform = 'translateX(0)';
                      }, 200 * (index + 1));
                    });
              
                    // Add hover effect to profile picture
                    profilePic.addEventListener('mousemove', (e) => {
                      const rect = profilePic.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      
                      const deltaX = (x - centerX) / centerX;
                      const deltaY = (y - centerY) / centerY;
                      
                      profilePic.style.transform = `perspective(1000px) rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 10}deg) scale(1.05)`;
                    });
              
                    profilePic.addEventListener('mouseleave', () => {
                      profilePic.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
                    });
              
                    // Add parallax effect to profile background
                    document.addEventListener('mousemove', (e) => {
                      const mouseX = e.clientX / window.innerWidth;
                      const mouseY = e.clientY / window.innerHeight;
                      profile.style.backgroundPosition = `${mouseX * 20}% ${mouseY * 20}%`;
                    });
              
                    // Theme toggle functionality
                    themeToggle.addEventListener('click', () => {
                      document.body.classList.toggle('dark-theme');
                      if (document.body.classList.contains('dark-theme')) {
                        themeToggle.textContent = '🌞';
                      } else {
                        themeToggle.textContent = '🌓';
                      }
                    });
              
                    // Add hover animation to social links
                    socialLinks.forEach(link => {
                      link.addEventListener('mouseenter', () => {
                        link.style.transform = 'translateX(10px) scale(1.05)';
                      });
                      link.addEventListener('mouseleave', () => {
                        link.style.transform = 'translateX(0) scale(1)';
                      });
                    });
              
                    // Add touch interactions for mobile
                    if ('ontouchstart' in window) {
                      profilePic.addEventListener('touchmove', (e) => {
                        e.preventDefault();
                        const touch = e.touches[0];
                        const rect = profilePic.getBoundingClientRect();
                        const x = touch.clientX - rect.left;
                        const y = touch.clientY - rect.top;
                        
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        
                        const deltaX = (x - centerX) / centerX;
                        const deltaY = (y - centerY) / centerY;
                        
                        profilePic.style.transform = `perspective(1000px) rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 10}deg) scale(1.05)`;
                      });
              
                      profilePic.addEventListener('touchend', () => {
                        profilePic.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
                      });
              
                      document.addEventListener('touchmove', (e) => {
                        const touch = e.touches[0];
                        const mouseX = touch.clientX / window.innerWidth;
                        const mouseY = touch.clientY / window.innerHeight;
                        profile.style.backgroundPosition = `${mouseX * 20}% ${mouseY * 20}%`;
                      });
                    }
              
                    // Modify the existing social link event listeners
                    socialLinks.forEach(link => {
                      const handleInteraction = (scale) => {
                        link.style.transform = `translateX(${scale === 1 ? '0' : '10px'}) scale(${scale})`;
                      };
              
                      link.addEventListener('mouseenter', () => handleInteraction(1.05));
                      link.addEventListener('mouseleave', () => handleInteraction(1));
                      link.addEventListener('touchstart', () => handleInteraction(1.05));
                      link.addEventListener('touchend', () => handleInteraction(1));
                    });
              
                    // Add typing effect to the job title
                    const jobTitle = document.querySelector('.profile h2');
                    const text = jobTitle.textContent;
                    jobTitle.textContent = '';
                    let i = 0;
                    function typeWriter() {
                      if (i < text.length) {
                        jobTitle.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                      }
                    }
                    setTimeout(typeWriter, 1000);
              
                    // Add pulse animation to profile picture
                    setInterval(() => {
                      profilePic.style.transform = 'scale(1.05)';
                      setTimeout(() => {
                        profilePic.style.transform = 'scale(1)';
                      }, 200);
                    }, 3000);
              
                    // Observe elements for animation on scroll
                    const observer = new IntersectionObserver((entries) => {
                      entries.forEach(entry => {
                        if (entry.isIntersecting) {
                          entry.target.classList.add('in-view');
                        }
                      });
                    }, { threshold: 0.1 });
              
                    document.querySelectorAll('.social-link, .profile-pic, h1, h2, p').forEach(el => {
                      observer.observe(el);
                    });
                    
                    // Add classes for the new animations
                    document.querySelectorAll('.social-link, .profile-pic, h1, h2, p').forEach(el => {
                      el.classList.add('animate-on-scroll');
                    });
                  });
