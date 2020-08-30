# Startpage 

- React.js 
- Rendered into a static asset using Next.js 
- Uses standard Bootstrap for easing the styling and providing consistency
 - Implements modals from react-bootstrap 
- leverages react-icons to make the menu


### What's Different From Other Startpages

1. I don't mind having my site hosted externally, as I have relatively fast internet and the startpage means very little offline considering 
that it is a bunch of links so what the insistence on self-hosting these pages stems from I am not totally sure at the present. I thus
opted to use React to write out the page, preferring the modularity of its conventional written form, with Next.js rendering it into
a static site on Vercel's servers and the cached site being served to my browser (or anyone else's) as requested. While I suppose I could 
set up some haphazard script run by my window manager at start up to generate the static site for my start page, I don't see any 
reason to prefer self-hosting in this use case and so I can let Vercel worry about that part of things, a welcome reprieve. 

2. Hero Icons provided the svg that became the background, similar to the GIMP `sinus` pattern available via the `filters>render` 
menu. Using tweo grays that are relatively close but still distinct enough to tell apart prevents the background from seeming
bland while also avoiding overdone gradients and lending depth to the interface.

3. the accent color is only employed in cases of hovering as an indicator where focus is on the page (more useful to those 
with the equivalent of 'focus follows the mouse' as I use it for purposes of indicating mouse location personally. 

4. Bootstrap in many forms - While its not as trendy as tailwinds or bulma, bootstrap's opinionated take on styling a page 
is consistent and I happen to like the way it looks, after all this startpage was written **primarily for me and thus was made in 
accordance with my personal taste solely in mind**. This startpage uses convential CDN delivered bootstrap as well as React-Bootstrap, 
a set of React components using Bootstrap 3 as a base, so that the menu could be more easily rendered using the Modal component
from the aforementioned library.   

5. **Quick Links that I find useful** Most startpages I have come across feature textual links of significant quantity on the 
initial displayed screen, even while claiming to be minimalist in character, but without any boasts of minimalism, I stripped 
all but the most common links out of the initially visible elements and consigned the rest to the modal. 