import { Dimensions, PixelRatio } from "react-native";

const {width, height} = Dimensions.get("window")

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

export const scale = (size:number)=>{
    return (width / BASE_WIDTH) * size
}

export const verticaleScale = (size:number)=>{
    return (height/BASE_HEIGHT) * size
}

export const moderateSclae = (size:number, factor=0.5)=>{
    return size + (scale(size) - size) * factor
}

export const normalize = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(size));