import blackMarble from'../images/pexels-tirachard-kumtanom-450055.jpg';
import ImageFadeIn from '../customHooks/imageFadeIn'
import {useState, useEffect} from 'react';
import Axios from 'axios'

const About = ({xs, s, m, l, xl}) => {

  const [email, setEmail] =  useState("")
  const [name, setName] =  useState([])
  const [comment, setComment]= useState("")
  const [preventResubmitComment, setPreventResubmitComment] = useState(false)


    const validateComment = (e)=>{
      e.preventDefault();
      if(!email && !comment){
        alert("Either the email or comment form is left blank.");
        return;
      }
      if(preventResubmitComment===false){
      postComment()
      setPreventResubmitComment(true)
    }else{
      return;
    }
    }

    useEffect(()=>{
    setPreventResubmitComment(false)
  }, [comment])



    function postComment(){
      Axios.post("https://humanities-book.herokuapp.com/suggestliteraturebook",{
        bookTitle:"COMMENT",
        bookAuthor:name,
        publicationLanguage:email,
        earliestPublicationYear:0,
        recommendationReason:comment
      })
      console.log("posted new comment");

    }


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


        <div className="Column body1-details" style={aboutStyle()}>

        <div style={{height:m?"100vh":"var(--panelheightmobile)", opacity:"0.8",width:"100vw", top:"0px", left:"0px", position:"absolute",overflow:"hidden"}}>
        <ImageFadeIn src={blackMarble} style={{width:"100vw",height:"100vh",objectFit:"cover"}}/>
      </div>

        <div className="noScrollBar" style={{opacity:"0.8",width:"100vw",padding:"2rem",
         overflowY:"auto",position:"relative"}}>

     <div style={{maxWidth:l?"50vw":m?"85vw":"90vw",margin:"auto"}}>
     <h3 className="h3-details">What makes a good book?</h3>
     <div style={{width:"90%",margin:m?"0.5rem 0 0.5rem 1.5rem":"0.5rem 0",borderTop:"1.8px solid var(--paper)"}}></div>
     <br></br>
    This platform’s goal is to <em>answer questions</em>. Humanities books submitted for approval will thus be scrutinized for the following core qualities: Personality, Rationality, Specificity, and Systematicity.
    <ul style={{margin:"1rem"}}>
    <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Personality</p> The work is a passionate argument of the authors opinions and core beliefs.</li>
    <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Rationality</p> this person is using facts as presented to him or her. They have gained much perspective and absorbed a variety of opinions before presenting a position.</li>
    <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Specificity</p> The work is not an overview on a topic. The author explores a particular in-depth question, and returns his or her systematic thoughts on the matter.</li>
    <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Systematicity</p> The author breaks down the argument into its logical components. Usually reflected in the table of contents.</li>
    </ul>
    Most books in this platform will meet the above criteria, but I do and will make exceptions for certain shelves. (see the shelf 'How Can One Live a Moral Life' for reference.) Note that most books categorized as Self-help or textbook will not make the cut.
    <br></br>
    <br></br>You can dispute my selection criteria below. I would argue that my criteria does not apply to history books, and would greatly appreciate your opinion as to what constitutes a good history book.


    <div className="form-section-suggest" style={{color:"var(--paper)", boxShadow:"none",backgroundColor:"transparent"}}>
      <h4 className="h4">Leave a comment</h4>
      <div className="subtitle1" style={{textTransform: "none",
margin:"2rem 0"}}>
      Humanities Database is in its beta version, and is still subject to bugs and UX flaws. Help me build the platform by submitting comments, bug reports, inconsistencies, or any other kind of feedback below.</div>
      <label htmlFor="name">Your Name:</label>
      <input className="form-control" type="text" id="name" value={name}
       onChange={(e)=>setName([e.target.value])} placeholder="Your name or nickname"/>
       <label htmlFor="email">Email:</label>
       <input className="form-control"  type="text" id="email" value={email}
        onChange={(e)=>setEmail(e.target.value)} placeholder="Leave your email and I will keep you posted on major updates."/>
        <label htmlFor="comment">Comment:</label>
        <textarea className="form-control" type="text" rows="10" id="comment" value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Your comment"/>
        <input  className="btn darkbtn" type="submit" style={{margin:"3rem", width:"100%", backgroundColor:preventResubmitComment?"var(--inactive)":"var(--darkactionbtn)", color:preventResubmitComment?"var(--shelfpanellistborder)":"var(--darkactionbtntext)",boxShadow:preventResubmitComment?"none":"var(--heavyshadow)"}} onClick={(e)=>{validateComment(e)}} value="Submit Comment"/>
        </div>
      </div>
      <div style={{textAlign:"right", opacity:"0.9"}} className="body2"> Photo by <a className="AttributionLink" href="https://www.pexels.com/@tirachard-kumtanom-112571" target="_blank">Tirachard Kumtanom</a>
      </div>
    </div>

    </div>
  )
}

export default About
