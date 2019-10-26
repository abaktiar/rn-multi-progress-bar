import * as React from "react";
import { View, Animated, Easing } from "react-native";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progressData: [], animatedValue: new Animated.Value(0) };
  }
  componentDidMount = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: this.props.animateDuration || 500,
      easing: Easing.linear
    }).start();

    let totalProgress = this.props.data.reduce((acc, d) => acc + d.progress, 0);
    let value = 0;
    let data = this.props.data.map(d => {
      value = value + (d.progress / totalProgress) * 100;
      return {
        progress: value,
        color: d.color
      };
    });
    data = data.reverse();

    this.setState({ progressData: data });
  };
  render() {
    const { barHeight, shouldAnimate } = this.props;
    const { progressData } = this.state;

    let animatedValue = this.state.progressData.map((d, i) => {
      return this.state.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", `${d.progress}%`]
      });
    });

    return (
      <View
        style={{
          position: "relative",
          marginTop: 16,
          marginBottom: 16 + (barHeight || 8),
          width: "100%"
        }}
      >
        {progressData.map((d, i) => {
          return (
            <Animated.View
              key={i}
              style={{
                position: "absolute",
                height: barHeight || 8,
                width:
                  shouldAnimate === true ? animatedValue[i] : `${d.progress}%`,
                backgroundColor: d.color,
                borderRadius: 5
              }}
            />
          );
        })}
      </View>
    );
  }
}

export default ProgressBar;
