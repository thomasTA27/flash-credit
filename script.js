

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




document.addEventListener('DOMContentLoaded', function () {

    const continueButton = document.getElementById('person-basic-info');


    continueButton.addEventListener('click', function (event) {
        // Prevent the default navigation behavior
        event.preventDefault();

       

         document.location.href = "phone-verification.html";//forward to personal info page
    });

 
});


document.addEventListener('DOMContentLoaded', function () {
   
    const loanAmount = sessionStorage.getItem('loanAmount1');
        // const loanTenure = sessionStorage.getItem('loanTenure');
        

    document.getElementById('haha-phone-veri').textContent = "aha! you are here for loan amount of AUD " + loanAmount; //this is in phone-verication.html

});



////////////phone verification

const readline = require('readline');

// Twilio API credentials

// Phone number and service SID
const serviceSid = 'VA9959c16922db9dd834150a6cda13ce8f';
const phoneNumber = '+61422501169'; // Replace with your phone number

// Function to send verification code
async function sendVerificationCode() {
    const url = `https://verify.twilio.com/v2/Services/${serviceSid}/Verifications`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            To: phoneNumber,
            Channel: 'sms',
        }),
    });

    const result = await response.json();
    if (response.ok) {
        console.log('Verification code sent:', result);
    } else {
        console.error('Error sending verification code:', result);
        process.exit(1);
    }
}

// Function to verify the code entered by the user
async function verifyCode(verificationCode) {
    const url = `https://verify.twilio.com/v2/Services/${serviceSid}/VerificationCheck`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            To: phoneNumber,
            Code: verificationCode,
        }),
    });

    const result = await response.json();
    if (response.ok && result.valid) {
        console.log('Verification successful!');
    } else {
        console.error('Verification failed:', result.message || result);
    }
}

// Function to prompt the user for input
function promptUser(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => rl.question(query, (answer) => {
        rl.close();
        resolve(answer);
    }));
}

// Main function
(async () => {
    try {
        // Step 1: Send the verification code
        await sendVerificationCode();

        // Step 2: Prompt the user for the verification code
        const userCode = await promptUawser('Enter the verification code you received: ');

        // Step 3: Verify the code
        await verifyCode(userCode);
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
