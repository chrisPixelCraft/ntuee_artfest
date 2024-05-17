// NavBar.tsx
import React from "react";
import styled from "styled-components";
import FB from "../images/fb.png";
import IG from "../images/ig.png";
import { useState } from "react";
import { Link } from "react-router-dom";

// Styled components
const Navbar = styled.nav`
  width: calc(100%);
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 100000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2dvw;
`;

const NavSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 0 0 0 5dvw;
  // @media screen and (max-width: 768px) {
  //   width: 100vw;
  // }

  // @media screen and (max-width: 400px) {
  //   width: 10vw;
  // }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Futura", sans-serif;
  color: #333;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    width: 30%;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 450px) {
    width: 30%;
    font-size: 1rem;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuItem = styled.a`
  color: #333;
  text-decoration: none;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #666;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    height: 2px;
    content: "";
    display: block;
    background: #000;
    transition: all 0.3s;
  }
  @media (max-width: 510px) {
    font-size: 0.8rem;
  }
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
  @media (max-width: 415px) {
    font-size: 0.6rem;
  }
`;

const MenuItemButton = styled.button`
  color: #333;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #666;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    height: 2px;
    content: "";
    display: block;
    justify-content: center;
    align-items: center;
    background: #000;
    transition: all 0.45s ease-in;
  }
  @media (max-width: 510px) {
    font-size: 0.8rem;
  }
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
  @media (max-width: 415px) {
    font-size: 0.6rem;
  }
`;

interface IProps {
  // message: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

// Component
const NavBar: React.FC<IProps> = ({ handleClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* <Navbar role="navigation">
        <NavContainer>
          <NavSubContainer>
            <Logo href="/">NTUEE Artfest</Logo> */}
      {/* <Span/> */}
      {/* <Menu>
              <MenuItem href="/visit">來去逛逛</MenuItem>
              <MenuItem href="/introductions">本屆作品</MenuItem> */}
      {/* <MenuItem href="/news">最新消息</MenuItem> */}
      {/* <MenuItem href="/about">關於我們</MenuItem>
              <MenuItemButton onClick={handleClick}>聯絡資訊</MenuItemButton>
            </Menu>
          </NavSubContainer>
        </NavContainer>
      </Navbar> */}

      <header className="bg-yellow-306 text-white p-2 font-futura fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-4xl hover:text-gray-200">
            <h1 className="sm:p-1 p-2 ">NTUEE Artfest</h1>
          </Link>
          {/* Hamburger menu button for mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {/* Desktop Menu */}
          <nav className={`mobile sm:flex items-center`}>
            <Link
              to="/visit"
              className="text-lg text-white p-2 hover:text-gray-200 font-microsoft"
            >
              來去逛逛
            </Link>
            <Link
              to="/introductions"
              className="text-lg text-white p-2 hover:text-gray-200 font-microsoft"
            >
              本屆作品
            </Link>
            <Link
              to="/about"
              className="text-lg text-white p-2 hover:text-gray-200 font-microsoft"
            >
              關於我們
            </Link>
            <a
              href="https://www.instagram.com/ntuee_artfest?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
              className="text-white p-2 hover:grayscale"
            >
              <img src={IG} alt="Instagram icon" className="h-11 w-8" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100082950921250"
              className="text-white p-2 hover:grayscale"
            >
              <img src={FB} alt="Facebook icon" className="h-9 w-7" />
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-yellow-307 text-white p-2 bg-opacity-40 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full">
            <Link
              to="/"
              className="text-4xl mb-8 hover:text-gray-200 font-futura"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              NTUEE Artfest
            </Link>
            <Link
              to="/visit"
              className="text-4xl mb-8 hover:text-gray-200 font-microsoft"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              來去逛逛
            </Link>
            <Link
              to="/introductions"
              className="text-4xl mb-8 hover:text-gray-200 font-microsoft"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              本屆作品
            </Link>
            <Link
              to="/about"
              className="text-4xl mb-8 hover:text-gray-200 font-microsoft"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              關於我們
            </Link>
            <div className="flex justify-between items-center">
              <a
                href="https://www.instagram.com/ntuee_artfest?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                className="text-white p-2 hover:grayscale"
              >
                <img src={IG} alt="Instagram icon" className="h-11 w-8" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100082950921250"
                className="text-white p-2 hover:grayscale"
              >
                <img src={FB} alt="Facebook icon" className="h-9 w-7" />
              </a>
            </div>
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              {/* Close Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
