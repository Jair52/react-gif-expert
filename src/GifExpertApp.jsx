import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    const newCategorie = 'Valorant';
    const arrLower = categories.map((elem) => elem.toLowerCase());

    const onAddCategory = ( newCategory ) => {
        // console.log( newCategory )

        if( arrLower .includes(newCategory.toLowerCase())) return;

                // categories.push(newCategorie);

        setCategories([newCategory,...categories ]);
        // setCategories( cat => [...cat,newCategorie]);
    }

    

    return (
    <>
        
        {/* titulo */}
        <h1>GifExpertApp</h1>
        
        {/* input */}
        <AddCategory
            // categoriAdd = {setCategories}
            onNewCategory={(value) => onAddCategory( value ) }
        />

        {categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category={ category }/>
            ))
        } 
        
        {/* <button onClick={onAddCategory}>Agregar</button> */}

  
    </>
  )
}
