document.addEventListener('DOMContentLoaded', function () {
  var selectTriggers = document.querySelectorAll('.select-trigger');

  selectTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var parent = this.closest('.custom-select');
      parent.classList.toggle('open');
      var optionsContainer = parent.querySelector('.select-options');
      if (parent.classList.contains('open')) {
        optionsContainer.style.maxHeight = optionsContainer.scrollHeight + "px";
      } else {
        optionsContainer.style.maxHeight = "0";
      }
    });
  });

  var options = document.querySelectorAll('.option');
  options.forEach(function (option) {
    option.addEventListener('click', function () {
      var value = this.textContent;
      var parent = this.closest('.custom-select');
      parent.querySelector('.select-trigger span').textContent = value;
      parent.classList.remove('open');
      var optionsContainer = parent.querySelector('.select-options');
      optionsContainer.style.maxHeight = "0"; // Collapse options after selection

      // Remove selected class from all options
      options.forEach(function (opt) {
        opt.classList.remove('selected');
      });

      // Add selected class to the clicked option
      this.classList.add('selected');
    });
  });

  // Close select when clicking outside
  document.addEventListener('click', function (event) {
    var selects = document.querySelectorAll('.custom-select');
    selects.forEach(function (select) {
      if (!select.contains(event.target)) {
        select.classList.remove('open');
        var optionsContainer = select.querySelector('.select-options');
        optionsContainer.style.maxHeight = "0"; // Collapse options when clicking outside
      }
    });
  });
});