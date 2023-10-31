async function registerHouse() {
    let address = document.getElementById('address').value;
    let amount = document.getElementById('amount').value;
    let cityId = document.getElementById('cityId').value;

    let token = localStorage.getItem('token');

    let response = await fetch('http://localhost:4000/house', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({
            address,
            amount,
            cityId
        })
    });

    alert(await response.text())
}