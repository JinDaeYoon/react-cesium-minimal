import React, { RefObject, Component, createRef, ReactNode } from 'react';
import styled from 'styled-components';
import { Viewer } from 'cesium';
// Import Cesium CSS if not yet added at root component
import 'cesiumSource/Widgets/widgets.css';
const cesium: any = require('cesiumSource/Cesium');
// Import @types/cesium to use along with CesiumJS
const Root: any =
  styled.div({
    width: '100%',
    height: '100%',
  });
const CesiumViewer: any = styled.div`
  width: 100%;
  height: 100%;
`;

interface Props {

}

class CesiumPage extends Component<Props> {
  private cesiumContainer: RefObject<HTMLDivElement>;

  public constructor(props: Props) {
    super(props);
    this.cesiumContainer = createRef();
  }

  public componentDidMount(): void {
    if (this.cesiumContainer.current) {
      // type Viewer is from @types/cesium
      // whereas, new cesium.Viewer is from the module cesium
      const viewer: Viewer = new cesium.Viewer(this.cesiumContainer.current);
      console.log('cesium viewer = ', viewer);
    }
  }

  public render(): ReactNode {
    return (
      <Root>
        <CesiumViewer id='cesiumContainer' ref={this.cesiumContainer} />
      </Root>
    );
  }
}
export default CesiumPage;