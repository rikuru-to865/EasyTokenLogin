window.onload = function() {
    var div = document.createElement('input');
    var body = document.getElementsByClassName('marginBottom20-315RVT');
    body[0].insertBefore(div, body[0].firstChild)
    window.document.onkeydown = function(event){
        if (event.key === 'Enter') {
            login(div.value);
        }
    }
};

function login(token) {
    setInterval(() => {
        document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
        location.reload();
    }, 2500);
}