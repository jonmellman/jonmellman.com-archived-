import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Img from 'gatsby-image';
import IconButton from '@material-ui/core/IconButton';
import Octicon, { MarkGithub, LinkExternal } from '@githubprimer/octicons-react';

export default function List({ items }) {
    const iconStyle = {
        color: '#fff',
    };

    return (
        <GridList cols={3}>
            {items.map(({ label, description, img, externalLink, githubLink }, i) => (
                <GridListTile className="grid-tile" key={i}>
                    <Img fluid={img.childImageSharp.fluid} />
                    <GridListTileBar
                        className="grid-title-bar"
                        title={label}
                        subtitle={description}
                        actionIcon={(
                            <div className="icon-container">
                                {!githubLink ? null : (
                                    <IconButton style={iconStyle} component="a" href={githubLink} target="_blank">
                                        <Octicon size="medium" icon={MarkGithub} />
                                    </IconButton>
                                )}
                                {!externalLink ? null : (
                                    <IconButton style={iconStyle} component="a" href={externalLink} target="_blank">
                                        <Octicon size="medium" icon={LinkExternal} />
                                    </IconButton>
                                )}
                            </div>
                        )}
                    />
                </GridListTile>
            ))}
        </GridList>
    );
}
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
