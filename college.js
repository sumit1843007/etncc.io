const to_top = document.querySelector(".to_top");
to_top.addEventListener("click", () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});