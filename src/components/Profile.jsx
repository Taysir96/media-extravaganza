import React, { useState } from 'react'

function Profile() {

    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

        const uploadImage = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
          
            reader.onload = (e) => {
              setImage(e.target.result);
            };
          
            reader.readAsDataURL(file);
          };

          const handleVideoUpload = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
        
            reader.onload = (e) => {
              setVideo(e.target.result);
            };
        
            reader.readAsDataURL(file);
          };
          
  return (
    <div>
        <form>
        <div class="form-group">
        <label for="image">Image</label>
        <input type="file"
         class="form-control"
          id="image" 
          aria-describedby="image"
          onChange={uploadImage} />

        </div><br />
        <div class="form-group">
        <label for="video">Video</label>
        <input type="file"
         class="form-control"
          id="video" 
          aria-describedby="video"
          onChange={handleVideoUpload}
          />
        </div>
        </form><br />
      <br />
    {image && <img src={image} alt="uploaded image" width="300px"/>}

    <br /><br />

    {video && (
        <video width="300" height="300" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
    </div>
  )
}

export default Profile