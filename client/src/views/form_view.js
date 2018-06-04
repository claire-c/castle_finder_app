const PubSub = require('../helpers/pub_sub.js');


const FormView = function(form) {
  this.form = form;
};

FormView.prototype.setUpFormListener = function () {
  this.form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('Listen', evt.target.user_inputted_location.value);
    const inputData = evt.target.user_inputted_location.value;

    PubSub.publish('FormView:Receive-Data-From-Form', inputData);

  });
};

module.exports = FormView;
