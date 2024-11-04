import React, { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { MindARThree } from 'mind-ar/dist/mindar-face-three.prod.js';

const Beauty = () => {
  // const containerRef = useRef(null);

  // useEffect(() => {

  //     const mindarThree = new MindARThree({
  //       container: containerRef.current,
  //     });

  //     const { renderer, scene, camera } = mindarThree;

  //     // Add lighting
  //     const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  //     scene.add(light);

  //     // Add face mesh and texture
  //     const faceMesh = mindarThree.addFaceMesh();
  //     const texture = new THREE.TextureLoader().load(
  //       'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/canonical_face_model_uv_visualization.png'
  //     );
  //     faceMesh.material.map = texture;
  //     faceMesh.material.transparent = true;
  //     faceMesh.material.needsUpdate = true;
  //     scene.add(faceMesh);

  //     // Start MindAR session
  //     mindarThree.start();

   
  //     renderer.setAnimationLoop(() => {
  //       renderer.render(scene, camera);
  //     });



  //   // clean the ar if the session is end


  //   return () => {
  //     // Clean up when component unmounts
      
      
  //     if (containerRef.current) {
  //       containerRef.current.renderer = null;
        
        
  //     }
  //   };
  // }, []);

  return (

    <div 
          // id="container"
          // ref={containerRef}
          className=' flex justify-center items-center w-screen min-h-screen '
    >
      <h1 className=' text-2xl'>Beauty Page</h1>
    </div>
  );
};

export default Beauty;




