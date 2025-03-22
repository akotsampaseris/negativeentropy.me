import {
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

export const particlesConfig = {
  fullScreen: { 
    enable: false 
  },
  background: {
    color: {
      value: "",
    },
  },
  fpsLimit: 90,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#555",
    },
    links: {
      color: "#444",
      distance: 150,
      enable: true,
      opacity: 0.1,
      width: 5,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.bounce,
      },
      random: true,
      speed: 3,
      straight: true,
    },
    number: {
      density: {
        enable: true,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: true,
};
