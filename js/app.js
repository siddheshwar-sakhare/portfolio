[...document.querySelectorAll(".control")].forEach(button => {
    button.addEventListener("click", function() {
        console.log("Button clicked:", button.dataset.id); // Debug
        document.querySelector(".active-btn").classList.remove("active-btn");
        this.classList.add("active-btn");
        
        document.querySelector(".active").classList.remove("active");
        const section = document.getElementById(button.dataset.id);
        console.log("Section activated:", section); // Debug
        section.classList.add("active");
    });
});
