var youtube = document.querySelectorAll( ".youtube" );

// loop
for (var i = 0; i < youtube.length; i++) {
 
    // thumbnail image source.
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg"; 

    // Load the image asynchronously
    var image = new Image();
        image.src = source;
        image.addEventListener( "load", function() {
            youtube[ i ].appendChild( image );
        }( i ) );
        image.setAttribute("class", "lazyload");
        image.setAttribute("alt","Placeholder picture of the video");

        youtube[i].addEventListener( "click", function() {
 
            var iframe = document.createElement( "iframe" );
     
                iframe.setAttribute( "frameborder", "0" );
                iframe.setAttribute( "allowfullscreen", "" );
                iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
                iframe.setAttribute("class", "lazyload");
     
                this.innerHTML = "";
                this.appendChild( iframe );
        } );
 
}