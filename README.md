# Safari Backspace

Because macOS Mojave removed the Backspace.

[Download Safari.Backspace.app.zip](https://github.com/yene/Safari-Backspace/releases/download/v1.1/Safari.Backspace.app.zip)

## Alternative with a Keyboard Shortcut
You can add a keyboard shortcut from the terminal but it requires to [disable system integrity](https://www.imore.com/how-turn-system-integrity-protection-macos).
`defaults write com.apple.Safari NSUserKeyEquivalents -dict-add Back "\U232b"` 

## The injected script
https://github.com/yene/Safari-Backspace/blob/master/Extension/backspace-script.js

## Material and Notes
*  [Safari App Extensions](https://developer.apple.com/documentation/safariservices/safari_app_extensions)
* If extension does not show up in list, it has to be signed.
