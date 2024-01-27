// eslint-disable-next-line no-unused-vars
import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesCertificados from './particlesCertificados.json';


const ParticlesCertificados = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesCertificados}
            />
        </div>
    );
};

export default ParticlesCertificados;