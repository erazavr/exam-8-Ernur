import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import Quotes from "../../components/Quotes/Quotes";
import axiosPhrases from "../../axios-phrases";
import {CATEGORY} from "../../constants";
import {NavLink} from "react-router-dom";
import './MainPage.css'
class MainPage extends Component {
    state = {
        phrases: null,
    };
    dataQuote = async () => {
        let url = '/phrases.json';
        if (this.props.match.params.name) {
            url += `?orderBy="category"&equalTo="${this.props.match.params.name}"`
        }
        const response = await axiosPhrases.get(url);
        if (response.data) {
            this.setState({phrases: response.data})
        }
    };
    async componentDidMount() {
        this.dataQuote()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
            return this.dataQuote()
        }
    }
    removeQuote = async (id) => {
        await axiosPhrases.delete('/phrases/' + id + '.json');
        await this.props.history.replace('/')
    };
    render() {
        return (
            <div >
                <Header/>
                <div style={{float: 'left'}}>
                    <ul>
                        <li><NavLink to='/'>All</NavLink></li>
                        {CATEGORY.map(q=> (
                            <li key={q}>
                                <NavLink to={'/categories/' + q}>{q}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='container'>
                    {this.state.phrases !== null ? Object.keys(this.state.phrases).map(id => (
                        <Quotes
                            key={id}
                            text={this.state.phrases[id].text}
                            author={this.state.phrases[id].author}
                            id={id}
                            remove={()=>this.removeQuote(id)}
                        />
                    )):<h1>NOTHING</h1>}
                </div>
            </div>
        );
    }
}

export default MainPage;