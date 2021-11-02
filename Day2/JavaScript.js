const data = [{
        title: "Title1",
        description: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
    },
    {
        title: "Title2",
        description: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
    },
    {
        title: "Title3",
        description: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
    },
]
document.getElementById("title-1").innerHTML = data[0].title;
document.getElementById("description-1").innerHTML = data[0].description;

document.getElementById("title-2").innerHTML = data[1].title ;
document.getElementById("description-2").innerHTML = data[1].description;

document.getElementById("title-3").innerHTML = data[2].title ;
document.getElementById("description-3").innerHTML = data[2].description;

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}