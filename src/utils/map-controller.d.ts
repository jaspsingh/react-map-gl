import MapState from './map-state';
import TransitionManager from './transition-manager';

export type MjolnirEvent = {
  type: string,
  center: {x: number, y: number},
  offsetCenter: {x: number, y: number},
  deltaX: number,
  deltaY: number,
  delta: number,
  scale: number,
  rotation: number,
  pointerType: string,
  metaKey: boolean,
  rightButton: boolean,
  stopPropagation: Function,
  preventDefault: Function,
  target: HTMLElement,
  srcEvent: any
};

export const LINEAR_TRANSITION_PROPS: any;

export default class MapController {
  events: Array<string>;
  mapState: MapState;
  onViewportChange: Function;
  onStateChange: Function;
  mapStateProps: any;
  eventManager: any;
  scrollZoom: boolean;
  dragPan: boolean;
  dragRotate: boolean;
  doubleClickZoom: boolean;
  touchZoom: boolean;
  touchRotate: boolean;
  keyboard: boolean;

  _state: any;
  _events: any;
  _transitionManager: TransitionManager;

  constructor();

  handleEvent(event: MjolnirEvent): boolean;

  getCenter(event: MjolnirEvent): Array<number>;

  isFunctionKeyPressed(event: MjolnirEvent): boolean;

  setState(newState: any): void;

  updateViewport(newMapState: MapState, extraProps: any, extraState: any): void;

  getMapState(overrides?: any): MapState;

  setOptions(options: any): void;

  toggleEvents(eventNames: Array<string>, enabled: boolean);
}
