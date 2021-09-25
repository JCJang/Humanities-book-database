const About = ({xs, s, m, l, xl}) => {

  const aboutStyle = () =>{
    return {
    backgroundColor:"var(--ink)",
    color:"var(--paper)",
    lineHeight:"1.5",
    height:m?"100vh":"var(--panelheightmobile)",
    overflow:"hidden",
    alignItems:"center",
    justifyContent:"center",
    paddingTop:"3.5rem"
  }
  }
  return (


    <div className="Column body1-details" style={aboutStyle()}>
    <div className="noScrollBar" style={{maxWidth:l?"50vw":m?"85vw":"90vw",
      padding:"0 2rem",
     overflowY:"auto"}}>
    This platform’s goal is to answer questions. Everything is designed to reinforce this goal, and there is heavy moderation to meet this goal.
    For instance, books submitted for approval will be scrutinized for the following core qualities: Personality, Rationality, Specificity, and Systematicity.
    Personality: This person is not writing a textbook; it is a passionate argument of a person’s opinion and core beliefs.
    Rationality: this person is using facts as presented to him or her. They have tried to get perspective before making an opinion. Aka, they know what they’re talking about.
    Specificity: The book is not an overview on a topic. The author explores a particular question, and returns his or her systematic thoughts on the matter.
    In certain circumstances, for instance, if a certain piercing essay is not published alone, we might include the book on the shelf.
    Systematicity: The table of contents breaks down the core question into arguments.

    Most books in this platform will meet such criteria, but I do and will make exceptions for certain shelves. (see the shelf 'How Can One Live a Moral Life' for reference.)
    Note that most books categorized as Self-help or textbook will not make the cut.
    </div>
    </div>
  )
}

export default About
