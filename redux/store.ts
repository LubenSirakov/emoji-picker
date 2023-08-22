let store: any

export const getStore = () => {
    if(!store) {
        return new Error('Store is not created!')
    }

    return store
}