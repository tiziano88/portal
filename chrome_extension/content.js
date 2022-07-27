console.log('content.js loaded');

function replace() {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.textContent == 'document'){
            element.textContent = "FOO";
        }
    }
}

window.onload = replace;
