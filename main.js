const text = document.querySelector('#text');
const bold = document.getElementById('bold');

// bold text  
function toggleFontWeight(){

    if(text.classList.contains("bold-text")){

        text.classList.remove("bold-text")
    }
    else{
        text.classList.add("bold-text")
    }   
}
// italic text
function toggleItalicWeight(){
    if(text.classList.contains("italic-text")){
        text.classList.remove("italic-text")
    }
    else{
        text.classList.add("italic-text");
    }
}
// underline text
function toggleUnderlineWeight(){
    if(text.classList.contains("underline-text")){
        text.classList.remove("underline-text")
    }else{
        text.classList.add("underline-text")
    }
}
// text aligns
function toggleAlignCenter(){
    if(text.classList.contains("align-center")){
        text.classList.remove("align-center")
    }else{
        text.classList.add("align-center")
    }
}
function toggleAlignRight(){
    if(text.classList.contains("align-right")){
        text.classList.remove("align-right")
    }else{
        text.classList.add("align-right")
    }
}
function toggleAlignJustify(){
    if(text.classList.contains("align-justify")){
        text.classList.remove("align-justify")
    }else{
        text.classList.add("align-justify")
    }
}

// const textValue = text.innerHTML;

// text.addEventListener('select', function(event){

//    bold.addEventListener('click', function(){
//         text.style.fontWeight = "700";
//    })
// })



// Dark Mode toggle icons
function toggleDarkMode(){
    let styleSheet = document.getElementById('stylesheet');
    let currentTheme = styleSheet.getAttribute("href");
    let themeToggle = document.getElementById('themeToggle');
    let themeIcon = document.getElementById('themeIcon');


    if(currentTheme === 'Styles/light.css'){
        styleSheet.setAttribute("href", "Styles/dark.css");
        // themeIcon.className = "fa-solid fa-moon";
        // themeToggle.textContent = "Toggle Light Mode"
    }else{
        // Switch to light mode
        styleSheet.setAttribute("href", "Styles/light.css");
        
    }

}