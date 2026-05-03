import { memo, useEffect, useRef } from "react";
import * as THREE from "three";

export const TireScene = memo(function TireScene() {
  const containerRef = useRef(null);
  const tireRef = useRef(null);
  const rimRef = useRef(null);
  const isVisibleRef = useRef(true);
  const isPageVisibleRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.set(0, 0, 6.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.width = "100%";
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xb77cff, 1);
    const pointLight = new THREE.PointLight(0x22d3ee, 0.75);

    directionalLight.position.set(4, 7, 6);
    pointLight.position.set(-4, 3, 5);
    scene.add(ambientLight, directionalLight, pointLight);

    const tireGeometry = new THREE.TorusGeometry(2.85, 0.95, 20, 72);
    const tireMaterial = new THREE.MeshStandardMaterial({
      color: 0x151923,
      metalness: 0.48,
      roughness: 0.5,
    });
    const tire = new THREE.Mesh(tireGeometry, tireMaterial);
    tire.rotation.set(Math.PI * 0.3, 0, Math.PI * 0.2);
    tire.position.set(1.1, -0.15, 0);
    scene.add(tire);
    tireRef.current = tire;

    const rimGeometry = new THREE.CylinderGeometry(2.05, 2.05, 0.28, 32);
    const rimMaterial = new THREE.MeshStandardMaterial({
      color: 0x243044,
      metalness: 0.72,
      roughness: 0.26,
    });
    const rim = new THREE.Mesh(rimGeometry, rimMaterial);
    rim.rotation.set(Math.PI * 0.3, 0, Math.PI * 0.2);
    rim.position.copy(tire.position);
    scene.add(rim);
    rimRef.current = rim;

    const particleCount = 70;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      velocities[i * 3] = (Math.random() - 0.5) * 0.012;
      velocities[i * 3 + 1] = Math.random() * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.012;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.userData.velocities = velocities;

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x9b5cf6,
      opacity: 0.35,
      size: 0.13,
      sizeAttenuation: true,
      transparent: true,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const resize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    });
    intersectionObserver.observe(container);

    const handleVisibilityChange = () => {
      isPageVisibleRef.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let animationFrameId;
    let lastRenderTime = 0;

    const animate = (time = 0) => {
      animationFrameId = window.requestAnimationFrame(animate);

      if (!isVisibleRef.current || !isPageVisibleRef.current) return;
      if (time - lastRenderTime < 1000 / 45) return;
      lastRenderTime = time;

      tireRef.current.rotation.y += 0.006;
      rimRef.current.rotation.y += 0.006;

      const particlePositions = particleGeometry.attributes.position.array;
      const particleVelocities = particleGeometry.userData.velocities;

      for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] += particleVelocities[i * 3];
        particlePositions[i * 3 + 1] += particleVelocities[i * 3 + 1];
        particlePositions[i * 3 + 2] += particleVelocities[i * 3 + 2];

        if (particlePositions[i * 3 + 1] > 4) {
          particlePositions[i * 3] = (Math.random() - 0.5) * 5;
          particlePositions[i * 3 + 1] = -4;
          particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      tireGeometry.dispose();
      tireMaterial.dispose();
      rimGeometry.dispose();
      rimMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
});
