import plaster from'../images/pexels-henry-&-co-1939485.jpg';
import ImageFadeIn from '../customHooks/imageFadeIn'
import { useTranslation } from 'react-i18next'


const Saved = ({xs, s, m, l, xl}) => {
  const {t, i18n} = useTranslation();

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
      textShadow:"var(--lighttextshadow)",
    }
    }
    return (


      <div className="Column body1-details" style={savedStyle()}>

      <div style={{height:m?"100vh":"var(--panelheightmobile)", width:"100vw", top:"0px", left:"0px", position:"absolute",overflow:"hidden"}}>
      <ImageFadeIn src={plaster} style={{width:"100vw",height:"100vh",objectFit:"cover"}}/>
    </div>

      <div className="noScrollBar" style={{width:"100vw",padding:"2rem",
       overflowY:"auto",position:"relative"}}>

         <div style={{maxWidth:l?"50vw":m?"85vw":"90vw",margin:"auto"}}>
         <h3 className="h3-details">Personalize the experience. Gain access to community insights.</h3>
         <h6 className="subtitle1" style={{marginLeft:m && "1.5rem"}}>Upcoming Feature: User Accounts with functionality to save shelves and/or books, write and rate book reviews, and match with book discussion partners.</h6>
         <div style={{width:"90%",margin:m?"0.5rem 0 0.5rem 1.5rem":"0.5rem 0",borderTop:"1.5px solid var(--ink)"}}></div>
         <br></br>
        As part of the UX survey for this project, I asked readers "What constitutes a good book discussion"? Qualitative answers from 29 readers fall into one or more of the categories below.
        <ul style={{margin:"1rem"}}>
        <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Perspective</p>
        Share your unique perspective (whether it be controversial or not) and opinions on the book. Debate but not to convince or persuade, but rather trade perspectives (44.8%).</li>
        <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Knowledge</p>Prerequisite of having deeper understanding of the topic and the author and the book’s structure. Share knowledge that you have about the historical context or the author (37.9%).</li>
        <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Insight</p>Make participants curious about rereading the book or see it in a new light (13.8%).</li>
        <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Reason</p>The ability to reason; systematicity (13.8%).</li>
        </ul>
        Though still subject to change, the above general guidelines will be used for moderation when it comes to community participation. If you are interested, stay tuned as this platform develops.

        Feel free to leave your email address in the 'About' page form, and I will keep you posted on major updates. Send me any feedback, ideas, or even proposals for collaboration in the said form.
        </div>

        <div style={{textAlign:"right", opacity:"0.9"}} className="body2">Photo by <a style={{color:"var(--ink)"}} className="AttributionLink" href="https://www.pexels.com/@hngstrm" target="_blank">
    Henry & Co.</a>
        </div>

        </div>
        </div>

  )
}

export default Saved
