const Saved = ({xs, s, m, l, xl}) => {

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
     User Accounts with functionality to save shelves and/or books are in the works.
    </div>
    </div>
  )
}

export default Saved
