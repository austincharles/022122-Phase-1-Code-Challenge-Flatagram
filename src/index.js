const URL = 'http://localhost:3000/images/1'
const imageContainer = document.getElementsByClassName('image-container')
const likesSection = document.getElementsByClassName('likes-section')
const commentsList = document.getElementById('comments-list')
const likesButton = document.getElementById('like-button')
const commentForm = document.getElementById('comment-form')

fetch(URL)
    .then(resp => resp.json())
    .then(renderDogPost)

likesButton.addEventListener('click', function (e) {
    ++dog.likes;
    likes.textContent = dog.likes
})

commentForm.addEventListener('submit', addNewComment())

function renderDogPost(dogArray) {
    dogArray.forEach(addPostToPage())
}

function addPostToPage(dog) {
    const dogImage = document.createElement('img')
    dogImage.src = dog.images;
    imageContainer.append(dogImage)
}

function displayPostDetails(dog) {
    const cardImage = document.querySelector('.card-image')
    cardImage.src = dog.image;
    cardImage.alt = dog.title;

    document.querySelector('.title').textContent = dog.title;
    document.querySelector('.likes').textContent = dog.likes
    document.querySelector('.comments').textContent = dog.comments

    likesSection.textContent = dog.likes
    commentsList.textContent = dog.comments
}

function addNewComment(event) {
    event.preventDefault()
    console.log(event.target.comment.value)

    const newComment = {
        comment: event.target['new-comment'].value,
    }
}