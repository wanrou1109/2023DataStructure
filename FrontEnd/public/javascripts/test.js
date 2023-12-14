document.getElementById('add-button').addEventListener('click', function(){
    let firstNum = parseInt(document.getElementById("first-num").value);
    let secondNum = parseInt(document.getElementById("second-num").value);
    
    fetch('http://localhost:8080/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstNum: firstNum,
            secondNum: secondNum
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Result:', data.result);
    })
    .catch(error => {
        console.error('Error:', error);
    })
    
})

