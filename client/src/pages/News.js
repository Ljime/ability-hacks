import classes from './News.module.css'
import Article from '../components/Article'
import db from "../config"
import React, { useState } from 'react'
import { getDocs, collection } from "firebase/firestore";
import Button from '../components/Button';

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
        for (let i = 0; i < headlines.length; i++) {
            readLine(headlines[i]);
        }
    }

    function readDesc(desc) {
        var msg = new SpeechSynthesisUtterance();
        msg.rate = 0.9;
        msg.pitch = 0.8;
        msg.text = desc;
        window.speechSynthesis.speak(msg);
    }

    const pauseAudio = () => {
        window.speechSynthesis.cancel()
    }

    if (loading) {
        return <h1>Loading</h1>

    }
    return (
        <div className={classes.news}>
            <Button className={classes.button} onClick={playAudio}>
                Read HeadLines
            </Button>
            <Button className={classes.button} onClick={pauseAudio}>
                Pause Audio
            </Button>
            <div className={classes.container}>
                <h1>
                    {">>"} Click Article To Read Desc {"<<"}
                </h1>
            </div>
            {myArticles.map((x) => (
                <Article
                    key={x.title}
                    title={x.title}
                    desc={x.desc}
                    img={x.img}
                    urlToSite={x.link}
                />
            ))}
        </div>
    )
}
