/*global $*/

(async function () {
    'use strict';

    const theTable = $('#contactsTable tbody');

    let contacts = [];

    function addContact(newContact) {
        if (!contacts.length) {
            theTable.empty();
        }

        contacts.push(newContact);
        createRow(newContact).appendTo(theTable);
    }

    function createRow(contact) {
        const newRow = $(`<tr>
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>
                <button class="edit">edit</button>
                <button class="delete">delete</button>
            </td>
         </tr>`);

        newRow.data('contact', contact);

        newRow.find('.delete').click(async () => {
            try {
                const res = await fetch(`api/contacts/${contact.id}`, {
                    method: 'DELETE'
                });

                if (!res.ok) {
                    const result = await res.json();
                    throw new Error(`${res.status} ${res.statusText} ${result.error}`);
                }

                newRow.remove();
                contacts = contacts.filter(c => c !== contact);
            } catch (error) {
                pcs.messageBox.show(error, true);
            }
        });

        newRow.find('.edit').click(async () => {
            showContactForm(contact);
        });

        return newRow;
    }

    function findRow(contact) {
        const children = theTable.children();
        const theRow = children.filter(r => $(children[r]).data('contact').id === contact.id);
        return theRow;
    }

    function updateContact(originalContact, updatedContact) {
        Object.assign(originalContact, updatedContact);

        findRow(originalContact)
            .replaceWith(createRow(originalContact));
    }

    const firstNameInput = $('#first');
    const lastNameInput = $('#last');
    const emailInput = $('#email');
    const phoneInput = $('#phone');
    const contactForm = $('#contactForm');

    contactForm.submit(async event => {
        event.preventDefault();

        const newContact = {
            firstName: firstNameInput.val(),
            lastName: lastNameInput.val(),
            email: emailInput.val(),
            phone: phoneInput.val()
        };

        // TBD - rewrite as separate post and put paths
        const existingContact = contactForm.data('contact');
        const url = 'api/contacts' + (existingContact ? `/${existingContact.id}` : '');
        const method = existingContact ? 'PUT' : 'POST';
        try {
            const res = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(newContact)
            });

            const ok = res.ok;

            let result;
            if (!ok || !existingContact) {
                result = await res.json();

                if (!ok) {
                    throw new Error(`${res.status} ${res.statusText} ${result.error}`);
                }
            }

            if (!existingContact) {
                addContact(result);
            } else {
                updateContact(existingContact, newContact);
            }

            hideContactForm();
        } catch (error) {
            pcs.messageBox.show(error, true);
        }
    });

    function hideContactForm() {
        contactForm.slideUp('fast'); // 5000);
        contactForm[0].reset();
        contactForm.data('contact', null);
    }

    $('#cancel').click(() => {
        hideContactForm();
    });

    $('#addContact').click(() => {
        showContactForm();
    });

    function showContactForm(contact) {
        if (contact) {
            firstNameInput.val(contact.firstName);
            lastNameInput.val(contact.lastName);
            emailInput.val(contact.email);
            phoneInput.val(contact.phone);
            contactForm.data('contact', contact);
        }
        contactForm.slideDown('slow');
    }

    async function loadContacts() {
        try {
            const response = await fetch('api/contacts');
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const loadedContacts = await response.json();

            const toDelete = contacts.filter(lc => !loadedContacts.find(c => c.id === lc.id))
            toDelete.forEach(ctd => {
                const row = findRow(ctd);
                row.remove();
            });
            
            loadedContacts.forEach(contact => {
                const originalContact = contacts.find(c => c.id === contact.id);
                if (originalContact) {
                    updateContact(originalContact, contact);
                } else {
                    addContact(contact);
                }
            });

            contacts = loadedContacts;
        }
        catch (error) {
            pcs.messageBox.show(error, true);
        }
    }

    setInterval(loadContacts, 5000);
    loadContacts();
}());