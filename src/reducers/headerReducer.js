const initialState = {
    mainHeaders: [
    {
        name: "Header1",
        id: 0
    },
    {
        name: "Header2",
        id: 1
    },
    {
        name: "Header3",
        id: 2
    },
    {
        name: "Header4",
        id: 3
    },
    {
        name: "Header5",
        id: 4
    },
    {
        name: "Header6",
        id: 5
    },
    {
        name: "Header7",
        id: 6
    }
],
    subHeaders : [
        {
            name: "SubHeader1",
            headerId: 0,
            id: 0
        },
        {
            name: "SubHeader2",
            headerId: 0,
            id: 1
        },
        {
            name: "SubHeader3",
            headerId: 1,
            id: 2
        },
        {
            name: "SubHeader4",
            headerId: 1,
            id: 3
        },
        {
            name: "SubHeader5",
            headerId: 2,
            id: 4
        },
        {
            name: "SubHeader6",
            headerId: 2,
            id: 5
        },
        {
            name: "SubHeader7",
            headerId: 3,
            id: 6
        },
        {
            name: "SubHeader8",
            headerId: 3,
            id: 7
        },
        {
            name: "SubHeader9",
            headerId: 4,
            id: 8
        },
        {
            name: "SubHeader10",
            headerId: 5,
            id: 9
        }
        
    ]
};

const headerReducer = (state = initialState, action) => {
    return state;
}

export default headerReducer;