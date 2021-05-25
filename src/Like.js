import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Photo from "./Photo";

const userURL = `https://api.unsplash.com/users/lyndoncortez/likes`;

function Like() {
  const [likes, setLikes] = useState([]);
  const [profile, setProfile] = useState({});

  const fetchLikes = () => {
    let userLikeUrl = `${userURL}`;
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    };
    Axios.all([
      Axios.get(userLikeUrl, config),
      Axios.get("https://api.unsplash.com/me", config),
    ])
      .then(
        Axios.spread((res1, res2) => {
          setLikes(res1.data);
          setProfile(res2.data);
        })
      )
      .catch(console.log);
  };

  const dislikeImage = (id) => {
    const likeURL = `https://api.unsplash.com/photos/${id}/like`;
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    };

    document.getElementById(id).classList.remove("btn-red");
    Axios.delete(likeURL, config).then(console.log).catch(console.log);
  };

  useEffect(() => {
    fetchLikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar className="py-1 mb-5">
        <Navbar.Brand>
          <a className="logo" href="/">
            <i class="fas fa-camera-retro text-dark"></i>
          </a>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link className="text-dark">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/likes">
            <Nav.Link className="text-dark">Likes</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
      <Container className="text-center">
        {profile.profile_image && (
          <Image src={profile.profile_image.large} roundedCircle />
        )}
        <h2 className="mt-3">LYNDON JOY CORTEZ</h2>
        <hr />
      </Container>
      <section className="photos">
        <div className="photos-center">
          {likes.map((image, index) => {
            return <Photo key={index} {...image} onLike={dislikeImage} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Like;
