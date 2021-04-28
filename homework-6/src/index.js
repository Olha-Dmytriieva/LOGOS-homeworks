import './styles.css';
import template from './template/template.hbs';
const Handlebars = require("handlebars");



const inputElementRef = document.querySelector('[name=search]');
const searchBtnRef = document.getElementById('search-btn');
const itemToAppendRef = document.querySelector('.item-to-append')

inputElementRef.addEventListener('input', inputElementHandler);

let inputValueForFetch = '';

function inputElementHandler(e) {
  inputValueForFetch = e.target.value;

  return inputValueForFetch;
}

searchBtnRef.addEventListener('click', searchBtnHandler);

const APIKey = '56ad793a';
let obj ={}

function searchBtnHandler(e) {
    const url = `http://www.omdbapi.com/?apikey=${APIKey}&s=${inputValueForFetch}`;

    fetch(url) 
      .then(function (response) {
        
        if (response.status !== 200) { 
          console.log('jfhfhf');    
        return Promise.reject(new Error(response.statusText))
        }
        return Promise.resolve(response)
      })
    .then(response => {
        // console.dir(response)
        return response.json();
      })
    .then(data => {
        console.log(data)
        itemToAppendRef.insertAdjacentHTML('afterbegin', template(data))
      })
      .catch(function (error) {
        console.log('error:', error)
      })
    

}
