import { createContext } from 'react';

const apiContext = createContext();

export const APIProvider = apiContext.Provider;
export const APIConsumer = apiContext.Consumer;

export default apiContext;
