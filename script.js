let loadButton = document.getElementById('loadButton');
let loader = document.getElementById('loader');
let demoForm = document.getElementById('my-form');

loadButton.addEventListener('click', function() {
    loadButton.disabled = true;              
    loader.style.display = 'inline-block';   

    setTimeout(function() {
        loadButton.disabled = false;         
        loader.style.display = 'none';      
        demoForm.reset();                 
    }, 2000);
});
