import React, { Component } from 'react';
import axios from 'axios';

import { Table, InputGroup, FormControl, Container, Button } from 'react-bootstrap';

import classes from './PokemonList.module.css';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

class PokemonList extends Component {
    state = {
        pokeList: [],
        originalList: [],
        detailPokemon: {
            height: 0,
            name: 'name',
            front_default: '',
            back_default: '',
            stats: [],
            types: []
        },
        showModal: false,
        charged: false
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => {
            this.setState({ pokeList: res.data.results, originalList: res.data.results, charged: true })
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
    }

    showPokemon = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
            this.setState({
                detailPokemon: {
                    height: res.data.height,
                    name: res.data.name,
                    front_default: res.data.sprites.front_default,
                    back_default: res.data.sprites.back_default,
                    stats: res.data.stats,
                    types: res.data.types
                },
                showModal: true
            })
        });
    }
    filter = (event) => {
        let value = event.target.value;

        if (typeof (Number(value)) === 'number' && (Number(value) || Number(value) === 0)) {
            this.setState({
                pokeList: [...this.state.originalList].filter((element, id) => {
                    return ((id + 1 + '').includes(value));
                })
            })

        } else if (value === '') {
            this.setState({
                pokeList: [...this.state.originalList]
            })
        } else {

            this.setState({
                pokeList: [...this.state.originalList].filter((element, id) => {
                    return (element.name.toLowerCase().includes(value.toLowerCase()));
                })
            })
        }


    }
    render() {
        let list = <h1 className={classes.Error}>Pokemon not found</h1>;
        if (this.state.pokeList.length !== 0) {
            list = (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.pokeList.map((pokemon, id) => {
                            let pokemonId = pokemon.url.split('pokemon/')[1].split('/')[0]
                            return <tr key={id}>
                                <td>{pokemonId}</td>
                                <td className={classes.Name}>{pokemon.name}</td>
                                <td>
                                    <Button variant="info" onClick={() => this.showPokemon(pokemonId)}>Info</Button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            )
        }
        return (
            <Container className={classes.PokemonList}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Filter</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Name/No."
                        aria-label="Name/No."
                        aria-describedby="basic-addon1"
                        onChange={event => this.filter(event)}
                    />
                </InputGroup>
                <Modal
                    show={this.state.showModal}
                    clicked={this.closeModal}
                    name={this.state.detailPokemon.name}
                    height={this.state.detailPokemon.height}
                    stats={this.state.detailPokemon.stats}
                    types={this.state.detailPokemon.types}
                    back_default={this.state.detailPokemon.back_default}
                    front_default={this.state.detailPokemon.front_default} />
                {
                    (!this.state.charged) ? <Spinner/> :  list
                }
            </Container>
        )
    }
}

export default PokemonList;