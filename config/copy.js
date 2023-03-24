function copy() {
  const copyIcon = document.querySelector("#copyBtn")
  const url = document.querySelector("#url")
  copyIcon.addEventListener("click", (event) => {
    // const inputText = document.querySelector("#inputText")
    // inputText.value = url.innerText
    navigator.clipboard.writeText(url.innerText)
  })
}
copy()
module.exports = copy
