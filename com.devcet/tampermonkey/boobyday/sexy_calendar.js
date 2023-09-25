// ==UserScript==
// @name         Sexy Calendar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  disable stupid popup on first open
// @author       devcet.com
// @match        https://boobyday.com/*
// @match        https://poppornday.com/*
// @match        https://gonewildday.com/*
// @match        https://boobychristmas.com/*
// @match        https://booty-christmas.com/*
// @match        https://christmas-cam.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gonewildday.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var today = new Date();
    localStorage.setItem("18", "yes");
    //sessionStorage.setItem(today.getDate(), "true");


    if (!sessionStorage.getItem("modified"))
    {
           sessionStorage.setItem("modified", "true");
           window.location.reload();;
    }
    else
    {
            //remove boobycam annoying banner
        var stripElements = document.querySelectorAll("div.boobystrip-banner");
        var camElements = document.querySelectorAll("div.boobycam-banner");
        var shareElements = document.querySelectorAll("div.share-container");
        if (stripElements.length > 0 )
        {
            stripElements[0].remove();
        }
        if (camElements.length > 0 )
        {
            camElements[0].remove();
        }
        if (shareElements.length > 0 )
        {
            shareElements[0].remove();
        }
    }
})();