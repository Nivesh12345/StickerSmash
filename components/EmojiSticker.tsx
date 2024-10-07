import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  imageSize: number;
  stickerSource: any;
  imageWidth: number;
  imageHeight: number;
};

export default function EmojiSticker({ imageSize, stickerSource, imageWidth, imageHeight }: Props) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      }
    });

  const drag = Gesture.Pan()
    .onChange((event) => {
      const newX = translateX.value + event.changeX;
      const newY = translateY.value + event.changeY;

      // Constrain the sticker within the image boundaries
      translateX.value = Math.max(0, Math.min(newX, imageWidth - scaleImage.value));
      translateY.value = Math.max(0, Math.min(newY, imageHeight - scaleImage.value));
    });

  const pinch = Gesture.Pinch()
    .onChange((event) => {
      const newScale = scaleImage.value * event.scale;
      // Limit the scale between 0.5x and 3x the original size
      scaleImage.value = Math.max(imageSize * 0.5, Math.min(newScale, imageSize * 3));
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const composed = Gesture.Simultaneous(drag, pinch);

  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={[containerStyle, { position: 'absolute' }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}