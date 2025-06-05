var countries = ["CALYBK Hakkında", "Projeler", "Takımlar", "Yarışmalar", "Yayınlar", "CALYBD", "Duyurular", "İletişim", "Sponsorluk", "Başvur"];

function autocomplete(inp, arr) {
  var currentFocus;

  function showSuggestions(val) {
    closeAllLists();
    if (!val) val = ""; // Boşsa yine önerileri göster
    currentFocus = -1;
    var a, b, i;

    a = document.createElement("DIV");
    a.setAttribute("id", inp.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    inp.parentNode.appendChild(a);

    for (i = 0; i < arr.length; i++) {
      if (arr[i].toUpperCase().includes(val.toUpperCase())) {
        b = document.createElement("DIV");
        let matchStart = arr[i].toUpperCase().indexOf(val.toUpperCase());
        b.innerHTML = arr[i].substring(0, matchStart) + "<strong>" + arr[i].substring(matchStart, matchStart + val.length) + "</strong>" + arr[i].substring(matchStart + val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function () {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  }

  inp.addEventListener("input", function () {
    showSuggestions(this.value);
  });

  inp.addEventListener("focus", function () {
    showSuggestions(this.value);
  });

  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1 && x) x[currentFocus].click();
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("keyword"), countries);
