import confetti from 'canvas-confetti';
import { ANIMATIONS } from './animations';

const useConfettis = () => {

  const cannon = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }


  return {
    cannon,
    confetti,
    ANIMATIONS
  }
}

export default useConfettis
