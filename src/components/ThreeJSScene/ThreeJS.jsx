import React, { Suspense } from 'react'

import { useFrame, Canvas, useLoader} from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import {Html, OrbitControls} from '@react-three/drei'

const Scene = ({nightMode}) => {
    const gltf = useLoader(GLTFLoader, './scene.gltf');
    let sin = 0;
    useFrame(state=>{
      state.camera.rotation.y = Math.sin(Math.sin(sin)/8);
      state.camera.position.z += Math.sin(Math.sin(sin)/500);
      sin += 0.004;
    })

    return(
        <Suspense fallback={<div className={`text-4xl text-center ${nightMode ? "text-white" : "text-black"}`}>Loading...</div>}>
          <primitive object={gltf.scene}/>
        </Suspense>
    )
}

const ThreeJS = ({nightMode}) => {
  return (
    <Canvas
    camera={{position:[-1,2,6]}} invalidateframeloop="true"
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
      <pointLight intensity={1.5} color="red" position={[35, 70, 70]}/>
      <spotLight intensity={1} position={[35, 70, 70]} penumbra={1} color="black" />
      <EffectComposer multisampling={0}>
        <Bloom intensity={0.2} kernelSize={2} luminanceThreshold={0} luminanceSmoothing={0.3} />
      </EffectComposer>
      <Scene nightMode={nightMode}/>
    </Canvas>
  )
}

export default ThreeJS