function showAlert() {
    let x = document.getElementsByClassName("titulo");
    let type = "text" ;
    fetch("https://api.github.com/search/repositories", {

 
})

.then(response => response.json())

.then(data => (x[0].innerHTML = data.documentation_url)

)

} 