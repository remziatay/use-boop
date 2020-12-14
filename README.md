# use-boop

> Extended react hook for [Josh Comeau's boop effect](https://www.joshwcomeau.com/react/boop/)

[![NPM](https://img.shields.io/npm/v/use-boop.svg)](https://www.npmjs.com/package/use-boop)

## Install

```bash
npm install --save react-spring use-boop
```

## Usage

```js
import * as React from 'react';
import useBoop from 'use-boop';
import { animated } from 'react-spring';

const SomeComponent = () => {
  const [style, trigger] = useBoop({ rotation: 45 });

  return (
    <animated.div style={style} onMouseEnter={trigger}>
      {/* Child can be anything */}
      <AiOutlineQuestionCircle size={80} />
    </animated.div>
  );
};
```
