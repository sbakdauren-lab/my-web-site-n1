// Тёмная/светлая тема
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Alert при загрузке + кнопка
function showAlert() {
    alert("🎉 Поздравляю! Ты только что увидел интерактивный JavaScript на этом сайте.");
}

// Изменение текста в карточке проекта
function changeText(card) {
    const p = card.querySelector('p');
    if (p.textContent.includes('Этот сайт')) {
        p.textContent = 'Кликнул? Круто! Теперь это интерактивный элемент 😉';
    } else {
        p.textContent = 'Этот сайт. Современный, интерактивный, с JS.';
    }
}

// Обработка формы
function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    
    alert(`Спасибо, ${name}! Сообщение отправлено (симуляция). В реальном проекте здесь был бы fetch на сервер.`);
    
    // Очистка формы
    e.target.reset();
}

// Плавный скролл для ссылок в навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Приветствие при загрузке страницы
window.onload = () => {
    console.log('%cЛабораторная работа №9 загружена успешно! 🔥', 'color: #0066ff; font-size: 16px;');
};
