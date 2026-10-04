// import React from 'react'
// import Row from '../Row/Row'
// import Request from '../../../Utils/Request'

// import "./RowList.css"

// const RowList = () => {
//   return (
//       <>
//           <Row
//               title="NETFLIX ORGINALS"
//             fetchUrl={Request.fetchNetflixOriginals}
//             isLargeRow={true}
//           />
//       <Row title="Trending Now" fetchUrl={Request.fetchTrending}/>
//       <Row title="Top Related" fetchUrl={Request.fetchTopRelated}/>
//       <Row title="Action Movies" fetchUrl={Request.fetchActionMovies}/>
//       <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies}/>
//       <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies}/>
//       <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies}/>
//       <Row title="Tv Movies" fetchUrl={Request.fetchTvMovies}/>
//       <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries}/>
    
//       </>
//   )
// }

// export default RowList

import React from 'react';
import Row from '../Row/Row';
import requests from "../../../Utils/Requests";

const RowList = () => {
    return (
        <div className="rowList">
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="TV Shows" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
};

export default RowList;