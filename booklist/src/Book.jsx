
const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.image} alt={props.alt}/>
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

export default Book;