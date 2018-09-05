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
    const toyButton = document.createElement('button')
    toyButton.classList.add('like-btn')
    toyButton.innerHTML = 'Like'
    toyButton.addEventListener('click', e => addLikes(toy))

    toyName.innerHTML = toy.name
    toyLikes.innerHTML = toy.likes
    toyPic.src = toy.image

    toyDiv.append(toyName)
    toyDiv.append(toyPic)
    toyDiv.append(toyLikes)
    toyDiv.append(toyButton)

    collectionDiv.append(toyDiv)
  })

  clickANewToy()
}

  function clickANewToy() {
    const form = document.querySelector('.add-toy-form')
    const inputs = form.querySelectorAll('.input-text')
    form.addEventListener('submit', e => {
      e.preventDefault()
      const data = {
        name: `${inputs[0].value}`,
        image: `${inputs[1].value}`,
        likes: 0
      }
      addNewToy(data)
    })
      }


  function addNewToy(data) {

    fetch('http://localhost:3000/toys', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
     }).then(r => r.json())

     showNewToy(data)
   }

   function showNewToy(data){
     fetch('http://localhost:3000/toys')
     .then(r => r.json())
     .then(toys => {
     const toy = toys[data["id"] - 1]
     console.log(toy)
     const collectionDiv = document.getElementById('toy-collection')
     const toyDiv = document.createElement('div')
     toyDiv.classList.add('card')
     toyDiv.dataset.cardID = data["id"]

     const toyName = document.createElement('h2')
     const toyLikes = document.createElement('p')
     const toyPic = document.createElement('img')
     toyPic.classList.add('toy-avatar')
     const toyButton = document.createElement('button')
     toyButton.classList.add('like-btn')
     toyButton.innerHTML = 'Like'
     toyButton.addEventListener('click', e => addLikes(toy))

     toyName.innerHTML = data["name"]
     toyLikes.innerHTML = data["likes"]
     toyPic.src = data["image"]

     toyDiv.append(toyName)
     toyDiv.append(toyPic)
     toyDiv.append(toyLikes)
     toyDiv.append(toyButton)

     collectionDiv.append(toyDiv)
     })
   }

   function addLikes(toy){
     toy.likes = toy.likes + 1
     const data = {
       likes: toy.likes
     }

     fetch('http://localhost:3000/toys/' + toy.id, {
       method: 'PATCH',
       body: JSON.stringify(data),
       headers: {
         'Content-Type': 'application/json'
       }
      }).then(r => r.json()).then(r => console.log(r))

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
