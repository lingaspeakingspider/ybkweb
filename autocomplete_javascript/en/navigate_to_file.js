function goToSection() {
  const keyword = document.getElementById("keyword").value.trim().toLowerCase();

  switch(keyword){
    case "about calybk":
      window.location.href = "../../languages/en/about.html";  
      break;

    case "projects":
      window.location.href = "../../languages/en/projects.html";  
      break;

    case "teams":
      window.location.href = "../../languages/en/teams.html";  
      break;

    case "publications":
      window.location.href = "../../languages/en/publications.html";  
      break;

    case "announcements":
      window.location.href = "../../languages/en/announcements.html";
      break;

    case "calybd":
      window.location.href = "../../languages/en/calybd.html";
      break;

    case "contact":
      window.location.href = "../../languages/en/contact.html";
      break;

    case "sponsor":
      window.location.href = "../../languages/en/sponsor.html";
      break;

    case "apply":
      window.location.href = "../../languages/en/apply.html";
      break;
      
  } 

  
}
