import { useState } from 'react';
import Search from './Search';
const SearchList=({query, queryFunction})=>{
    

    
    return(
        <>
            
            <Search 
                query={query} 
                queryFunction={queryFunction}
                
                

            />
            {/* <List data={list} query={search} completed={completed} /> */}
        </>
    )

}

export default SearchList;
