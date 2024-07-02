import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";
import Iphone from "./Iphone";
import Lights from "./Lights";
import Loader from "./Loader";

type model = {
  title: string;
  color: string[];
  img: string;
};

type props = {
  index: number;
  groupRef: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
  gsapType: string;
  controlRef: any;
  setRotationState: React.Dispatch<React.SetStateAction<number>>;
  item: model;
  size: string;
};

const ModelView = ({
  index,
  controlRef,
  groupRef,
  gsapType,
  item,
  setRotationState,
  size,
}: props) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <Iphone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
