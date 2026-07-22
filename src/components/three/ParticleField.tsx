import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleFieldProps {
  count?: number
  color?: string
  speed?: number
}

export function ParticleField({ count = 600, color = '#dc2626', speed = 0.15 }: ParticleFieldProps) {
  const mesh = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [count])

  const colorArray = useMemo(() => {
    const c = new Float32Array(count * 3)
    const col = new THREE.Color(color)
    for (let i = 0; i < count; i++) {
      const variant = col.clone().multiplyScalar(0.5 + Math.random() * 0.5)
      c[i * 3] = variant.r
      c[i * 3 + 1] = variant.g
      c[i * 3 + 2] = variant.b
    }
    return c
  }, [count, color])

  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * speed * 0.1
    mesh.current.rotation.y += delta * speed * 0.15
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
        <bufferAttribute args={[colorArray, 3]} attach="attributes-color" />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
