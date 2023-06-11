
//видимість паролю
function togglePasswordVisibility() {
  var passwordInput = document.getElementById('password-input');
  var eyeIcon = document.querySelector('.password-toggle-icon');

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "images/vector-eye-close.png";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "images/vector-eye.png";
  }
}
//хеадер
var prevScrollPos = window.pageYOffset;
var header = document.getElementById('header');

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.style.transform = "translateY(0)";
  } else {
    header.style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;
};

//категорії 
var parentCategories = document.querySelectorAll('.parent-category');

parentCategories.forEach(function(category) {
  category.addEventListener('click', function() {
    
    var childCategory = category.querySelector('.child-category');
    childCategory.classList.toggle('show');
  });
});
