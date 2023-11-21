import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Model } from './CityBuildingModel';
import './Model3D.css'
import { useInView } from 'react-intersection-observer'

const Model3D = (props) => {
    const {ref, inView} = useInView();
    
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline();
            
            tl.from(ref.current, { opacity: 0, duration: 2, ease: "power3.inOut" })
        });
        
        return () => context.revert();
    }, [])
    
    return (
        <Canvas ref={ref} className='react-three' frameloop={inView? 'always': 'never'}>
            {/* <PerspectiveCamera makeDefault position={[Math.PI, Math.PI, Math.PI]} zoom={1} /> */}
            {/* <OrthographicCamera makeDefault position={[Math.PI/2, Math.PI/2, Math.PI]} far={100} near={-10} rotation={[10, 0, 0]} zoom={100} /> */}
            {/* <OrbitControls /> */}
            <ambientLight />
            {/* <directionalLight intensity={2} /> */}
            {/* <pointLight position={[0, 1, 0]} /> */}
            <Model beginAnim={props.beginAnim} />
            <gridHelper args={[20, 20, 0xff0000, 'teal']} />
            {/* <Stars /> */}
            {/* <Stats /> */}
            {/* <directionalLight intensity={2} castShadow={true} rotateX={10} setRotationFromAxisAngle={([1, 1, 0], 30.0)} /> */}
        </Canvas>
    )
}

export default Model3D