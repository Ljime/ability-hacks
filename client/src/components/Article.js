import classes from './Article.module.css'

export default function News(props) {
	return (
        <a href={props.urlToSite}>
        <article className={classes.article}>
            <div>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
            <div className={classes.imgContainer}>
                <img src={props.img} alt={props.key}></img>
            </div>
        </article>
        </a>
    )
}
