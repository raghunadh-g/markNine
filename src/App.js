import "./styles.css";
import { useState } from "react";

export default function App() {
  const [results, setResults] = useState([]);
  const [yt, setYt] = useState("Nothing");
  const topics = ["WebDevelopment", "DSAlgo", "StandupComedy"];
  const recommendations = {
    WebDevelopment: [
      {
        name: "Tanay pratap",
        rating: "5/5",
        link: "https://www.youtube.com/c/TanayPratap"
      },
      {
        name: "Web Dev Simplified",
        rating: "4/5",
        link: "https://www.youtube.com/c/WebDevSimplified"
      },
      { name: "Dev Ed", rating: "4/5", link: "https://www.youtube.com/c/DevEd" }
    ],
    DSAlgo: [
      {
        name: "Back To Back SWE",
        rating: "5/5",
        link: "https://www.youtube.com/c/BackToBackSWE"
      },
      {
        name: "mycodeschool",
        rating: "5/5",
        link: "https://www.youtube.com/c/Pepcoding"
      },
      {
        name: "Pepcoding",
        rating: "5/5",
        link: "https://www.youtube.com/channel/UClEEsT7DkdVO_fkrBw0OTrA"
      }
    ],
    StandupComedy: [
      {
        name: "Kenny Sebastian",
        rating: "5/5",
        link: "https://www.youtube.com/channel/UCzNq9i-DlDDBLjPerVzJW-A"
      },
      {
        name: "Rahul Subramanium",
        rating: "4/5",
        link: "https://www.youtube.com/channel/UC8RrHpql7M97Lqyg9J6hSww"
      },
      {
        name: "Abhishek Upmanyu",
        rating: "4/5",
        link: "https://www.youtube.com/c/AbhishekUpmanyuu"
      }
    ]
  };

  function giveSuggestions(topic) {
    let suggestions = recommendations[topic];
    setYt(topic);
    setResults(suggestions);
  }

  return (
    <div className="App">
      <div class="header">
        <h2>youtube recommendations</h2>
        <p>
          Here are some good youtube channels from my experience in each of
          these domains
        </p>
        {topics.map((topic) => {
          return (
            <button key={topic} onClick={() => giveSuggestions(topic)}>
              {topic}
            </button>
          );
        })}

        <span
          style={{
            float: "right",
            backgroundColor: "#A5B4FC",
            padding: "1rem",
            borderRadius: "0.5rem"
          }}
        >
          {yt}
        </span>
      </div>
      <hr />
      <div>
        {results.map((suggestion, index) => {
          return (
            <div className="item" key={index}>
              Channel:
              <a href={suggestion.link}>{suggestion.name}</a>
              <br />
              Rating:
              {suggestion.rating}
            </div>
          );
        })}
      </div>
    </div>
  );
}
