import plaster from'../images/pexels-henry-&-co-1939485.jpg';
import dog from '../images/pexels-samson-katt-5257587.jpg';
import ImageFadeIn from '../customHooks/imageFadeIn'


const Saved = ({xs, s, m, l, xl}) => {

  const savedStyle = () =>{
      return {
      backgroundColor:"#e6e6e6",
      color:"var(--ink)",
      lineHeight:"2",
      height:m?"100vh":"var(--panelheightmobile)",
      overflow:"hidden",
      alignItems:"center",
      justifyContent:"center",
      paddingTop:m?"3.5rem":"",
    }
    }
    return (


      <div className="Column body2-details" style={savedStyle()}>

      <div style={{height:m?"100vh":"var(--panelheightmobile)", width:"100vw", top:"0px", left:"0px", position:"absolute",overflow:"hidden"}}>
      <ImageFadeIn src={plaster} style={{width:"100vw",height:"100vh",objectFit:"cover"}}/>
    </div>

      <div className="noScrollBar" style={{width:"100vw",padding:"2rem",
       overflowY:"auto",position:"relative"}}>

         <div style={{maxWidth:l?"50vw":m?"85vw":"90vw",margin:"auto"}}>
         <h3 className="h3-details">Personalize the experience. Be part of the community.</h3>
         <h6 className="subtitle1">Upcoming Feature: User Accounts with functionality to save shelves and/or books, write and rate book reviews, and match with book discussion partners.</h6>
         <div style={{width:"90%",margin:"0.5rem 0",borderTop:"1.5px solid var(--ink)"}}></div>
         <br></br>
        As part of the UX survey for this project, I asked readers "What constitutes a good book discussion"? Qualitative answers from 29 readers fall into one or more of the categories below.
        <ul style={{margin:"1rem"}}>
        <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Perspective</p>
        Share your unique perspective (whether it be controversial or not) and opinions on the book. Debate but not to convince or persuade, but rather trade perspectives (44.8%).</li>
        <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Knowledge</p>Prerequisite of having deeper understanding of the topic and the author and the book’s structure. Share knowledge that you have about the historical context or the author (37.9%).</li>
        <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Insight</p>Make participants curious about rereading the book or see it in a new light (13.8%).</li>
        <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Reason</p>The ability to reason; systematicity (13.8%).</li>
        </ul>
        </div>
        </div>
        </div>

  )
}

export default Saved
