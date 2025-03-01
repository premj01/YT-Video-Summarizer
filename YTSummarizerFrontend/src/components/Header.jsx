import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

// export const AcmeLogo = () => {
//   return (
//     <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
//       <path
//         clipRule="evenodd"
//         d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
//         fill="currentColor"
//         fillRule="evenodd"
//       />
//     </svg>
//   );
// };

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="24" viewBox="0 0 48 32" width="48">
      {/* Black background with white rounded border */}
      <rect
        width="48"
        height="31"
        rx="16"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />
      {/* White play button */}
      <path d="M19 10L29 16L19 22V10Z" fill="white" />
    </svg>
  );
};

export default function Header() {
  const menuItems = ["Home", "Our Team", "Help & Feedback", "Clear"];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <span className="material-symbols-outlined  ">video_library</span>
          <p
            className="font-bold text-inherit work-sans-font"
            style={{ paddingLeft: "20px" }}
          >
            YouTube Video Summarizer
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" color="warning" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
         <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> 
      </NavbarContent> */}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
