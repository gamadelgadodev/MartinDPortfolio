const skills = ["C#",".NET","PHP","Laravel","Typescript","Linux","VM","Deploy","Git","Scrum","Agile","Zoho", "HTML", "CSS", "Java", "Angular", "Bootstrap"];
  const changingText = document.getElementById("changing-text");

  let index = 0;

  function changeText() {
    changingText.classList.remove("show"); // Quita la clase para iniciar la transición
    setTimeout(() => {
      changingText.textContent = skills[index];
      changingText.classList.add("show"); // Vuelve a mostrar el texto con animación
      index = (index + 1) % skills.length;
    }, 500);
  }
  setInterval(changeText, 2000);

  changeText();