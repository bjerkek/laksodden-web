const sliders = document.querySelectorAll('.slider')

sliders.forEach(slider => {
  const imgs = slider.querySelectorAll('img')
  const nextButton = slider.querySelector('.next')
  const prevButton = slider.querySelector('.prev')

  let index = 0

  imgs[index].style.display = 'block'
  prevButton.style.display = (index === 0) ? 'none' : 'block'
  nextButton.style.display = (index === imgs.length-1) ? 'none' : 'block'


  nextButton.addEventListener('click', () => {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = 'none'
    }
    index = (index < imgs.length-1) ? index + 1 : index
    imgs[index].style.display = 'block'

    prevButton.style.display = (index === 0) ? 'none' : 'block'
    nextButton.style.display = (index === imgs.length-1) ? 'none' : 'block'
  })

  prevButton.addEventListener('click', () => {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = 'none'
    }
    index = (index > 0) ? index - 1 : index
    imgs[index].style.display = 'block'

    prevButton.style.display = (index === 0) ? 'none' : 'block'
    nextButton.style.display = (index === imgs.length-1) ? 'none' : 'block'
  })

})

