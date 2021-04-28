import './styles.css';
import template from './template/template.hbs';
import templateDetail from './template/templateDetailedFetch.hbs';
const Handlebars = require('handlebars');

Handlebars.registerHelper('if', function (conditional, options) {
  if (Response === 'false') {
    return options.fn(this);
  }
});

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
      console.log(data);
      itemToAppendRef.insertAdjacentHTML('afterbegin', template(data));
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
        modal.insertAdjacentHTML('afterbegin', templateDetail(data)),
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
