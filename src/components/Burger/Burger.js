import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import './Burger.css'

const burger = props => {
    let transfIng = Object.keys(props.ingridients)
        .map(igKey => {
            return [...Array(props.ingridients[igKey])].map((_, i) => <BurgerIngredient key={igKey + i}
                type={igKey} />)
        })
        .reduce((arr, el) => arr.concat(el), []);

    transfIng = (transfIng.length === 0) ? <p>Please, start adding ingridients!</p> : [...transfIng];
    return (
        <div className='burger'>
            <BurgerIngredient type='bread-top' />
            {transfIng}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default burger;
