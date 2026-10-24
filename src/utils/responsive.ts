import { Dimensions, PixelRatio } from "react-native";

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

export const scale = (size:number)=>{
    const { width } = Dimensions.get("window")
    const factor = Math.min(1.2, Math.max(0.85, width / BASE_WIDTH))
    return factor * size
}

export const verticaleScale = (size:number)=>{
    const { height } = Dimensions.get("window")
    const factor = Math.min(1.1, Math.max(0.85, height / BASE_HEIGHT))
    return factor * size
}

export const moderateSclae = (size:number, factor=0.5)=>{
    return size + (scale(size) - size) * factor
}

export const normalize = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(size));