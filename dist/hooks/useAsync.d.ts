interface IProps {
    asyncFunc: (params: any) => any;
    immediate: boolean;
    funcParams?: any;
    initialData?: any;
}
interface IAsyncHook {
    loading: boolean;
    data: any;
    execute: (params?: any) => any;
    error: any;
}
declare const useAsync: (props?: IProps) => IAsyncHook;
export default useAsync;
