window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const amountParam = urlParams.get('amount');
    if (amountParam) {
        document.getElementById('amount').value = amountParam;
    }
};

function submitAmount() {
    const amount = document.getElementById('amount').value;
    if (!amount || isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }
    const paymentLink = `upi://pay?pa=parthbhardwaj@axisb&pn=Parth%20Bhardwaj&cu=INR&am=${amount}`;
    window.location.href = paymentLink;
}