// ==UserScript==
// @name         Close evals script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  hate seeing the popup for course evals? Close it!
// @author       Riley Windsor
// @match        https://moodle.rose-hulman.edu/my/
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rose-hulman.edu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    waitForKeyElements (".evalkit-widget-btn-default", clickButton);
})();

function clickButton(){
 document.querySelector(".evalkit-widget-btn-default").click();
}
