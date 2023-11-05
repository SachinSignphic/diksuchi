/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { AxesHelper, BoxHelper } from "three";

export function Model(props) {
    const modelRef = useRef();
    const { nodes, materials } = useGLTF("/models/works.glb");

    // useHelper(modelRef, "white"); // add grid floor and shit
    // useLayoutEffect(() => {
    //     const context = gsap.context(() => {
    //         const tl = gsap.timeline();
    //         tl.from(modelRef.current, { scaleX: 0, duration: 2, ease: "expo.inOut" });
    //     });

    //     return () => context.revert();
    // })

    return (
        <group ref={modelRef} {...props} position={[0, 0, 5]} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane001.geometry}
                material={materials.Material}
                position={[-1.964, 1.663, -0.818]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.749, 1, 1.45]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Floor.geometry}
                material={materials.Material}
                position={[0, 0.127, 0]}
                scale={2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wall.geometry}
                material={materials.Material}
                position={[0, 0.127, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials.Material}
                position={[-1.716, 0.407, -1.797]}
                scale={[0.28, 0.28, 0.2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials.Material}
                position={[-1.15, 0.407, -1.797]}
                scale={[0.28, 0.28, 0.2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={materials.Material}
                position={[-1.15, 1.905, -1.797]}
                scale={[0.28, 0.28, 0.2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003.geometry}
                material={materials.Material}
                position={[-1.15, 1.037, -1.797]}
                scale={[0.28, 0.28, 0.2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004.geometry}
                material={materials.Material}
                position={[-0.582, 0.407, -1.797]}
                scale={[0.28, 0.28, 0.2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Base.geometry}
                material={materials.Material}
                position={[0, 1.627, -2]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[2, 2, 1.5]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Base001.geometry}
                material={materials.Material}
                position={[0, 0.126, -0.731]}
                scale={[0.686, 0.686, 1.029]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BaseBig.geometry}
                material={materials.Material}
                position={[0, 0.127, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mattress.geometry}
                material={materials.Material}
                position={[0, 0.313, -0.943]}
                scale={[0.676, 0.676, 1.014]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane011.geometry}
                material={materials.Material}
                position={[0, 0.127, -0.52]}
                scale={[1, 1, 0.894]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials.Material}
                position={[1.17, 1.356, -1.717]}
                scale={[0.219, 0.141, 0.219]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube005.geometry}
                material={materials.Material}
                position={[1.17, 0.657, -1.717]}
                scale={0.178}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube006.geometry}
                material={materials.Material}
                position={[1.17, 0.657, -1.717]}
                rotation={[0, 1.571, 0]}
                scale={0.178}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001.geometry}
                material={materials.Material}
                position={[1.17, 1.236, -1.766]}
                scale={[0.017, 0.011, 0.017]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube007.geometry}
                material={materials.Material}
                position={[-1.153, 0.93, -1.847]}
                rotation={[0, 0.436, 0]}
                scale={[0.075, 0.089, 0.075]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane008.geometry}
                material={materials.Material}
                position={[-1.153, 0.764, -1.847]}
                rotation={[0, 0.436, 0]}
                scale={0.083}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane009.geometry}
                material={materials.Material}
                position={[-0.306, 0.563, -1.775]}
                rotation={[0.017, 0, 0]}
                scale={[0.315, 0.153, 0.216]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane010.geometry}
                material={materials.Material}
                position={[0.318, 0.563, -1.775]}
                rotation={[0.267, 0, 0]}
                scale={[0.315, 0.153, 0.216]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere.geometry}
                material={materials.Material}
                position={[-1.425, 0.33, -1.083]}
                scale={0.222}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane002.geometry}
                material={materials.Material}
                position={[-1.442, 1.431, -0.893]}
                rotation={[1.59, 0.001, 3.138]}
                scale={[0.181, 0.181, 0.361]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane003.geometry}
                material={materials.Material}
                position={[-1.407, 1.495, -1.237]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.181, 0.181, 0.361]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane004.geometry}
                material={materials.Material}
                position={[-1.65, 1.42, -1.182]}
                rotation={[1.518, 0.219, -0.986]}
                scale={[0.159, 0.159, 0.319]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane005.geometry}
                material={materials.Material}
                position={[-1.229, 1.336, -1.205]}
                rotation={[1.582, -0.18, 0.924]}
                scale={[0.157, 0.157, 0.314]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane006.geometry}
                material={materials.Material}
                position={[-1.673, 1.244, -0.984]}
                rotation={[1.612, 0.226, -2.381]}
                scale={[0.171, 0.171, 0.343]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane007.geometry}
                material={materials.Material}
                position={[-1.142, 1.318, -0.953]}
                rotation={[1.616, -0.261, 2.096]}
                scale={[0.159, 0.159, 0.319]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials.Material}
                position={[1.653, 0.198, -1.703]}
                scale={0.174}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                material={materials.Material}
                position={[1.653, 0.359, -1.703]}
                scale={[0.164, 0.146, 0.164]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane012.geometry}
                material={materials.Material}
                position={[1.661, 0.702, -1.873]}
                scale={0.108}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane013.geometry}
                material={materials.Material}
                position={[1.523, 0.669, -1.833]}
                rotation={[0, 0.883, 0]}
                scale={0.088}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane014.geometry}
                material={materials.Material}
                position={[1.523, 0.641, -1.65]}
                rotation={[-Math.PI, 0.671, -Math.PI]}
                scale={0.105}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane015.geometry}
                material={materials.Material}
                position={[1.771, 0.679, -1.609]}
                rotation={[Math.PI, -0.708, Math.PI]}
                scale={0.105}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane016.geometry}
                material={materials.Material}
                position={[1.793, 0.636, -1.823]}
                rotation={[0, -0.864, 0]}
                scale={0.105}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane017.geometry}
                material={materials.Material}
                position={[1.609, 0.592, -1.595]}
                rotation={[-Math.PI, 0.362, -Math.PI]}
                scale={0.096}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane018.geometry}
                material={materials.Material}
                position={[1.803, 0.606, -1.713]}
                rotation={[Math.PI, -1.505, Math.PI]}
                scale={0.105}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane019.geometry}
                material={materials.Material}
                position={[-1.628, 0.198, 1.618]}
                scale={0.174}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder003.geometry}
                material={materials.Material}
                position={[-1.628, 0.359, 1.618]}
                scale={[0.164, 0.146, 0.164]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane020.geometry}
                material={materials.Material}
                position={[-1.621, 0.702, 1.448]}
                scale={0.108}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane021.geometry}
                material={materials.Material}
                position={[-1.758, 0.669, 1.488]}
                rotation={[0, 0.883, 0]}
                scale={0.088}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane022.geometry}
                material={materials.Material}
                position={[-1.758, 0.641, 1.672]}
                rotation={[-Math.PI, 0.671, -Math.PI]}
                scale={0.105}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane023.geometry}
                material={materials.Material}
                position={[-1.511, 0.679, 1.712]}
                rotation={[Math.PI, -0.708, Math.PI]}
                scale={0.105}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane024.geometry}
                material={materials.Material}
                position={[-1.489, 0.636, 1.498]}
                rotation={[0, -0.864, 0]}
                scale={0.105}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane025.geometry}
                material={materials.Material}
                position={[-1.672, 0.592, 1.726]}
                rotation={[-Math.PI, 0.362, -Math.PI]}
                scale={0.096}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane026.geometry}
                material={materials.Material}
                position={[-1.479, 0.606, 1.609]}
                rotation={[Math.PI, -1.505, Math.PI]}
                scale={0.105}
            />
        </group>
    );
}

useGLTF.preload("/models/works.glb");
