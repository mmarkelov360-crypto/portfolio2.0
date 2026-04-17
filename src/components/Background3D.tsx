// src/components/Background3D.tsx
'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TorusKnot, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Анимированный торус-кнот
function AnimatedKnot() {
  const knotRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (knotRef.current) {
      const t = clock.getElapsedTime()
      knotRef.current.rotation.x = Math.sin(t * 0.2) * 0.3
      knotRef.current.rotation.y = t * 0.15
      knotRef.current.rotation.z = Math.cos(t * 0.15) * 0.1
    }
  })

  return (
    <TorusKnot
      ref={knotRef}
      args={[1, 0.35, 128, 32]}
      position={[0, 0, 0]}
      scale={1.8}
    >
      <meshStandardMaterial
        color="#5d5964"
        emissive="#202020"
        emissiveIntensity={0.3}
        roughness={0.1}
        metalness={1}
        wireframe={false}
      />
    </TorusKnot>
  )
}

// Парящие частицы для глубины
function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(300 * 3)
    for (let i = 0; i < 300; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.05
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#fcfbff"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

// Проволочный икосаэдр для слоёв
function WireframeGeo() {
  const geoRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (geoRef.current) {
      geoRef.current.rotation.x = -clock.getElapsedTime() * 0.1
      geoRef.current.rotation.y = clock.getElapsedTime() * 0.08
    }
  })

  return (
    <mesh ref={geoRef}>
      <icosahedronGeometry args={[2.5, 1]} />
      <meshBasicMaterial
        color="#bebebe"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 5]} intensity={0.8} color="#818cf8" />
        <pointLight position={[-8, -5, -3]} intensity={0.5} color="#c084fc" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={0.7}
          intensity={0.6}
          color="#ffffff"
        />

        <group position={[0, 0, 0]}>
          <AnimatedKnot />
          <WireframeGeo />
          <FloatingParticles />
        </group>
      </Canvas>
    </div>
  )
}