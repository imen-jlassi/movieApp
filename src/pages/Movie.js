import React ,{useState} from 'react'



  
const Movie=()=> {
  const [movie,setMovie]=useState([
     
  
     
    {
      title: "fantastic four",
       year: "2019",
     image: "https://i.annihil.us/u/prod/marvel/i/mg/c/70/6214fa8b6fb7c/portrait_uncanny.jpg",
      type: "action",
      rating: 7,
      id: 1,
      
    },
    {
      title: "kang the conqueror",
     year: "2017",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/9/10/6214fabe3b079/portrait_uncanny.jpg",
      type: "dramma",
      rating: 5,
      id: 2,
      
    },
    {
      title: "black panther",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/e/40/6214fac04cabb/portrait_uncanny.jpg",
      year: "2018",
      type: "Romance",
      rating: 4,
      id: 3,
      
     
    },
    {
      title: "moon knight",
       year: "2020",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/6/60/6151f8dbc7604/portrait_uncanny.jpg",
      type: "dramma",
      rating: 9,
      id: 4,
      
    },
    {
      title: "the darkhold",
      year: "2019",
     image: "https://i.annihil.us/u/prod/marvel/i/mg/6/b0/6214fa8b78a84/portrait_uncanny.jpg",
      type: "Action",
      rating: 7,
      id: 5,
      
    },
  
   
    {
      title: "shang-chi ",
     year: " 2021",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/3/70/6214fa8b81645/portrait_uncanny.jpg",
      type: "Romance",
      rating: 9,
      id: 6,
      
    },
    {
      title: "chost rider ",
     year: " 2020",
     image: "https://i.annihil.us/u/prod/marvel/i/mg/d/80/620179658241d/portrait_uncanny.jpg",
     type: "Action",
     rating: 8,
      id: 7,
      
    },
    {
      title: "x deaths ",
     year: " 2019",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/4/03/62017952b7c70/portrait_uncanny.jpg",
      type: "Romance",
      rating: 3,
      id: 8,
      
    },
    {
      title: "carnage forever",
     year: " 2020",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/2/40/61b2391a1d410/portrait_uncanny.jpg",
      type: "dramma",
      rating: 5,
      id: 9,
      
    },
    {
      title: "silk",
     year: " 2020",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/5/e0/61b238a45a3c6/portrait_uncanny.jpg",
      type: "Action",
      rating: 5,
      id: 9,
      
    },
    {
      title: "ben reilly",
     year: " 2020",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/6/b0/6201556a7fef8/portrait_uncanny.jpg",
      type: "dramma",
      rating: 5,
      id: 9,
      
    },
    {
      title: "devil reing",
     year: " 2020",
      image: "https://i.annihil.us/u/prod/marvel/i/mg/5/10/6201554a2c0ab/portrait_uncanny.jpg",
      type: "Romance",
      rating: 5,
      id: 9,
      
    },
    
])

return (
<div className="text-center">
<form class="d-flex">
<input class="form-control" type="search" placeholder="Search" aria-label="Search" />
</form>
<br></br>
<h1>Our Films</h1>
<div className='container'>
  
<div className='row'>
{
 movie.map((el,key)=>(
   <div className='col-3'key={key}>
     <br></br>
  <div class="card">
    
  <img src={el.image} class="card-img-top" alt="..."/>
  <div class="card">
    <h5 class="card-tit">{el.title}</h5>
    <p class="card-tex">{el.type}</p>
    <p class="card-tex">{el.rating}</p>
    <p class="card-tex">{el.year}</p>
    <a href="#" class="btn btn-primary">Watch Now</a>
  </div>
</div>
</div>

   ))
 }
</div>

</div>
<br></br>
</div>


  )}

  export default Movie