// https://ensg_dei.gitlab.io/web-az/js/exercices/promises/

function combineImages(imageURLs) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const images = [];
        let loadedCount = 0;

        imageURLs.forEach((url, index) => {
            const img = new Image();
            img.onload = () => {
                images[index] = img;
                loadedCount++;

                if (loadedCount === imageURLs.length) {
                    resolve(canvas.toDataURL());
                }
            };
            img.onerror = (error) => {
                reject(error);
            };
            img.src = url;
        });

        function drawImages() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            images.forEach(img => {
                const x = Math.random() * (canvas.width - img.width);
                const y = Math.random() * (canvas.height - img.height);
                ctx.drawImage(img, x, y);
            });

            document.body.appendChild(canvas);
        }

        setTimeout(drawImages, 2000); // Simulating image loading delay
    });
}

const imageURLs = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];

combineImages(imageURLs)
    .then(dataURL => {
        const newImage = new Image();
        newImage.src = dataURL;
        document.body.appendChild(newImage);
    })
    .catch(error => {
        console.error(error);
    });
