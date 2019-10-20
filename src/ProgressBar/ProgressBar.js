import * as React from "react";
import { View, Animated, Easing } from "react-native";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pProps: [], animatedValue: new Animated.Value(0) };
  }
  componentDidMount = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: this.props.animateDuration || 500,
      easing: Easing.linear
    }).start();
    let value = 0;
    let props = this.props.progress.map((d, i) => {
      value = value + (d / this.props.maxProgress) * 100;
      return {
        progress: value,
        color: this.props.colors[i] ? this.props.colors[i] : "rgb(255, 193, 2)"
      };
    });
    props = props.reverse();
    this.setState({ pProps: props });
  };
  render() {
    const { barHeight, shouldAnimate } = this.props;
    const { pProps } = this.state;
    let v = 0;
    let animatedValue = this.props.progress.map((value, i) => {
      v = v + (value / this.props.maxProgress) * 100;
      return this.state.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", `${v}%`]
      });
    });

    animatedValue = animatedValue.reverse();

    return (
      <View
        style={{
          position: "relative",
          marginTop: 16,
          marginBottom: 16 + barHeight,
          width: "100%"
        }}
      >
        <View
          style={{
            position: "absolute",
            height: barHeight,
            width: "100%",
            backgroundColor:
              this.props.defaultBackground || "rgb(229, 232, 249)",
            borderRadius: 5
          }}
        />
        {pProps.map((d, i) => {
          return (
            <Animated.View
              key={i}
              style={{
                position: "absolute",
                height: barHeight,
                width:
                  shouldAnimate && shouldAnimate === true
                    ? animatedValue[i]
                    : `${d.progress}%`,
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
