const menuBtn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');

console.log(menuBtn)
function toggleSidebar() {
    
    if (sidebar.style.left === '0px') {

        sidebar.style.left = '-470px'; // Закрыть шторку
        overlay.style.display = 'none'; // Скрыть оверлей
    } else {

        sidebar.style.left = '0px'; // Открыть шторку
        overlay.style.display = 'block'; // Показать оверлей
    }
}


// Обработчик события для кнопки бургер-меню
menuBtn.addEventListener('click', toggleSidebar);

// Обработчик события для оверлея
overlay.addEventListener('click', toggleSidebar);