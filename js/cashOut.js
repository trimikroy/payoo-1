document.getElementById('btn-cash-out-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOut = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(cashOut);
        const pinNumber = document.getElementById('cash-out-pin').value;
        const addMoneyBalance = document.getElementById('add-account-balance').value;
        console.log(cashOut, pinNumber, addMoneyBalance);
        // wrong way to pin number

        if (pinNumber === "1234") {
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);
            console.log(balance);

            // reduce the balance
            const newBalance = balanceNumber - cashOutNumber;

            const remainingBalance = balanceNumber - newBalance;
          
           
            // update amount 

            document.getElementById('account-balance').innerText = newBalance;
            document.getElementById('add-account-balance').innerText = remainingBalance;


        }

        else {
            alert('Failed to cash out. try again');
        }
    });