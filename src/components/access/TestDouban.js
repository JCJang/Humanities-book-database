import {useState, useEffect} from 'react'
/*referencing Christina Sohn from https://chsohn15.medium.com/integrating-google-books-embedded-viewer-api-into-a-react-app-a81fde35c14d*/

 const TestDouban = () => {
     // Create alert message if book not found in Google Database

     const {loaded, setLoaded} = useState(false);
     const {data, setData} = useState(false);

     // Add a Google Books script tag and event listener if the tag has loaded
     const loadDouban=()=>{
        try{
          console.log("running")
       const loadShelf = async()=>{
         const work = await fetch("https://api.feelyou.top/isbn/9787506380263",{method: 'GET', headers:{'content-Type':'application/json','apikey':'0b2bdeda43b5688921839c8ecb20399b'}})
         const data = await work.json();
         console.log(data);
         if(data){setData(data); setLoaded(true)}
       }}catch(err){
         console.log('error occurs at: '+err.stack);
       }finally{
         console.log('did run loadDouban')
       }
      }
      loadDouban();

         return (
            <div>
                <h1>{loaded? data:"not working"}</h1>
            </div>    )
  ;}


export default TestDouban
