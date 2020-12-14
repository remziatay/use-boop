import useBoop from 'use-boop';
import { animated } from 'react-spring';
import { AiOutlineClose, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaAngleDown, FaAngleLeft } from 'react-icons/fa';

const SomeComponent = () => {
  const [styleQuestion, triggerQuestion] = useBoop({ rotation: 45 });
  const [styleClose, triggerClose] = useBoop({ ry: -45, skewX: 30 });
  const [styleLeft, triggerLeft] = useBoop({ x: -10 });
  const [styleDown, triggerDown] = useBoop({ y: 6, delay: 100 });

  return (
    <div className="container">
      <animated.div style={styleQuestion} onMouseEnter={triggerQuestion}>
        <AiOutlineQuestionCircle size={80} />
      </animated.div>
      <animated.div style={styleClose} onMouseEnter={triggerClose}>
        <AiOutlineClose size={80} />
      </animated.div>
      <animated.div style={styleLeft} onMouseEnter={triggerLeft}>
        <FaAngleLeft size={80} />
      </animated.div>
      <button onMouseEnter={triggerDown}>
        Show more
        <animated.div style={styleDown}>
          <FaAngleDown size={50} />
        </animated.div>
      </button>
    </div>
  );
};
export default SomeComponent;
