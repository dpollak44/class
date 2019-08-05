/*global $*/

(function () {
    'use strict';

    const theTable = $('#contactsTable tbody');

    const contacts = [];

    function addContact(newContact) {
        if (!contacts.length) {
            theTable.empty();
        }

        contacts.push(newContact);

        theTable.append(`<tr>
                            <td>${newContact.firstName}</td>
                            <td>${newContact.lastName}</td>
                            <td>${newContact.email}</td>
                            <td>${newContact.phone}</td>
                         </tr>`);
    }

    const firstNameInput = $('#first');
    const lastNameInput = $('#last');
    const emailInput = $('#email');
    const phoneInput = $('#phone');
    const contactForm = $('#contactForm');

    contactForm.submit(event => {
        const newContact = {
            firstName: firstNameInput.val(),
            lastName: lastNameInput.val(),
            email: emailInput.val(),
            phone: phoneInput.val()
        };

        addContact(newContact);
        hideContactForm();

        event.preventDefault();
    });

    function hideContactForm() {
        //contactForm.hide();
        contactForm.slideUp('fast'); // 5000);
        contactForm[0].reset();
    }

    $('#cancel').click(() => {
        hideContactForm();
    });

    $('#addContact').click(() => {
        //contactForm.show();
        contactForm.slideDown('slow');
    });

    $('#loadContacts').click(async () => {
        /*fetch('contacts.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(loadedContacts => {
                loadedContacts.forEach(addContact);//contact => addContact(contact));
            })
            .catch(err => pcs.messageBox.show(err, true));*/

        try {
            const response = await fetch('xcontacts.json');
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const loadedContacts = await response.json();
            loadedContacts.forEach(addContact);
        }
        catch (err) {
            pcs.messageBox.show(err, true);
        }
    });
}());