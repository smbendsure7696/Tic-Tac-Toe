import React from 'react';
import './style.css';
import GridItem from '../GridItem';
export default class GridRow extends React.Component
{
    
    render() {
    const gridItemArray = [<GridItem />,<GridItem />,<GridItem />];
    return <div class="grid-row">{gridItemArray}</div> ;
    }
}    



