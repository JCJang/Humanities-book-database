import React from 'react'
import {useState, useEffect} from 'react'
/*referencing Christina Sohn from https://chsohn15.medium.com/integrating-google-books-embedded-viewer-api-into-a-react-app-a81fde35c14d*/
  const Test = ({bookIdentifier, isbnOrId}) => {
     const [loaded, setLoaded] = useState(false);
     // Create alert message if book not found in Google Database

     //if isbn is not working, use google id as backup.
     function alertNotFound() { alert("preview unavailable")
}



     // Add a Google Books script tag and event listener if the tag has loaded
     useEffect(()=> {
        const scriptTag = document.createElement('script')
        scriptTag.src= 'https://www.google.com/books/jsapi.js'
        scriptTag.type="text/javascript"
        scriptTag.addEventListener('load', ()=>setLoaded(true))
        scriptTag.id = "google-script"
        document.body.appendChild(scriptTag);
      }, []);
     // Once Google Books has loaded, then create new instance of Default viewer and load book's information to viewer
     //Currently supported RFC 3066 language codes include af, ar, hy, bg, ca, zh-CN, zh-TW, hr, cs, da, nl, en, fil, fi, fr, de, el, he, hu, is, id, it, ja, ko, lv, lt, ms, no, pl, pt-BR, pt-PT, ro, ru, sr, sk, sl, es, sv, tl, th, tr, uk, and vi.

//in 'Add', the bookIdentifier loads. If it is an ISBN, this useEffect will load the static preview at the table of contents, which is the preferred method. books that do not have ISBN tags will still be loaded via their Google Books ID code, but cannot be automatically loaded at the table of contents. The isbnOrId state reveals which viewer method to call. true = ISBN, false = Google ID

     useEffect(()=>{
         if (!loaded){return}
 if (isbnOrId === true) {

  if (window.viewer) {
    var viewer = new window.google.books.DefaultViewer(document.getElementById('viewerCanvas'));
    viewer.load(`https://books.google.com/books?vid=ISBN${bookIdentifier}&printsec=toc`, alertNotFound);
  } else {
    window.google.books.load({     "language": "en"    });
    window.google.books.setOnLoadCallback(() => {
      var viewer = new window.google.books.DefaultViewer(document.getElementById('viewerCanvas'));
      window.viewer = viewer
      viewer.load(`https://books.google.com/books?vid=ISBN${bookIdentifier}&printsec=toc`, alertNotFound);
    })
  }

} else {
  if(window.viewer){
     var viewer = new window.google.books.DefaultViewer
     (document.getElementById('viewerCanvas'));
     viewer.load(bookIdentifier, alertNotFound);
   }
   else{

     window.google.books.load({"language": "en"});
     window.google.books.setOnLoadCallback(() => {
     var viewer = new window.google.books.DefaultViewer
         (document.getElementById('viewerCanvas'));
     window.viewer = viewer
     viewer.load(bookIdentifier, alertNotFound);
   })
 }
}
       }, [loaded, bookIdentifier])


         return (
            <div>
                {loaded ?
                     <div>
                        <div id="viewerCanvas" style={{height:"500px",width:"400px", backgroundColor:"red"}}>loading</div>
                     </div> :
                <h1>Script not loaded</h1>}
            </div>)
  ;}


export default Test
