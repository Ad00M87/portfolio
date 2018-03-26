import React from 'react';

const Thumbnail = ({ images, chosenImage }) => {
    return(
      <div style={styles.thumbnail}>
        { images.map( image => {
          return(
            <img
              src={image.pic}
              style={styles.image}
              onClick={() => chosenImage(image.id)}
            />
          )
        })}
      </div>
    )
}

const styles = {
  thumbnail: {
    display: 'flex',
  },
  image: {
    height: '100px',
    width: '200px',
  },
}

export default Thumbnail;
