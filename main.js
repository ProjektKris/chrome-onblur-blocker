var s = document.createElement("script");
s.src = chrome.runtime.getURL("onblur_disconnect.js");
// s.onload = function () {
//     this.remove();
// };

// deal with .onXYZ
(document.head || document.documentElement).prepend(s);

// deal with .addEventListener
window.addEventListener(
    "focus",
    function (event) {
        event.stopImmediatePropagation();
    },
    true
);
window.addEventListener(
    "blur",
    function (event) {
        event.stopImmediatePropagation();
    },
    true
);
