import React, { useEffect, useState } from "react";
import Articles from "./Articles";

export default function Form(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const rssUrl = props.rssUrl
            // const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
            // if (!urlRegex.test(rssUrl)) {
            //     return;
            // }
            const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
            const { contents } = await res.json();
            console.log(contents)
            const feed = new window.DOMParser().parseFromString(contents, "text/xml");
            const items = feed.querySelectorAll("item");
            let feedItems = [];
            for (let i = 0; i < items.length; ++i) {
                let title = items[i].querySelector("title").innerHTML.replace("<![CDATA[", "").replace("]]>", "");
                let description = items[i].querySelector("description");
                if (description && description !== "") {
                    description = description.innerHTML.replace("<![CDATA[", "").replace(/<\/?[^>]+(>|$)/g, "").replace("…Read more...", "").replace("]]>", "")
                }
                else {
                    description = "No description available.";
                }
                let date = items[i].querySelector("pubDate");
                if (date) {
                    date = date.innerHTML
                }
                let link = ""
                rssUrl == "https://moxie.foxnews.com/google-publisher/latest.xml" ? link = items[i].querySelector("guid") : link = items[i].querySelector("link");
                if (link) {
                    link = link.innerHTML;
                }

                feedItems.push({ "title": title, "description": description, "date": date, "link": link })
            }

            setItems(feedItems);
        }

        fetchData();
    });


    return (

        <Articles data={items} />

    );
}