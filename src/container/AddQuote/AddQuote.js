import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import axiosPhrases from "../../axios-phrases";
import Spinner from "../../components/UI/Spinner/Spinner";
import {CATEGORY} from "../../constants";
import './AddQuote.css'
class AddQuote extends Component {
    state ={
        author: '',
        category: CATEGORY[0],
        text: '',
        loading: false,
    };
    inputValueChanged = e => this.setState({[e.target.name]: e.target.value});
    submitHandler = async (e) => {
        e.preventDefault();
        const quotes = {
            author: this.state.author,
            text: this.state.text,
            category: this.state.category,
        };
        this.setState({loading: true});
        await axiosPhrases.post('/phrases.json', quotes);
        this.setState({loading: false});
        this.props.history.push('/')

    };
    render() {
        let form = (
            <form action="" onSubmit={this.submitHandler} className='container'>
                <h1>Submit new quote</h1>
                <div className='field'>
                    <label className='label'>Category</label>
                    <select name='category' value={this.state.category} onChange={this.inputValueChanged}>
                        {CATEGORY.map(q => (
                            <option key={q} value={q}>{q}</option>
                        ))}
                    </select>
                </div>
                <div className='field'>
                    <label htmlFor="author" className='label'>Author</label>
                    <input
                        type="text"
                        id='author'
                        name='author'
                        value={this.state.author}
                        onChange={this.inputValueChanged}
                    />
                </div>
                <div className='field'>
                    <label htmlFor="text" className='label'>Quote text</label>
                    <textarea
                        name="text"
                        id="text"
                        cols="30"
                        rows="10"
                        value={this.state.text}
                        onChange={this.inputValueChanged}
                    />
                </div>
                <button type='submit' className='btn'>Save</button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div>
                <Header/>
                {form}
            </div>
        );
    }
}

export default AddQuote;