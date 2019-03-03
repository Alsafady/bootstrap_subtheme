
**Drupal 8 bootstrap subtheme**


## Git Clone
In Your theme Folder

```text
git clone https://github.com/Alsafady/drupal8_bootstrap_subtheme.git
```

## Features:
- RTL bootstrap full Support.
- RTL Or LTR Custom css files
- CDN Arabic Fonts by google webfonts & fontface.me
- CDN most popularity English Fonts.
- Css Custom for Common Drupal Elements & Bootstrap.
- Links to chose your css Colors.
- CDN WOW js & Animate css Included.
- CDN Fontawesome Included.
- Contain views twig & views with machine name & page Display.
- Navbar Transition is ready.
- Slider region in frontpage is ready.
- Div With background Image ready.
- backtotop arrow ready.


## Used Libraries:
- https://cdn.rtlcss.com/bootstrap/3.3.7/css/bootstrap.min.css
- https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css
- https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js
- https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css
- https://use.fontawesome.com/releases/v5.7.2/css/all.css



```text
drupal8_bootstrap_subtheme
    ├── css/
    │   ├── custom_ltr.css
    │   ├── custom_rtl.css
    │   ├── fonts.css
    │   └── style.css
    └── js/
        └── custom.js
    ├── views-view.html.twig
    ├── html.html.twig
    ├── drupal8_bootstrap_subtheme.theme
    ├── drupal8_bootstrap_subtheme.libraries.yml
    └── drupal8_bootstrap_subtheme.info.yml
```









All animate classes That You Can use it:
- bounce
- flash
- pulse
- rubberBand
- shake
- headShake
- swing
- tada
- wobble
- jello
- bounceIn
- bounceInDown
- bounceInLeft
- bounceInRight
- bounceInUp
- bounceOut
- bounceOutDown
- bounceOutLeft
- bounceOutRight
- bounceOutUp
- fadeIn
- fadeInDown
- fadeInDownBig
- fadeInLeft
- fadeInLeftBig
- fadeInRight
- fadeInRightBig
- fadeInUp
- fadeInUpBig
- fadeOut
- fadeOutDown
- fadeOutDownBig
- fadeOutLeft
- fadeOutLeftBig
- fadeOutRight
- fadeOutRightBig
- fadeOutUp
- fadeOutUpBig
- flipInX
- flipInY
- flipOutX
- flipOutY
- lightSpeedIn
- lightSpeedOut
- rotateIn
- rotateInDownLeft
- rotateInDownRight
- rotateInUpLeft
- rotateInUpRight
- rotateOut
- rotateOutDownLeft
- rotateOutDownRight
- rotateOutUpLeft
- rotateOutUpRight
- hinge
- jackInTheBox
- rollIn
- rollOut
- zoomIn
- zoomInDown
- zoomInLeft
- zoomInRight
- zoomInUp
- zoomOut
- zoomOutDown
- zoomOutLeft
- zoomOutRight
- zoomOutUp
- slideInDown
- slideInLeft
- slideInRight
- slideInUp
- slideOutDown
- slideOutLeft
- slideOutRight
- slideOutUp
- heartBeat


you can add also:


```css
.yourElement {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}
```


Or by

```html
<section class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">

</section>

<section class="wow slideInRight" data-wow-offset="10"  data-wow-iteration="10">

</section>
```

Or added it to element in custom.js file


```js
animateCSS('.your-element', 'bounce')

// or
animateCSS('.your-element', 'bounce', function() {
  // Do something after animation
})
```



Enjoy!
