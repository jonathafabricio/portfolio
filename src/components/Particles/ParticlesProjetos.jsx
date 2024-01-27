// eslint-disable-next-line no-unused-vars
import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesProjetos from './particlesProjetos.json';

const ParticlesProjetos = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesProjetos}
            />
        </div>
    );
};

export default ParticlesProjetos;
