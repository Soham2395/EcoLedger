"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // slim version to minimize the bundle size
import { useCallback } from "react";
import { Engine, Container } from "tsparticles-engine";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // this is where you can add custom shapes or interact with the particles.js engine
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (!container) {
      return;
    }
    console.log(container);
  }, []);

  const options = {
    background: {
      color: {
        value: "transparent", // background color
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 200,
        },
        grab: {
          distance: 150,
        },
      },
    },
    particles: {
      color: {
        value:"#489eff", // particle color
      },
      links: {
        color: "#67dea8", // line color
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 1.0,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
  );
};

export default ParticlesComponent;
