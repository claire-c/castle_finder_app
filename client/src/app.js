const FormView = require('./views/form_view.js');
const Castles = require('./models/castles.js');



document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello');

const form = window.document.querySelector('#form');
const formView = new FormView(form);
formView.setUpFormListener();

const castles = new Castles();
castles.subscribeToFormView();


});
