const { getMaxListeners } = require("node:process");

getHTML.onclock = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    };
    request.onerror = () => { };
    request.send();
};
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onload = () => {
        const script = document.childElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
    };
    request.onerror = () => { };
    request.send();
};
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/style.css");
    request.onload = () => {
        const style = document.createElement('style')
    };
    request.onerror = () => {
        console.log("失败了");
    };
    request.send();
};
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(test.trim())
        }
    };
    request.send()
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object=JSON.parse(request.response);
        }
    };
    request.send()
};