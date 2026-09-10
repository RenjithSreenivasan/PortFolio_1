import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeArtifactProps {
  scrollProgress: number; // 0 to 1
  activeScene: number; // 0 to 5
  themeColor: number; // hex color e.g. 0x06b6d4
  isMuted: boolean;
}

export const ThreeArtifact: React.FC<ThreeArtifactProps> = ({
  scrollProgress,
  activeScene,
  themeColor,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  
  // Meshes references for animation
  const groupRef = useRef<THREE.Group | null>(null);
  const cylinderRef = useRef<THREE.Mesh | null>(null);
  const coreRef = useRef<THREE.Mesh | null>(null);
  const ring1Ref = useRef<THREE.Mesh | null>(null);
  const ring2Ref = useRef<THREE.Mesh | null>(null);
  const ring3Ref = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const pointLightRef = useRef<THREE.PointLight | null>(null);
  const rimLightRef = useRef<THREE.PointLight | null>(null);

  // Mouse interaction
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(themeColor, 3, 15);
    pointLight.position.set(-2, 1, 3);
    scene.add(pointLight);
    pointLightRef.current = pointLight;

    const rimLight = new THREE.PointLight(0xffffff, 2, 10);
    rimLight.position.set(3, -2, -2);
    scene.add(rimLight);
    rimLightRef.current = rimLight;

    // 5. Master Artifact Group
    const masterGroup = new THREE.Group();
    groupRef.current = masterGroup;
    scene.add(masterGroup);

    // Geometry & Materials: Cyber Cylinder Centerpiece
    // A. Outer Metallic Cylinder Chassis
    const cylinderGeo = new THREE.CylinderGeometry(1.0, 1.0, 2.8, 48, 16, true);
    const cylinderMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.2,
      opacity: 0.95,
      transparent: true,
      side: THREE.DoubleSide
    });
    const cylinder = new THREE.Mesh(cylinderGeo, cylinderMat);
    masterGroup.add(cylinder);
    cylinderRef.current = cylinder;

    // End caps for the cylinder
    const capGeo = new THREE.CylinderGeometry(1.02, 1.02, 0.12, 48);
    const capMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.2
    });
    const topCap = new THREE.Mesh(capGeo, capMat);
    topCap.position.y = 1.4;
    cylinder.add(topCap);

    const bottomCap = new THREE.Mesh(capGeo, capMat);
    bottomCap.position.y = -1.4;
    cylinder.add(bottomCap);

    // Accent Rings on the Cylinder
    const rimGeo = new THREE.TorusGeometry(1.03, 0.025, 16, 64);
    const rimMat = new THREE.MeshStandardMaterial({
      color: themeColor,
      emissive: themeColor,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.1
    });
    const upperRim = new THREE.Mesh(rimGeo, rimMat);
    upperRim.rotation.x = Math.PI / 2;
    upperRim.position.y = 0.9;
    cylinder.add(upperRim);

    const lowerRim = new THREE.Mesh(rimGeo, rimMat);
    lowerRim.rotation.x = Math.PI / 2;
    lowerRim.position.y = -0.9;
    cylinder.add(lowerRim);

    // B. Internal Glowing Quantum Core (Icosahedron + Wireframe)
    const coreGroup = new THREE.Group();
    const coreGeo = new THREE.IcosahedronGeometry(0.55, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: themeColor,
      emissive: themeColor,
      emissiveIntensity: 1.2,
      roughness: 0.2,
      metalness: 0.8
    });
    const innerCore = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(innerCore);

    const wireGeo = new THREE.IcosahedronGeometry(0.65, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const wireCore = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireCore);

    masterGroup.add(coreGroup);
    coreRef.current = innerCore;

    // C. Orbital Gyro Rings
    const ringGeo1 = new THREE.TorusGeometry(1.55, 0.02, 16, 80);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: themeColor,
      emissive: themeColor,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.2
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = 0.8;
    masterGroup.add(ring1);
    ring1Ref.current = ring1;

    const ringGeo2 = new THREE.TorusGeometry(1.85, 0.015, 16, 80);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      emissive: 0x334155,
      metalness: 0.8,
      roughness: 0.3
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = 1.1;
    masterGroup.add(ring2);
    ring2Ref.current = ring2;

    const ringGeo3 = new THREE.TorusGeometry(2.15, 0.012, 16, 80);
    const ringMat3 = new THREE.MeshStandardMaterial({
      color: themeColor,
      emissive: themeColor,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.7
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.z = 0.5;
    masterGroup.add(ring3);
    ring3Ref.current = ring3;

    // D. Swirling Particle Cloud
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const baseColor = new THREE.Color(themeColor);
    for (let i = 0; i < particleCount; i++) {
      const radius = 1.4 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      positions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      // Color variation
      colors[i * 3] = baseColor.r + (Math.random() - 0.5) * 0.2;
      colors[i * 3 + 1] = baseColor.g + (Math.random() - 0.5) * 0.2;
      colors[i * 3 + 2] = baseColor.b + (Math.random() - 0.5) * 0.2;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particles);
    particlesRef.current = particles;

    // Mouse listener for parallax
    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current.targetX = (e.clientX / innerWidth - 0.5) * 2;
      mouseRef.current.targetY = -(e.clientY / innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize listener
    const onResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Render loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const render = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Base rotations
      if (cylinderRef.current) {
        cylinderRef.current.rotation.y = elapsedTime * 0.4;
      }
      if (coreRef.current) {
        coreRef.current.rotation.x = elapsedTime * 0.8;
        coreRef.current.rotation.y = elapsedTime * 1.2;
      }
      if (ring1Ref.current) {
        ring1Ref.current.rotation.x = 0.8 + elapsedTime * 0.3;
        ring1Ref.current.rotation.y = elapsedTime * 0.5;
      }
      if (ring2Ref.current) {
        ring2Ref.current.rotation.y = 1.1 - elapsedTime * 0.35;
        ring2Ref.current.rotation.z = elapsedTime * 0.4;
      }
      if (ring3Ref.current) {
        ring3Ref.current.rotation.z = 0.5 + elapsedTime * 0.25;
        ring3Ref.current.rotation.x = -elapsedTime * 0.45;
      }
      if (particlesRef.current) {
        particlesRef.current.rotation.y = -elapsedTime * 0.15;
      }

      // Parallax applied to master group
      if (masterGroup) {
        masterGroup.rotation.x = mouseRef.current.y * 0.25;
        masterGroup.rotation.y = mouseRef.current.x * 0.35;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Choreograph 3D object position & scale based on scrollProgress & activeScene
  useEffect(() => {
    if (!groupRef.current || !cameraRef.current) return;
    const group = groupRef.current;
    const camera = cameraRef.current;

    // Mobile vs Desktop adjustment
    const isMobile = window.innerWidth < 768;

    // SCENE 0: HERO (progress ~0.0 - 0.18)
    if (activeScene === 0) {
      const p = Math.min(scrollProgress / 0.18, 1);
      group.position.x = isMobile ? 0 : 1.4 * p;
      group.position.y = isMobile ? -0.2 : 0;
      group.position.z = 0;
      group.scale.setScalar(isMobile ? 0.85 : 1.15);
      camera.position.z = 7.5;
    }
    // SCENE 1: PROJECT SHOWCASE (progress ~0.18 - 0.42)
    else if (activeScene === 1) {
      group.position.x = isMobile ? 0 : 2.0;
      group.position.y = 0.1;
      group.position.z = -0.5;
      group.scale.setScalar(isMobile ? 0.75 : 1.0);
      camera.position.z = 7.2;
    }
    // SCENE 2: PINNED STORY / ARCHITECTURE DEEP DIVE (progress ~0.42 - 0.65)
    else if (activeScene === 2) {
      // 360 degree spin and central focus
      const localProgress = (scrollProgress - 0.42) / (0.65 - 0.42);
      group.position.x = isMobile ? 0 : -1.8 + localProgress * 0.4;
      group.position.y = Math.sin(localProgress * Math.PI) * 0.3;
      group.position.z = 0.5;
      group.rotation.y += localProgress * Math.PI * 2;
      group.scale.setScalar(isMobile ? 0.85 : 1.25);
      camera.position.z = 6.8;
    }
    // SCENE 3: COMPARISON MATRIX (progress ~0.65 - 0.80)
    else if (activeScene === 3) {
      group.position.x = isMobile ? 0 : 2.2;
      group.position.y = -0.3;
      group.position.z = -0.8;
      group.scale.setScalar(isMobile ? 0.7 : 0.95);
      camera.position.z = 7.5;
    }
    // SCENE 4 & 5: TECH MATRIX & FOOTER (progress > 0.80)
    else {
      group.position.x = 0;
      group.position.y = isMobile ? 1.0 : 1.2;
      group.position.z = -1.2;
      group.scale.setScalar(isMobile ? 0.65 : 0.8);
      camera.position.z = 8.0;
    }
  }, [scrollProgress, activeScene]);

  // Dynamically update theme color when active project changes
  useEffect(() => {
    const targetColor = new THREE.Color(themeColor);
    
    if (pointLightRef.current) {
      pointLightRef.current.color.lerp(targetColor, 0.8);
    }
    if (coreRef.current) {
      const mat = coreRef.current.material as THREE.MeshStandardMaterial;
      mat.color.lerp(targetColor, 0.8);
      mat.emissive.lerp(targetColor, 0.8);
    }
    if (ring1Ref.current) {
      const mat = ring1Ref.current.material as THREE.MeshStandardMaterial;
      mat.color.lerp(targetColor, 0.8);
      mat.emissive.lerp(targetColor, 0.8);
    }
    if (ring3Ref.current) {
      const mat = ring3Ref.current.material as THREE.MeshStandardMaterial;
      mat.color.lerp(targetColor, 0.8);
      mat.emissive.lerp(targetColor, 0.8);
    }
  }, [themeColor]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full overflow-hidden"
      aria-hidden="true"
    />
  );
};
