document.addEventListener('DOMContentLoaded', function () {
    // Example of adding content to the "Games" section dynamically
    const gamesSection = document.getElementById("games");
    
    // Create and append the back button at the top (above the "Games" title)
    const backButton = document.createElement("button");
    backButton.textContent = "Back to Home";
    backButton.onclick = () => {
        window.location.href = 'index.html'; // Replace with your homepage URL
    };
    gamesSection.insertBefore(backButton, gamesSection.firstChild); // Insert the button at the top

    const gamesData = [
        {
            title: "Unchained on Steam",
            imgSrc: "IMAGENES/MY VIDEOGAMES/Unchained/Steam/store_capsule_vertical.png",
            description: "In the year 1997, technology is advancing, but something dark is hiding in the development of the latest innovations in Artificial Intelligence... Discover the truth behind it as you dive into the story of Unchained.",
            carouselImages: [
            ],
            pageUrl: "" // URL de la página del juego
        },
        {
            title: "Once Button a Time",
            imgSrc: "IMAGENES/MY VIDEOGAMES/Obat/obat.png",
            description: "After an accident with the family cat, Carioca, the ragdoll, loses her button eyes. With the help of Byron, the plush dog, Carioca embarks on a journey to find her traditional button eyes by solving puzzles and using her wit. Manage your buttons wisely as you navigate Ana's room and uncover secrets on the way to the famous tailor George.",
            carouselImages: [
                "IMAGENES/MY VIDEOGAMES/Obat/Gameplay/1.png",
                "IMAGENES/MY VIDEOGAMES/Obat/Gameplay/2.png",
                "IMAGENES/MY VIDEOGAMES/Obat/Gameplay/3.png",
                "IMAGENES/MY VIDEOGAMES/Obat/Gameplay/4.png",
                "IMAGENES/MY VIDEOGAMES/Obat/Gameplay/5.png",
                "IMAGENES/MY VIDEOGAMES/Obat/Gameplay/Captura de pantalla 2024-11-04 221032.png"
            ],
            pageUrl: "https://origamingcreations.itch.io/once-button-a-time" // URL de la página del juego
        },
        {
            title: "Unchained",
            imgSrc: "IMAGENES/MY VIDEOGAMES/Unchained/unhained.png",
            description: "In the year 1997, technology is advancing, but a hidden threat emerges within the development of new Artificial Intelligence. Dive into Jam's version of Unchained and unravel the mysteries behind the innovation.",
            carouselImages: [
            ],
            pageUrl: "https://reibax.itch.io/unchained" // URL de la página del juego
        },
        {
            title: "Relapsed",
            imgSrc: "IMAGENES/MY VIDEOGAMES/Relapsed/relapsed.png",
            description: "Play as Alejandro Morales, a man struggling with depression who finds himself working at a psychological assistance office. Your decisions will shape the outcome as you help fragile patients navigate their challenges. The fate of their lives is in your hands.",
            carouselImages: [
                "IMAGENES/MY VIDEOGAMES/Relapsed/gameplay/_TyhMp.png",
                "IMAGENES/MY VIDEOGAMES/Relapsed/gameplay/dIBa+s.png",
                "IMAGENES/MY VIDEOGAMES/Relapsed/gameplay/_TyhMp2.png",
                "IMAGENES/MY VIDEOGAMES/Relapsed/gameplay/s8riU8.png"
            ],
            pageUrl: "https://tokpary.itch.io/relapsed" // URL de la página del juego
        },
        {
            title: "Bombs R Us",
            imgSrc: "IMAGENES/MY VIDEOGAMES/Bomb R Us/bombsRUs.png",
            description: "A competitive game where two players battle it out in a toy factory filled with blocks and conveyor belts. Inspired by Bomberman, you’ll strategically place surprise gift bombs to eliminate your opponent. Use your wits and positioning to emerge victorious.",
            carouselImages: [
                "IMAGENES/MY VIDEOGAMES/Bomb R Us/GamePlay/1JVecm.png",
                "IMAGENES/MY VIDEOGAMES/Bomb R Us/GamePlay/pyVTPj.png",
                "IMAGENES/MY VIDEOGAMES/Bomb R Us/GamePlay/S36rLg.png",
                "IMAGENES/MY VIDEOGAMES/Bomb R Us/GamePlay/sssss.png",
            ],
            pageUrl: "https://nuriia.itch.io/bombs-r-us" // URL de la página del juego
        },
        {
            title: "The Last Nectar",
            imgSrc: "IMAGENES/MY VIDEOGAMES/Last Nectar/nectar.png",
            description: "Protect the Tree from an oncoming wave of robots. As a player, you’ll manage creatures with unique abilities to stop the robots and prevent them from reaching the Tree. Survive five waves to win or lose three lives and face defeat. Efficient creature placement is key!",
            carouselImages: [
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            pageUrl: "https://nuriia.itch.io/the-last-nectar" // URL de la página del juego
        },
        {
            title: "Nurii on itch.io",
            imgSrc: "IMAGENES/MY VIDEOGAMES/Obat/Gameplay/0.png",
            description: "Nurii on itch.io: Explore and discover more of my games on itch.io!",
            carouselImages: [
                "IMAGENES/MY VIDEOGAMES/Obat/Gameplay/0.png"
            ],
            pageUrl: "https://nuriia.itch.io/the-last-nectar" // URL de la página del juego
        }
        
    ];

    const awardsSection = document.getElementById("awards");
    const awardsData = [
        {
            title: "Devuego Awards Finalist",
            description: "Nominated for Best Game Jam Game at the national Devuego Awards with Once Button a Time!"
        },
        {
            title: "Game Jam Champions",
            description: "Winner of the Game Scholars Game Jam with Unchained"
        },
        {
            title: "Third Place",
            description: "Awarded third place at the Virtual Core Game Jam with Once Button a Time!"
        }
    ];

    gamesData.forEach((game, index) => {
        const gameDiv = document.createElement("div");
        gameDiv.classList.add("game");
        
        if (index % 2 !== 0) {
            gameDiv.classList.add("reverse");
        }
    
        // Crear contenedor de imagen
        const gameImageDiv = document.createElement("div");
        gameImageDiv.classList.add("gameImageDiv");
        const gameImg = document.createElement("img");
        gameImg.src = game.imgSrc;
        gameImg.alt = game.title;
        gameImageDiv.appendChild(gameImg);
        
        // Crear carrusel de imágenes
        let carouselIndex = 0;
        let carouselInterval;
        
        gameImageDiv.addEventListener('mouseenter', () => {
            if (game.carouselImages && game.carouselImages.length > 0) {
                // Mostrar un texto que indique que es interactivo
                const hoverText = document.createElement('div');
                hoverText.classList.add('hover-indicator');
                hoverText.textContent = "Click for more details";
                gameImageDiv.appendChild(hoverText);
        
                carouselIndex = (0) % game.carouselImages.length;
                gameImg.src = game.carouselImages[carouselIndex];
        
                // Iniciar el carrusel con el intervalo de tiempo
                carouselInterval = setInterval(() => {
                    gameImg.classList.add('hidden');
        
                    setTimeout(() => {
                        carouselIndex = (carouselIndex + 1) % game.carouselImages.length;
                        gameImg.src = game.carouselImages[carouselIndex];
                        gameImg.classList.remove('hidden');
                    }, 500);
                }, 2000);
            }
        });
        
        gameImageDiv.addEventListener('mouseleave', () => {
            clearInterval(carouselInterval);
            gameImg.src = game.imgSrc;
        
            // Elimina el mensaje
            const hoverText = gameImageDiv.querySelector('.hover-indicator');
            if (hoverText) {
                gameImageDiv.removeChild(hoverText);
            }
        });
        
        // Añadir event listener para redirigir al hacer clic
        gameImageDiv.addEventListener('click', () => {
            window.open(game.pageUrl, '_blank'); // Abre el enlace en una nueva pestaña
        });
    
        // Crear contenedor de texto
        const gameTextDiv = document.createElement("div");
        gameTextDiv.classList.add("gameTextDiv");
        const gameTitle = document.createElement("h2");
        gameTitle.innerHTML = `<strong>${game.title}</strong>`;
        gameTextDiv.appendChild(gameTitle);
    
        const gameDescription = document.createElement("p");
        gameDescription.classList.add("pJustify");
        gameDescription.textContent = game.description;
        gameTextDiv.appendChild(gameDescription);
    
        // Añadir contenedores al div principal
        gameDiv.appendChild(gameImageDiv);
        gameDiv.appendChild(gameTextDiv);
    
        // Agregar el juego al contenedor principal
        gamesSection.appendChild(gameDiv);
    });

    // Crear y agregar los elementos de premios
    awardsData.forEach(award => {
        const awardDiv = document.createElement("div");
        awardDiv.classList.add("award");

        // Crear el título del premio
        const awardTitle = document.createElement("h2");
        awardTitle.innerHTML = `<strong>${award.title}</strong>`;  // Utilizando innerHTML para agregar la etiqueta <strong>
        awardDiv.appendChild(awardTitle);

        // Crear la descripción del premio
        const awardDescription = document.createElement("p");
        awardDescription.textContent = award.description;  // Usando textContent para agregar la descripción
        awardDiv.appendChild(awardDescription);

        // Agregar el div del premio a la sección de premios
        awardsSection.appendChild(awardDiv);
    });


    // Add game assets section dynamically
    const assetsSection = document.getElementById("assets");
    const assetsData = [
        {
            title: "Unchained on steam",
            imgSrc: "IMAGENES/MY VIDEOGAMES/Obat/Assets/textures_1.png",
            description: "Environment and props design created for Once Button a Time."
        },
        {
            title: "Once Button a Time",
            imgSrc: "IMAGENES/MY VIDEOGAMES/Obat/Assets/textures_1.png",
            description: "Environment and props design created for Unchained."
        },
        {
            title: "Unchained",
            imgSrc: "IMAGENES/MY VIDEOGAMES/Obat/Assets/textures_1.png",
            description: "Environment and props design created for Unchained Jam."
        }
    ];

    // Create and append asset elements
    assetsData.forEach(asset => {
        const assetDiv = document.createElement("div");
        assetDiv.classList.add("game");

        const assetTitle = document.createElement("h2");
        assetTitle.innerHTML = `<strong>${asset.title}</strong>`;
        assetDiv.appendChild(assetTitle);

        const assetImg = document.createElement("img");
        assetImg.src = asset.imgSrc;
        assetImg.alt = asset.description;
        assetDiv.appendChild(assetImg);

        const assetDescription = document.createElement("p");
        assetDescription.classList.add("pJustify");
        assetDescription.textContent = asset.description;
        assetDiv.appendChild(assetDescription);

        assetsSection.appendChild(assetDiv);
    });

    // Social links dynamically
    const socialLinks = [
        { name: "Instagram", url: "https://www.instagram.com/nurxen_", icon: "IMAGENES/SOCIAL MEDIA/instagram.svg" },
        { name: "Pinterest", url: "https://www.pinterest.com/nurxen_", icon: "IMAGENES/SOCIAL MEDIA/pinterest.svg" },
        { name: "X", url: "https://www.x.com/nurxen_", icon: "IMAGENES/SOCIAL MEDIA/x.svg" },
        { name: "Tiktok", url: "https://www.tiktok.com/@nurxen_", icon: "IMAGENES/SOCIAL MEDIA/tiktok.svg" },
        { name: "Linkedin", url: "https://www.linkedin.com/in/nuria-serrano-martín-0b78932b9/", icon: "IMAGENES/SOCIAL MEDIA/linkedin.svg" },
        { name: "Youtube", url: "https://www.x.com/nurxen_", icon: "IMAGENES/SOCIAL MEDIA/youtube.svg" },
        { name: "Correo", url: "mailto:nurxen21@correo.com", icon: "IMAGENES/SOCIAL MEDIA/x.svg" },
        { name: "Devuego", url: "https://www.devuego.es/bd/fdesarrollador/nuria-serrano-martin-nurxen", icon: "IMAGENES/SOCIAL MEDIA/devuego.svg" },
        // Add more social media links as needed
    ];

    const socialLinksContainer = document.querySelector(".social-links");
    socialLinks.forEach(link => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.target = "_blank";
        
        const img = document.createElement("img");
        img.src = link.icon;
        img.alt = link.name;
        img.width = 40;
        anchor.appendChild(img);
        
        socialLinksContainer.appendChild(anchor);
    });
});
