const Banner = ({ url, isEnglish, enText, viText }) => {
  return (
    <div style={{ position: "relative", textAlign: "center", color: "white" }}>
      <img
        width="100%"
        src={url}
        alt="opening"
        style={{ verticalAlign: "middle" }}
      />
      {/* <h1
            style={{
              position: "absolute",
              top: "5%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: 30,
              fontFamily: "'Dancing Script', cursive",
            }}
          >
            <span className="love love--small">&#9829;</span>
            Future Rising Fellowship
            <span className="love love--small">&#9829;</span>
          </h1> */}

      <h2
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 50,
        }}
      >
        {isEnglish ? enText : viText}
      </h2>
    </div>
  );
};

export default Banner;
