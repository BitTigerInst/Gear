Template.gallery.rendered = function () {
  var masonryNode = $('#masonry');
  masonryNode.imagesLoaded(function(){
    masonryNode.masonry({
      itemSelector: '.thumbnail',
      isFitWidth: true
    });
  });
};
