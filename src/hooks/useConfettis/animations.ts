import confetti from 'canvas-confetti';

export interface IAnimationsArgs {
  basicCanon: { confettiOptions: confetti.Options }
  fireworks: { durationInMs: number, confettiOptions: confetti.Options }
  sideCanons: { durationInMs?: number, colors?: string[] , confettiOptions?: confetti.Options }
}

export interface IAnimations {
  basicCanon: (params: IAnimationsArgs["basicCanon"]) => void
  fireworks: (params: IAnimationsArgs["fireworks"]) => void
  sideCanons: (params: IAnimationsArgs["sideCanons"]) => void
}

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export type AnimationTypes = keyof IAnimations;

export const ANIMATIONS: IAnimations = {
  basicCanon: ({ confettiOptions: { particleCount = 100, spread = 70, origin = { y: 0.6 } }}) => {
    confetti({
      particleCount,
      spread,
      origin
    });
  },
  fireworks: ({ durationInMs = 2000, confettiOptions }) => {
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const animationEnd = Date.now() + durationInMs
    const interval: any = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      var particleCount = 50 * (timeLeft / durationInMs);
      confetti(Object.assign({}, defaults, { ...confettiOptions, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { ...confettiOptions, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  },
  sideCanons: async ({
    durationInMs = 2000,
    confettiOptions = {
      angle: 60,
      spread: 55,
      particleCount: 2,
      colors: ['#bb0000', '#ffffff'],
      origin: { x: 0, y: 0.5 }
    },
  }) => {
    const end = Date.now() + durationInMs
    const options = {
      angle: confettiOptions.angle || 60,
      spread :confettiOptions.spread || 55,
      particleCount: confettiOptions.particleCount || 2,
      colors: confettiOptions.colors || ['#bb0000', '#ffffff'],
      origin: {
        x: confettiOptions.origin?.x || 0,
        y: confettiOptions.origin?.y || 0.5,
      }
    }
    function frame() {
      confetti({
        ...options
      });
      confetti({
        ...options,
        angle: 2 * options.angle,
        origin: { ...options.origin, x: 1 - options.origin.x },
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }
    return frame()
  }
}

