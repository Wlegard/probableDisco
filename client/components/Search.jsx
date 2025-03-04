import React, { createContext, useContext, useActionState, useState, useEffect } from "react";
import axios  from 'axios'

const searchDeezer = query => {
  axios
    .get(`https://api.deezer.com/search?q=${query}`)
    .then(data => {
      console.log('successfully queried deezer', data[0]);
      return data;
    })
    .catch(err => {
      console.error('deezer query failed', err);
    });
};

function Search({}) {
  // useActionState for form data
  const [state, formAction] = useActionState(fn, initialState, permalink);

  // context for the form
  const FormContext = createContext();
  // custom hook to use form context
  const useForm = () => {
    return useContext(FormContext);
  };
  // form provider component
  const FormProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState({
      artist: '',
      song: '',
      album: '',
    });
    const handleInputChange = (e) => {
      const { artist, value } = e.target;
    }
  }; 
  const ArtistContext = createContext(null)
  const SongContext = createContext(null)
  const AlbumContext = createContext(null)

  const artist = useContext(ArtistContext);
  const song = useContext(SongContext);
  const album= useContext(AlbumContext);


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  return (
    <div className='advanced-search'>
      <h1> Advanced Search </h1>
      <div className='search-container'>
        <form action={ formAction }>
          <ArtistContext.Provider value={artist} >
            <input class='create-input' placeholder='Artist'></input>
          </ArtistContext.Provider>
          <SongContext.Provider value={song}>
            <input class='create-input' placeholder='Song'></input>
          </SongContext.Provider>
          <AlbumContext.Provider value={album}>
            <input class='create-input' placeholder='Album'></input>
          </AlbumContext.Provider>
          <button class='submit-button' type='submit'>
            {' '}
            🔎
          </button>
        </form>
      </div>
      <div className='results-container'>
        <div className='result'></div>
      </div>
    </div>
  );
};
export default Search;
