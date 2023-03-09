const container = document.querySelector('.container')

container.addEventListener('click', function(data) {
    if (data.target.parentElement.classList[0] == 'intro' || data.target.classList[0] == 'intro') {
        window.location.href = "#focus";
    } else if (
        data.target.parentElement.classList[0] == 'inline' 
        || data.target.parentElement.classList[0] == 'on-focus' 
        || data.target.classList[0] == 'on-focus'
        ) {
        //
    } else {
        window.location.href = "#";
    }
})