import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import "./Home.css"
function Main() {
  return (
    <div className="main">
      <h4>Bienvennue Chez Nous</h4>
      <div className="cards">
        <Card className="card">
          <Card.Img
            variant="top"
            src="https://thegoodlife.fr/wp-content/uploads/sites/2/2022/11/the-good-life-voitures-de-luxe-marques-reticentes-vignette_3744x2400.jpg"
            style={{ width: "450px", height: "350px" }}
          />
          <Card.Body>
            <Card.Title>La BMW iX xDrive 40. BMW</Card.Title>
            <Card.Text>
              La voiture électrique a bien des atouts. Elle est silencieuse,
              elle accélère fort, elle coûte peu cher à recharger… Alors,
              pourquoi les marques de prestige tardent-elles à adhérer à la
              voiture électrique ? Les constructeurs généralistes ont quasiment
              tous un ou plusieurs voitures électriques à leur catalogue. C’est
              loin d’être le cas des marques de prestige.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img
            variant="top"
            src="https://www.numerama.com/wp-content/uploads/2016/09/renault-trezor-1.png"
            style={{ width: "450px", height: "350px" }}
          />
          <Card.Body>
            <Card.Title>
              Renault rêve d’une voiture de luxe, électrique et autonome
            </Card.Title>
            <Card.Text>
              La pratique de la voiture concept peut paraître un brin obscure
              quand on ne s’intéresse que de loin au marché de l’automobile.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img
            variant="top"
            src="https://www.largus.fr/images/images/voiture-noire.jpg"
            style={{ width: "450px", height: "350px" }}
          />
          <Card.Body>
            <Card.Title> BUGATTI CENTODIECI</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Main;
