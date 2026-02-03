import React from 'react'
import Row from '../Row/Row'
import Request from '../../../Utils/Request'

import "./RowList.css"

const RowList = () => {
  return (
      <>
          <Row
              title="NETFLIX ORGINALS"
            fetchUrl={Request.fetchNetflixOriginals}
            isLargeRow={true}
          />
      <Row title="Trending Now" fetchUrl={Request.fetchTrending}/>
      <Row title="Top Related" fetchUrl={Request.fetchTopRelated}/>
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies}/>
      <Row title="Tv Movies" fetchUrl={Request.fetchTvMovies}/>
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries}/>
    
      </>
  )
}

export default RowList
