/**
 * @copyright   2016-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import React from 'react';
import PropTypes from 'prop-types';

export interface LinkProps {
  children: React.ReactNode;
  href: string;
  newWindow?: boolean;
  onClick?: () => void | null;
}

export default class Link extends React.PureComponent<LinkProps> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    newWindow: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    newWindow: false,
    onClick: null,
  };

  render() {
    const { children, href, onClick, newWindow } = this.props;

    return (
      <a
        href={href}
        target={newWindow ? '_blank' : undefined}
        onClick={onClick}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
}
