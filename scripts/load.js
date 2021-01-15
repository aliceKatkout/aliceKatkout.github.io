
// var elem = document.querySelector('.grid');
// // var msnry = new Masonry( elem, {"columnWidth": ".grid-sizer", "itemSelector": ".grid-item", "percentPosition": "true"
// // });
//
//
//
// var imgLoad = imagesLoaded( elem, function() {
//   var msnry = new Masonry( elem, {"columnWidth": ".grid-sizer", "itemSelector": ".grid-item", "percentPosition": "true"
//   });
//   console.log('Les images sont chargées')
//   });

$(function(){
    console.log("page chargee!")
    var container= document.querySelector('.grid');
    var msnry = new Masonry( container, {"itemSelector": ".grid-item", "columnWidth": ".grid-item","percentPosition": "true"});
    var imgLoad = imagesLoaded($('.grid'));
    imgLoad.on( 'progress', function( instance, image ) {
        var result = image.isLoaded ? 'loaded' : 'broken';
        if (result === 'loaded'){
            msnry.layout();
            console.log("je rearrange la page");
        };
        console.log( 'image is ' + result + ' for ' + image.img.src );
    });
})
