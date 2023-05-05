import { Component } from 'react';
import { Title } from '../Title/Title';

class Form extends Component {
    constructor( props ) {
        super( props );
    }

    state = {
        name: '', number: '',
    };
    handleInput = e => {
        this.setState( {
            [e.currentTarget.name]: e.currentTarget.value,
        } );
    };



    render() {
        return ( <>
            <form
                style={ {
                    display: 'flex', flexDirection: 'column',
                } }
                onSubmit={ }
            >
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={ this.state.name }
                        onChange={ this.handleInput }
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={ this.state.number }
                        onChange={ this.handleInput }
                    />
                </label>
                <button type="submit" onSubmit={ this.handleAddUser }>
                    Add contact
                </button>
            </form>
            <Title title="Contacts" />
            <input
                type="text"
                name="filter"
                onChange={ this.handlerFilter }
                value={ this.state.filter }
            />
            <ul>
                { contacts.map( ( { id, name, number } ) => {
                    return ( <li key={ id }>
                        { name }: { number }
                    </li> );
                } ) }
            </ul>
        </> );
    }
}

export default Form;
