import React, { useState } from 'react';
import {
  Box,
  Typography
} from '@mui/material';
import { PhotoshopPicker } from 'react-color';

const YELLOW_H = 60;
const PURPLE_H = 300;

// https://stackoverflow.com/questions/3423214/convert-hsb-hsv-color-to-hsl
const hsvToHsl = (h, s, v, l = v * (1 - (s / 2))) =>  [h, l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l), l];
const hslToHsv = (h, s, l, v = l + s * Math.min(l, 1 - l)) => [h, v === 0 ? 0 : 2 * (1 - (l / v)), v]

const generateHue = (hue, step) => {
  // // Deterimine Distance to get
  // let m = 0;
  // let b = 0;

  // if (hue < YELLOW_H) {
  //   m = (YELLOW_H - hue) / 4.0
  // } else if (hue > PURPLE_H) {
  //   m = (hue - PURPLE_H) / 4.0
  // } else {
  //   b = Math.min(Math.abs(hue - YELLOW_H), Math.abs(PURPLE_H - hue))
  //   m = b / 4.0
  // }

  // console.log(`Slope: ${m}`)

  // let output = 0;
  // if (hue < YELLOW_H) {
  //   output = YELLOW_H - m * step
  // } else if (hue > PURPLE_H) {
  //   output = PURPLE_H + m * (9 - step)
  // } else {
  //   output = m * step + b
  // }
  // while(output < 0) output += 360;
  // while(output > 360) output -= 360;

  // return output;

  let invert = hue < YELLOW_H || hue > PURPLE_H;

  let lower = 60;
  let upper = invert ? -60 : 300
  if (hue > PURPLE_H) hue -= 360;
  let distance = Math.min(Math.abs(hue - lower), Math.abs(upper - hue));
  let slope = distance / 4;
  let b = hue - distance;

  console.log(`Slope: ${slope}`)

  let output = invert ? slope * (8 - step) + b :  slope * step + b;
  while(output < 0) output += 360;
  while(output > 360) output -= 360;

  return output;
}

const generateSaturation = (step) => {
  if (step == 0) return 0;
  return (27.9794 + 27.5508 * Math.log(step)) / 100
}

const generateBrightness = (step) => {
  return (102.6969697 - 2.39502165 * step - 1.044372294 * Math.pow(step, 2)) / 100
}

const Swatch = ({ hue, saturation, lightness }) => {
  console.log(`Hue: ${hue}`)
  return (
    <Box sx={{ border: '2px black solid', backgroundColor: `hsl(${hue}, ${Math.floor(saturation * 100)}%, ${Math.floor(lightness * 100)}%)` , width: '40px', height: '40px' }} />
  )
};

const Palette = ({ hue }) => {
  let steps = [];
  for (let i = 0; i < 9; i++) steps.push(i);


  return (
    <React.Fragment>
      {steps.map((s) => {
        let hsl = hsvToHsl(generateHue(hue, s), generateSaturation(s), generateBrightness(s))

        return <Swatch key={`swatch-${s}`} hue={hsl[0]} saturation={hsl[1]} lightness={hsl[2]}/>
      })}
    </React.Fragment>
  )
};

const HueShiftingPage = (props) => {
  let [color, setColor] = useState({ h: 0, s: 0.5651795808331159, l: 0.5400400000000001 });

  function handleChangeComplete(color) {
    setColor(color.hsl)
  }

  return (
    <Box>
      <Typography variant="h2">Hue Shifting</Typography>
      <Typography>{`Values: Hue: ${color.h}\nSaturation: ${color.s}\nLightness: ${color.l}`}</Typography>
      <Typography>{`Formula:\nHue: ${color.h}\nSaturation: ${color.s}\nLightness: ${color.l}`}</Typography>
      <PhotoshopPicker
        color={color}
        onChangeComplete={handleChangeComplete} />
      <Palette hue={color.h}/>
    </Box>
  )
};

export default HueShiftingPage;
