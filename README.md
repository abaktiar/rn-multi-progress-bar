# Multi-Progress Bar

Multi-Progress Bar is a React-Native component. Which can be used to show several progress.

## Demo

![alt text](./example/files/example.gif)

## Installation

npm

```bash
npm i rn-multi-progress-bar
```

yarn

```bash
yarn add rn-multi-progress-bar
```

## Usage

```
import { ProgressBar } from "rn-multi-progress-bar";

const MyComponent = () => {
  return (
    <ProgressBar
      shouldAnimate={true}
      data={[
        { progress: 7, color: "rgb(255, 193, 2)" },
        { progress: 13, color: "rgb(55, 106, 255)" },
        { progress: 5, color: "rgb(229, 232, 249)" }
      ]}
    />
  );
};

export default MyComponent;
```
