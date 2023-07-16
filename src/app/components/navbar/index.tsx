"use client";
import { Saira_Stencil_One } from "next/font/google";

const StancilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Navbar() {
  const navLinks = ["Sobre mim", "Projetos", "Experiência", "Contato"];

  const renderNavLink = (content: any) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document.getElementById(scrollToId)?.scrollIntoView({
        behavior: "smooth",
      });
    };

    return (
      <ul key={content} className="flex items-center justify-around list-none ">
        <li className="ml-16 hover:bg-mouseHoverNav transition-colors duration-500 cursor-pointer rounded-full p-4">
          <button onClick={handleClickNav}>{content}</button>
        </li>
      </ul>
    );
  }

  return (
    <>
      <div>
        <div
          className={`px-32 text-white w-screen flex justify-around items-center  bg-navzin h-16`}
        >
          <div className={`${StancilOne.className} items-center text-3xl`}>
            João Archiolli
          </div>
          <nav className="flex justify-around list-none">
            {navLinks.map((nav, i) => {
              return (
                <ul
                  key={''}
                  className="flex items-center justify-around list-none "
                >
                  <a className="ml-16 hover:bg-mouseHoverNav scroll-smooth transition-colors duration-500 cursor-pointer rounded-full p-4" 
				             href={`#${i+1}`}>
                    <button >{nav}</button>
                  </a>
                </ul>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}

