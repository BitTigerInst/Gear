Template.gallery.helpers({
    photos: function () {
        return [
          { _id: 1, src: '/images/1.jpg', title: 'Blue Butterfly'},
          { _id: 2, src: '/images/2.jpg', title: 'Only Eye' },
          { _id: 3, src: '/images/3.jpg', title: 'Love Love Bear' },
          { _id: 4, src: '/images/4.jpg', title: 'Dream Come True' },
          { _id: 5, src: '/images/5.jpg', title: 'Folllower and Butterfly' },
        ];
    }
});

Template.gallery.rendered = function () {
  var masonryNode = $('#masonry');
  masonryNode.imagesLoaded(function(){
    masonryNode.masonry({
      itemSelector: '.thumbnail',
      isFitWidth: true
    });
  });
};
