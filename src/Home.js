import React, { useState, useEffect, useRef } from "react";

function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    let handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const Home = () => {
  const scrollContainer = useRef();
  const body = useRef();
  const size = useWindowSize();

  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    scrollContainer.current.style.height = `${body.current.scrollHeight}px`;
  }, [size.width]);

  //   Request animation frame for
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //   Update the scroll container height after each image load
  const onLoad = () => {
    scrollContainer.current.style.height = `${body.current.scrollHeight}px`;
  };

  const skewScrolling = () => {
    //  Set the curernt scroll and update previous scroll
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    // variables
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / window.innerWidth;
    const velocity = +acceleration;
    const skew = velocity * 15;

    // Translate body container
    body.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div className="container">
      <p>Page Scroll Animation</p>
      <div ref={body} className="body">
        <div className="image-container w-1">
          <img
            onLoad={onLoad}
            rel="preload"
            as="image"
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="image1"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1497942304796-b8bc2cc898f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="image2"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1513366645412-82c70bbf235a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1002&q=80"
            alt="image3"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/flagged/photo-1551373916-bdaddbf4f881?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            alt="image4"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1508930175694-ea32dca8cc79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="image5"
          />
        </div>

        <div className="image-container">
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1508004526072-3be43a5005f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="image6"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1532490389938-2856e3f1560a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="image7"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1542441456238-e2895e2b7230?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="image8"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1539975611936-f0d1221cfd16?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
            alt="image9"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1515169273894-7e876dcf13da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="image10"
          />
        </div>

        <div className="image-container h-4">
          <img
            onLoad={onLoad}
            rel="preload"
            as="image"
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1495187688099-c521bd609dcc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80"
            alt="image11"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1525466986799-c2be8644fc1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="image12"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1551373884-8a0750074df7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="image13"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1543248939-ff40856f65d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
            alt="image14"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="image15"
          />
        </div>

        <div className="image-container w-3">
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1510505710893-29cf1cad2d33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=978&q=80"
            alt="image16"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1531012804729-7df44b58327b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1337&q=80"
            alt="image17"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1511700324-a228e5571feb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=687&q=80"
            alt="image18"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1513187235015-817efe8fc5b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="image19"
          />
          <img
            onLoad={onLoad}
            imagesizes="50vw"
            src="https://images.unsplash.com/photo-1509566393488-f7eb8dfc1a1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            alt="image20"
          />
        </div>
      </div>
      <div ref={scrollContainer} className="scroll-container"></div>
      <footer className="footer">
        <h5>Built & Design by Tim</h5>
        <a href="https://github.com/liemnguyen0111/react-skew-scrolling-031621" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </footer>
    </div>
  );
};

export default Home;
