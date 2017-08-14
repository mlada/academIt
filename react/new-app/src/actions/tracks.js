var mockApiData = [
    {
        id: 1,
        name: 'Enter Sadman'
    },
    {
        id: 2,
        name: 'Welcome Home'
    },
    {
        id: 3,
        name: 'See you'
    },
    {
        id: 4,
        name: 'Shadow in the night'
    },
    {
        id: 5,
        name: 'Rose'
    }
];

export const getTracks = ()=> dispatch => {
    setTimeout(()=> {
        console.log('i got tracks');
        dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
    }, 2000)
};