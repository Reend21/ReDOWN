// event delegation because at first launch that class might not be there.
document.addEventListener("click", (event) => {
    let optionBTN = event.target.closest(".option")
    let optionBTNfalse = event.target.closest(".false")

    if (optionBTN) {
        optionBTN.classList.add("false")
        optionBTN.classList.remove("option")
    }  if (optionBTNfalse) {
        optionBTNfalse.classList.add("option")
        optionBTNfalse.classList.remove("false")
    }
})