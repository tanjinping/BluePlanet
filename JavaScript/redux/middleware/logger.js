const logger = (store) => (next) => (action) => {
    const result = next(action);
    console.group();
    console.log('action is:', action);
    console.log('new store is:', store.getState());
    console.groupEnd();
    return result;
};

export default logger;
