const toy_collection = document.getElementById('toy-collection');

function load_data() {
    fetch('http://localhost:3000/toys')
        .then(res => res.json())
        .then(data => {
            data.forEach(toy => {
                //create elements
                const div1 = document.createElement('div')
                const toyTitle = document.createElement('h1')
                const image = document.createElement('img')
                const likes = document.createElement('p')
                const like_btn = document.createElement('button')

                //appending elements
                toy_collection.append(div1)
                div1.append(toyTitle, image, likes, like_btn)

                //adding class to elements
                div1.classList.add('card')
                image.classList.add('toy-avatar')
                like_btn.classList.add('like-btn')

                //adding text to elements
                toyTitle.textContent = `${toy.name}`
                image.src = `${toy.image}`
                likes.textContent = `${toy.likes}`
                like_btn.textContent = "Like ❤️"
            })
        })
        .catch(error => {
            console.log(error)
        })
}
load_data()

const addForm = document.forms['add-toy-form']

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        name: document.querySelector('input[type="text" name="name"]').value,
        name: document.querySelector('input[type="text" name="image"]').value
    }
    fetch('http://localhost:3000/toys', {
        method: "post",
        head: {
            'content-type': 'applicaton/json'
        },
        body: JSON.stringify(data)
    })

})

const newToyBtn = document.getElementById('new-toy-btn')
newToyBtn.addEventListener('click', (e) => {
    alert('testing')
    const container = document.getElementsByClassName('container')
    if (container.style.display = 'none') {
        container.style.display = "block"
    } else {
        container.style.display = "none"
    }
})
