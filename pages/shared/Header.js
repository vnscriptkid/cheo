import Router from "next/router";

const Header = ({
  isEnglish = true,
  onEnClick = () => {},
  onVnClick = () => {},
}) => {
  return (
    <header
      style={{
        position: "fixed",
        height: 50,
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        backgroundColor: "rgba(0,0,0, 0.5)",
        display: "flex",
        color: "white",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "'Dancing Script', cursive",
      }}
    >
      <span
        style={{
          fontSize: 30,

          paddingLeft: 30,
          cursor: "pointer",
        }}
        onClick={() => Router.push("/")}
      >
        {isEnglish ? "Home" : "Trang chủ"}
      </span>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          fontSize: 22,
          paddingRight: 20,
        }}
      >
        <li
          style={{ marginRight: 40, cursor: "pointer" }}
          onClick={() => Router.push("/about")}
        >
          {isEnglish ? "About" : "Về dự án"}
        </li>
        <li
          style={{ marginRight: 40, cursor: "pointer" }}
          onClick={() => Router.push("/yen-bai-character")}
        >
          {isEnglish ? "Yen Bai" : "Yên Bái"}
        </li>
        <li
          style={{ marginRight: 40, cursor: "pointer" }}
          onClick={() => Router.push("/hue-character")}
        >
          {isEnglish ? "Hue" : "Huế"}
        </li>
        <li
          style={{ marginRight: 40, cursor: "pointer" }}
          onClick={() => Router.push("/ninh-thuan-character")}
        >
          {isEnglish ? "Ninh Thuan" : "Ninh Thuận"}
        </li>
        <li>
          <span
            style={{ cursor: "pointer", marginRight: 5 }}
            onClick={() => onEnClick()}
          >
            <img
              src="https://flagicons.lipis.dev/flags/4x3/um.svg"
              alt="usa"
              width="30px"
              height="30px"
            />
          </span>
          <span style={{ cursor: "pointer" }} onClick={() => onVnClick()}>
            <img
              src="https://flagicons.lipis.dev/flags/4x3/vn.svg"
              alt="vietnam"
              width="30px"
              height="30px"
            />
          </span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
