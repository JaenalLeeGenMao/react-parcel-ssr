import React, { Component } from 'react';
import { withRouter, matchPath } from 'react-router';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import routes from '~/routes';

// globalStyle.js
import styled, { css } from 'styled-components';

import styles from './Header.css';
const cx = classnames.bind(styles);

class Header extends Component {
    isActive = path => {
        const { pathname } = this.props.location;
        const reg = new RegExp(`^${path}$`);
        return !!pathname.match(reg);
    };

    render() {
        const { title } = this.props;
        const complexMixin = css`
            color: ${props => (props.whiteColor ? 'white' : 'black')};
        `;

        // This is an example of a nested interpolation
        const StyledComp = styled.div`
            ${props => (props.complex ? complexMixin : 'color: blue;')};
        `;
        return (
            <header className={styles.header}>
                <StyledComp complex whiteColor>
                    Styled Components
                </StyledComp>
                <nav className={styles.nav}>
                    <Link
                        className={cx('item', { active: this.isActive('/') })}
                        to="/"
                    >
                        HOME
                    </Link>
                    <Link
                        className={cx('item', {
                            active: this.isActive('/about')
                        })}
                        to="/about"
                    >
                        ABOUT
                    </Link>
                    <Link
                        className={cx('item', {
                            active: this.isActive('/user')
                        })}
                        to="/user"
                    >
                        USER
                    </Link>
                </nav>

                <h1 className={styles.title}>{title}</h1>
            </header>
        );
    }
}

export default withRouter(Header);
