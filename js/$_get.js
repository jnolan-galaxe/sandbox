/**
 * Adds support for a global variable that contains the url parameter values
 * like $_GET does in PHP. Use the object.hasOwnProperty("key") method to check
 * for values.
 */


window.$_GET = {};

if(window.location.search) {

    var s = window.location.search;
    s = s.substring(1);
    s = s.split('&');

    for(var i = 0; i<s.length; i++) {
        var param = s[i].split('=');
        window.$_GET[param[0]] = param[1];
    }

}