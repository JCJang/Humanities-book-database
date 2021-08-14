import React from 'react'
import {useState, useEffect} from 'react'
/*referencing Christina Sohn from https://chsohn15.medium.com/integrating-google-books-embedded-viewer-api-into-a-react-app-a81fde35c14d*/
  const Test = ({bookIdentifier}) => {
     const [loaded, setLoaded] = useState(false);
     // Create alert message if book not found in Google Database
     function alertNotFound() {
         alert("could not embed the book!");
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
     useEffect(()=>{
         if (!loaded){return}
         else{
              if(window.viewer){
                 var viewer = new window.google.books.DefaultViewer
                 (document.getElementById('viewerCanvas'));
                 viewer.load(bookIdentifier, alertNotFound);
               }
               else{
                 window.google.books.load();
                 window.google.books.setOnLoadCallback(() => {
                 var viewer = new window.google.books.DefaultViewer
                     (document.getElementById('viewerCanvas'));
                 window.viewer = viewer
                 viewer.load(bookIdentifier, alertNotFound);
               })
             }
         }}, [loaded, bookIdentifier])

         return (
            <div>
                {loaded ?
                     <div>
                        <div id="viewerCanvas" style={{height:"500px",width:"400px", backgroundColor:"red"}}>dskj</div>
                     </div> :
                <h1>Script not loaded</h1>}
            </div>    )
  ;}


export default Test
