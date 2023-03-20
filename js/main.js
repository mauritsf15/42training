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
        || data.target.parentElement.classList[0] == 'left-side' 
        || data.target.parentElement.classList[0] == 'right-side' 
        || data.target.parentElement.classList[0] == 'portrait' 
        ) {
            //
    } else {
        window.location.href = "#";
        setTimeout(function() {
            state = 'outFocus'
        }, 50)
    }
})