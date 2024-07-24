
import { Canvas } from '@react-three/fiber'
import Box from './Box'
import * as THREE from 'three'
import { OrbitControls, Stats } from '@react-three/drei'

function App() {

  return (
    <>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <directionalLight position={[1, 1, 1]} />
        <Box
          position={[-0.75, 0, 0]}
          name="A"
          material={new THREE.MeshBasicMaterial()}
        />
        <Box
          position={[0.75, 0, 0]}
          name="B"
          material={new THREE.MeshNormalMaterial()}
        />
        <Box
          position={[0.3, 0, 0]}
          name="C"
          material={new THREE.MeshPhongMaterial()}
        />
        <Box
          position={[-0.3, 0, 0]}
          name="C"
          material={new THREE.MeshStandardMaterial()}
        />

        <OrbitControls />
        <axesHelper args={[1]} />
        <Stats />
      </Canvas>
    </>
  )
}

export default App
