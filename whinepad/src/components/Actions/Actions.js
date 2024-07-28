import PropTypes from 'prop-types';
import './Actions.css';

import deleteImage from './assets/close.svg';
import editImage from './assets/edit.svg';

import { Button } from '../Button/Button';

export const Actions = ({ onAction = () => {} }) => (
    <span className="Actions">
        <Button className="ActionsInfo" title="More info" onClick={() => onAction('info')}>
            View Details
        </Button>
        <Button title="Edit" onClick={() => onAction('edit')}>
            <img src={editImage} alt="Edit" />
        </Button>
        <Button tabIndex="0" title="Delete" onClick={onAction.bind(null, 'delete')}>
            <img src={deleteImage} alt="Delete" />
        </Button>
    </span>
);

Actions.propTypes = {
    onAction: PropTypes.func,
};
