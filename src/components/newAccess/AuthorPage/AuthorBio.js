
const AuthorBio = ({selectedAuthor, getYear}) => {
  return (
    <div className="Column">
    <h5  style={{flex:"1 1"}} className="h5-details">
    {`${selectedAuthor.authorWikiTitle} ${getYear(selectedAuthor.authorBirthDate)} - ${getYear(selectedAuthor.authorDeathDate)}`}</h5>


    </div>
  )
}

export default AuthorBio
