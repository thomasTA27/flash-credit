

//     // Format number as currency

// function formatCurrency(value) {
//     return new Intl.NumberFormat('vi-VN', {
//         style: 'currency',
//         currency: 'VND',
//         maximumFractionDigits: 0
//     }).format(value).replace('₫', '₫');
// }

// // Loan Amount Slider
// const loanAmountSlider = document.getElementById('loanAmount');
// const loanAmountValue = document.getElementById('loanAmountValue');

// loanAmountSlider.addEventListener('input', function() {
//     loanAmountValue.textContent = formatCurrency(this.value);
// });

// // Loan Tenure Slider
// const loanTenureSlider = document.getElementById('loanTenure');
// const loanTenureValue = document.getElementById('loanTenureValue');

// loanTenureSlider.addEventListener('input', function() {
//     loanTenureValue.textContent = `${this.value} month${this.value > 1 ? 's' : ''}`;
// });

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
    const loanTenureValue = document.getElementById('loanTenureValue');

    loanTenureSlider.addEventListener('input', function() {
        loanTenureValue.textContent = `${this.value} month${this.value > 1 ? 's' : ''}`;
    });
});