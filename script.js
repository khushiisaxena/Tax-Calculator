$(document).ready(function() {
    

    // Functions to show and hide error icons
    function showErrorIcon(inputField) {
      var errorIcon = inputField.next('.error-icon');
      errorIcon.show();
    }
  
    function hideErrorIcon(inputField) {
      var errorIcon = inputField.next('.error-icon');
      errorIcon.hide();
    }

    
    // Functions to show and hide error tooltips
    function showErrorTooltip(inputField, message) {
      var errorTooltip = inputField.next('.error-tooltip');
      errorTooltip.text(message);
      errorTooltip.show();
    }
  
    function hideErrorTooltip(inputField) {
      var errorTooltip = inputField.next('.error-tooltip');
      errorTooltip.hide();
    }
  
  
    // Submit form
    $('#taxForm').submit(function(event) {
      event.preventDefault();
  
      // Get input values
      var grossIncome = $('#grossIncome').val();
      var extraIncome = $('#extraIncome').val();
      var deductions = $('#deductions').val();
      var age = $('#age').val();
  

      // Validating input fields
      if (!grossIncome) {
        showErrorTooltip($('#grossIncome'), 'Please enter gross annual income');
        showErrorIcon($('#grossIncome'));
        return;
      } else {
        hideErrorTooltip($('#grossIncome'));
        hideErrorIcon($('#grossIncome'));
      }
  

      // Validating age group
      if (!age) {
        showErrorTooltip($('#age'), 'Please select age group');
        showErrorIcon($('#age'));
        return;
      } else {
        hideErrorTooltip($('#age'));
        hideErrorIcon($('#age'));
      }
  

      // Validating numeric input fields
      if (isNaN(grossIncome) || isNaN(extraIncome) || isNaN(deductions)) {
        showErrorTooltip($('#grossIncome'), 'Please enter valid numbers');
        showErrorIcon($('#grossIncome'));
        showErrorIcon($('#extraIncome'));
        showErrorIcon($('#deductions'));
        return;
      } else {
        hideErrorTooltip($('#grossIncome'));
        hideErrorTooltip($('#extraIncome'));
        hideErrorTooltip($('#deductions'));
        hideErrorIcon($('#grossIncome'));
        hideErrorIcon($('#extraIncome'));
        hideErrorIcon($('#deductions'));
      }
  

      // Calculating taxable income and tax amount
      var taxableIncome = parseFloat(grossIncome) + parseFloat(extraIncome) - parseFloat(deductions);
      var taxAmount = 0;
  

      // Appling tax slabs based on age group
      if (taxableIncome > 800000) { 
        if (age === '<40') {
          taxAmount = 0.3 * (taxableIncome - 800000);
        } else if (age === '>=40&<60') {
          taxAmount = 0.4 * (taxableIncome - 800000);
        } else if (age === '>=60') {
          taxAmount = 0.1 * (taxableIncome - 800000);
        }
      }
  
      // Displaying result in modal
      $('#modalBody').html('<p>Taxable Income: ' + taxableIncome.toFixed(2) + '</p>' +
                          '<p>Tax Amount: ' + taxAmount.toFixed(2) + '</p>');
      $('#resultModal').modal('show');
    });
  
    
    // Hide error tooltips and icons on input
    $('input[type="number"]').on('input', function() {
      hideErrorTooltip($(this));
      hideErrorIcon($(this));
    });
  });
  