function toggleMode(params) {
    const html = document.documentElement
          html.classList.toggle("light")  
    
    const img = document.querySelector("#profile img")
    if (html.classList.contains('light')) {
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
    }
      // if (html.classList.contains('light')) {
      //     html.classList.remove('light')
      //     html.classList.add('dark')
      // } else {
      //     html.classList.remove('dark')
      //     html.classList.add('light')
      // }
}