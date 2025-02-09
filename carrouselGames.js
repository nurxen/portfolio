document.addEventListener('DOMContentLoaded', function () {
        
        // Create and add the brief description at the beginning
        const introSection = document.createElement("section");
        introSection.classList.add("intro-section");

        const introTitle = document.createElement("h1");
        introTitle.textContent = "Welcome to my video games";
        introSection.appendChild(introTitle);

        const introDescription = document.createElement("p");
        introDescription.textContent = "This page contains a selection of my games, including various genres and styles. From adventure to puzzles, each project reflects my passion for game development. Explore the titles and learn more about each one by clicking the images.";
        introSection.appendChild(introDescription);

        // Add the intro section before the games section
        const gamesSection = document.getElementById("carrouselGames");
        gamesSection.parentNode.insertBefore(introSection, gamesSection);
        
        // Create and append the back button at the top (above the "Games" title)
        const backButton = document.createElement("button");
        backButton.textContent = "Back to Home ->";
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
            pageUrl: "https://store.steampowered.com/app/3234310/UNCHAINED/" // URL de la página del juego
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
            ],
            pageUrl: "https://nuriia.itch.io/the-last-nectar" // URL de la página del juego
        },
        {
            title: "All Games on itch.io",
            imgSrc: "IMAGENES/MY VIDEOGAMES/Obat/Gameplay/0.png",
            description: "Discover and explore a collection of my games on itch.io! From thrilling adventures to unique experiences, there's something for every gamer. Check them out now!",
            carouselImages: [
                "IMAGENES/MY VIDEOGAMES/Unchained/Steam/store_capsule_vertical.png",
                "IMAGENES/MY VIDEOGAMES/Obat/obat.png",
                "IMAGENES/MY VIDEOGAMES/Unchained/unhained.png",
                "IMAGENES/MY VIDEOGAMES/Relapsed/relapsed.png",
                "IMAGENES/MY VIDEOGAMES/Bomb R Us/bombsRUs.png",
                "IMAGENES/MY VIDEOGAMES/Last Nectar/nectar.png",
            ],
            pageUrl: "https://nuriia.itch.io/" // Link to the game page on itch.io
        }
    ];

        gamesData.forEach((game, index) => {
            const gameDiv = document.createElement("div");
            gameDiv.classList.add("game");
            
            if (index % 2 !== 0) {
                gameDiv.classList.add("reverse");
            }
        
            const gameImageDiv = document.createElement("div");
            gameImageDiv.classList.add("gameImageDiv");
            const gameImg = document.createElement("img");
            gameImg.src = game.imgSrc;
            gameImg.alt = game.title;
            gameImageDiv.appendChild(gameImg);
            
            let carouselIndex = 0;
            let carouselInterval;
            
            gameImageDiv.addEventListener('mouseenter', () => {
                if (game.carouselImages && game.carouselImages.length > 0) {
                    const hoverText = document.createElement('div');
                    hoverText.classList.add('hover-indicator');
                    hoverText.textContent = "Click for more details";
                    gameImageDiv.appendChild(hoverText);
            
                    carouselIndex = (0) % game.carouselImages.length;
                    gameImg.src = game.carouselImages[carouselIndex];
            
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
            
                const hoverText = gameImageDiv.querySelector('.hover-indicator');
                if (hoverText) {
                    gameImageDiv.removeChild(hoverText);
                }
            });
            
            gameImageDiv.addEventListener('click', () => {
                window.open(game.pageUrl, '_blank');
            });
        
            const gameTextDiv = document.createElement("div");
            gameTextDiv.classList.add("gameTextDiv");
            const gameTitle = document.createElement("h2");
            gameTitle.innerHTML = `<strong>${game.title}</strong>`;
            gameTextDiv.appendChild(gameTitle);
        
            const gameDescription = document.createElement("p");
            gameDescription.classList.add("pJustify");
            gameDescription.textContent = game.description;
            gameTextDiv.appendChild(gameDescription);
        
            gameDiv.appendChild(gameImageDiv);
            gameDiv.appendChild(gameTextDiv);
        
            gamesSection.appendChild(gameDiv);
        });

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

        awardsData.forEach(award => {
            const awardDiv = document.createElement("div");
            awardDiv.classList.add("award");
            
            const awardTitle = document.createElement("h2");
            awardTitle.innerHTML = `<strong>${award.title}</strong>`;
            awardDiv.appendChild(awardTitle);
        
            const awardDescription = document.createElement("p");
            awardDescription.textContent = award.description;
            awardDiv.appendChild(awardDescription);
        
            const trophyIcon = document.createElement("img");
            trophyIcon.src = "IMAGENES/SOCIAL MEDIA/png-clipart-computer-icons-award-symbol-badge-award-cdr-ribbon-thumbnail.png";
            trophyIcon.alt = "Premio";
            trophyIcon.classList.add("trophy-icon");
            awardDiv.appendChild(trophyIcon);
        
            awardDiv.addEventListener('mouseenter', () => {
                awardDiv.classList.add("highlight");
            });
            awardDiv.addEventListener('mouseleave', () => {
                awardDiv.classList.remove("highlight");
            });
        
            awardsSection.appendChild(awardDiv);
        });
    });