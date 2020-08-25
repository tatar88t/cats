import stl from './page.module.scss';

import React, {useReducer} from 'react'
import Title from '../title/Title';
import Card from '../card/Card';

const Page = () => {
    const initState = {
        cards: [
            {id: "01", sloganDef: "Сказочное заморское яство", sloganWarn: "Котэ не одобряет?", title: "Нямушка", compose: "с фуа-гра", portions: "10", gift: "мышь в подарок", note: "", weight: "0,5", chosen: true, disabled: false, underline: {buy: "Чего сидишь? порадуй котэ,", selected: "Печень утки разварная с артишоками.", disabled: "Печалька, с фуа-гра закончился."}},
            {id: "02", sloganDef: "Сказочное заморское яство", sloganWarn: "Котэ не одобряет?", title: "Нямушка", compose: "с рыбой", portions: "40", gift: "2 мыши в подарок", note: "", weight: "2", chosen: false, disabled: false, underline: {buy: "Чего сидишь? порадуй котэ,", selected: "Головы щучьи с чесноком да свежайшая сёмгушка.", disabled: "Печалька, с рыбой закончился."}},
            {id: "03", sloganDef: "Сказочное заморское яство", sloganWarn: "Котэ не одобряет?", title: "Нямушка", compose: "с курой", portions: "100", gift: "5 мышей в подарок", note: "заказчик доволен", weight: "5", chosen: false, disabled: true,underline: {buy: "Чего сидишь? порадуй котэ,", selected: "Филе из цыплят с трюфелями в бульоне.", disabled: "Печалька, с курой закончился."}}
        ]
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'SELECT':
                return {
                    ...state,
                        cards: [
                            ...state.cards.map(item => (item.id == action.id ? {...item, chosen: !item.chosen} : {...item}))
                        ]
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initState)

    const onSelect = (id) => {
       dispatch({type: 'SELECT', id})
       console.log(state, "STATE")

    }
    return (
        <div className = {stl.page}>
            <div className={stl.pageShadow}></div>
                <div className={stl.container}>
                    <Title />
                    <div className={stl.cards}>
                        {state.cards.map(item => <Card item = {item} 
                        onSelect = {onSelect} 
                        key = {item.id}/>)} 
                    </div>   
                </div>
            
            
            
           
        </div>
    )
}

export default Page;
