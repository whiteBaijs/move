;(function($){
    $.extend($.fn,
    {
        abc: function(){
            this.html("abc");
           // console.info("Abc");
        // `this` refers to the current Zepto collection.
        // When possible, return the Zepto collection to allow chaining.
        // return
        //     this.html('bar');
        }
    })
  })(Zepto)