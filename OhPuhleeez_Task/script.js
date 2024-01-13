document.addEventListener('DOMContentLoaded', function () {
    // Function to handle form submission
    function validateForm() {
        // Get form elements
        var form = document.getElementById('registrationForm');
        var fullNameInput = document.getElementById('fullName');
        var emailInput = document.getElementById('email');
        var phoneInput = document.getElementById('phone');
        var collegeNameInput = document.getElementById('collegeName');
        var schoolInput = document.getElementById('school');
        var yearInput = document.getElementById('year');
        var participationTypeInput = document.getElementById('participationType');

        // Create an object with user details
        var userDetails = {
            fullName: fullNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            collegeName: collegeNameInput.value,
            school: schoolInput.value,
            year: yearInput.value,
            participationType: participationTypeInput.value
        };

        // Print details in console
        console.log('User Details:', userDetails);

        // Reset the form
        form.reset();
    }

    // Attach click event to the register button
    var registerButton = document.getElementById('registerButton');
    if (registerButton) {
        registerButton.addEventListener('click', validateForm);
    }
});


document.addEventListener('alpine:init', () => {
    Alpine.store('accordion', {
      tab: 0
    });
    
    Alpine.data('accordion', (idx) => ({
      init() {
        this.idx = idx;
      },
      idx: -1,
      handleClick() {
        this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
      },
      handleRotate() {
        return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
      },
      handleToggle() {
        return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
      }
    }));
  })