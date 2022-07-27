console.log('content.js loaded');

async function portal_23947987492374987239479823749273() {
    var replacements = await portal_134248273948723984798237();
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.textContent == 'document'){
            element.textContent = "FOO";
        }
    }
}

async function portal_134248273948723984798237() {
    if (window.location.href.indexOf('https://github.com/') == 0) {
        var path = window.location.pathname;
        var newPath = path.replace('/tree', '');
        var url = 'https://raw.githubusercontent.com' + newPath + '/../portal';
        console.log('url: ' + url);
        var response = await fetch(url);
        var content = await response.text();
        // console.log(content);
        var replacements = new Map(content.split('\n').filter(line => line.trim() != "").map(line => {
            var fields = line.split(' ');
            return [fields[0], fields[1]];
        }));
        console.log(replacements);
    }
}

window.onload = portal_23947987492374987239479823749273;
