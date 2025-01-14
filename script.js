

document.addEventListener('DOMContentLoaded', function() {
    // Format number as currency
    function formatCurrency(value) {
        return new Intl.NumberFormat('au-AU', {
            style: 'currency',
            currency: 'aud',
            maximumFractionDigits: 0
        }).format(value).replace('aud', 'aud');
    }

    // Loan Amount Slider
    const loanAmountSlider = document.getElementById('loanAmount');
    const loanAmountValue = document.getElementById('loanAmountValue');

    loanAmountSlider.addEventListener('input', function() {
        loanAmountValue.textContent = formatCurrency(this.value);
    });

    // Loan Tenure Slider
    const loanTenureSlider = document.getElementById('loanTenure');
    const loanTenureValue = document.getElementById('loanTenureValue')

    loanTenureSlider.addEventListener('input', function() {
        loanTenureValue.textContent = `${this.value} month${this.value > 1 ? 's' : ''}`;
    });
//    alert(`Loan Amount: AUD ${loanAmount}, Loan Tenure: ${loanTenure} month${loanTenure > 1 ? 's' : ''}`);
    const continueButton = document.getElementById('amount-money-submit');
    continueButton.addEventListener('click', function (event) {
        // Prevent the default navigation behavior
        event.preventDefault();

        // Get the values of loan amount and loan tenure
         loanAmount = loanAmountSlider.value;
         loanTenure = loanTenureSlider.value;
         sessionStorage.setItem('loanAmount1', loanAmount);
         sessionStorage.setItem('loanTenure1', loanTenure);

         console.log("this is loan inside" + loanAmount);

         document.location.href = "personal-info.html";//forward to personal info page
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Retrieve loan amount and tenure from sessionStorage
    const loanAmount = sessionStorage.getItem('loanAmount1');
    const loanTenure = sessionStorage.getItem('loanTenure1');

    // Check if values exist
    if (loanAmount && loanTenure) {
        console.log(`Loan Amount: AUD ${loanAmount}`);
        console.log(`Loan Tenure: ${loanTenure} months`);
        // You can also display these values on the page if needed
        document.getElementById('temp-loan-user').textContent = 
            `Loan Amount: AUD ${loanAmount}, Loan Tenure: ${loanTenure} months`;
    } else {
        console.error('No loan data found in sessionStorage.');
    }
});

//basic info
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve loan amount and tenure from sessionStorage
    const loanAmount = sessionStorage.getItem('loanAmount');
    const loanTenure = sessionStorage.getItem('loanTenure');

    // Check if values exist
    if (loanAmount && loanTenure) {
        console.log(`Loan Amount: AUD ${loanAmount}`);
        console.log(`Loan Tenure: ${loanTenure} months`);
        // You can also display these values on the page if needed
        document.getElementById('temp-loan-user').textContent = 
            `Loan Amount: AUD ${loanAmount}, Loan Tenure: ${loanTenure} months`;
    } else {
        console.error('No loan data found in sessionStorage.');
    }
});