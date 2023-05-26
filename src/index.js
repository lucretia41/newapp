import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const renderCards = (dataArray) => {
//   const cardContainer = document.getElementById("card-container");
//   dataArray.forEach((cardInfo) => {
//     const imgContainer = document.createElement("div");
//     const img = document.createElement('img');
//     const artist_display = document.createElement("p")

//     artist_display.textContent = cardInfo.artist_display
//     imgContainer.append(img, artist_display)
//     img.src = cardInfo.image;
//     img.addEventListener("click", (event)=> {
//       const title = document.createElement("p")
//       title.textContent = cardInfo.title
//       const pName = document.createElement('p')
//       pName.textContent = cardInfo.name
//       const id = document.createElement('p')
//       id.textContent.append(img, title, id)
//     })
//     cardContainer.appendChild(imgContainer);
//   });
// };
// ("https://collectionapi.metmuseum.org/public/collection/v1/objects")
// ("https://api.artic.edu/api/v1/artworks")
const fetchData = () => {
  return fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
  .then(res => res.json())
  .then(info => {
    // renderCards(info.data)
    console.log(info)
    return info
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// renderCards();
fetchData();

