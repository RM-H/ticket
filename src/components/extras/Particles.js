import { useCallback } from "react";
import Particles from "react-particles";

import { loadSlim } from "tsparticles-slim";




const ParticlesBg = () => {


    const particlesInit = useCallback(async (engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);


    const option = {

        repeat:true,
        autoPlay:true,
        fpsLimit: 60,
        fullScreen: { enable: true },
        particles: {
            number: {
                value: 13
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5
            },
            size: {
                value: 400,
                random: {
                    enable: true,
                    minimumValue: 200
                }
            },
            move: {
                enable: true,
                speed: 10,
                direction: "top",
                outModes: {
                    default: "out",
                    top: "destroy",
                    bottom: "none"
                }
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                resize: true
            }
        },
        detectRetina: true,
        themes: [
            {
                name: "light",
                default: {
                    value: true,
                    mode: "light"
                },
                options: {
                    background: {
                        color: "#f7f8ef"
                    },
                    particles: {
                        color: {
                            value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
                        }
                    }
                }
            },
            {
                name: "dark",
                default: {
                    value: true,
                    mode: "dark"
                },
                options: {
                    background: {
                        color: "rgba(255,255,255,0)"
                    },
                    particles: {
                        color: {
                            value: ["#004f74", "#5f5800", "#245100", "#7d0000", "#810c00"]
                        }
                    }
                }
            }
        ],
        emitters: {
            direction: "top",
            position: {
                x: 50,
                y: 150
            },
            rate: {
                delay: 0.2,
                quantity: 2
            },
            size: {
                width: 100,
                height: 0
            }
        }
    }








    return (

      <>
          <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={
                option

          }
          />


      </>
  )
}

export default ParticlesBg;