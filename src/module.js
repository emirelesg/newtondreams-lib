import * as constants from './utils/Constants';
import * as utils from './utils/Utils';
import * as dom from './dom/dom';
import World from './world/World';
import Slider from './dom/Slider';
import Vector from './elements/Vector';
import Ball from './elements/Ball';
import Picture from './elements/Picture';
import Shape from './elements/Shape';
import Plot from './elements/Plot';
import Box from './elements/Box';
import DataCursor from './elements/DataCursor';

/**
 * Main object that can be imported by other programs using es modules.
 */
export default {
  ...constants,
  Box,
  Ball,
  Picture,
  Plot,
  Shape,
  Slider,
  Vector,
  World,
  DataCursor,
  utils,
  dom
};
