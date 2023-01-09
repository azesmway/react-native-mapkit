import { NativeModules, Platform } from 'react-native';
import React from 'react';

const LINKING_ERROR =
  `The package 'react-native-mapkit' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Mapkit = NativeModules.RNMapkit
  ? NativeModules.RNMapkit
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export default class MapView extends React.Component {
  static defaultProps = {};

  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  private getProps() {
    return {
      ...this.props,
    };
  }

  public render() {
    return <Mapkit {...this.getProps()} />;
  }
}
