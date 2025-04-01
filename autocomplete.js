let availableKeywords = [
    'Home',
    "About",
    "Contact",
    "Projects",
    "Teams",
    "Competitions"
]

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById(".searchbar");
inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if (input.length){
        result = availableKeywords.filter((keyword) => {
            keyword.toLowerCase().includes(input);
        });
        console.log(result);
    }
    display(result);
    if (!result.length){
        resultsBox.innerHTML = '';
    }

}

function display(result){
    const content = result.map((list) => {
        return  "<li onClick=selectInput(this)>" + list + "</li>";
    })
    resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';

}