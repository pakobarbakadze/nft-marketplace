import React from "react";
import Headline from "../../ui/Headline/Headline";

import classes from "./BrowseCategories.module.css";

import CategoryCard from "../../ui/CategoryCard/CategoryCard";

const categories = [
  { id: 0, name: "Art", img: "art.svg" },
  { id: 1, name: "Collectibles", img: "collectibles.svg" },
  { id: 2, name: "Music", img: "music.svg" },
  { id: 3, name: "Photo", img: "photography.svg" },
  { id: 4, name: "Sport", img: "sport.svg" },
  { id: 5, name: "utility", img: "utility.svg" },
  { id: 6, name: "Video", img: "video.svg" },
  { id: 7, name: "Visual Worlds", img: "visual-worlds.svg" },
];

const BrowseCategories = () => {
  return (
    <div className={classes.container}>
      <Headline>
        <h1>Browse Categories</h1>
      </Headline>
      <div className={classes.cards}>
        {categories.map((cat) => (
          <CategoryCard key={cat.id} name={cat.name} img={cat.img} />
        ))}
      </div>
    </div>
  );
};

export default BrowseCategories;
