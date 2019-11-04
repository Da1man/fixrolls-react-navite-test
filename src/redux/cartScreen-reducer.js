import clone from 'lodash-es/clone';

const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

const initialState = {
    cartItems: [
        {id: 0, name:'Ясай Чиз Ролл', cost: 125, image:'https://fixrolls.ru/wp-content/uploads/2019/03/YAsaj-CHiz-Roll.jpg' },
        {id: 5, name:'Цезарь Темпура Ролл', cost: 195, image:'https://fixrolls.ru/wp-content/uploads/2019/03/TSezar-Tempura-Roll.jpg' },

    ]
};

const cartScreenReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('ADD_TO_CART')
            console.log('bbbbbb')
            console.log('action:', action.payload)

            return { ...state, cartItems: [...state.cartItems, {id: 0, name:'Ясай Чиз Ролл', cost: 125, image:'https://fixrolls.ru/wp-content/uploads/2019/03/YAsaj-CHiz-Roll.jpg' }] };


        case DELETE_FROM_CART:
            const cart = state.cartItems;
            const index = cart.findIndex((item) => { return item.id === payload.id })
            if (index !== -1) {
                const newCart = clone(cart).splice(index, 1);
                return {...state, cartItems: newCart }
            } else {
                return state;
            }
        default:
            return state;

    }
};

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export const deleteFromCart = (id) => {
    return {
        type: DELETE_FROM_CART,
        payload: {
            id
        }
    }
}


export default cartScreenReducer;