const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        sections.forEach((section) => {
          section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
      });
    });