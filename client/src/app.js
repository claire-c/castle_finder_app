const FormView = require('./views/form_view.js');
const Castles = require('./models/castles.js');
const ContainerView = require('./views/container_view.js');


document.addEventListener('DOMContentLoaded', () => {

  const form = window.document.querySelector('#form');
  const formView = new FormView(form);
  formView.getInputFromUser();

  const castles = new Castles();
  castles.subscribeToFormView();

  const container = document.querySelector('#container');
  const containerView = new ContainerView(container);
  containerView.bindEvents();

});
