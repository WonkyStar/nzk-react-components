export interface Props {
    cloudName?: string;
    unsignedUploadPreset?: string;
    uploadTag?: string;
}
declare const useCloudinary: (props?: Props | undefined) => {
    uploadImage: (file: Blob | string, onComplete?: ((imageUrl: string) => void) | undefined) => void;
};
export default useCloudinary;
