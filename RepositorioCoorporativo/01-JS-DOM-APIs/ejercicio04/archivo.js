function showAlert() {
    let x = document.getElementsByClassName("titulo");
   // let type = "text";
   
   
   
   
   
    fetch("https://api.github.com/search/repositories?q=javascript&dni=16068555", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "dasdsad":"sadasd",
        },

    

    })

    .then(response => response.json())
    
            .then(data => {
    
                //debugger
                (x[0].innerHTML = data.documentation_url)
    
    
    
            })
    
            
} 