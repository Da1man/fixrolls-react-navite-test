const TEST = 'TEST';

const initialState = {
    products: [
        {id: 0, name:'Ясай Чиз Ролл', cost: 125, image:'https://fixrolls.ru/wp-content/uploads/2019/03/YAsaj-CHiz-Roll.jpg' },
        {id: 1, name:'Чираши MIX Ролл', cost: 150, image:'https://fixrolls.ru/wp-content/uploads/2019/03/CHirashi-MIX.jpg' },
        {id: 2, name:'Чикен Ролл', cost: 100, image:'https://fixrolls.ru/wp-content/uploads/2019/03/CHiken-Roll.jpg' },
        {id: 3, name:'Чикен Манго Ролл', cost: 200, image:'https://fixrolls.ru/wp-content/uploads/2019/03/CHiken-Mango-Roll.jpg' },
        {id: 4, name:'Чиз Ролл', cost: 175, image:'https://fixrolls.ru/wp-content/uploads/2019/03/CHiz-Roll.jpg' },
        {id: 5, name:'Цезарь Темпура Ролл', cost: 195, image:'https://fixrolls.ru/wp-content/uploads/2019/03/TSezar-Tempura-Roll.jpg' },
    ]
};

const catalogScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST:
            return state;
        default:
            return state;

    }
};


export const test = () => {
    return {
        type: test,
        payload: 'bbbbb',
    }
}

export default catalogScreenReducer;
