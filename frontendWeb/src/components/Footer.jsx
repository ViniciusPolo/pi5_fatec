import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";


export default function Footer() {
  return (
    <>
        <footer>
          <ul>
            <li>
              <Link to="#">Fale conosco</Link>
            </li>
            <li>
              <Link to="#">Privacidade</Link>
            </li>
            <li>
              <Link to="#">Help-Desk</Link>
            </li>
          </ul>
          <div className="redes">
            <h2>Redes Sociais</h2>
            <div className="icons">
              <Link to="#">
                <FaFacebook color="#fff" />
              </Link>
              <Link to="#">
                <FaTwitter color="#fff" />
              </Link>
              <Link to="#">
                <FaInstagram color="#fff" />
              </Link>
              <Link to="#">
                <FaYoutube color="#fff" />
              </Link>
            </div>
          </div>
        </footer>

    </>
  );
}