document.getElementById('add-button').addEventListener('click', function(){
    let firstNum = parseInt(document.getElementById("first-num").value);
    let secondNum = parseInt(document.getElementById("second-num").value);
    console.log(firstNum + secondNum);
    fetch('http://localhost:8080/search?query=' + encodeURIComponent(searchTerm))
        .then(response => response.json())
        .then(data => {
            console.log(data); // 處理返回的數據
        })
        .catch(error => {
            console.error('Error:', error);
        });
})

