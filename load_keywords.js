//console.log("starting load_keywords.js");

var keywords = {
    Arabic: {
        before: [], general: []
    },
    English: {
        after: [], before: [], general: [], listed: [], possessed: []
    },
    Spanish: {
        after: [], before: [], listed: []
    }
};


function load_keyword(language, category) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', chrome.extension.getURL('keywords/' + language + '/' + category + '.txt'));
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == XMLHttpRequest.DONE)
        {
            keywords[language][category] = xhr.responseText.split("\n").filter(Boolean);
        }
    };
    xhr.send();
}

for (var language in keywords) {
    for (var category in keywords[language]) {
        load_keyword(language, category);
    }
}
