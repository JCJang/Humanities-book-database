import React from 'react'
import {useState, useEffect} from 'react'
/*referencing Christina Sohn from https://chsohn15.medium.com/integrating-google-books-embedded-viewer-api-into-a-react-app-a81fde35c14d*/
  const GoogleBooksViewer = ({toAdd}) => {
     const [loaded, setLoaded] = useState(false);
     const [viewerId, setViewerId] = useState(false);

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

      useEffect(()=> {

        const getIsbn=(isbn)=>{
          const res = toAdd.volumeInfo.industryIdentifiers.filter(a=>a.type===isbn)
          if(res[0]!==undefined){return res[0].identifier}else{return ""}
        }
        console.log(getIsbn("ISBN_10"))

          if(getIsbn("ISBN_10").length>9){setViewerId("ISBN:"+getIsbn("ISBN_10"))}
          console.log(viewerId);
      }, [toAdd]);
     // Once Google Books has loaded, then create new instance of Default viewer and load book's information to viewer

     /* https://developers.google.com/books/docs/viewer/reference

     load(identifiers, opt_notFoundCallback, opt_successCallback)
Loads a book in the viewport.
Parameters:
string, Array of strings identifiers - A preview URL or book identifier such as an ISBN, OCLC, etc. See Dynamic Links request format. To specify several alternative identifiers for the book (e.g., the hardcover and softcover ISBNs), pass an Array of these identifier strings; the viewer will the viewer will load the first embeddable book in the array.
Function opt_notFoundCallback - If identifier is a book identifier, this callback will be called if the book was not found. If null passed or this parameter is omitted, no function will be called on failure.
Function opt_successCallback - This callback will be executed if and when the viewer is successfully instantiated with a particular book, and ready to receive function calls such as nextPage.*/


     useEffect(()=>{
       const alertNotFound = "not loading"
         if (!loaded) return
         if(!viewerId) return
         else{
              if(window.viewer){
                 var viewer = new window.google.books.DefaultViewer
                 (document.getElementById('viewerCanvas'));
                 viewer.load(viewerId, alertNotFound);
               }
               else{
                 window.google.books.load();
                 window.google.books.setOnLoadCallback(() => {
                 var viewer = new window.google.books.DefaultViewer
                     (document.getElementById('viewerCanvas'));
                 window.viewer = viewer
                 viewer.load(viewerId, alertNotFound);
               })
             }
         }}, [loaded])

         return (
            <div>
                {loaded ?
                     <div>
                        <div id="viewerCanvas" style={{height:"100vh",width:"100vw", backgroundColor:"red"}}>{viewerId}</div>
                     </div> :
                <h1>Script not loaded</h1>}
            </div>    )
  ;}


export default GoogleBooksViewer
