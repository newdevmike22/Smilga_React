import Book from './Book';

import './App.css';

const App = () => {
  const books = [
    { image: "https://m.media-amazon.com/images/I/81whDkK97UL._AC_UL640_FMwebp_QL65_.jpg", alt: "Star Wars Novel", title: "Dark Disciple: Star Wars", author: "Christie Golden"},
    { image: "https://m.media-amazon.com/images/I/91gw-jP5URL._AC_UL640_FMwebp_QL65_.jpg", alt: "Star Wars Novel", title: "Star Wars Jedi: Battle Scars", author: "Sam Maggs"},
    { image: "https://m.media-amazon.com/images/I/81aVGvBmE2L._AC_UL640_FMwebp_QL65_.jpg", alt: "Star Wars Novel", title: "Star Wars: Darth Plagueiss", author: "James Luceno"},
    { image: "https://m.media-amazon.com/images/I/810TAz16jzL._AC_UL640_FMwebp_QL65_.jpg", alt: "Star Wars Novel", title: "Star Wars: Ahsoka", author: "E. K. Johnston"},
    { image: "https://m.media-amazon.com/images/I/81q1y+UROrL._AC_UL640_FMwebp_QL65_.jpg", alt: "Star Wars Novel", title: "Star Wars: Inquisitor: Rise of the Red Blade", author: "Delilah S. Dawson"},
    { image: "https://m.media-amazon.com/images/I/81uvEjGmsCL._AC_UL640_FMwebp_QL65_.jpg", alt: "Star Wars Novel", title: "Star Wars: Shadow of the Sith", author: "Adam Christopher"},
  ]
  return (
    <>
    <h1 className='name'>Star Wars Novels</h1>
    <p className='subtitle'>Amazon Best Sellers</p>
    <section className='booklist'>
      {books.map((book, key) => {
        return <Book image={book.image} alt={book.alt} title={book.title} author={book.author}/>
      })}
    </section>
    </>
  )
}

export default App;
