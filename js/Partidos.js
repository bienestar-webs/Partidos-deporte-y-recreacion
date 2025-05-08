document.addEventListener('DOMContentLoaded', function() {
    // Datos de los partidos (simulados) CON RESULTADOS MANUALES
    const matchesData = {

        
        1: {
            home: "España",
            away: "Colombia",
            homeScore: 0, // Resultado manual
            awayScore: 0, // Resultado manual
            homeLogo: "img/Escudo-España.png",
            awayLogo: "img/Escudo-Colombia.png",
            date: "Miércoles 7 de Mayo, 2025",
            time: "20:45",
            stadium: "Estadio La Cartuja, Sevilla",
            referee: "Carlos del Cerro Grande",
            weather: "22°C - Soleado",
            homeLineup: ["Unai Simón", "Carvajal", "Pau Torres", "Laporte", "Gayà", "Rodri", "Pedri", "Gavi", "Olmo", "Morata", "Williams"],
            awayLineup: ["Ospina", "Mojica", "Cuesta", "Lucumí", "Perea", "Lerma", "Uribe", "Díaz", "James", "Borja", "Sinisterra"]
        },



        
        2: {
            home: "Italia",
            away: "Brasil",
            homeScore: 0,
            awayScore: 0,
            homeLogo: "img/Escudo-Italia.png",
            awayLogo: "img/Escudo-Brasil.png",
            date: "Miércoles 7 de Mayo, 2025",
            time: "18:30",
            stadium: "Estadio Olímpico, Roma",
            referee: "Daniele Orsato",
            weather: "20°C - Parcialmente nublado",
            homeLineup: ["Donnarumma", "Di Lorenzo", "Bastoni", "Acerbi", "Dimarco", "Barella", "Jorginho", "Verratti", "Chiesa", "Immobile", "Raspadori"],
            awayLineup: ["Alisson", "Danilo", "Marquinhos", "Militão", "Renan Lodi", "Casemiro", "Bruno Guimarães", "Neymar", "Rodrygo", "Vini Jr.", "Richarlison"]
        },


        
        3: {
            home: "México",
            away: "Países Bajos",
            homeScore: 0,
            awayScore: 0,
            homeLogo: "img/Escudo-Mexico.png",
            awayLogo: "img/Escudo-PaisesBajos.png",
            date: "Miércoles 7 de Mayo, 2025",
            time: "22:00",
            stadium: "Estadio Azteca, Ciudad de México",
            referee: "Anthony Taylor",
            weather: "18°C - Lluvia moderada",
            homeLineup: ["Ochoa", "J. Sánchez", "Montes", "Vásquez", "Gallardo", "Edson Álvarez", "Luis Chávez", "Tecatito", "Lozano", "Vega", "Jiménez"],
            awayLineup: ["Bijlow", "Dumfries", "Van Dijk", "De Ligt", "Aké", "De Jong", "Koopenmeiners", "Berghuis", "Gakpo", "Depay", "Bergwijn"]
        },


        
        4: {
            home: "Croacia",
            away: "Bélgica",
            homeScore: 0,
            awayScore: 0,
            homeLogo: "img/Escudo-Croacia.png",
            awayLogo: "img/Escudo-Belgica.png",
            date: "Miércoles 7 de Mayo, 2025",
            time: "19:15",
            stadium: "Estadio Maksimir, Zagreb",
            referee: "Björn Kuipers",
            weather: "16°C - Viento fuerte",
            homeLineup: ["Livaković", "Juranović", "Gvardiol", "Šutalo", "Sosa", "Modrić", "Brozović", "Kovačić", "Pašalić", "Perišić", "Kramarić"],
            awayLineup: ["Courtois", "Meunier", "Vertonghen", "Alderweireld", "Castagne", "Tielemans", "Onana", "De Bruyne", "Trossard", "Lukaku", "Doku"]
        },

        
        5: {
            home: "Marruecos",
            away: "Ecuador",
            homeScore: 0,
            awayScore: 0,
            homeLogo: "img/Escudo-Marruecos.png",
            awayLogo: "img/Escudo-Ecuador.png",
            date: "Miércoles 7 de Mayo, 2025",
            time: "21:00",
            stadium: "Estadio Ibn Batouta, Tánger",
            referee: "Mustapha Ghorbal",
            weather: "24°C - Noche despejada",
            homeLineup: ["Bono", "Hakimi", "Aguerd", "Saiss", "Mazraoui", "Amrabat", "Ounahi", "Ziyech", "Boufal", "En-Nesyri", "Aboukhlal"],
            awayLineup: ["Galíndez", "Preciado", "Torres", "Hincapié", "Estupiñán", "Gruezo", "Caicedo", "Méndez", "Sarmiento", "Plata", "Valencia"]
    },
        
}; 
    /* CERARR */





    
    

    // Contador para la fecha del partido
    function updateMatchDate() {
        const matchDate = new Date("2025-05-07"); // 7 de Mayo 2025
        const now = new Date();
        const diffTime = matchDate - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const countdownContainer = document.querySelector('.countdown-container');
        
        if (diffDays > 0) {
            countdownContainer.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-number">${diffDays}</span>
                    <span class="countdown-label">días</span>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-item">
                    <span class="countdown-number">${Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</span>
                    <span class="countdown-label">horas</span>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-item">
                    <span class="countdown-number">${Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))}</span>
                    <span class="countdown-label">min</span>
                </div>
            `;
        } else if (diffDays === 0) {
            countdownContainer.innerHTML = `
                <div class="countdown-now">¡HOY ES EL PARTIDO!</div>
                <div class="countdown-now-sub">No te lo pierdas</div>
            `;
            countdownContainer.style.background = 'linear-gradient(to right, var(--accent-color), var(--secondary-color))';
            countdownContainer.style.animation = 'pulse 1.5s infinite';
        } else {
            countdownContainer.innerHTML = `
                <div class="countdown-past">EL PARTIDO YA OCURRIÓ</div>
                <div class="countdown-past-sub">Revisa los resultados</div>
            `;
            countdownContainer.style.background = 'linear-gradient(to right, #666, #999))';
        }
    }

    updateMatchDate();
    setInterval(updateMatchDate, 60000);

    // Botones de detalles
    const detailButtons = document.querySelectorAll('.details-btn');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const matchContainer = this.closest('.match-details');
            const content = matchContainer.querySelector('.details-content');
            
            this.classList.toggle('active');
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Modal
    const modal = document.getElementById('matchModal');
    const closeModal = document.querySelector('.close-modal');
    const modalContent = document.querySelector('.modal-content');
    
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Manejar clic en los partidos (MODIFICADO PARA GOLES MANUALES)
    const matches = document.querySelectorAll('.match');
    
    matches.forEach(match => {
        match.addEventListener('click', function() {
            const matchId = this.getAttribute('data-match-id');
            const matchData = matchesData[matchId];
            
            // Efecto visual al hacer clic
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 100);
            
            // Usar resultados manuales en lugar de aleatorios
            const homeScore = matchData.homeScore;
            const awayScore = matchData.awayScore;
            
            // Resaltar ganador o empate
            this.classList.remove('winner-home', 'winner-away', 'draw');
            if (homeScore > awayScore) {
                this.classList.add('winner-home');
            } else if (awayScore > homeScore) {
                this.classList.add('winner-away');
            } else {
                this.classList.add('draw');
            }
            
            // Llenar el modal con los datos del partido
            document.querySelector('.modal-team.home .modal-team-name').textContent = matchData.home;
            document.querySelector('.modal-team.away .modal-team-name').textContent = matchData.away;
            document.querySelector('.modal-team.home .modal-team-logo').src = matchData.homeLogo;
            document.querySelector('.modal-team.away .modal-team-logo').src = matchData.awayLogo;
            document.querySelector('.home-score').textContent = homeScore;
            document.querySelector('.away-score').textContent = awayScore;
            document.querySelector('.match-date').textContent = matchData.date;
            document.querySelector('.match-time').textContent = matchData.time;
            document.querySelector('.stadium-name').textContent = matchData.stadium;
            document.querySelector('.referee-name').textContent = matchData.referee;
            document.querySelector('.weather-info').textContent = matchData.weather;
            
            // Llenar alineaciones
            const homeLineupList = document.querySelector('.home-lineup .players-list');
            const awayLineupList = document.querySelector('.away-lineup .players-list');
            
            homeLineupList.innerHTML = '';
            awayLineupList.innerHTML = '';
            
            matchData.homeLineup.forEach(player => {
                const li = document.createElement('li');
                li.textContent = player;
                homeLineupList.appendChild(li);
            });
            
            matchData.awayLineup.forEach(player => {
                const li = document.createElement('li');
                li.textContent = player;
                awayLineupList.appendChild(li);
            });
            
            // Actualizar títulos de alineaciones
            document.querySelector('.home-lineup .lineup-title').textContent = matchData.home;
            document.querySelector('.away-lineup .lineup-title').textContent = matchData.away;
            
            // Mostrar modal
            modal.style.display = 'flex';
        });
    });
    
    // Efecto de carga para los partidos
    setTimeout(() => {
        matches.forEach((match, index) => {
            setTimeout(() => {
                match.style.opacity = '1';
                match.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 500);
    
    // Configurar opacidad inicial para la animación
    matches.forEach(match => {
        match.style.opacity = '0';
        match.style.transform = 'translateY(20px)';
        match.style.transition = 'opacity 0.5s, transform 0.5s';
    });

    // Botón de comprar entradas
    const buyTicketsBtn = document.querySelector('.buy-tickets');
    
    buyTicketsBtn.addEventListener('click', function() {
        // Crear el modal con JavaScript
        const ticketModal = document.createElement('div');
        ticketModal.id = 'ticketModal';
        ticketModal.style.position = 'fixed';
        ticketModal.style.top = '0';
        ticketModal.style.left = '0';
        ticketModal.style.width = '100%';
        ticketModal.style.height = '100%';
        ticketModal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        ticketModal.style.display = 'flex';
        ticketModal.style.justifyContent = 'center';
        ticketModal.style.alignItems = 'center';
        ticketModal.style.zIndex = '1000';
        ticketModal.style.opacity = '0';
        ticketModal.style.transition = 'opacity 0.3s ease';
        
        // Crear el contenido del modal
        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = '#fff';
        modalContent.style.borderRadius = '15px';
        modalContent.style.padding = '30px';
        modalContent.style.width = '80%';
        modalContent.style.maxWidth = '500px';
        modalContent.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        modalContent.style.textAlign = 'center';
        modalContent.style.position = 'relative';
        
        // Aplicar gradiente como el diseño principal
        modalContent.style.background = 'linear-gradient(135deg, #f8f9fa, #ffffff)';
        modalContent.style.border = '1px solid rgba(26, 42, 108, 0.2)';
        
        // Crear botón de cerrar
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '15px';
        closeBtn.style.right = '20px';
        closeBtn.style.fontSize = '1.8rem';
        closeBtn.style.color = '#b21f1f';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.transition = 'transform 0.3s';
        
        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.transform = 'scale(1.2)';
        });
        
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.transform = 'scale(1)';
        });
        
        closeBtn.addEventListener('click', () => {
            ticketModal.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(ticketModal);
            }, 300);
        });
        
        // Crear título
        const title = document.createElement('h2');
        title.textContent = 'COMPRAR ENTRADAS';
        title.style.color = '#1a2a6c';
        title.style.marginBottom = '20px';
        title.style.fontFamily = "'Montserrat', sans-serif";
        title.style.fontWeight = '700';
        
        // Mensaje de carga con icono animado
        const message = document.createElement('div');
        message.style.display = 'flex';
        message.style.alignItems = 'center';
        message.style.justifyContent = 'center';
        message.style.gap = '10px';
        message.style.marginBottom = '30px';
        message.style.fontSize = '1.2rem';
        message.style.fontWeight = 'bold';

        // Crear el icono de carga
        const loadingIcon = document.createElement('div');
        loadingIcon.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V6" stroke="#1a2a6c" stroke-width="2" stroke-linecap="round"/>
                <path d="M12 18V22" stroke="#1a2a6c" stroke-width="2" stroke-linecap="round"/>
                <path d="M4.93 4.93L7.76 7.76" stroke="#b21f1f" stroke-width="2" stroke-linecap="round"/>
                <path d="M16.24 16.24L19.07 19.07" stroke="#b21f1f" stroke-width="2" stroke-linecap="round"/>
                <path d="M2 12H6" stroke="#fdbb2d" stroke-width="2" stroke-linecap="round"/>
                <path d="M18 12H22" stroke="#fdbb2d" stroke-width="2" stroke-linecap="round"/>
                <path d="M4.93 19.07L7.76 16.24" stroke="#1a2a6c" stroke-width="2" stroke-linecap="round"/>
                <path d="M16.24 7.76L19.07 4.93" stroke="#1a2a6c" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
        loadingIcon.style.animation = 'spin 1.5s linear infinite';

        // Crear el texto
        const loadingText = document.createElement('span');
        loadingText.textContent = 'CARGANDO…';
        loadingText.style.color = '#1a2a6c';
        loadingText.style.animation = 'pulse-opacity 2s infinite ease-in-out';

        // Añadir animación CSS
        const loadingAnimation = document.createElement('style');
        loadingAnimation.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes pulse-opacity {
                0%, 100% { opacity: 0.8; }
                50% { opacity: 1; }
            }
        `;
        document.head.appendChild(loadingAnimation);

        // Ensamblar el mensaje
        message.appendChild(loadingIcon);
        message.appendChild(loadingText);
        
        // Crear spinner de carga
        const spinner = document.createElement('div');
        spinner.style.width = '50px';
        spinner.style.height = '50px';
        spinner.style.border = '5px solid rgba(26, 42, 108, 0.2)';
        spinner.style.borderRadius = '50%';
        spinner.style.borderTopColor = '#1a2a6c';
        spinner.style.animation = 'spin 1s linear infinite';
        spinner.style.margin = '0 auto 20px';
        
        // Crear animación para el spinner
        const spinAnimation = document.createElement('style');
        spinAnimation.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(spinAnimation);
        
        // Detener el spinner después de 5 segundos
        setTimeout(() => {
            spinner.style.animation = 'none';
            spinner.style.border = '3px solid #1a2a6c';
            spinner.innerHTML = '✓';
            spinner.style.color = '#1a2a6c';
            spinner.style.fontSize = '1.8rem';
            spinner.style.lineHeight = '44px';
            spinner.style.fontWeight = 'bold';
            
            // Cambiar el mensaje después de la carga
            message.textContent = '¡Sistema de ventas en construcción! Próximamente disponible.';
            message.style.color = '#b21f1f';
            message.style.fontWeight = '600';
        }, 5000);
        
        // Crear botón de aceptar
        const acceptBtn = document.createElement('button');
        acceptBtn.textContent = 'ENTENDIDO';
        acceptBtn.style.background = 'linear-gradient(to right, #1a2a6c, #b21f1f)';
        acceptBtn.style.color = 'white';
        acceptBtn.style.border = 'none';
        acceptBtn.style.padding = '12px 25px';
        acceptBtn.style.borderRadius = '25px';
        acceptBtn.style.fontWeight = '600';
        acceptBtn.style.cursor = 'pointer';
        acceptBtn.style.transition = 'transform 0.3s, box-shadow 0.3s';
        acceptBtn.style.marginTop = '15px';
        
        acceptBtn.addEventListener('mouseenter', () => {
            acceptBtn.style.transform = 'translateY(-3px)';
            acceptBtn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        acceptBtn.addEventListener('mouseleave', () => {
            acceptBtn.style.transform = 'translateY(0)';
            acceptBtn.style.boxShadow = 'none';
        });
        
        acceptBtn.addEventListener('click', () => {
            ticketModal.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(ticketModal);
            }, 300);
        });
        
        // Ensamblar el modal
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(title);
        modalContent.appendChild(spinner);
        modalContent.appendChild(message);
        modalContent.appendChild(acceptBtn);
        
        ticketModal.appendChild(modalContent);
        document.body.appendChild(ticketModal);
        
        // Mostrar el modal con animación
        setTimeout(() => {
            ticketModal.style.opacity = '1';
        }, 10);
        
        // Cerrar al hacer clic fuera del contenido
        ticketModal.addEventListener('click', (e) => {
            if (e.target === ticketModal) {
                ticketModal.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(ticketModal);
                }, 300);
            }
        });
    });

    // Efecto de hover en los equipos
    const teams = document.querySelectorAll('.team');
    
    teams.forEach(team => {
        team.addEventListener('mouseenter', function() {
            const logo = this.querySelector('.team-logo');
            const name = this.querySelector('.team-name');
            
            if (logo && name) {
                logo.style.transform = 'scale(1.1) rotate(5deg)';
                name.style.transform = 'translateX(5px)';
            }
        });
        
        team.addEventListener('mouseleave', function() {
            const logo = this.querySelector('.team-logo');
            const name = this.querySelector('.team-name');
            
            if (logo && name) {
                logo.style.transform = 'scale(1) rotate(0)';
                name.style.transform = 'translateX(0)';
            }
        });
    });
});
