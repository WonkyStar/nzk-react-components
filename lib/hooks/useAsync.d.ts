/**
 * A hook to fetch async data.
 * @class useAsync
 * @borrows useAsyncObject
 * @param {object} _                props
 * @param {async} _.asyncFunc         Promise like async function
 * @param {bool} _.immediate=false    Invoke the function immediately
 * @param {object} _.funcParams       Function initial parameters
 * @param {object} _.initialData      Initial data
 * @returns {useAsyncObject}        Async object
 * @example
 *   const { execute, loading, data, error } = useAync({
 *    asyncFunc: async () => { return 'data' },
 *    immediate: false,
 *    funcParams: { data: '1' },
 *    initialData: 'Hello'
 *  })
 */
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
