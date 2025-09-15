import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // keep using the "slim" package to reduce bundle size

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000", // Changed to a deep blue-gray for a subtler backdrop
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Adds particles on click instead of repulse
          },
          onHover: {
            enable: true,
            mode: "bubble", // Changes hover effect to "bubble" for a fun interactive feel
          },
        },
        modes: {
          push: {
            quantity: 4, // Controls the number of particles added on click
          },
          bubble: {
            distance: 200,
            size: 8,
            duration: 2,
            opacity: 0.6,
          },
          grab: {
            distance: 150,
            line_linked: {
              opacity: 0.35,
            },
          },
        },
      },
      particles: {
        color: {
          value: ["#ff7e67", "#f3c623", "#76b3e3", "#b88cf9"], // Gradient colors for particles
          opacity: 0.3,
        },
        links: {
          color: "#ffffff",
          distance: 130,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5, // Slightly faster movement for a livelier effect
          random: false,
          outModes: {
            default: "out",
          },
        },
        number: {
          value: 50, // Adjusted the number of particles for a balanced look
          density: {
            enable: true,
            area: 600,
          },
        },
        opacity: {
          value: { min: 0.3, max: 0.8 }, // Particles have varied opacity for a more dynamic effect
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.3,
          },
        },
        shape: {
          type: "star",
        },
        size: {
          value: { min: 2, max: 8 }, // Varied particle sizes
          anim: {
            enable: true,
            speed: 2,
            size_min: 2,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
