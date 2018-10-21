document.addEventListener("DOMContentLoaded", function(event) {
    function handleBackspace(e) {
        if (e.keyCode === 8 && !e.ctrlKey && !e.shiftKey
            && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            window.history.go(-1);
        }
    }
    window.addEventListener('keydown', handleBackspace, false);
});
