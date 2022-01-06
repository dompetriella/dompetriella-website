let currentMode = false;

function nightModeToggle() {
    let element = document.getElementById("switch-button")
    console.log(currentMode)

    if (!currentMode) {
        element.style.marginLeft = "58%"
        document.getElementById("night-mode-text").textContent = "Dark Mode"
        document.getElementById("night-mode-mobile").textContent = "Dark"
        darkMode()
        currentMode = true;
    }
    else {
        element.style.marginLeft = "0%"
        document.getElementById("night-mode-text").textContent = "Light Mode"
        document.getElementById("night-mode-mobile").textContent = "Light"
        lightMode()
        currentMode = false;
    }

    switchDownload()
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
    document.getElementById('night-mode-icon').setAttribute('src','svg/moon.svg')
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
    document.getElementById('night-mode-icon').setAttribute('src','svg/sun.svg')
}

function switchDownload() {
    if (currentMode) {
        document.getElementById("download-button-mobile").setAttribute("download","dompetriella-resume-dark.pdf");
        document.getElementById("download-button-mobile").setAttribute("href","dl-files/resume-dark.pdf");
    }

    else {
        document.getElementById("download-button-mobile").setAttribute("download","dompetriella-resume-light.pdf");
        document.getElementById("download-button-mobile").setAttribute("href","dl-files/resume-light.pdf");
    }
}