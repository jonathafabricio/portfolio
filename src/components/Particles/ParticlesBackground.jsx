// eslint-disable-next-line no-unused-vars
import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './particlesConfig.json';


const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesConfig}
            />
        </div>
    );
};

export default ParticlesBackground;