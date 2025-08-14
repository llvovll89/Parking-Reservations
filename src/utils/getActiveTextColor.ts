export const getActiveTextColor = (path: string): string => {
    return path === window.location.pathname ? "text-blue-500" : "text-black";
};
