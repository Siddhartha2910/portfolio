import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home section", link: "#hero" },
  { label: "About", ariaLabel: "Go to about section", link: "#about" },
  { label: "Projects", ariaLabel: "Go to projects section", link: "#projects" },
  { label: "Experience", ariaLabel: "Go to experience section", link: "#experience" },
  { label: "Skills", ariaLabel: "Go to skills section", link: "#skills" },
  { label: "Contact", ariaLabel: "Go to contact section", link: "#contact" },
];

function MobileMenu() {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      displayItemNumbering
      displaySocials={false}
      menuButtonColor="#ffffff"
      openMenuButtonColor="#ffffff"
      changeMenuColorOnOpen={false}
      colors={["#ffffff", "#ffffff"]}
      accentColor="#000000"
      isFixed={true}
      showLogo={false}
      closeOnClickAway
    />
  );
}

export default MobileMenu;
