import React, { useEffect, useState } from 'react';
import { Link, Container, Grid, Typography, createStyles, withStyles } from '@material-ui/core';
import withRoot from '../../withRoot';
import { getPokemonbyId } from '../../data/pokedexdata';

const styles = (theme) => createStyles({

});

function Details(props) {
    const { id } = props.match.params;
    const [pokemonData, setPokemonData] = useState(undefined);

    useEffect(() => {
        let data = getPokemonbyId(id);
        setPokemonData(data);
    }, []);

    return (
        <Container>
            {pokemonData !== undefined &&
                <Grid container>
                    <Grid xs={12}>
                        <Grid item xs={6}>
                            <Typography>Name</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{pokemonData.name}</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12}>
                        <Grid item xs={6}>
                            <Typography>Num</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{pokemonData.num}</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12}>
                        <Grid item xs={6}>
                            <Typography>Img</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{pokemonData.img}</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12}>
                        <Grid item xs={6}>
                            <Typography>Type</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{pokemonData.type}</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12}>
                        <Grid item xs={6}>
                            <Typography>Weaknesses</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{pokemonData.weaknesses}</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12}>
                        <Grid item xs={6}>
                            <Typography>Height</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{pokemonData.height}</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12}>
                        <Grid item xs={6}>
                            <Typography>Weight</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{pokemonData.weight}</Typography>
                        </Grid>
                    </Grid>
                    {pokemonData.prev_evolution &&
                        <Grid xs={12}>
                            <Grid item xs={6}>
                                <Typography>prev_evolution</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                {pokemonData.prev_evolution.forEach(evolution => {
                                    <Typography>
                                        <Link component="button" to={`/details/${evolution.num}`}>
                                            {evolution.name}
                                        </Link>
                                    </Typography>
                                })}
                            </Grid>
                        </Grid>
                    }
                    {pokemonData.next_evolution &&
                        <Grid xs={12}>
                            <Grid item xs={6}>
                                <Typography>next_evolution</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                {pokemonData.next_evolution.forEach(evolution => {
                                    <Typography>
                                        <Link component="button" to={`/details/${evolution.num}`}>
                                            {evolution.name}
                                        </Link>
                                    </Typography>
                                })}
                            </Grid>
                        </Grid>
                    }
                </Grid>
            }``
        </Container>
    )
};

export default withRoot(withStyles(styles)(Details))