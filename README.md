# Safari Backspace

Because macOS Mojave removed the Backspace.

## The injected script
```javascript
function handleBackspace(e) {
    if (e.keyCode === 8 && !e.ctrlKey && !e.shiftKey
        && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA'
        && e.target.contentEditable !== 'true' // TinyMCE
        ) {
        e.preventDefault();
        window.history.go(-1);
    }
}
window.addEventListener('keydown', handleBackspace, false);

```

## Paranoid People 🙈
I am recording your text inputs and send it to my servers, so I can laugh about your spelling mistakes.

You can find the scripts in the release by inspecting the package contents. 

`open Safari\ Backspace.app/Contents/PlugIns/Backspace.appex/Contents/Resources/`

