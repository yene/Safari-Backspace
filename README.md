# Safari Backspace

Because macOS Mojave removed the Backspace.

[Download Safari.Backspace.app.zip](https://github.com/yene/Safari-Backspace/releases/download/v1.0/Safari.Backspace.app.zip)

## Alternative with a Keyboard Shortcut
You can add a keyboard shortcut from the terminal but it requires to [disable system integrity](https://www.imore.com/how-turn-system-integrity-protection-macos).
`defaults write com.apple.Safari NSUserKeyEquivalents -dict-add Back "\U232b"` 

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

## Material and Notes
*  [Safari App Extensions](https://developer.apple.com/documentation/safariservices/safari_app_extensions)
* Extension does not show up in list. -> It has to be signed.
