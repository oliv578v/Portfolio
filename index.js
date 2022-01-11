function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

// Jeg gemmer Sidebaren
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// Konstanterer btn og nav til at vælge hhv toggle btn og nav
const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
  // 1. Toggler en klasse på nav vha. classList.toggle
  // 2. Toggler en klasse, der hedder "shown"
  nav.classList.toggle("shown");

  // 1. Laver en variabel, der hedder menuShown
  // 2. Den er lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")

  const menuShown = nav.classList.contains("shown");
}

/* Tilføjer et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);
