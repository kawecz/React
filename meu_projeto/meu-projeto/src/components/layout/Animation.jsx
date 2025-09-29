import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Animation() {
   const boxRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: 'power1.out' } });

    timeline.to(boxRef.current, { x: 200 })
            .to(boxRef.current, { rotation: 360, backgroundColor: 'purple' })
            .to(boxRef.current, { scale: 1.5 });
            
  }, []);

  return (
    <div ref={boxRef} className="box">
      Timeline Animation
    </div>
  );
}

export default Animation;