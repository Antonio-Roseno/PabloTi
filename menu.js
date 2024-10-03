
              
                <script src="https://kit.fontawesome.com/your-fontawesome-kit.js" crossorigin="anonymous"></script>
            
                  const menuToggle = document.querySelector('.menu-toggle');
                  const menuClose = document.querySelector('.menu-close');
                  const menu = document.querySelector('.menu');
              
                  function toggleMenu() {
                    menu.classList.toggle('open');
                    menuToggle.classList.toggle('open');
                  }
              
                  menuToggle.addEventListener('click', toggleMenu);
                  menuClose.addEventListener('click', toggleMenu);
              
                  document.addEventListener('click', (event) => {
                    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                      menu.classList.remove('open');
                      menuToggle.classList.remove('open');
                    }
                  });
              
                  menu.addEventListener('click', (event) => {
                    event.stopPropagation();
                  });
              
                  const menuItems = document.querySelectorAll('.menu li');
                  menuItems.forEach((item, index) => {
                    item.style.transitionDelay = `${index * 0.1}s`;
                  });
              
                  // Criação do fundo tecnológico
                  const techBackground = document.getElementById('techBackground');
              
                  function createTechElement(className) {
                    const element = document.createElement('div');
                    element.className = className;
                    element.style.left = `${Math.random() * 100}%`;
                    element.style.top = `${Math.random() * 100}%`;
                    return element;
                  }
              
                  for (let i = 0; i < 10; i++) {
                    const line = createTechElement('tech-line');
                    line.style.width = `${Math.random() * 100 + 50}px`;
                    line.style.height = '1px';
                    line.style.transform = `rotate(${Math.random() * 360}deg)`;
                    techBackground.appendChild(line);
              
                    const circle = createTechElement('tech-circle');
                    circle.style.width = circle.style.height = `${Math.random() * 50 + 10}px`;
                    techBackground.appendChild(circle);
                  }
              
                  // Ícones flutuantes
                  const floatingIcons = ['&#xf121;', '&#xf0ac;', '&#xf0eb;', '&#xf1b2;', '&#xf085;'];
                  floatingIcons.forEach(icon => {
                    const iconElement = document.createElement('div');
                    iconElement.className = 'floating-icon';
                    iconElement.innerHTML = icon;
                    iconElement.style.left = `${Math.random() * 100}%`;
                    iconElement.style.top = `${Math.random() * 100}%`;
                    iconElement.style.animationDuration = `${Math.random() * 3 + 4}s`;
                    document.body.appendChild(iconElement);
                  });
       