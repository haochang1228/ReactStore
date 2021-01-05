import React from 'react';
import ToolBox from 'components/ToolBox';
import Product from 'components/Product';

class Products extends React.Component{

    products = [
    {
        id:1,
        name: 'Air Jordan 4',
        image: '/images/1.jpg',
        tags:'45 Colors',
        price: 3500,
        status:'unavaliable'
    },
    {
        id:2,
        name: 'PG3',
        image: '/images/2.jpg',
        tags:'45 Colors',
        price: 4500,
        status:'avaliable'
    },
    {
        id:3,
        name: 'why not zero0.2',
        image: '/images/3.jpg',
        tags:'45 Colors',
        price: 6500,
        status:'avaliable'
    },
    {
        id:4,
        name: 'westbrook 4',
        image: '/images/4.jpg',
        tags:'45 Colors',
        price: 8300,
        status:'avaliable'
    },
    {
        id:5,
        name: 'westbrook 5',
        image: '/images/5.jpg',
        tags:'45 Colors',
        price: 8300,
        status:'avaliable'
    },
    ];

    render(){
        return(
            <div>
              <ToolBox />
                <div className="products">
                    <div className="columns is-multiline is-desktop">
                        {this.products.map(p => {
                                return(
                                    <div className="column is-3" key={p.id}>
                                        <Product product={p} />
                                    </div>
                                );
                        })}                        
                    </div> 
                </div>
            </div>
        );
    }
}

export default Products;