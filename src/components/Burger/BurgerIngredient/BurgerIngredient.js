import React from 'react';
import './BurgerIngredient.css';

const burgerIngredient = props => {
    let ingridient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingridient = <div className='bread-bottom'></div>
            break;

        case ('bread-top'):
            ingridient = (
                <div className='bread-top'>
                    <div className='seeds1'></div>
                    <div className='seeds2'></div>
                </div>
            )
            break;

        case ('cheese'):
            ingridient = <div className='cheese'></div>
            break;

        case ('salad'):
            ingridient = <div className='salad'></div>
            break;

        case ('bacon'):
            ingridient = <div className='bacon'></div>
            break;

        case ('meat'):
            ingridient = <div className='meat'></div>
            break;
        default:
            ingridient = null;
    }
    return ingridient;
}

export default burgerIngredient