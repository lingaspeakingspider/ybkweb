function goToSection() {
  const keyword = document.getElementById("keyword").value.trim().toLowerCase();

  switch(keyword){
    case "über calybk":
      window.location.href = "../../languages/de/about.html";  
      break;

    case "projekte":
      window.location.href = "../../languages/de/projects.html";  
      break;

    case "teams":
      window.location.href = "../../languages/de/teams.html";  
      break;

    case "veröffentlichungen":
      window.location.href = "../../languages/de/publications.html";  
      break;

    case "ankündigungen":
      window.location.href = "../../languages/de/announcements.html";
      break;

    case "calybd":
      window.location.href = "../../languages/de/calybd.html";
      break;

    case "kontakt":
      window.location.href = "../../languages/de/contact.html";
      break;

    case "partnerschaft":
      window.location.href = "../../languages/de/sponsor.html";
      break;

    case "bewerben":
      window.location.href = "../../languages/de/apply.html";
      break;
      
  } 

  
}
