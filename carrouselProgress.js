document.addEventListener('DOMContentLoaded', function () {
    // Add the intro section before the art carousel section
    const artCarouselSection = document.getElementById("carrouselProgress");

    const artworkData = [
        {carouselImages: [
                "IMAGENES/ARTWORK/Christmas/Progress/grey.png",
                "IMAGENES/ARTWORK/Christmas/Progress/clayNoLight.png",
                "IMAGENES/ARTWORK/Christmas/Progress/clayOneLight.png",
                "IMAGENES/ARTWORK/Christmas/Progress/OneLight.png",
                "IMAGENES/ARTWORK/Christmas/Progress/Light.png"
            ]
        }
    ];

    artworkData.forEach((artwork, index) => {
        const artworkDiv = document.createElement("div");
        artworkDiv.classList.add("artwork");

        const artworkImageDiv = document.createElement("div");
        artworkImageDiv.classList.add("artworkImageDiv");

        const artworkImg = document.createElement("img");
        artworkImageDiv.appendChild(artworkImg);

        let carouselIndex = 0;
        let carouselInterval;

        if (artwork.carouselImages && artwork.carouselImages.length > 0) {
            // Set the first image in the carousel
            carouselIndex = 0;
            artworkImg.src = artwork.carouselImages[carouselIndex];

            carouselInterval = setInterval(() => {
                artworkImg.classList.add('hidden');

                setTimeout(() => {
                    carouselIndex = (carouselIndex + 1) % artwork.carouselImages.length;
                    artworkImg.src = artwork.carouselImages[carouselIndex];
                    artworkImg.classList.remove('hidden');
                }, 500);
            }, 2000);
        }

        artworkDiv.appendChild(artworkImageDiv);
        artCarouselSection.appendChild(artworkDiv);
    });
});
