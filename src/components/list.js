import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Img from 'gatsby-image';

export default function List({ items }) {
    const style = {
        textShadow: 'none',
    };
    return (
        <GridList cols={2}>
            {items.map(({ href, label, description, img }, i) => (
                <GridListTile className="grid-tile" key={i} component="a" href={href} target="_blank" style={style}>
                    <Img fluid={img.childImageSharp.fluid} />
                    <GridListTileBar className="grid-title-bar" title={label} />
                </GridListTile>
            ))}
        </GridList>
    );
}
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
