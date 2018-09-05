const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false



document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/toys')
  .then(r => r.json())
  .then(toys => makeToy(toys))
  }
)

function makeToy(toys){

  toys.forEach(toy => {
    const collectionDiv = document.getElementById('toy-collection')
    const toyDiv = document.createElement('div')
    toyDiv.classList.add('card')
    toyDiv.dataset.cardID = toy.id
    const toyName = document.createElement('h2')
    const toyLikes = document.createElement('p')
    const toyPic = document.createElement('img')
    toyPic.classList.add('toy-avatar')

    toyName.innerHTML = toy.name
    toyLikes.innerHTML = toy.likes
    toyPic.src = toy.image

    toyDiv.append(toyName)
    toyDiv.append(toyPic)
    toyDiv.append(toyLikes)

    collectionDiv.append(toyDiv)

  })
}

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})


// OR HERE!
