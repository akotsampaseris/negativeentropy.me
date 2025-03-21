"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions
} from "@tsparticles/engine";
import { loadFull } from "tsparticles"; 

import { particlesConfig } from "./particles";

const ParticleContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => (particlesConfig),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="fixed top-0 -z-10 h-[100vh]"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticleContainer