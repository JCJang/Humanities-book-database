import blackMarble from'../images/pexels-tirachard-kumtanom-450055.jpg';
import ImageFadeIn from '../customHooks/imageFadeIn'


const About = ({xs, s, m, l, xl}) => {

  const aboutStyle = () =>{
        return {
        backgroundColor:"var(--ink)",
        color:"var(--paper)",
        lineHeight:"2",
        height:m?"100vh":"var(--panelheightmobile)",
        overflow:"hidden",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:m?"3.5rem":"",
      }
      }
      return (


        <div className="Column body2-details" style={aboutStyle()}>

        <div style={{height:m?"100vh":"var(--panelheightmobile)", width:"100vw", top:"0px", left:"0px", position:"absolute",overflow:"hidden"}}>
        <ImageFadeIn src={blackMarble} style={{width:"100vw",height:"100vh",objectFit:"cover"}}/>
      </div>

        <div className="noScrollBar" style={{width:"100vw",padding:"2rem",
         overflowY:"auto",position:"relative"}}>

     <div style={{maxWidth:l?"50vw":m?"85vw":"90vw",margin:"auto"}}>
     <h3 className="h3-details">What makes a good book?</h3>
     <div style={{width:"90%",margin:"0.5rem 0",borderTop:"1.5px solid var(--paper)"}}></div>
     <br></br>
    This platform’s goal is to <em>answer questions</em>. Humanities books submitted for approval will thus be scrutinized for the following core qualities: Personality, Rationality, Specificity, and Systematicity.
    <ul style={{margin:"1rem"}}>
    <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Personality</p> The work is a passionate argument of the authors opinions and core beliefs.</li>
    <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Rationality</p> this person is using facts as presented to him or her. They have gained much perspective and absorbed a variety of opinions before presenting a position.</li>
    <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Specificity</p> The work is not an overview on a topic. The author explores a particular in-depth question, and returns his or her systematic thoughts on the matter.</li>
    <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Systematicity</p> The author breaks down the argument into its logical components. Usually reflected in the table of contents.</li>
    </ul>
    Most books in this platform will meet the above criteria, but I do and will make exceptions for certain shelves. (see the shelf 'How Can One Live a Moral Life' for reference.)
    Note that most books categorized as Self-help or textbook will not make the cut.
    </div>
    </div>
    </div>
  )
}

export default About
