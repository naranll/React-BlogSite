import Card from "react-bootstrap/Card";
import "../../styles/articles.css";


function limitWords(str) {
    return str.split(' ').filter(function (num) {
        return num !== ''
    }).slice(0, 25).join(' ');
}

export default function Articles(props) {

    return <div className="articles">
        {
            props.data.map((article, index) => {
                return <Card key={index} className="articleCard">
                    {/* <div className="cardImgContainer">
                        <img src={article.image} className="cardImage"></img>
                    </div> */}
                    
                    <span className="cardImgContainer">
                        <img src={article.image} className="cardImage"></img>
                    </span>
                    <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">{article.title}</Card.Title>
                        <Card.Text className="description">{limitWords(article.description)}...</Card.Text>
                        <Card.Link href="#" className="cardLink">Read More</Card.Link>
                    </Card.Body>
                </Card>
            })
        }
    </div>
}