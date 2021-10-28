const images = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

function loadImages(image) {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => { (image.removeAttribute('data-src')) };
}

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imageOptions);

    images.forEach((img) => {
        imageObserver.observe(img);
    });
} else {
    images.forEach((img) => {
        loadImages(img);
    });
}

document.getElementById("copyrightyear").textContent = new Date().getFullYear();