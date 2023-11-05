import { OrbitControls, OrthographicCamera, Stats } from '@react-three/drei';
import './HouseModel.css';
import { Canvas } from '@react-three/fiber';
import { Model } from './House3DModel';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const HouseModel = () => {
    const canvasRef = useRef();
    
    
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline();
            
            tl.from(canvasRef.current, { opacity: 0, duration: 2, ease: "power3.inOut" })
        });

        return () => context.revert();
    })
    
    return (
        <Canvas ref={canvasRef} className='react-three'>
            {/* <PerspectiveCamera makeDefault position={[Math.PI, Math.PI, Math.PI]} zoom={1} /> */}
            <OrthographicCamera makeDefault position={[Math.PI/2, Math.PI/2, Math.PI]} far={100} near={-10} rotation={[10, 0, 0]} zoom={100} />
            <OrbitControls />
            <Model />
            <gridHelper args={[20, 20, 0xff0000, 'teal']} />
            {/* <cameraHelper /> */}
            <Stats />
            {/* <directionalLight intensity={2} castShadow={true} rotateX={10} setRotationFromAxisAngle={([1, 1, 0], 30.0)} /> */}
        </Canvas>
    )
}

export default HouseModel