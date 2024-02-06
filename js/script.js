function toggleMode() {
  const html = document.body
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./images/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Bruno Eberhardt sorrindo usando camisa branca"
    )
  } else {
    img.setAttribute("src", "./images/avatar.png")
    img.setAttribute("alt", "Foto de Bruno Eberhardt usando blusa bege")
  }
}
