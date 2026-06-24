let downloadSettingsShow = document.querySelector(".download-alt")
let downloadBTN = document.querySelector(".download")
let networkLimitInput = document.getElementById("network-limit")
let networkLimitVal = document.getElementById("network-limit-val")

downloadBTN.addEventListener("click", () => {
    downloadSettingsShow.setAttribute("id", "show")
})

if (networkLimitInput && networkLimitVal) {
    networkLimitInput.addEventListener("input", (e) => {
        networkLimitVal.textContent = e.target.value + " Mbps"
    })
} // if (networkLimitInput && networkLimitVal) {
     // networkLimitInput.addEventListener("input", (e) => {
    // networkLimitVal.textContent = 0 + " dont limit"
    // })
// }