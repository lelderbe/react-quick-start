import './Header.css';

import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';

export function Header({ onSearch, onAdd, count = 0 }) {
    const placeholder = count > 1 ? `Search ${count} items` : 'Search';

    return (
        <div className="Header">
            <Logo />
            <div>
                <FormInput placeholder={placeholder} id="search" onChange={onSearch} />
            </div>
            <div>
                <Button onClick={onAdd}>
                    <b>&#65291;</b> Add whine
                </Button>
            </div>
        </div>
    );
}
