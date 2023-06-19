import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const repositories = [
  {
    name: "Proyectos",
    id: "projects",
  },
  {
    name: "Contáctame",
    id: "contactme",
  },
];

const Header = () => {
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      zIndex={1000}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav className="nav">
            {/* Add social media links based on the `socials` data */}
            {socials.map((social, index) => (
              <a key={social.url} href={social.url} className="link">
                <FontAwesomeIcon id={social.icon} icon={social.icon} />
              </a>
            ))}
          </nav>
          <nav className="nav justify-end">
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              {repositories.map((repo, index) => (
                <button
                  key={repo.id}
                  type="button"
                  className="link repository"
                  onClick={() => handleClick(repo.id)}
                >
                  {repo.name}
                </button>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
