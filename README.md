### 🚧 IN DEVELOPMENT
This repo, demonstrating the API of Electron's WebView, is currently under development and may be missing certain functions. 

### ⚠ WARNING
According to Electron's documentation:
> Electron's `webview` tag is based on [Chromium's `webview`][chrome-webview], which
is undergoing dramatic architectural changes. This impacts the stability of `webviews`,
including rendering, navigation, and event routing. We currently recommend to not
use the `webview` tag and to consider alternatives, like `iframe`, [Electron's `BrowserView`](browser-view.md),
or an architecture that avoids embedded content altogether.

___

# Electron Webview API Demo
![image](https://user-images.githubusercontent.com/51213244/167525582-3f030342-94dd-472b-9ac9-8bb3f7e65448.png)

I recommend checking out [the official docs](https://www.electronjs.org/docs/latest/api/webview-tag).

### What This Demos Shows
> *Not added yet, but planned
> 
> **Not added yet, but planned(maybe, maybe not)

 - Navigation
    - Back
    - Forward
    - Home
    - Reload
 - Zoom
    - Zoom In*
    - Zoom Out*
    - Reset Zoom*
    - Enter Fullscreen*
 - Injection
    - CSS*
    - JavaScript* (Preload)
 - Loading Indicators*
 - Crash Screen**
 - Find*
 - Context Menu*
 - Developer Tools
 - Address Bar*
 - Useragent*
and more...

### Future Plans
I want to do more advanced functions with Electron's WebView like:

#### Side By Side
Inspired by the Tab Tiling feature from Vivaldi, which is where you can view two tabs at once in one window. Should be mostly easy to pull off, but I'm going to need some time to figure some other stuff out.

You can view more about the [Tab Tiling feature from Vivaldi](https://vivaldi.com/blog/view-multiple-web-pages-side-by-side-no-extensions/).

#### Adaptive Background Color
Change background of the application(That being Electron itself), to the faded color of the website's theme color.

```html
<meta name='theme-color' content='#ff0000'>
```

May be possible, since there is an [event for this](https://www.electronjs.org/docs/latest/api/webview-tag#event-did-change-theme-color)

### Additional Information
#### Font Awesome
The icons shown at the top of the application are from Font Awesome. The app uses a Pro Kit from my Font Awesome account.

It's a good practice to actually have the icons downloaded and stored locally with your application, this way the icons can still load if the user goes offline.

[Font Awesome can be downloaded](https://fontawesome.com/download). *Download for Web, not Desktop*
