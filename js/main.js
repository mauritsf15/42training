const container = document.querySelector('.container');

let state = 'outFocus';

container.addEventListener('click', function(data) {
    
    if (data.target.parentElement.classList[0] == 'intro' || data.target.classList[0] == 'intro') {
        window.location.href = "#focus";
        state = 'inFocus'
    } else if (
        data.target.parentElement.classList[0] == 'inline' 
        || data.target.parentElement.classList[0] == 'on-focus' 
        || data.target.classList[0] == 'on-focus'
        ) {
            //
    } else {
        window.location.href = "#";
        setTimeout(function() {
            state = 'outFocus'
        }, 50)
    }
    if (state == 'outFocus') {
        changeImage();
    }
})

const image = document.querySelector('.container-image');
const imageArray = ['bg-ph-1.jpg', 'bg-ph-2.jpg'];
let currentImage = 0;
let changingDia = false;

function changeImage() {
    currentImage++;
    if (currentImage == imageArray.length) {
        currentImage = 0;
    }
    if (changingDia == false) {
        changingDia = true;
        image.style.opacity = '0';
        setTimeout(function() {
            image.style.backgroundImage = `url(../img/${imageArray[currentImage]})`;
            image.style.opacity = '0.5';
        }, 1000);
        setTimeout(function() {
            changingDia = false;
        }, 2000);
    }
}