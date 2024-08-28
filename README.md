# Safari Backspace

> [!NOTE]  
> This extension is not needed anymore you can enable backspace with the command below

## Enable Backspace Keyboard Shortcut
In macOS you can enable Safari Backspace with:
`defaults write com.apple.Safari NSUserKeyEquivalents -dict-add Back "\U232b"` 

Remove the change with:
`defaults delete com.apple.Safari NSUserKeyEquivalents`

# Notes about the Extension

## The injected script
https://github.com/yene/Safari-Backspace/blob/master/Extension/backspace-script.js

## Material and Notes
*  [Safari App Extensions](https://developer.apple.com/documentation/safariservices/safari_app_extensions)
* If extension does not show up in list, it has to be signed.
* Testing is a bit annoying, you need to remove the original, then enable unsinged extensions in Safari. Then run. Then toggle the extension.
* Is there a debug flag that can be used in the JS?
