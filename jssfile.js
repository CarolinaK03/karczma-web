function scrollToOnas() {
    const targetPage = "index2.html"; 
    const currentPage = window.location.pathname.split('/').pop(); 

    if (currentPage == targetPage) {
        const aboutSection = document.getElementById('about-us-div');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else if (currentPage != targetPage){
        window.location.href = "index2.html#about-us-div";
    }
}

window.addEventListener('load', () => {
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

document.getElementById('start-button').addEventListener('click', function () {
    const targetPage = this.getAttribute('data-target'); 
    const currentPage = window.location.pathname.split('/').pop(); 

    if (targetPage === currentPage) {
        alert('already on this page');
    } else {
        window.location.href = "index2.html"
    }
});