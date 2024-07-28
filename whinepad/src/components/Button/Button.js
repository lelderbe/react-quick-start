import cx from 'classnames';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = (props) =>
    props.href ? (
        <a {...props} className={cx('Button', props.className)}>
            {props.children}
        </a>
    ) : (
        <button {...props} className={cx('Button', props.className)} />
    );

Button.propTypes = {
    href: PropTypes.string,
};
