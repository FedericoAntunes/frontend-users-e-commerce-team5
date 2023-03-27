import React from 'react'
import { Link } from 'react-router-dom';


function CardProductCategory({slug,model,image,brand,price}) {
    return (
        <Link
          to={`/product/${slug}`}
          className="cardProduct w-[80%]  flex flex-col items-center justify-center bg-bgPrimaryColor "
        >  
          <img className="w-[30vw] h-[60vh] border border-bgFourthColor object-contain" src={image} alt={brand + model} />
          <div className='w-[100%] text-left'>
            <img src={brand.logo} alt="" />
            <h1 className='title-card-category'>{model}</h1>
            <span>${price}</span>
          </div>
        </Link>
      );
}

export default CardProductCategory