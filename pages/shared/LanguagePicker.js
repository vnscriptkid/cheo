export const LanguagePicker = ({ onVnClick, onEnClick }) => {
  return (
    <div style={{ position: "fixed", right: 10, top: 10, zIndex: 100 }}>
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
    </div>
  );
};
