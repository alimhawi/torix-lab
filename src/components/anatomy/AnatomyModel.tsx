import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Center,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

// Custom hook to detect mobile screens (< 768px)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

interface ModelProps {
  isMobile: boolean;
}

function Model({ isMobile }: ModelProps) {
  const { scene } = useGLTF("/models/anatomy.glb");
  const modelRef = useRef<THREE.Group>(null);

  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);
  
  // Target rotation for smooth Apple-style lerped drag & idle animation
  const targetRotationYRef = useRef(Math.PI);

  // Apply original custom material properties
  useEffect(() => {
    scene.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const materials = Array.isArray(mesh.material)
            ? mesh.material
            : [mesh.material];

          materials.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial) {
              mat.map = null;
              mat.color.set("#bfc5ce");
              mat.roughness = 0.55;
              mat.metalness = 0.0;
              mat.envMapIntensity = 1.6;
              mat.needsUpdate = true;
            }
          });
        }
      }
    });
  }, [scene]);

  // Frame loop for smooth rotation lerp and continuous idle rotation
  useFrame((_, delta) => {
    if (!modelRef.current) return;

    if (isMobile) {
      // 1. Advance target rotation when idle so auto-rotation is seamless
      if (!isDraggingRef.current) {
        targetRotationYRef.current += delta * 0.25;
      }

      // 2. Smoothly interpolate current Y rotation toward target Y rotation
      const dampFactor = Math.min(1, delta * 10); // Frame-rate independent lerp speed
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetRotationYRef.current,
        dampFactor
      );
    }
  });

  // Mobile pointer handlers for horizontal drag rotation
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!isMobile) return;
    isDraggingRef.current = true;
    lastXRef.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isMobile || !isDraggingRef.current) return;

    const deltaX = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;

    // Update target rotation value instead of setting mesh rotation directly
    targetRotationYRef.current += deltaX * 0.007;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isMobile) return;
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.05}
      rotation={[0, Math.PI, 0]}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    />
  );
}

export default function AnatomyModel() {
  const isMobile = useIsMobile();

  return (
    <div
      className="w-full h-[600px] relative"
      style={{ touchAction: "pan-y" }}
    >
      <Canvas
        camera={{
          position: [0, 0.2, 7],
          fov: 28,
        }}
        style={{ touchAction: "pan-y" }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[5, 8, 6]}
          intensity={2.5}
        />

        <directionalLight
          position={[-5, 2, -5]}
          intensity={0.8}
        />

        <Environment preset="studio" />

        <Center>
          <Model isMobile={isMobile} />
        </Center>

        {/* OrbitControls active strictly on desktop */}
        {!isMobile && (
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.3}
            enableZoom={false}
            enablePan={false}
          />
        )}
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/anatomy.glb");