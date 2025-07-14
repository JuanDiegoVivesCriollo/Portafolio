
        function typewriter() {
            return {
                texts: [
                    'Autoaprendizaje',
                    'Aspirante a ser desarrollaor Web Full Stack',
                    'Aprendiendo React & Next.js⚛️',
                    'PHP & Laravel, Backend 🐘',
                    'JavaScript consolidado ⚡',
                    'Aprendiendo Node.js🟢',
                    'Tailwind consolidado',
                    'Manejo de Git y GitHub',
                    'HTML5 y CSS3, fundamentos sólidos',
                    'Testeo de apis con Postman',
                    'Desarrollando APis RESTful',
                    'Desarrollando aplicaciones web responsivas',
                    'UI/UX, diseño de interfaces',
                    'Learning Everyday',
                    'Lima, Perú 🇵🇪'
                ],
                currentIndex: 0,
                displayedText: '',
                isDeleting: false,
                typeSpeed: 80,
                deleteSpeed: 40,
                pauseTime: 2000,
                
                start() {
                    this.type();
                },
                
                type() {
                    const currentText = this.texts[this.currentIndex];
                    
                    if (this.isDeleting) {
                        this.displayedText = currentText.substring(0, this.displayedText.length - 1);
                    } else {
                        this.displayedText = currentText.substring(0, this.displayedText.length + 1);
                    }
                    
                    let speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
                    
                    if (!this.isDeleting && this.displayedText === currentText) {
                        speed = this.pauseTime;
                        this.isDeleting = true;
                    } else if (this.isDeleting && this.displayedText === '') {
                        this.isDeleting = false;
                        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
                    }
                    
                    setTimeout(() => this.type(), speed);
                }
            }
        }        
        document.addEventListener('DOMContentLoaded', function() {
            let isMenuOpen = false;
            
            // Cerrar menú al hacer scroll
            window.addEventListener('scroll', function() {
                if (isMenuOpen) {
                    window.dispatchEvent(new CustomEvent('toggle-mobile-menu', {
                        detail: { isOpen: false }
                    }));
                    isMenuOpen = false;
                }
            });
            
            // Escuchar cambios en el estado del menú
            window.addEventListener('toggle-mobile-menu', function(e) {
                isMenuOpen = e.detail.isOpen;
                
                // Controlar el scroll del body
                if (isMenuOpen) {
                    document.body.classList.add('mobile-menu-open');
                } else {
                    document.body.classList.remove('mobile-menu-open');
                }
            });
            
            // Cerrar menú al redimensionar la ventana
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 1024 && isMenuOpen) {
                    window.dispatchEvent(new CustomEvent('toggle-mobile-menu', {
                        detail: { isOpen: false }
                    }));
                    isMenuOpen = false;
                }
            });
            
            // Cerrar menú al hacer clic fuera de él
            document.addEventListener('click', function(e) {
                const mobileMenu = e.target.closest('[x-data*="mobileOpen"]');
                const hamburgerButton = e.target.closest('button');
                
                if (!mobileMenu && !hamburgerButton && isMenuOpen) {
                    window.dispatchEvent(new CustomEvent('toggle-mobile-menu', {
                        detail: { isOpen: false }
                    }));
                    isMenuOpen = false;
                }
            });
        });

        // Modal de proyectos
        function projectModal() {
            return {
                isOpen: false,
                selectedImageIndex: 0,
                currentProject: {},
                
                projects: {
                    contigovoy: {
                        title: 'Contigo Voy',
                        type: 'Empresa',
                        status: 'En desarrollo',
                        period: 'Jun 2025 - Actual',
                        fullDescription: 'Contigo Voy es una página web internacional que brinda citas psicológicas online en diferentes tipos de terapias, con psicólogos capacitados. Desde mi ingreso, mejoré el diseño de los blogs en el landing page y en el backend para el guardado de blogs, el diseño del login y varias funcionalidades responsivas. Actualmente sigo encargado de mejoras frontend con Tailwind, aplicando Scrum, usando Git & GitHub y desplegando con Hostinger. Más mejoras en camino. Desplegado en: https://centropsicologicocontigovoy.com/',
                        features: [
                            'Mejoras en el diseño de blogs (landing y backend)',
                            'Rediseño de login',
                            'Funcionalidades responsivas',
                            'Frontend con Tailwind CSS',
                            'Trabajo en equipo con Scrum',
                            'Uso eficiente de Git & GitHub',
                            'Despliegue en Hostinger',
                            'Citas online con psicólogos certificados'
                        ],
                        technologies: [
                            { name: 'PHP', class: 'bg-purple-900/50 text-purple-400 border-purple-500/30' },
                            { name: 'Laravel', class: 'bg-red-900/50 text-red-400 border-red-500/30' },
                            { name: 'MySQL', class: 'bg-blue-900/50 text-blue-400 border-blue-500/30' },
                            { name: 'JavaScript', class: 'bg-yellow-900/50 text-yellow-400 border-yellow-500/30' },
                            { name: 'CSS3', class: 'bg-cyan-900/50 text-cyan-400 border-cyan-500/30' },
                            { name: 'Tailwind CSS', class: 'bg-cyan-900/50 text-cyan-400 border-cyan-500/30' }
                        ],
                        images: [
                            './assets/imgContigoVoy/hmztpg2vewlbun5bsczr.webp',
                            './assets/imgContigoVoy/ktanolowxqit0k4p8yw6.webp',
                            './assets/imgContigoVoy/ptwawf6x43yenc99cos5.webp',
                            './assets/imgContigoVoy/rmbh2k6eaqjuujcxftuz.webp',
                            './assets/imgContigoVoy/tlrqydclzbl4g7z6c9gs.webp'
                        ]
                    },
                    portfolio: {
                        title: 'Portfolio Personal',
                        type: 'Proyecto Personal',
                        status: 'Completado',
                        period: 'Jul 2025',
                        fullDescription: 'Mi portafolio personal desarrollado con las últimas tecnologías web. Diseño moderno y responsivo con efectos visuales avanzados, optimizado para mostrar mis habilidades y proyectos de manera atractiva. Incluye animaciones CSS personalizadas, efectos de transición suaves y una experiencia de usuario excepcional.',
                        features: [
                            'Diseño completamente responsivo',
                            'Efectos visuales avanzados',
                            'Animaciones CSS personalizadas',
                            'Dark theme moderno',
                            'Optimización de rendimiento',
                            'SEO optimizado',
                            'Galería de proyectos interactiva',
                            'Formulario de contacto funcional'
                        ],
                        technologies: [
                            { name: 'HTML5', class: 'bg-orange-900/50 text-orange-400 border-orange-500/30' },
                            { name: 'Tailwind CSS', class: 'bg-cyan-900/50 text-cyan-400 border-cyan-500/30' },
                            { name: 'JavaScript', class: 'bg-yellow-900/50 text-yellow-400 border-yellow-500/30' },
                            { name: 'Alpine.js', class: 'bg-green-900/50 text-green-400 border-green-500/30' },
                            { name: 'Font Awesome', class: 'bg-blue-900/50 text-blue-400 border-blue-500/30' },
                            { name: 'DevIcon', class: 'bg-gray-900/50 text-gray-400 border-gray-500/30' }
                        ],                        images: [
                            './assets/img/ImagenProtafolio.webp',
                            './assets/img/imagenPortafoolioapartadoSobreMi.webp',
                            './assets/img/portafolioapartadostacktecnologico.webp',
                            './assets/img/portafolioApartadpExperienciaProfesional.webp',
                            './assets/img/protafolioModoMobile.webp'
                        ]
                    },
                    vsptours: {
                        title: 'VSP Tours Website',
                        type: 'Freelance',
                        status: 'Completado',
                        period: 'Nov 2024 - Jun 2025',
                        fullDescription: 'Sitio web para la empresa de turismo VSP Tours. Proyecto 100% HTML, CSS y JavaScript puro, sin backend ni base de datos: el sistema de reservas funciona enviando automáticamente los datos del formulario a WhatsApp. Incluye galería de destinos, página de servicios, flota, formulario de reserva y más. No tiene panel administrativo ni base de datos, pero está optimizado para mostrar información y captar clientes de forma sencilla. Aún faltan mejoras de rendimiento (como optimizar imágenes a WebP y modernizar JS). ¡Mi primer proyecto grande, donde aprendí mucho sobre retos reales y satisfacción del cliente!',
                        features: [
                            'Reserva automática vía WhatsApp',
                            'Galería de destinos turísticos',
                            'Página de servicios y flota',
                            'Formulario de reserva funcional',
                            'Diseño responsivo',
                            'Optimización SEO básica',
                            'Solo HTML, CSS y JS',
                            'Sin base de datos ni backend'
                        ],
                        technologies: [
                            { name: 'HTML5', class: 'bg-orange-900/50 text-orange-400 border-orange-500/30' },
                            { name: 'CSS3', class: 'bg-blue-900/50 text-blue-400 border-blue-500/30' },
                            { name: 'JavaScript', class: 'bg-yellow-900/50 text-yellow-400 border-yellow-500/30' }
                        ],
                        images: [
                            './assets/imgVspTours/vsptourspaginainicial.webp',
                            './assets/imgVspTours/vspToursSobreNosotros.webp',
                            './assets/imgVspTours/vspToursConsultar.webp',
                            './assets/imgVspTours/vspToursDestinos.webp',
                            './assets/imgVspTours/vspToursFlota.webp',
                            './assets/imgVspTours/vspToursFourmalriodreserva.webp',
                            './assets/imgVspTours/vspToursReservarAhora.webp',
                            './assets/imgVspTours/vspToursServicios.webp',
                            './assets/imgVspTours/resultadoEnviarporwsREserva.webp'
                        ]
                    }
                },
                
                openProjectModal(projectKey) {
                    this.currentProject = this.projects[projectKey];
                    this.selectedImageIndex = 0;
                    this.isOpen = true;
                    // Prevenir scroll del body
                    document.body.style.overflow = 'hidden';
                },
                
                closeModal() {
                    this.isOpen = false;
                    // Restaurar scroll del body
                    document.body.style.overflow = 'auto';
                },
                
                nextImage() {
                    if (this.selectedImageIndex < this.currentProject.images.length - 1) {
                        this.selectedImageIndex++;
                    } else {
                        this.selectedImageIndex = 0;
                    }
                },
                
                previousImage() {
                    if (this.selectedImageIndex > 0) {
                        this.selectedImageIndex--;
                    } else {
                        this.selectedImageIndex = this.currentProject.images.length - 1;
                    }
                }
            }
        }        // Función global para abrir el modal
        function openProjectModal(projectKey) {
            // Disparar evento para Alpine.js
            window.dispatchEvent(new CustomEvent('open-project-modal', {
                detail: { projectKey: projectKey }
            }));
        }
  