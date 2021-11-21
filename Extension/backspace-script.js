/*
 * Safari Backspace Extension
 */

document.addEventListener("DOMContentLoaded", function (event) {
    function handleBackspace(e) {
        if (e.keyCode === 8 && !e.shiftKey && !e.ctrlKey
            && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA'
            && e.target.contentEditable !== 'true' // TinyMCE
        ) {
            e.preventDefault();
            window.history.go(-1);
        } else if (e.keyCode === 8 && e.shiftKey && !e.ctrlKey
            && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA'
            && e.target.contentEditable !== 'true' // TinyMCE
        ) {
            e.preventDefault();
            window.history.go(1);
        }
    }
    window.addEventListener('keydown', handleBackspace, false);
});
