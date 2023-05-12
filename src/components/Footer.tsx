import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="footer-container">
      <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>{" "}
    </div>
  );
};

export default Footer;
