import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function withTheme(theme) {
    return function (WrappedComponent) {
        return (
            <MuiThemeProvider theme={theme}>
                {WrappedComponent}
            </MuiThemeProvider>
        );
    }
}

export default function List({ items }) {
    const headerTheme = createMuiTheme({
        typography: {
            useNextVariants: true,
            fontFamily: "'Varela Round',sans-serif",
        },
    });

    return (
        <div>
            {items.map(({ href, label, description }, i) => (
                <Card key={i}>
                    {withTheme(headerTheme)(<CardHeader title={label} />)}
                    <CardContent>
                        {description}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
