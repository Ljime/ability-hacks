import classes from './News.module.css'
import Article from '../components/Article'
import kanna1 from "../assets/kanna1.jpg"
import kanna2 from "../assets/kanna2.jpg"
import { v4 as uuidv4 } from "uuid"
export default function News() {
    return (
        <div className={classes.news}>
            <Article
                title="NomNom"
                desc="DESCDESCDESCDECDESCDESDESC"
                img={kanna1}
                key={uuidv4()}
            />
            <Article
                title="NomNom"
                desc="DESCDESCDESCDECDESCDESDESC"
                img={kanna2}
                key={uuidv4()}
            />
        </div>
    )
}
