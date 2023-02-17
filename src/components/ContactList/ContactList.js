import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './ContactList.module.css';

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  };

  render() {
    const { contacts, filter, onClick } = this.props;
    const filtredContactList = contacts.filter(contact => {
      const name = contact.name.toLowerCase();
      return name.includes(filter.toLowerCase());
    });

    return (
      <ul className={s.list}>
        {filtredContactList.map(contact => {
          return (
            <Contact key={contact.id} contact={contact} onClick={onClick} />
          );
        })}
      </ul>
    );
  }
}

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { contact, onClick } = this.props;
    const { id, name, number } = contact;
    return (
      <li id={id} className={s.item}>
        <p>
          {name}: {number}
        </p>
        <button className={s.button} type="button" onClick={onClick}>
          
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
        </button>
      </li>
    );
  }
}
