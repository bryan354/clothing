import React from 'react'
import shopData from './shopData'

import CollectionPreview from '../../components/Collection-preview.component'

class ShopPage extends React.Component {
    constructor(){
        super()

        this.state = {
            collection : shopData
        } 
    }

    render () {
        const {collection} = this.state;
        return (<div className='shop-page'>
            {
                collection.map(({id, ...otherCollectionProps})=> (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
            </div>)
    }
}

export default ShopPage;