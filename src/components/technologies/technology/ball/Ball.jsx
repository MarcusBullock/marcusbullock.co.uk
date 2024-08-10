/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from '@react-three/drei';
import Loader from './loader/Loader';

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.3]} />
            <mesh castShadow receiveShadow scale={2}>
                <icosahedronGeometry args={[1, 2]} />
                <meshStandardMaterial
                    color="#7a7878"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                    castShadow
                />
                <Decal
                    scale={0.8}
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    flatShading
                    castShadow
                    map={decal}
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
                <OrbitControls enableZoom={false} position0={0} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
