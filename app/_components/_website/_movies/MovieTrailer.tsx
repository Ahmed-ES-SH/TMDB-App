import React from "react";
import CloseTrailer from "../../_client/movies/CloseTrailer";
import TrailerDiv from "../../_client/movies/TrailerDiv";

interface TrailerProps {
  trailer: {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
  };
}

const MovieTrailer: React.FC<TrailerProps> = ({ trailer }) => {
  if (!trailer) {
    return;
  }
  if (trailer.site !== "YouTube") {
    return <p>Unsupported video site: {trailer.site}</p>;
  }

  const videoUrl = `https://www.youtube.com/embed/${trailer.key}`;
  const publishDate = new Date(trailer.published_at).toLocaleDateString();

  return (
    <TrailerDiv>
      <div className="w-1/2  relative mx-auto p-4 bg-gray-900 rounded-xl shadow-lg text-white">
        <CloseTrailer />
        <h2 className="text-xl font-bold mb-2">{trailer.name}</h2>
        <p className="text-sm text-gray-400 mb-4">
          {trailer.type} • {trailer.official ? "Official" : "Unofficial"} •{" "}
          {trailer.iso_3166_1} • {publishDate} • {trailer.size}p
        </p>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-md"
            src={videoUrl}
            title={trailer.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </TrailerDiv>
  );
};

export default MovieTrailer;
