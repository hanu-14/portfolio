import { Canvas } from '@react-three/fiber'
import { NeuralNetwork } from './NeuralNetwork'
import { ParticleField } from './ParticleField'

export function Scene() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <NeuralNetwork />
        <ParticleField count={400} speed={0.1} />
      </Canvas>
    </div>
  )
}
