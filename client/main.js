// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
// import { Meteor } from 'meteor/meteor';
//
// import './main.html';
//
// Meteor.startup(() => {
//   render(<App />, document.getElementById('render-target'));
//   var masonryNode = $('#masonry');
//
//   masonryNode.imagesLoaded(function(){
//     masonryNode.masonry({
//       itemSelector: '.thumbnail',
//       isFitWidth: true
//     });
//   });
// });

//////////////////////////////////////////////

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
