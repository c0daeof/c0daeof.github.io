const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('imgModalContent');

// делегирование клика
document.addEventListener('click', (e) => {
    const img = e.target.closest('.image-wrapper img');
    if (!img) return;

    modal.style.display = 'flex';
    modalImg.src = img.src;
});

// закрытие
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});