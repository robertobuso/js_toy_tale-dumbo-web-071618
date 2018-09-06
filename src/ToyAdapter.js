const API = "http://localhost:3000/toys/"

class ToyAdapter{
  
  static getToys(){
    return fetch(API)
    .then(r => r.json())
  }

  static editToy(id, data){
    fetch(API + id, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
     }).then(r => r.json()).then(r => console.log(r))

     const editCard = document.querySelector(`[data-card-i-d = '${id}']`)

     const likes = editCard.querySelector('p')

     likes.innerHTML = data['likes']

  }
}
