console.log('content.js loaded');

async function portal_239479874923749872394798() {
    var portal_329847293742716391398729 = await portal_134248273948723984798237();
    var portal_129813798147924982374987 = document.getElementsByTagName('*');
    for (var portal_098231231892738172835569 = 0; portal_098231231892738172835569 < portal_129813798147924982374987.length; portal_098231231892738172835569++) {
        var portal_193189120931092831083091 = portal_129813798147924982374987[portal_098231231892738172835569];
        var portal_123478921237126312378172 = portal_329847293742716391398729.get(portal_193189120931092831083091.innerText);
        if (portal_123478921237126312378172) {
            portal_193189120931092831083091.textContent = portal_123478921237126312378172;
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

window.onload = portal_239479874923749872394798;
