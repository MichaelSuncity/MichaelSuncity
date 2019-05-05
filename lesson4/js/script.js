
function init() { 
    document.body.addEventListener('click', handleImageClick);
    var $close = document.getElementById('close');
    $close.addEventListener('click', handleCloseClick);
}

function handleImageClick(event) {
    if (event.target.classList.contains('img')) {
        var $modalImage = document.getElementById('modalImage');
        var $overlay = document.getElementById('overlay');
        var $modal = document.getElementById('modal');
        $modalImage.src = event.target.src;
        $modal.style.display = 'block';
        $overlay.style.display = 'block';
        $modalImage.classList.add('modalImage');
    }
}

function handleCloseClick(event) {
    var $overlay = document.getElementById('overlay');
    var $modal = document.getElementById('modal');
    $modal.style.display = 'none';
    $overlay.style.display = 'none';
}

window.addEventListener('load', init);
