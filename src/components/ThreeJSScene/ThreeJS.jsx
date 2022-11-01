import React, { Suspense } from 'react'
import { Canvas, useFrame, useLoader, useThree} from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import {OrbitControls} from '@react-three/drei'

const Scene = () => {
    const gltf = useLoader(GLTFLoader, './models/scene.gltf');
    return(
        <Suspense fallback={<h1 className='text-white text-4xl'>Loading!</h1>}>
          <primitive object={gltf.scene}/>
        </Suspense>
    )
}

const ThreeJS = ({nightMode}) => {
  return (
    <Canvas
    camera={{position:[-2,2,6], rotateOnAxis:[2,2,2], rotateY:[20]}} invalidateframeloop="true"
    colormanagement="true"
    shadowmap="true"
    gl={{ powerPreference: "high-performance", alpha: false, antialias: false, stencil: false, depth: false }}
    onCreated={({ gl }) => {
      gl.setPixelRatio(window.devicePixelRatio);
      gl.outputEncoding = THREE.sRGBEncoding;
      gl.shadowMap.type = THREE.PCFSoftShadowMap;
      gl.toneMapping = THREE.ACESFilmicToneMapping;
    }}>
      <ambientLight/>
      <color attach="background" args={[`${nightMode ? "black" : "white"}`]} />
      <pointLight intensity={1} color="red" />
      <spotLight intensity={0.2} position={[35, 70, 70]} penumbra={1} color="black" />
      <EffectComposer multisampling={0}>
        <Bloom intensity={0.2} kernelSize={2} luminanceThreshold={0} luminanceSmoothing={0.3} />
      </EffectComposer>
      <OrbitControls enableZoom={false}/>
      <Scene/>
    </Canvas>
  )
}

export default ThreeJS