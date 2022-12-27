import patrocinador from "../assets/images/Grupo-7610.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="textfooter">
          {" "}
          <span>Con el patrocinio de</span>
        </div>
        <img
          className="imgFooter"
          src={patrocinador}
          alt="imagen del patrocinador"
        />
      </div>
    </>
  );
};

export default Footer;
