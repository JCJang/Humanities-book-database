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
    paddingTop:"3.5rem",
  }
  }
  return (


    <div className="Column body2-details" style={aboutStyle()}>
    <div className="noScrollBar" style={{maxWidth:l?"50vw":m?"85vw":"90vw",opacity:"0.9",
      padding:"2rem",
     overflowY:"auto"}}>
    This platform’s goal is to <em>answer questions</em>. Humanities books submitted for approval will thus be scrutinized for the following core qualities: Personality, Rationality, Specificity, and Systematicity.
    <ul style={{margin:"1rem"}}>
    <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Personality:</p> The work is a passionate argument of the authors opinions and core beliefs.</li>
    <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Rationality:</p> this person is using facts as presented to him or her. They have tried to get perspective before making an opinion.</li>
    <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Specificity:</p> The work is not an overview on a topic. The author explores a particular question, and returns his or her systematic thoughts on the matter.</li>
    <li className="body1-details" style={{margin:"1rem"}}><p style={{letterSpacing:"0.8px"}} className="h6-details">Systematicity:</p> The table of contents breaks down the core question into arguments.</li>
    </ul>
    Most books in this platform will meet such criteria, but I do and will make exceptions for certain shelves. (see the shelf 'How Can One Live a Moral Life' for reference.)
    Note that most books categorized as Self-help or textbook will not make the cut.
    </div>
    </div>
  )
}

export default About
