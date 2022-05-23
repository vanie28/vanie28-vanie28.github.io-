/** Menu Burger */
const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.style.display = "none";
}

// let userName = prompt("Type your firstname");
// let h1 = document.querySelector("h1");
// h1.innerHTML = `Hi!! Nice to meet you ${
//   userName == null ? "Knitter" : userName
// }!!`;
//modifié le prompt pour qu'il ne redemande pas un username à chaque fois.
const form  = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault()
  let userName = document.getElementById("name").value
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Hi!! Nice to meet you ${
    userName == "" ? "Knitter" : userName
  }!!`;
  form.style.display = "none"
});

function Lien() {
	i = document.Choix.Liste.selectedIndex;
	if (i == 0) return;
	url = document.Choix.Liste.options[i].value;
	parent.location.href = url;
}

