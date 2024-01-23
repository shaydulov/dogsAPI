// const request = new XMLHttpRequest();
// request.open('GET', "https://jsonplaceholder.typicode.com/users");
// request.send();

// const body = document.body;

// request.addEventListener('load', function(){
//     // console.log(this.responseText);

//     const data = JSON.parse(this.responseText)
//     console.log(data);
//     data.forEach(element => {
//         console.log(element);
//         const html = `
//             <div class="card">
//                 <h2>${element.name}</h2>
//                 <p>${element.email}</p>
//                 <p>${element.phone}</p>
//             </div>
//         `;

//         body.insertAdjacentHTML('beforeend', html);
//     });
// });



// const request = new XMLHttpRequest();
// request.open("GET", "https://dog.ceo/api/breeds/image/random");
// request.send();

// const button = document.querySelector('button');
// const rasm = document.querySelector('.rasm');

// // request.addEventListener("load", function () {
// //   console.log(this.responseText);
// // });

// button.addEventListener('click', function(){
//     const data = JSON.parse(request.responseText);
//     console.log(data);
// })



// document.getElementById("getDogImage").addEventListener("click", function () {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((data) => {
//       displayDogImage(data.message);
//     })
//     .catch((error) => {
//       console.error("Xato:", error);
//     });
// });

// function displayDogImage(imageUrl) {
//   const imageContainer = document.getElementById("dogImageContainer");
//   const imgElement = document.createElement("img");
//   imgElement.src = imageUrl;
//   imageContainer.innerHTML = ""; // Eski rasmlarni o'chirish
//   imageContainer.appendChild(imgElement);
// }


const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then(data => dogImg(data.message))
    .catch(error => console.error("xato:", error));
})

function dogImg(imgUrl){
    const imgPlace = document.querySelector('.image');
    const image = document.querySelector('img');
    image.src = imgUrl;
}

