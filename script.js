let loadButton = document.getElementById('loadButton');
let loader = document.getElementById('loader');
let demoForm = document.getElementById('my-form');

loadButton.addEventListener('click', function() {

    // Disable the button
    // and prevent further clicks
    loadButton.disabled = true;
    loader.style.display = 'inline-block';

    let that = this; // Save reference to loadButton

    setTimeout(function() {
    
        // Restore the button state 
        // after the operation is done
        that.disabled = false;
        loader.style.display = 'none';
        demoForm.reset();
    }, 2000);
});
