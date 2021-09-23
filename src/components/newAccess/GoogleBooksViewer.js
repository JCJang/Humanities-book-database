import React from 'react'
import {useEffect, useState} from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import createSvgIcon from "@material-ui/icons/utils/createSvgIcon";


const ArrowBackCircleIcon = createSvgIcon(
  <>
  <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path d="M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994c0 5.514 4.486 10 10.001 10c5.514-.001 10-4.487 10-10c0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8c.001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994c0 4.41-3.589 7.999-8 8z" fill="currentColor"/><path d="M12.012 7.989l-4.005 4.005l4.005 4.004v-3.004h3.994v-2h-3.994z" fill="currentColor"/>
  </>
  );

/*referencing Christina Sohn from https://chsohn15.medium.com/integrating-google-books-embedded-viewer-api-into-a-react-app-a81fde35c14d*/
  const GoogleBooksViewer = ({xs,s,m,l,xl,bookIdentifier,authors,authorView, displayBookTitle,columnFocus, isbnOrId,setColumnFocus, googleScriptLoaded}) => {

    const [authorBookTitle, setAuthorBookTitle] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(()=>{
      setAuthorBookTitle(displayBookTitle)
    },[bookIdentifier])

    useEffect(()=>{
      const newAuthor = authors.join(", ")
      setAuthor(newAuthor)
    },[bookIdentifier])

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
           <div style={{zIndex:"3",background:"var(--detailspanel)", position:"relative",color:"var(--detailspaneltext)",display:"flex",height:l?"var(--panelheight)":columnFocus!=="detailspanel"?"4rem":m?"var(--focusedpaneltablet)":"var(--focusedpanelmobile)", paddingTop:!m && "5rem"}}>

            <div className={l?"Row":"Column"} style={{flex:"1",position:columnFocus!=="detailspanel"?"absolute":authorView?"absolute":"relative",margin:l?"2rem 0 2rem 2rem":"",border:l?"1px solid var(--paper)":"none",visibility:columnFocus!=="detailspanel"?"hidden":authorView?"hidden":""}}>

            <div  className="Column" style={{overflow:"hidden",width:!l?"100%":"", alignItems: "center", flex:"1", display:"flex",color:"var(--paper)", justifyContent:"center",backgroundColor:"var(--detailspanel)"}}>

          {!l &&
                <span className="btn darkbtn" onClick={()=>{setColumnFocus("shelfpanel")}} style={{width:l?"6rem":"auto",display:"flex",justifyContent:"center", alignSelf:"flex-start",alignItems:"center",marginTop:"1rem",marginLeft:l?"":m?"3rem":""}}><ArrowBackCircleIcon/><span style={{width:"85%", padding:"0 0.5rem"}}>Back to Shelf</span></span>

            }
            {!l && <div style={{width:"100vw",marginTop:"1rem",borderTop:"1px solid var(--paper)"}}></div>}
            <div style={{width:l?"100%":"100vw",margin:"0.5rem 0",borderTop:"1px solid var(--paper)"}}></div>
          <div>
          <div className="subtitle1-details">{`${displayBookTitle} // By ${author}`}</div>
          </div>
          <div style={{width:l?"100%":"100vw",margin:"0.5rem 0",borderTop:"1px solid var(--paper)"}}></div>
          <div>
          <div className="overline-details" style={{margin:"1rem"}}>{displayBookTitle}</div>
          </div>

          <div style={{overflow:"hidden",position:"relative"}}>
          <div id="viewerCanvas" style={{position:columnFocus==="detailspanel"?"relative":"absolute", height:"var(--panelheight)", backgroundColor:"(var(--detailspanel))", visibility:columnFocus==="detailspanel"?"visible":"hidden", left:columnFocus==="detailspanel"?"0px":"110rem"}}>
          </div>
          </div>

          </div>
          </div>

              {l &&
                 <span className="btn darkbtn" onClick={()=>{setColumnFocus("shelfpanel")}} style={{flex:"0 0 6rem",display:columnFocus!=="detailspanel"?"none":authorView?"none":"flex", width:"6rem",justifyContent:"center", alignSelf:"flex-start",alignItems:"center",marginTop:"2rem",marginLeft:"3rem"}}><ArrowBackCircleIcon/><span style={{width:"85%", padding:"0 0.5rem"}}>Back to Shelf</span></span>
              }


              <h5 className={l?"tabbook tab-lr h5tab-l":m?"h5tab-m":"h5tab-s"} style={{width:l?"4rem":"",opacity:"0.9",cursor:columnFocus==="shelfpanel"?"pointer":"",display:l?"":columnFocus==="detailspanel"?"none":"flex",alignItems:"center",justifyContent:"space-between",padding:l?"":m?"2rem":"1.5rem"}} onClick={()=>{if(l && columnFocus==="init"){return;}else{setColumnFocus("detailspanel")}}}>
              {displayBookTitle? displayBookTitle.slice(0,45):"Book Details"}

              {columnFocus!=="detailspanel"&&
              <span className="subtitle2" style={{display:"flex",textTransform: "none"
          ,position:l?"absolute":"relative", left:l?"1rem":"", bottom:l?"0":""}}><p>expand</p><AddCircleOutlineOutlinedIcon style={{alignSelf:"center",width:"1rem",height:"1rem",marginLeft:!l&&"0.5rem",marginTop:l&&"0.5rem"}}/></span>}


              </h5>
          </div>
        )
  ;}


export default GoogleBooksViewer
