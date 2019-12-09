import React from 'react';

export default ({ todos }) => {
    const remaining = todos.filter(todo => !todo.complete).length;
    const phrase = remaining === 1 ? ' item left' : ' items left';

    return (
        <footer>
            <h5>&copy; Copyright PCS 2019</h5>
            <strong>
                {remaining}
            </strong>
            {phrase}
        </footer>
    );
}