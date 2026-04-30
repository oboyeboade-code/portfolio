import { Github, Linkedin, Mail, Twitter } from "@/components/icons";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>&copy; {new Date().getFullYear()} Opeyemi Oyeboade.</p>
        <div className="socials" aria-label="Social links">
          <Github />
          <Linkedin />
          <Twitter />
          <Mail />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
