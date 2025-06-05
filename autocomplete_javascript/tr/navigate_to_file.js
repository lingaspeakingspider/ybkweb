function goToSection() {
  const keyword = document.getElementById("keyword").value.trim().toLowerCase();

  switch(keyword){
    case "calybk hakkında":
      window.location.href = "../../languages/tr/about.html"; 
      break; 

    case "projeler":
      window.location.href = "../../languages/tr/projects.html";  
      break;

    case "takımlar":
      window.location.href = "../../languages/tr/teams.html";  
      break;

    case "yayınlar":
      window.location.href = "../../languages/tr/publications.html";  
      break;

    case "duyurular":
      window.location.href = "../../languages/tr/announcements.html";  
      break;

    case "calybd":
      window.location.href = "../../languages/tr/calybd.html";  
      break;

    case "iletişim":
      window.location.href = "../../languages/tr/contact.html";  
      break;

    case "sponsor":
      window.location.href = "../../languages/tr/sponsor.html";  
      break;

    case "başvur":
      window.location.href = "../../languages/tr/apply.html";  
      break;
      
  } 

  
}
