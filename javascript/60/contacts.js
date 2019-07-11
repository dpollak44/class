(function () {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, value) {
        element.style[property] = value;
    }

    const theTable = get('contactsTable');

    const contacts = [];

    function addContact(newContact) {
        if (!contacts.length) {
            theTable.deleteRow(1);
        }

        contacts.push(newContact);

        const row = theTable.insertRow();
        const firstNameCell = row.insertCell();
        const lastNameCell = row.insertCell();
        const emailCell = row.insertCell();
        const phoneCell = row.insertCell();

        firstNameCell.innerHTML = newContact.firstName;
        lastNameCell.innerHTML = newContact.lastName;
        emailCell.innerHTML = newContact.email;
        phoneCell.innerHTML = newContact.phone;
    }

    const firstNameInput = get('first');
    const lastNameInput = get('last');
    const emailInput = get('email');
    const phoneInput = get('phone');
    const contactForm = get('contactForm');

    contactForm.addEventListener('submit', event => {
        const newContact = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };

        addContact(newContact);
        hideContactForm();

        event.preventDefault();
    });

    function hideContactForm() {
        setCss(contactForm, 'display', 'none');

        /*firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';*/
        contactForm.reset();
    }

    get('cancel').addEventListener('click', () => {
        hideContactForm();
    });

    get('addContact').addEventListener('click', () => {
        setCss(contactForm, 'display', 'block');
    });
}());