import * as React from "react";
import Card from "@mui/material/Card";
import { Image } from "semantic-ui-react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";


export default function MyCard(props) {
    console.log("Props Data:");
    console.log(props);
    const isLoading = props.status;


    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                {isLoading
                    ?
                    <h2 className="card__title">Loading...</h2>
                    :
                    <>
                        <h2 className="card__title">Your IP is:</h2>
                        <h3> {props?.ip} </h3>
                        <h2 className="card__title">Your Country:</h2>
                        <h3> {props.location?.country} </h3>
                        <Image
                            // https://flagpedia.net/download/api
                            src={`https://flagcdn.com/w40/${props.location?.country.toLowerCase()}.png`}
                            // wrapped
                            ui={false}
                            size='mini'
                        />
                        <p>Internet Service Provider: {props?.isp} </p>
                        <p>Provider's city: {props.location?.city} </p>
                        <p>Lat: {props.location?.lat} Lng: {props.location?.lng}</p>
                        {/* <CountrySelect /> */}
                    </>

                }
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
