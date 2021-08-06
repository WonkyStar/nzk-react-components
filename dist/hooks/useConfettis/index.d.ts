import confetti from 'canvas-confetti';
declare const useConfettis: () => {
    cannon: () => void;
    confetti: typeof confetti;
    ANIMATIONS: import("./animations").IAnimations;
};
export default useConfettis;
