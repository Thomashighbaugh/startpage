# Electric Tantra Splash Page

> The second incarnation of my homepage. 

## Introduction
This is the second version of the Electric Tantra Splash Page, my personal homepage and web landing. This project was forked from nightTab by zombieFox and then modified to suite my needs. In addition to utilizing ZombieFox's brillaint design, I have added a few modifications to the base feature set, including the removal of the background feature and addition of several client facing features. In addition, I have thoroughly commented the source code and made  developed the 

## Installation



### Use As Homepage/New Tab Page (Without Modifications)
Copy the [hosted url](https://electric-tantra-splash-page.netlify.com), add it as your browser's homepage and new tab page. If you are using Firefox, try the [NewTab extension](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/?src=search) for using it as a new tab page or the [New Tab Homepage](https://addons.mozilla.org/en-US/firefox/addon/new-tab-homepage/) extension for a seamless experience.   

To modify the page for your needs:

```sh
git clone https://github.com/Thomashighbaugh/splash=page
cd splash-page/
npm install
# Perform your modifications with your favorite text editor
# Use prettier to reformat the code you modify
```

To host the site 

## Development 

If you are modifying the source code and would like to test your changes, simply execute the file _index.html_ in your browser. 


## To Add Bookmarks
If you are not planning on clearing your browser data (or like my bookmarks) then you can _ignore this section_ and just add bookmarks using the dialog on the live page

To add new default bookmarks 
- Go to bookmarks.js 
- Look for the following variable
```javascript
var bookmarks = (function(){
    var all = [
```
- Inside of that, use the template below to add a new bookmark
---
### Bookmark Template 
```javascript
   {
      display: "icon",
      letter: "EX",
      icon: {
        name: "code",
        prefix: "fas",
        label: "Example"
      }, 
       name: "Example",
      url: "http://whatever.url",
      accent: {
        override: false,
        color: {
          r: null,
          g: null,
          b: null
        }
      },
```
#### Template Components
- display - either icon or letter. Determines if the Bookmark uses a font 
awesome icon or the letters in the letter variable
- letter - Which letters are used in cases which display = letter
- icon - specifies what icon to use
    - name - name of the icon to use. Look up icons on [font awesome's website](https://fontawesome.com/icons?d=gallery&m=free), but **you must use the exact name of the icon**
    - prefix - tells the program where to look for the icon. On font awesome's website this is indicated by the three letter prefix as in the fas in `<i class="fas fa-fan"></i>` which must be enter here
        - fab - these are generally brand icons, most of what you will use
        for larger sites. 
        - fas - icons using a solid style 
        - far - icons using a regular style 
        - fal - uses light style  
   - label - the icon's label, I generally use the same label as the name
- name: the name of the bookmark as it displays on the page
- url - the url the bookmark will lead to, also displays if the mouse hovers over the bookmark 
- accent - generally off, but can be used to give specific bookmarks a color
    - override - set to true if you want to change the color
        - color - set the components to the RGB style you want the icon color to be or if _override_ is false keep these at null  

      
## Author

**Thomas Leon Highbaugh**

* [Github](https://github.com/Thomashighbaugh)
* [Portfolio Site](https://thomasleonhighbaugh.me)
* [LinkedIn](https://linkedin.com/in/thomas-leon-highbaugh)
## License

Copyright © 2019 [Thomas Leon Highbaugh](#Thomas Leon Highbaugh)
Licensed under the MIT license.

## Credits 

- This project began as a fork of nightTab by ZombieFox and found on Reddit at r/startpage 

- Snippets from this project (and soon others) can also be found in the Snippets Repository (that is ultimately more useful than using Gist, sorry Microsoft) 

_This file was generated by [readme-generator](https://github.com/jonschlinkert/readme-generator) on June 16, 2019._
