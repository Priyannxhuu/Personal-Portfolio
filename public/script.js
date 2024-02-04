const menuIcon = document.getElementById('menu');
const mobileMenu = document.getElementById('mobile');

menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') ? 'flex' : 'none';
});