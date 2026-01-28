import { Navbar, Work, WorkMobile, NavbarMobile } from "../components";

export default function OurWorks() {
  return (
    (navigator.userAgent.match(/Android/i)
          || navigator.userAgent.match(/webOS/i)
          || navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/iPad/i)
          || navigator.userAgent.match(/iPod/i)
          || navigator.userAgent.match(/BlackBerry/i)
          || navigator.userAgent.match(/Windows Phone/i)
      ) ? (
        <>
        <NavbarMobile />
        <WorkMobile />
        </>
      ) : (
    <>
      <Navbar />
      <Work />
    </>
      )
  );
}