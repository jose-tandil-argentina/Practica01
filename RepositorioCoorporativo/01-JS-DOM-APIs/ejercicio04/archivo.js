function showAlert() {
    let x = document.getElementsByClassName("titulo");
    // let type = "text";





    fetch("https://api.github.com/search/repositories?q=javascript", {


    })

        .then(response => response.json())



        .then(data =>
            (console.log(data)
            )
        )
} 