 (function($b){

 	 $b('.carousel').carousel({
 	 	      left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
 	 });

     
$b('.carousel').ready(function(){
        $b(".carousel-item").animate({slide: '5000'});
    });

     $b('.parallax').parallax();
     b$('.scrollspy').scrollSpy();

     $b('.fixed-action-btn').floatingActionButton({
     	 toolbarEnabled: false,
     	 hoverable: true
     });
 
})(jQuery);
