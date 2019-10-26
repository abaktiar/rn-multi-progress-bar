import * as React from "react";
interface ProgressBarProps {
  data: Array<{ progress: number; color: string }>;
  barHeight?: number;
  shouldAnimate?: boolean;
  animateDuration?: number;
}
interface IPProps {
  progress: number;
  color: string;
}

interface ProgressBarState {
  progressData: IPProps[];
  animatedValue: any;
}

declare class ProgressBar extends React.Component<
  ProgressBarProps,
  ProgressBarState
> {
  constructor(props: ProgressBarProps);
  componentDidMount: () => void;
  render(): {};
}
export default ProgressBar;
