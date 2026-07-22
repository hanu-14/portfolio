import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Node {
  position: THREE.Vector3
  velocity: THREE.Vector3
}

function createNodes(count: number, spread: number): Node[] {
  const nodes: Node[] = []
  for (let i = 0; i < count; i++) {
    nodes.push({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
      ),
    })
  }
  return nodes
}

export function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null)
  const nodeCount = 80
  const spread = 12

  const nodes = useMemo(() => createNodes(nodeCount, spread), [])
  const nodePositions = useMemo(() => new Float32Array(nodeCount * 3), [])
  const connections: [number, number][] = useMemo(() => {
    const conns: [number, number][] = []
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position)
        if (dist < 4) {
          conns.push([i, j])
        }
      }
    }
    return conns
  }, [])

  const lineVertices = useMemo(() => {
    const verts: number[] = []
    for (const [i, j] of connections) {
      verts.push(
        nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
        nodes[j].position.x, nodes[j].position.y, nodes[j].position.z,
      )
    }
    return new Float32Array(verts)
  }, [])

  useFrame(() => {
    if (!groupRef.current) return

    for (let i = 0; i < nodeCount; i++) {
      const node = nodes[i]
      node.position.add(node.velocity)

      if (Math.abs(node.position.x) > spread / 2) node.velocity.x *= -1
      if (Math.abs(node.position.y) > spread / 2) node.velocity.y *= -1
      if (Math.abs(node.position.z) > spread / 2) node.velocity.z *= -1

      nodePositions[i * 3] = node.position.x
      nodePositions[i * 3 + 1] = node.position.y
      nodePositions[i * 3 + 2] = node.position.z
    }

    groupRef.current.rotation.y += 0.0005
    groupRef.current.rotation.x += 0.0002

    const geom = groupRef.current.children[0] as THREE.Points
    if (geom.geometry.attributes.position) {
      geom.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute args={[nodePositions, 3]} attach="attributes-position" />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#dc2626"
          transparent
          opacity={0.6}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute args={[lineVertices, 3]} attach="attributes-position" />
        </bufferGeometry>
        <lineBasicMaterial
          color="#dc2626"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  )
}
