var showAlert = function() {
  ons.notification.alert('Woah!Welcome To SparkApp! A Free And Friendly Signing Service ');
};

var showConfirm = function() {
  ons.notification.confirm('Confirm!')
};

var showPrompt = function() {
  ons.notification.prompt('Prompt!')
    .then(function(input) {
      var message = input ? 'Entered: ' + input : 'Entered nothing!';
      ons.notification.alert(message);
    });
};

var showToast = function() {
  ons.notification.toast('Woah! Welcome To SparkApp! A Free And Friendly Signing Service!', {
    timeout: 2000
  });
};
