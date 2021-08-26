import {useState} from 'react'

const SearchForm = ({type,placeholder,onSearch, setLanguageSetting, languageSetting, results}) => {
  const [title, setTitle] =  useState('the')
  const [author, setAuthor] =  useState('beauvoir')
  const [isbn, setIsbn] =  useState('')
  const [previewFilter, setPreviewFilter] = useState(true)

  const validateForm = (e)=>{
    console.log("submitted");
    e.preventDefault();

    if(!title&&!author&&!isbn){
      alert("please enter a query");
      return;
    }

    const querify=(x)=>{
    return x.split(" ")
    .join("+")
    .toLowerCase()}

    const titleStr = querify(title);
    const authorStr = querify(author);
    console.log(titleStr,authorStr);

    onSearch(titleStr,authorStr,isbn,previewFilter)
  }
  return (
    <div>
    <h5 className="SearchCaption" style={{font:results?"var(--main-overline)":"var(--main-headline4)", textTransform: results?`uppercase`:'', letterSpacing: results? `0.375rem`:''}}>Search database to autofill suggestion</h5>

    <form onSubmit={(e)=>validateForm(e)} id="SearchForm" className="form-section">

    <label htmlFor="title">Title:</label>
    <input className="form-control" type="text" id="title" value={title}
     onChange={(e)=>setTitle(e.target.value)} placeholder="book title"/>
     <label htmlFor="author">Author(s):</label>
     <input className="form-control" type="text" id="author" value={author}
      onChange={(e)=>setAuthor(e.target.value)} placeholder="book author"/>
      <label htmlFor="isbn">Isbn:</label>
      <input className="form-control" type="number" id="isbn" value={isbn}
       onChange={(e)=>setIsbn(e.target.value)} placeholder="isbn"/>
       <label htmlFor="languageSetting">search language:</label>
       <select className="form-control" id="languageSetting" value={languageSetting}
        onChange={(e)=>setLanguageSetting(e.target.value)} placeholder="toggles auto input settings">
        <option value="en">English</option>
        <option value="zh-tw">Traditional Chinese</option>
        <option value="zh-cn">Simplified Chinese</option>
        <option value="ar">Arabic</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="ja">Japanese</option>
        <option value="it">Italian</option>

        </select>

    </form>
    <div style={{display:"flex"}}>
    <input type="checkbox" style={{alignSelf:"center", marginRight:"1rem",width:"1.5rem",height:"1.5rem"}} form="SearchForm" id="previewFilter" onClick={()=>setPreviewFilter(!previewFilter)} value="previewFilter" checked={previewFilter}/>
    <label htmlFor="previewFilter" className="subtitle1">only display results with preview available</label>
    <input type="submit" form="SearchForm" className="btn" value="Search"/>
    </div>

    </div>
  )
}

export default SearchForm
