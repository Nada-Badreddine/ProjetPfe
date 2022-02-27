import React from 'react'
import "./test.css"
const Test = () => {

let imagePlaceholder = document.querySelector('#defaultImage');
let images = document.querySelectorAll('[class^="onClickImage"]');
images.forEach( image => {
  image.addEventListener('click', () => {
    imagePlaceholder.src = image.src;
  });
});
  return (
    <div>
    
<img id="defaultImage" src="https://dummyimage.com/400x150/000/fff.jpg&text=default" />
<img className="onClickImage0" src="https://dummyimage.com/400x150/000/fff.jpg&text=default" />
<img className="onClickImage1" src="https://dummyimage.com/400x150/000/fff.jpg&text=1" />
<img className="onClickImage2" src="https://dummyimage.com/400x150/000/fff.jpg&text=2" />
<img className="onClickImage3" src="https://dummyimage.com/400x150/000/fff.jpg&text=3" />
<img className="onClickImage4" src="https://dummyimage.com/400x150/000/fff.jpg&text=4" />
<img className="onClickImage5" src="https://dummyimage.com/400x150/000/fff.jpg&text=5" />
<img className="onClickImage6" src="https://dummyimage.com/400x150/000/fff.jpg&text=6" />
<img className="onClickImage7" src="https://dummyimage.com/400x150/000/fff.jpg&text=7" />
    
    </div>
  )
}

export default Test