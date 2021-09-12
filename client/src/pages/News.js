import classes from './News.module.css'
import Article from '../components/Article'
import kanna1 from "../assets/kanna1.jpg"
import kanna2 from "../assets/kanna2.jpg"
import { v4 as uuidv4 } from "uuid"
import db from "../config"
import React, { useState } from 'react'
import { getDocs, collection } from "firebase/firestore";

export default function News() {
    const [myArticles, setArticles] = useState([]);
    const [headlines, setHeadlines] =  useState([]);
    const [loading, setLoading] = useState(true);
    let myData = [];
    let myHeadlines = [];

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getDocs(collection(db, "articles"));
            data.forEach((doc) => {
                myData.push(doc.data());
                console.log(doc.data());
                myHeadlines.push(doc.data().title + " ");
            })

            setArticles(myData);
            setHeadlines(myHeadlines);
            setLoading(false);
            playAudio();
        }

        fetchData();
    }, []);      

    function readLine(i) {
        var msg = new SpeechSynthesisUtterance();
        msg.rate = 0.9;
        msg.pitch = 0.8;
        msg.text = i;
        window.speechSynthesis.speak(msg);
    }

    function playAudio() {
        console.log('playing')
        for (let i = 0; i < headlines.length; i++) {
            readLine(headlines[i]);
        }
    }

    if (loading) {
        console.log(myArticles[0])

        return <h1>Loading</h1>

    }

    return (
        <div className={classes.news}>
            <button onClick={playAudio}>Play Audio</button>

            {myArticles.map(x => <Article key={x.title} title={x.title} desc={x.desc} img={x.img} urlToSite={x.link}/>)}
        </div>
    )
}
