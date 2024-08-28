/*
 * Safari Backspace Extension
 */

document.addEventListener("DOMContentLoaded", function (event) {
    let outmostTags = ['HTML', 'BODY', 'MAIN']
    let ignoreTags = ['INPUT', 'TEXTAREA']

    function handleBackspace(e) {
//        if (e.keyCode === 8 && !e.ctrlKey && e.target.contentEditable !== 'true' && !ignoreTags.includes(e.target.tagName)) {
//            console.log(e.target.tagName, e.target.shadowRoot)
//        }

        if (e.keyCode === 8 && !e.shiftKey 
            && !e.ctrlKey
            && !ignoreTags.includes(e.target.tagName)
            && e.target.contentEditable !== 'true'
            && e.target.contentEditable !== 'plaintext-only'
            && e.target.shadowRoot == null
        ) {
            e.preventDefault();
            window.history.go(-1); // backward
        } else if (e.keyCode === 8 && e.shiftKey
            && !e.ctrlKey
            && !ignoreTags.includes(e.target.tagName)
            && e.target.contentEditable !== 'true'
            && e.target.contentEditable !== 'plaintext-only'
            && e.target.shadowRoot == null
        ) {
            e.preventDefault();
            window.history.go(1); // forward
        }
    }
    window.addEventListener('keydown', handleBackspace, false);
});
