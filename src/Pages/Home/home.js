import React, { useEffect, useState } from 'react';
import { Container, createStyles, withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import withRoot from '../../withRoot';
import { getAllPokemon } from '../../data/pokedexdata';
import { getPokemonTypeImages } from '../../data/pokemonTypeimages';

const styles = (theme) => createStyles({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

function Home(props) {
    const [pokemonData, setPokemonData] = useState(null);
    const classes = props.classes;

    // Runs after the component mounts (loads) or if a dependency in the dependency array changes 
    useEffect(() => {
        let data = getAllPokemon()
        setPokemonData(data)
    }, []);

    const createImageElements = (urls) => {
        return urls.map(url => <img className={classes.image} src={url} />)
    }

    return (
        <Container>
            <div className={classes.paper}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right" className={classes.TableHead}>Name</TableCell>
                                <TableCell align="right" className={classes.TableHead}></TableCell>
                                <TableCell align="right" className={classes.TableHead}>Num</TableCell>
                                <TableCell align="right" className={classes.TableHead}>Type</TableCell>
                                <TableCell align="right" className={classes.TableHead}>Weaknesses</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pokemonData && pokemonData.map((pokemon) => {

                                const pokemonTypeImagesUrl = getPokemonTypeImages(pokemon.type);
                                const pokemonWeaknessImageUrls = getPokemonTypeImages(pokemon.weaknesses);

                                return (
                                    <TableRow key={pokemon.num}>
                                        <TableCell align="right">
                                            <Link to={`/details/${pokemon.num}`}>
                                                {pokemon.name}
                                            </Link>
                                        </TableCell>
                                        <TableCell align="right">
                                            <img src={pokemon.img} alt={pokemon.name} />
                                        </TableCell>
                                        <TableCell align="right">{pokemon.num}</TableCell>
                                        <TableCell align="right">{createImageElements(pokemonTypeImagesUrl)}</TableCell>
                                        <TableCell align="right">{createImageElements(pokemonWeaknessImageUrls)}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>
    );
}

export default withRoot(withStyles(styles)(Home));