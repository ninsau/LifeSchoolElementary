import type { NextPage } from "next";

const VideoComponent: NextPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-12 px-4 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <video controls width="100%" height="500" autoPlay>
          <source
            src="https://res.cloudinary.com/deyudesls/video/upload/v1649805697/samples/people/1ec0870d-f0df-4fd8-8720-e14bbb2d59d6_flktl3.webm"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/deyudesls/video/upload/v1649805697/samples/people/1ec0870d-f0df-4fd8-8720-e14bbb2d59d6_flktl3.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default VideoComponent;
