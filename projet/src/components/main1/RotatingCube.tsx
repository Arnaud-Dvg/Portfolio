import { motion } from "framer-motion";

// Version Mobile
const cubesMobile = [
    { id: 1, className: "top-48 left-10", delay: 0 },
    { id: 2, className: "top-182 right-4", delay: 0.5 },
    { id: 3, className: "top-215 left-4", delay: 1 },
    { id: 4, className: "top-335 right-4", delay: .05 },
    { id: 5, className: "top-573 left-10", delay: 1 },
    { id: 6, className: "top-670 right-4", delay: 1 },
];

// Version Tablette MD
const cubesTablette = [
    { id: 1, className: "top-48 left-150", delay: 0 },
    { id: 2, className: "top-130 right-165", delay: 0.5 },
    { id: 3, className: "top-215 left-160", delay: 1 },
    { id: 4, className: "top-335 right-150", delay: .05 },
    { id: 5, className: "top-420 left-170", delay: 1 },
    { id: 6, className: "top-565 right-125", delay: 1 },
    { id: 7, className: "top-710 left-162", delay: 1 },
];

// Version Desktop LG
const cubesDesktopLg = [
    { id: 1, className: "top-48 left-190", delay: 0 },
    { id: 2, className: "top-125 left-18", delay: 0.5 },
    { id: 3, className: "top-215 right-40", delay: 1 },
    { id: 4, className: "top-335 left-50", delay: .05 },
    { id: 5, className: "top-420 right-20", delay: 1 },
    { id: 6, className: "top-535 left-23", delay: 1 },
    { id: 7, className: "top-670 right-30", delay: 1 },
];

// Version Desktop XL
const cubesDesktopXl = [
    { id: 1, className: "top-48 right-65", delay: 0 },
    { id: 2, className: "top-125 left-25", delay: 0.5 },
    { id: 3, className: "top-215 right-55", delay: 1 },
    { id: 4, className: "top-335 left-65", delay: .05 },
    { id: 5, className: "top-420 right-40", delay: 1 },
    { id: 6, className: "top-535 left-45", delay: 1 },
    { id: 7, className: "top-670 right-45", delay: 1 },
];

function RotatingCube() {
    return (
        <div>
            {/* Version Mobile */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 md:hidden lg:hidden"
            >
                {cubesMobile.map((cubesMobile) => (
                    <motion.div
                        key={cubesMobile.id}
                        className={`
            absolute w-10 h-10
            rounded-[0.75rem] 
            border-2 border-secondary/60
            rotate-45
            ${cubesMobile.className}
            shadow-[0_0_15px_rgba(92,225,230,0.7)]
          `}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 12,       // vitesse de rotation
                            repeat: Infinity,   // tourne en boucle
                            ease: "linear",
                            delay: cubesMobile.delay,  // petit décalage entre les cubes
                        }}
                    />
                ))}
            </div>
            {/* Version Tablette MD*/}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 hidden md:block lg:hidden xl:hidden"
            >
                {cubesTablette.map((cubesTablette) => (
                    <motion.div
                        key={cubesTablette.id}
                        className={`
            absolute w-16 h-16
            rounded-[0.75rem] 
            border-2 border-secondary/60
            rotate-45
            ${cubesTablette.className}
            shadow-[0_0_15px_rgba(92,225,230,0.7)]
          `}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 12,       // vitesse de rotation
                            repeat: Infinity,   // tourne en boucle
                            ease: "linear",
                            delay: cubesTablette.delay,  // petit décalage entre les cubes
                        }}
                    />
                ))}
            </div>
            {/* Version Desktop LG*/}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 hidden lg:block xl:hidden "
            >
                {cubesDesktopLg.map((cubesDesktopLg) => (
                    <motion.div
                        key={cubesDesktopLg.id}
                        className={`
            absolute w-16 h-16
            rounded-[0.75rem] 
            border-2 border-secondary/60
            rotate-45
            ${cubesDesktopLg.className}
            shadow-[0_0_15px_rgba(92,225,230,0.7)]
          `}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 12,       // vitesse de rotation
                            repeat: Infinity,   // tourne en boucle
                            ease: "linear",
                            delay: cubesDesktopLg.delay,  // petit décalage entre les cubes
                        }}
                    />
                ))}
            </div>
            {/* Version Desktop XL*/}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 hidden xl:block"
            >
                {cubesDesktopXl.map((cubesDesktopXl) => (
                    <motion.div
                        key={cubesDesktopXl.id}
                        className={`
            absolute w-16 h-16
            rounded-[0.75rem] 
            border-2 border-secondary/60
            rotate-45
            ${cubesDesktopXl.className}
            shadow-[0_0_15px_rgba(92,225,230,0.7)]
          `}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 12,       // vitesse de rotation
                            repeat: Infinity,   // tourne en boucle
                            ease: "linear",
                            delay: cubesDesktopXl.delay,  // petit décalage entre les cubes
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default RotatingCube;
