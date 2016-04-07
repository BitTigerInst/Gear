Template.gallery.helpers({
    photos: function () {
        return [
          { _id: 1, src: '/images/1.jpg', title: 'Blue Butterfly', team: 'Skywalker'},
          { _id: 2, src: '/images/2.jpg', title: 'Only Eye', team: 'DMK' },
          { _id: 3, src: '/images/3.jpg', title: 'Love Love Bear', team: 'LoveIsEverything' },
          { _id: 4, src: '/images/4.jpg', title: 'Dream Come True', team: 'Kaleido'},
          { _id: 5, src: '/images/5.jpg', title: 'Folllower and Butterfly', team: 'Awesome' },
          { _id: 6, src: '/images/6.jpg', title: 'Only Eye', team: 'DMK' },
          { _id: 7, src: '/images/7.jpg', title: 'Love Love Bear', team: 'LoveIsEverything' },
          { _id: 8, src: '/images/8.jpg', title: 'Dream Come True', team: 'Kaleido'},
          { _id: 9, src: '/images/9.jpg', title: 'Folllower and Butterfly', team: 'Awesome' },
          { _id: 10, src: '/images/10.jpg', title: 'Folllower and Butterfly', team: 'Awesome' },
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
