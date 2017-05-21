import React, { Component } from 'react';

class MyComponent extends Component {
    state = {
        lastName: '',
        firstName: '',
        names: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = (e) => {
        const { lastName, firstName, names } = this.state;

        this.setState({
            lastName: '',
            firstName: '',
            names: [...names, `${lastName} ${firstName}`]
        });

        //   this.lastNameInput.focus();
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        const { handleChange, handleClick, handleKeyPress } = this;
        const { lastName, firstName, names } = this.state;

        return (
            <div>
                <input
                    type="text"
                    name="lastName"
                    placeholder="성"
                    onChange={handleChange}
                    value={lastName}

                />
                <input
                    type="text"
                    name="firstName"
                    placeholder="이름"
                    onChange={handleChange}
                    value={firstName}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleClick}>등록</button>
                <h2>{lastName} {firstName}</h2>
                {
                    names.map((name, index) =>
                        <h3 key={index}>{name}</h3>)
                }
            </div>
        )
    }
}

export default MyComponent;