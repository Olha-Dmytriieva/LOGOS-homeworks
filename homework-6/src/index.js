import './styles.css';
import template from './template/template.hbs';
import templateDetail from './template/templateDetailedFetch.hbs';
const Handlebars = require('handlebars');


Handlebars.registerHelper("if", function(conditional, options) {
    if (Response === "false") {
      return options.fn(this);
    }
  });


const inputElementRef = document.querySelector('[name=search]');
const searchBtnRef = document.getElementById('search-btn');
const itemToAppendRef = document.querySelector('.item-to-append');
const modal = document.getElementById('myModal');

inputElementRef.addEventListener('input', inputElementHandler);
let moreDetailsButtonRef = [];
let inputValueForInitialFetch = '';

function inputElementHandler(e) {
  inputValueForInitialFetch = e.target.value;

  return inputValueForInitialFetch;
}

searchBtnRef.addEventListener('click', searchBtnHandler);

const APIKey = '56ad793a';

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
      // console.dir(response)
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

window.addEventListener('click', detailsDataHandler);

function detailsDataHandler(e) {
    console.log(e.target)

  if (e.target.value === 'details-button-js') {
    //   e.stopPropagation()
    let valueForDetailedFetch =
      e.target.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.textContent;
    const url = `http://www.omdbapi.com/?apikey=${APIKey}&t=${valueForDetailedFetch}`;

    fetch(url)
      .then(response => response.json())
      .then(data =>
        modal.insertAdjacentHTML('afterbegin', templateDetail(data)));
    modal.style.display = 'block';
  }
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    event.target.innerHTML = '';
  }
};
