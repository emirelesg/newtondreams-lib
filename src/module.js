import * as constants from './Constants';
import * as utils from './Utils';
import * as dom from './dom/dom';
import World from './World';
import Slider from './dom/Slider';
import Vector from './figures/Vector';
import Ball from './figures/Ball';
import Picture from './figures/Picture';
import Shape from './figures/Shape';
import Plot from './figures/Plot';
import Box from './figures/Box';
import DataCursor from './figures/DataCursor';

const p$ = {
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

export default p$;
