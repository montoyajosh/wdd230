const images = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

function lazyload(image) {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {(image.removeAttribute('data-src'))};
}

if('IntersectionObserver' in window) {
    const imageobserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                lazyload(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imageOptions);

    images.forEach((img) => { 
        imageobserver.observe(img); 
    });
} else {
    images.forEach((img) => { 
        lazyload(img); 
    });
}
