document.addEventListener('DOMContentLoaded', function () {

    // Obtener el contenedor principal
    const mainContent = document.querySelector("main");

    // Crear y agregar la sección de introducción
    const introSection = document.createElement("section");
    introSection.classList.add("intro-section");

    // Crear el título de la introducción
    const introTitle = document.createElement("h1");
    introTitle.textContent = "Welcome to my video games";
    introSection.appendChild(introTitle);

    // Crear la descripción de la introducción
    const introDescription = document.createElement("p");
    introDescription.textContent = "This page contains a selection of my games, including various genres and styles. From adventure to puzzles, each project reflects my passion for game development. Explore the titles and learn more about each one by clicking the images.";
    introSection.appendChild(introDescription);

    // Crear y agregar el botón "Back to Home" dentro de introSection
    const backButton = document.createElement("button");
    backButton.textContent = "Back to Home ->";
    backButton.onclick = () => {
        window.location.href = 'index.html'; // Cambia a tu URL de inicio
    };

    // Agregar el botón al inicio de la sección de introducción
    introSection.prepend(backButton);

    // Obtener la sección de juegos y colocar la introducción antes de ella
    const gamesSection = document.getElementById("assets");
    gamesSection.parentNode.insertBefore(introSection, gamesSection);

    // Crear y agregar la sección "Featured Projects"
    const featuredProjectsSection = document.createElement("section");
    featuredProjectsSection.id = "featuredProjects";

    const featuredTitle = document.createElement("h1");
    featuredTitle.textContent = "Featured Projects";
    featuredProjectsSection.appendChild(featuredTitle);

    const featuredDescription = document.createElement("p");
    featuredDescription.classList.add("pJustify");
    featuredDescription.textContent = "Here you will find cozy and detailed art with cozy and warm color palettes, assets with a cartoon and adorable style and you can also watch videos related to my art where I show animations and the work in progress.";
    featuredProjectsSection.appendChild(featuredDescription);

    const clickDescription = document.createElement("p");
    clickDescription.textContent = "Click on each project to see more.";
    featuredProjectsSection.appendChild(clickDescription);

    // Agregar la sección "Featured Projects" después de la introducción
    mainContent.appendChild(featuredProjectsSection);


    // Crear y agregar la sección "Assets"
    const assetsSection = document.createElement("section");
    assetsSection.id = "assets";
    mainContent.appendChild(assetsSection);

    // Crear y agregar la sección "Habilities"
    const habilitiesSection = document.createElement("section");
    habilitiesSection.id = "habilities";

    const habilitiesTitle = document.createElement("h1");
    habilitiesTitle.textContent = "Habilities";
    habilitiesSection.appendChild(habilitiesTitle);

    const habilitiesDescription = document.createElement("p");
    habilitiesDescription.classList.add("pJustify");
    habilitiesDescription.textContent = "Here you will find cozy and detailed art with cozy and warm color palettes, assets with a cartoon and adorable style and you can also watch videos related to my art where I show animations and the work in progress.";
    habilitiesSection.appendChild(habilitiesDescription);

    const clickHabilities = document.createElement("p");
    clickHabilities.textContent = "Click on each project to see more.";
    habilitiesSection.appendChild(clickHabilities);

    // Agregar la sección "Habilities" al main después de "Assets"
    mainContent.appendChild(habilitiesSection);

    // Crear y agregar la sección "My Portfolio"
    const portfolioSection = document.createElement("section");
    portfolioSection.id = "portfolio";

    const portfolioTitle = document.createElement("h1");
    portfolioTitle.textContent = "My Portfolio";
    portfolioSection.appendChild(portfolioTitle);

    const portfolioDescription = document.createElement("p");
    portfolioDescription.classList.add("pJustify");
    portfolioDescription.textContent = "Here you will find cozy and detailed art with cozy and warm color palettes, assets with a cartoon and adorable style and you can also watch videos related to my art where I show animations and the work in progress.";
    portfolioSection.appendChild(portfolioDescription);

    const clickPortfolio = document.createElement("p");
    clickPortfolio.textContent = "Click on each project to see more.";
    portfolioSection.appendChild(clickPortfolio);


    // Add social media links in portfolio section
    const socialIconsContainer = document.createElement("div");
    socialIconsContainer.style.display = "flex";
    socialIconsContainer.style.justifyContent = "center";
    socialIconsContainer.style.gap = "15px";
    socialIconsContainer.style.marginTop = "10px";

    const socialPortfolioLinks = [
        { name: "ArtStation", url: "https://www.artstation.com/nurxen1", icon: "IMAGENES/SOCIAL MEDIA/artStation.svg" },
        { name: "BlueSky", url: "https://bsky.app/profile/nurxen.bsky.social", icon: "IMAGENES/SOCIAL MEDIA/blueSky.svg" },
        { name: "Cara", url: "https://cara.app/nurxen/all", icon: "IMAGENES/SOCIAL MEDIA/cara.svg" }
    ];

    socialPortfolioLinks.forEach(link => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.target = "_blank";

        const img = document.createElement("img");
        img.src = link.icon;
        img.alt = link.name;
        img.width = 60;
        anchor.appendChild(img);

        socialIconsContainer.appendChild(anchor);
    });

    portfolioSection.appendChild(socialIconsContainer);
    
    // Append to the main content
    mainContent.appendChild(portfolioSection);
    
// Create and add the "Game Assets" section (already present in the HTML structure)
    const assetsTitle = document.createElement("h1");
    assetsTitle.textContent = "Game Assets";
    assetsSection.appendChild(assetsTitle);

    // Add game assets section dynamically
    const assetsData = [
        {
            title: "Unchained on Steam",
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
