import Footer from "./components/footer/Footer.jsx";
import Card from "./components/body/card/Card.jsx";
import Buttons from "./components/body/buttons/Button.jsx";
import Speakers from "./components/body/speakers/Speakers.jsx";
import Header from "./components/header/Header.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

import './app.css';
import {getAuthors,getQas} from "./api.js";
import  { useState,useEffect } from 'react';

function App() {  
  const [authors, setAuthors] = useState([]);
  const [qas, setQas] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedAuthor, setSelectedAuthor] = useState("Zac Poonen");


  useEffect(() => {
    const fetchInitialData = async () => {
      await getAuthors();
      setAuthors(JSON.parse(localStorage.getItem('commons')).data.authors);
      
      await getQas();
      const initialQas = JSON.parse(localStorage.getItem('qas')).data;
      setQas(initialQas);
      setDataSource(initialQas);
    };

    fetchInitialData();
  }, []);
     

      function calculateTimeDifference(startTime, endTime) {
        // Convert start and end time to arrays of [HH, MM, SS]
        const startParts = startTime.split(':').map(Number);
        const endParts = endTime.split(':').map(Number);
    
        // Calculate the total seconds for both start and end times
        const startTotalSeconds = startParts[0] * 3600 + startParts[1] * 60 + startParts[2];
        const endTotalSeconds = endParts[0] * 3600 + endParts[1] * 60 + endParts[2];
    
        // Calculate the difference in total seconds
        let differenceInSeconds = endTotalSeconds - startTotalSeconds;
    
        // Calculate minutes and seconds from the difference in seconds
        const minutes = Math.floor(differenceInSeconds / 60);
        const seconds = differenceInSeconds % 60;
    
        // Format the result as "X mins Y secs"
        let formattedTime = `${minutes} mins`;
        if (seconds > 0) {
            formattedTime += ` ${seconds} secs`;
        }
        return formattedTime;
    }
    
    const fetchMoreData = async () => {
      try {
        const response = await fetch(`https://cfc-study-app.adlaiapp.com/apis/qas/?page=${page + 1}&author__name=${selectedAuthor}`);
        const newData = await response.json();
  
        if (newData.data.length === 0) {
          setHasMore(false);
          return;
        }
  
        setDataSource((prevDataSource) => [...prevDataSource, ...newData.data]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("Error fetching more data:", error);
        setHasMore(false);
      }
    };
    const handleAuthorChange = async (authorName) => {
      setSelectedAuthor(authorName);
      setPage(1);
      setHasMore(true);
  
      const response = await fetch(`https://cfc-study-app.adlaiapp.com/apis/qas/?author__name=${authorName}`);
      const filteredData = await response.json();
      setDataSource(filteredData.data);
    };
    
  return (
    <div className="App">      
      <Header/>
      <div class = "container-fluid mid-section" >
          <Buttons/> 
          <Speakers authors = {authors}
                    onAuthorSelect={handleAuthorChange}/>        
          <p class = "para">Questions & Answers</p>
      </div>
      <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
          endMessage={<p>Your all set!</p>}
        >
           {dataSource.map((data) => (
            <Card 
              key={data.attributes.id}
              title={data.attributes.title}
              time={calculateTimeDifference(data.attributes.start_time, data.attributes.end_time)}
              author={data.attributes.author.name}
              thumbnail={data.attributes.author.image_url}
              theme={data.attributes.author.theme}
              image={data.attributes.author.thumbnail_image_url}
            />
          ))}
         </InfiniteScroll>
      <Footer/>           
    </div>
  );
}
export default App;
