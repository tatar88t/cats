import stl from './card.module.scss';

import React from 'react';
import cn from 'classnames';

const Card = (props) => {
    let {id, sloganDef, sloganWarn, title, compose, portions, gift, note, weight, chosen, disabled, underline} = props.item;
    console.log(sloganDef)

   
    const Buy = () => {
        return (
            <div className = {stl.buy}>
                {underline.buy} <a onClick = {() => props.onSelect(id)}>купи.</a>
            </div>

        )
    }

    const onEnter = (e) => {
        e.target.classList.add(stl.cardMouseOn)
        console.log('ENTER')
        // e.target.classList.add(stl.cardSelectedMouseOn)  

    }
    const onLeave = (e) => {
        e.target.classList.remove(stl.cardMouseOn)
        e.target.classList.remove(stl.cardSelectedMouseOn)  
    }
    const onEnterSelected = (e) => {
        e.target.classList.add(stl.cardSelectedMouseOn)
      
    }

    return (
        <div className={stl.cardWrapper}>
            <div 
            className={cn({[stl.cardSelected]:chosen}, {[stl.cardDisabled]:disabled}, stl.card) } 
            onClick = {() => !disabled ? props.onSelect(id) : null}
            onMouseOver = {!chosen ? onEnter : onEnterSelected}
            onMouseLeave = {onLeave}>
                <div className={cn({[stl.cardMaskDisabled]:disabled}, null)}></div>  
                <div className = {stl.corner}></div>  
                <div className={stl.cardImage}>
                    
                    <div className={stl.capture}>
                        <span className={stl.sloganDefault}>{sloganDef}</span>
                        <span className={stl.sloganWarning}>{sloganWarn}</span>
                        <h2>{title}</h2>
                        <h3>{compose}</h3>
                        <div className={stl.descr}>
                            <span>{portions} порций</span> 
                            <br/>   
                            <span>{gift}</span>
                            <br/>
                            <span>{note}</span>
                        </div>
                    </div> 

                    <div className = {stl.weight}>
                        <span>{weight}</span>
                        <br/>
                        <span>кг</span>
                    </div>
                </div>  
            </div>
            <div className={stl.underline}>
                <span>{!disabled ? (!chosen ?  <Buy /> : underline.selected) : underline.disabled}</span>
            </div>
        </div>
        
    )
}

export default Card;
