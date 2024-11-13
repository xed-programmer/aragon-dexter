const loadForm = document.querySelector('#loan-form');
loadForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    
    const amount = document.querySelector('#amount').value;
    const rate = document.querySelector('#rate').value;
    const term = document.querySelector('#term').value;
    const monthlyPayDisplay = document.querySelector('#monthly-pay-display');

    /**
     * Formula
     * M= P×r×(1+r)^n
     * ------------------------------
     * (1+r)^n
     * M = Monthly payment
        P = Principal amount (the initial loan balance)
        r = Monthly interest rate (annual interest rate divided by 12)
        n = Total number of payments (loan term in months)
     */
    let monthlyRate = (rate/100/12);
    let interest = amount * monthlyRate * term;
    console.log(interest);
    
    let x = Math.pow((1+monthlyRate),term*12); // (1+r)^total month
    let monthlyPayment = amount * monthlyRate * x/(x-1); // 12 months
    console.log(monthlyPayment);
    monthlyPayDisplay.innerHTML = 'Monthly Pay: $' + monthlyPayment.toFixed(2);
}

