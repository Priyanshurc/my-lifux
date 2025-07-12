// File: src/components/InteractiveMaskedParticles.jsx

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const InteractiveMaskedParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        detectRetina: true,
        fpsLimit: 60,
        background: {
          color: { value: "#01161E" },
          image: "url('https://particles.js.org/images/background3.jpg')",
          size: "cover",
          repeat: "no-repeat",
          position: "50% 50%",
          opacity: 1
        },
        backgroundMask: {
          enable: true,
          composite: "destination-out",
          cover: {
            color: { value: "#01161E" },
            opacity: 1
          }
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: {
              enable: true,
              delay: 0.5
            }
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 10,
              opacity: 1
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#EFF6E0"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: false
            }
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: false
            }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out"
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#AEC3B0",
            opacity: 0.4,
            width: 1
          }
        }
      }}
    />
  );
};

export default InteractiveMaskedParticles;
