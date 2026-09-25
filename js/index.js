document.addEventListener('DOMContentLoaded', function() {
  var loginLink = document.querySelector('a[href="/pages/login.html"]');
  var modal = document.getElementById('termsModal');
  var agreeBtn = document.getElementById('agreeBtn');
  var cancelBtn = document.getElementById('cancelBtn');

  if (loginLink && modal && agreeBtn && cancelBtn) {
    loginLink.onclick = function(event) {
      event.preventDefault();  // stop the link from going to login immediately
      modal.classList.remove('hidden');  // show the modal
    };

    agreeBtn.onclick = function() {
      window.location.href = '/pages/login.html';  // go to login page
    };

    cancelBtn.onclick = function() {
      modal.classList.add('hidden');  // hide the modal
    };

    modal.onclick = function(event) {
      if (event.target === modal) {
        modal.classList.add('hidden');  // hide if clicked outside modal content
      }
    };
  }
});
