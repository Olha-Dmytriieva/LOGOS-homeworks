const APIKey = '56ad793a';
let inputValueForInitialFetch = '';

window.addEventListener('click', detailsDataHandler);
const inputElementRef = document.querySelector('[name=search]');
const searchBtnRef = document.getElementById('search-btn');
const itemToAppendRef = document.querySelector('.item-to-append');
const modal = document.getElementById('myModal');

inputElementRef.addEventListener('input', inputElementHandler);
searchBtnRef.addEventListener('click', searchBtnHandler);

function inputElementHandler(e) {
  inputValueForInitialFetch = e.target.value;

  return inputValueForInitialFetch;
}

function searchBtnHandler(e) {
  const url = `http://www.omdbapi.com/?apikey=${APIKey}&s=${inputValueForInitialFetch}`;

  fetch(url)
    .then(function (response) {
      if (response.status !== 200) {
        console.log('jfhfhf');
        return Promise.reject(new Error(response.statusText));
      }
      return Promise.resolve(response);
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.Response === 'True') {
        data.Search.forEach(item =>
          itemToAppendRef.insertAdjacentHTML(
            'beforeend',
            `<li><article><h2 class="Movie-title">${item.Title}</h2><img src="${item.Poster}" alt="" width="320" height="400"><p>${item.Year}</p><p>${item.Type}</p> <button type="button" value="details-button-js"> More details</button></article></li>`,
          ),
        );
      } else {
        itemToAppendRef.insertAdjacentHTML(
          'beforeend',
          ` <p>${data.Error}</p>`,
        );
      }
    })
    .catch(function (error) {
      console.log('error:', error);
    });
}

function detailsDataHandler(e) {
  if (e.target.value === 'details-button-js') {
    //   e.stopPropagation()
    let valueForDetailedFetch =
      e.target.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.textContent;
    const url = `http://www.omdbapi.com/?apikey=${APIKey}&t=${valueForDetailedFetch}`;

    fetch(url)
      .then(response => response.json())
      .then(data =>
        modal.insertAdjacentHTML('afterbegin', ` <article class="modal-content"><h2 class="Movie-title">${data.Title}</h2><img src="${data.Poster}" alt="" width="320" height="400"><p>${data.Plot}</p><p>${data.Year}</p><p>${data.Type}</p></article>`),
      );
    modal.style.display = 'block';
  }
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    event.target.innerHTML = '';
  }
};


