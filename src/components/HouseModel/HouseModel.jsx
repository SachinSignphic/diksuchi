import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import './HouseModel.css';
import { Canvas } from '@react-three/fiber';
import { Model } from './House3DModel';

const HouseModel = () => {
    return (
        <Canvas  className='react-three'>
            <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={120} />
            <OrbitControls />
            <Model />
            {/* <directionalLight intensity={2} castShadow={true} rotateX={10} setRotationFromAxisAngle={([1, 1, 0], 30.0)} /> */}
        </Canvas>
    )
}

export default HouseModel