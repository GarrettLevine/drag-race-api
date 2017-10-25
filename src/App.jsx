import React from 'react';

export default class App extends React.Component {
    componentDidMount() {
        console.log('what');
        fetch('/api/queens', {
            method: 'GET',
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <section className='app__container'>
                <h1>Gentlman start your engines</h1>
                <h3> And may the best woman win</h3>
                <h3> henny</h3>
            </section>
        );
    }
}
