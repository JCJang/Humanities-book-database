import React from 'react'
import {useEffect} from 'react'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import AddCircleIcon from '@material-ui/icons/AddCircle'

/*referencing Christina Sohn from https://chsohn15.medium.com/integrating-google-books-embedded-viewer-api-into-a-react-app-a81fde35c14d*/
  const GoogleBooksViewer = ({bookIdentifier, displayBookTitle,columnFocus, isbnOrId,setColumnFocus, googleScriptLoaded}) => {
     // Create alert message if book not found in Google Database

     //if isbn is not working, use google id as backup.
     function alertNotFound() { console.log("preview unavailable")
}



     // Add a Google Books script tag and event listener if the tag has loaded
     /*useEffect(()=> {
        const scriptTag = document.createElement('script')
        scriptTag.src= 'https://www.google.com/books/jsapi.js'
        scriptTag.type="text/javascript"
        scriptTag.addEventListener('load', ()=>setLoaded(true))
        scriptTag.id = "google-script"
        document.body.appendChild(scriptTag);
      }, []);*/
     // Once Google Books has loaded, then create new instance of Default viewer and load book's information to viewer
     //Currently supported RFC 3066 language codes include af, ar, hy, bg, ca, zh-CN, zh-TW, hr, cs, da, nl, en, fil, fi, fr, de, el, he, hu, is, id, it, ja, ko, lv, lt, ms, no, pl, pt-BR, pt-PT, ro, ru, sr, sk, sl, es, sv, tl, th, tr, uk, and vi.

//in 'Add', the bookIdentifier loads. If it is an ISBN, this useEffect will load the static preview at the table of contents, which is the preferred method. books that do not have ISBN tags will still be loaded via their Google Books ID code, but cannot be automatically loaded at the table of contents. The isbnOrId state reveals which viewer method to call. true = ISBN, false = Google ID

     useEffect(()=>{
         if (googleScriptLoaded===true){
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
 }}
}else{console.log("loading google script")}
}, [googleScriptLoaded, isbnOrId, bookIdentifier])


         return (
           <div style={{color:"var(--detailspaneltext)",display:"flex",height:"var(--panelheight)"}}>
            <div className="Row" style={{overflow:"hidden",position:"relative"}}>
              <div id="viewerCanvas" style={{position:columnFocus==="detailspanel"?"relative":"absolute", height:"var(--panelheight)",width:"60vw", paddingLeft:"3rem",backgroundColor:"(var(--detailspanel))", visibility:columnFocus==="detailspanel"?"visible":"hidden", left:columnFocus==="detailspanel"?"0px":"110rem"}}>
              </div>
              <span className="btn darkbtn" style={{width:"6rem",display:"flex",justifyContent:"center", alignSelf:"flex-start",alignItems:"center",marginTop:"2rem",marginLeft:"3rem"}}><ArrowBackRoundedIcon/><span style={{width:"85%", padding:"0 0.5rem"}} onClick={()=>{setColumnFocus("shelfpanel")}}>Back to Shelf</span></span>
              </div>
              <h5 onClick={()=>{if(columnFocus==="init"){return;}else{setColumnFocus("detailspanel")}}}  style={{width:"4rem", alignSelf:"center", height:"70vh", writingMode:"vertical-lr", transform:"rotate(180deg)", transformOrigin:"center center"}}>
              {displayBookTitle? displayBookTitle:"Book Details"}
              {columnFocus!=="detailspanel"&&
              <span className="subtitle2" style={{textTransform: "none"
          ,position:"absolute", bottom:"4rem"}}>expand <AddCircleIcon style={{alignSelf:"center",width:"1rem",height:"1rem"}}/></span>}
              </h5>
          </div>
        )
  ;}


export default GoogleBooksViewer
