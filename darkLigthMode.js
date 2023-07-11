let styleSheet = document.querySelector('.style-sheet');
let darkIcon = document.querySelector('.dark');
let lightIcon = document.querySelector('.ligth');

const loadDarkMode = () => {
    styleSheet.setAttribute("href", "./darkMode.css");
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'block';
}

const loadLigthMode = () => {
    styleSheet.setAttribute('href', './styles.css');
    darkIcon.style.display = 'block';
    lightIcon.style.display = 'none';
}



darkIcon.addEventListener('click', loadDarkMode);
lightIcon.addEventListener('click', loadLigthMode);