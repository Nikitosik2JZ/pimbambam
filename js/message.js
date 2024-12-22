document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const product = document.getElementById('product').value;

    

    
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerText = "Спасибо, "+name+"! Консультант свяжется с вами в скором времени.";
    responseMessage.style.display = 'block';

    
    document.getElementById('myForm').reset();
});