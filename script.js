let currentMode = false;

function nightModeToggle() {
    let element = document.getElementById("switch-button")
    console.log(currentMode)

    if (!currentMode) {
        element.style.marginLeft = "58%"
        document.getElementById("night-mode-text").textContent = "Dark Mode"
        darkMode()
        currentMode = true;
    }
    else {
        element.style.marginLeft = "0%"
        document.getElementById("night-mode-text").textContent = "Light Mode"
        lightMode()
        currentMode = false;
    }
}

function darkMode() {
    let root = document.querySelector(':root')
    root.style.setProperty('--bg','#32292F')
    root.style.setProperty('--profile-bg','#CC5500')
    root.style.setProperty('--profile-color','#32292F')
    root.style.setProperty('--info-bg','#32292F')
    root.style.setProperty('--info-color','#F7F7FF')
    root.style.setProperty('--highlight','#386C0B')
    document.getElementById('download-button-dark').style.zIndex = "999"
}

function lightMode() {
    let root = document.querySelector(':root')
    root.style.setProperty('--bg','#F7F7FF')
    root.style.setProperty('--profile-bg','#386C0B')
    root.style.setProperty('--profile-color','#F7F7FF')
    root.style.setProperty('--info-bg','#F7F7FF')
    root.style.setProperty('--info-color','#32292F')
    root.style.setProperty('--highlight','#CC5500')
    document.getElementById('download-button-dark').style.zIndex = "-1"
}

function downloadResume() {
    if (currentMode) {

    }
}