import classes from "./Article.module.css";

export default function News(props) {
  function readDesc() {
    window.speechSynthesis.cancel(); 

    var msg = new SpeechSynthesisUtterance();
    msg.rate = 0.9;
    msg.pitch = 0.8;
    msg.text = props.desc;
    window.speechSynthesis.speak(msg);
}

  return (
    <a onClick={readDesc} >
      <article className={classes.article}>
        <div className={classes.info}>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
        <div className={classes.imgContainer}>
          <a href={props.urlToSite} target="_blank">
            <img src={props.img} alt="Image not provided" ></img>
          </a>
          
        </div>
      </article>
    </a>
  );
}
