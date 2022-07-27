console.log('content.js loaded');

async function portal_239479874923749872394798() {
    var portal_329847293742716391398729 = await portal_134248273948723984798237();
    var portal_129813798147924982374987 = document.getElementsByTagName('*');
    for (var i = 0; i < portal_129813798147924982374987.length; i++) {
        var portal_193189120931092831083091 = portal_129813798147924982374987[i];
        var replacement = portal_329847293742716391398729.get(portal_193189120931092831083091.innerText);
        if (replacement){
            portal_193189120931092831083091.textContent = replacement;
            portal_193189120931092831083091.style.backgroundColor = 'red';
        }
    }
}

async function portal_134248273948723984798237() {
    if (window.location.href.indexOf('https://github.com/') == 0) {
        var path = window.location.pathname;
        var newPath = path.replace('/tree', '').replace('/blob', '');
        var url = 'https://raw.githubusercontent.com' + newPath + '/../../portal';
        console.log('url: ' + url);
        var response = await fetch(url);
        var content = await response.text();
        console.log(content);
        var replacements = new Map(content.split('\n')
            .filter(line => line.trim() != "")
            .map(line => {
                var fields = line.split(' ');
                return [fields[0], fields[1]];
            }));
        console.log(replacements);
        return replacements;
    }
}

window.onload = portal_23947987492374987239479823749273;
