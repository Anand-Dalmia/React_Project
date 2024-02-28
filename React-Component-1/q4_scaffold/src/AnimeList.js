import { Component } from "react";
import AnimeCard from "./AnimeCard"; // Import AnimeCard component

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    // Destructure the anime array from props
    const { anime } = this.props;
    return <div className="anime-list">
      {/* Map the anime list recieved through props and pass the details to the Animecard component*/}
      {anime.map((animeItem, index) => (
          <AnimeCard
            key={index} // Assign a unique key for each AnimeCard
            name={animeItem.name} // Pass name prop to AnimeCard
            image={animeItem.image} // Pass image prop to AnimeCard
          />
        ))}
    </div>;
  }
}

export default AnimeList;
