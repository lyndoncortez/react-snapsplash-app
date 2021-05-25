import React from "react";

const Photo = ({
  urls: { regular },
  id,
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
  links: { download },
  onLike,
}) => {
  const downloadLink = `${download}?force=true`;
  return (
    <article className="photo">
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <div>
          <h6>{name}</h6>
          <p className="mb-0">{likes} likes </p>
          <a
            className="h6"
            href={downloadLink}
            download
            target="_blank"
            rel="noreferrer"
          >
            <i class="fas fa-download text-white"></i>
          </a>
          <button
            class="like-btn"
            onClick={() => {
              onLike(id);
            }}
          >
            <i
              class={`fas fa-heart mx-2 like-icon 
            ${window.location.href.indexOf("likes") > -1 && "btn-red"}`}
              id={id}
            ></i>
          </button>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt="" className="user-img" />
        </a>
      </div>
    </article>
  );
};

export default Photo;
