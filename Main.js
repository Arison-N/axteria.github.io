document.addEventListener('DOMContentLoaded', () => {
    const blurBackground = document.querySelector('.blur-background');
    const menuItems = document.querySelectorAll('.menu');
    const subMenus = document.querySelectorAll('.submenu');

    if (blurBackground && menuItems) {
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('mouseenter', () => {
                blurBackground.style.visibility = 'visible';
                blurBackground.style.opacity = '1';
            });
            menuItem.addEventListener('mouseleave', () => {
                // Check if the mouse is over a submenu
                setTimeout(() => {
                    if (!document.querySelector('.submenu:hover') && !document.querySelector('.menu:hover')) {
                        blurBackground.style.visibility = 'hidden';
                        blurBackground.style.opacity = '0';
                    }
                }, 100);
            });
        });
    }

    if (blurBackground && subMenus) {
        subMenus.forEach(subMenu => {
            subMenu.addEventListener('mouseenter', () => {
                blurBackground.style.visibility = 'visible';
                blurBackground.style.opacity = '1';
            });
            subMenu.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    if (!document.querySelector('.submenu:hover') && !document.querySelector('.menu:hover')) {
                        blurBackground.style.visibility = 'hidden';
                        blurBackground.style.opacity = '0';
                    }
                }, 100);
            });
        });
    }

    // 確保模態窗口在頁面加載時保持隱藏
    closeForm();
});

function initializeHoverEvents() {
    const blurBackground = document.querySelector('.blur-background');
    const menuItems = document.querySelectorAll('.menu');
    const subMenus = document.querySelectorAll('.submenu');

    if (blurBackground && menuItems) {
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('mouseenter', () => {
                blurBackground.style.visibility = 'visible';
                blurBackground.style.opacity = '1';
            });
            menuItem.addEventListener('mouseleave', () => {
                // Check if the mouse is over a submenu
                setTimeout(() => {
                    if (!document.querySelector('.submenu:hover') && !document.querySelector('.menu:hover')) {
                        blurBackground.style.visibility = 'hidden';
                        blurBackground.style.opacity = '0';
                    }
                }, 100);
            });
        });
    }

    if (blurBackground && subMenus) {
        subMenus.forEach(subMenu => {
            subMenu.addEventListener('mouseenter', () => {
                blurBackground.style.visibility = 'visible';
                blurBackground.style.opacity = '1';
            });
            subMenu.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    if (!document.querySelector('.submenu:hover') && !document.querySelector('.menu:hover')) {
                        blurBackground.style.visibility = 'hidden';
                        blurBackground.style.opacity = '0';
                    }
                }, 100);
            });
        });
    }
}

function openForm() {
    document.getElementById('messageForm').style.display = 'flex';
}

function closeForm() {
    document.getElementById('messageForm').style.display = 'none';
}

function closeFormOnClickOutside(event) {
    if (event.target === document.getElementById('messageForm')) {
        closeForm();
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // 處理表單提交邏輯，例如發送表單數據到伺服器
    alert('Form submitted!');
    closeForm();
});