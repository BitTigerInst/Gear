#Problem!!!

Firstly, install the library we need

`meteor npm install --save react react-dom react-masonry-component`

The meteor version I need is the latest one __1.3.1__ which seems to be not back-compatible.

Within the file `imports/ui/App.jsx` (used by `client/main.jsx` to render), I follow the codes on the section [__Basic usage__](https://github.com/eiriklv/react-masonry-component).

Based on my understanding, the part I modified is to use __getImages()__ for __json file__.

It should work, but nothing shown and no errors.

```js
var React = require('react');
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: 0
};

export default class App extends Component {
    getImages() {
      return [
        { _id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/8/81/2012_Suedchinesischer_Tiger.JPG' },
        { _id: 2, src: 'https://upload.wikimedia.org/wikipedia/commons/8/81/2012_Suedchinesischer_Tiger.JPG' },
        { _id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/8/81/2012_Suedchinesischer_Tiger.JPG' },
      ];
    }
    render() {
        var childElements = this.getImages().map(function(element){
           return (
                <li className="image-element-class">
                    <img src={element.src} />
                </li>
            );
        });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
            >
                {childElements}
            </Masonry>
        );
    }
}

```
