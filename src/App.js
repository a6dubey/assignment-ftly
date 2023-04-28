import React, { useState, useEffect } from "react";
import { Card, CardMedia, Grid, IconButton, } from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon,
} from "@mui/icons-material";

const styles = {
  rootContainer: {
    flexGrow: 1,
    margin: 16,
  },
  card: {
    height: "60vh",
  },
  media: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    minWidth: "360px",
    maxWidth: "370px",
  },
  detailsText: {
    marginTop: 8,
    display: "block",
    paddingLeft: "20px",
    color: "#757575",
    lineHeight:"1.5"
  },
  thumbnailCard: {
    cursor: "pointer",
    opacity: 0.6,
    transition: "opacity 0.2s",
  },
  thumbnailCardSelected: {
    cursor: "pointer",
    opacity: 1,
    transition: "opacity 0.2s",
  },
  thumbnailContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 16,
  },
  thumbnailWrapper: {
    width: "calc(33.333% - 1rem)",
    marginBottom: 16,
  },
  thumbnailWrapperSelected: {
    overflow: "hidden",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    cursor: "pointer",
  },

};

const App = ({ images }) => {
  // const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((currentIndex) =>
          currentIndex === images.length - 1 ? 0 : currentIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, images]);

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
    setIsPlaying(false);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
    setIsPlaying(false);
  };

  const handlePlayPauseClick = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
    <div style={styles.rootContainer}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8}>
          <Card style={styles.card}>
            <CardMedia
              style={styles.media}
              image={images[currentIndex].url}
              title={images[currentIndex].title}
            />
          </Card>

          <div style={{ marginTop: "1rem" }}>
            <IconButton onClick={handlePreviousClick}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton onClick={handlePlayPauseClick}>
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <IconButton onClick={handleNextClick}>
              <ChevronRightIcon />
            </IconButton>
          </div>
        </Grid>
        <div style={styles.detailsContainer}>
          <h2>{images[currentIndex].title}</h2>
          <div style={styles.detailsText}>{images[currentIndex].details}</div>
        </div>

        <Grid item xs={12} sm={3}>
          <div style={styles.thumbnailContainer}>
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  ...styles.thumbnailWrapper,
                  ...(index === currentIndex
                    ? styles.thumbnailWrapperSelected
                    : {}),
                }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  style={styles.thumbnail}
                  onClick={() => handleThumbnailClick(index)}
                />
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
