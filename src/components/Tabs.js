import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Form from './Form';

export default function Tabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="CNN" value="1" />
                    <Tab label="New York Times" value="2" />
                    <Tab label="Huffington Post" value="3" />
                    <Tab label="Fox News" value="4" />
                    <Tab label="Life Hacker" value="5" />
                </TabList>
            </Box>
            <TabPanel value="1"><Form rssUrl="http://rss.cnn.com/rss/cnn_topstories.rss" /></TabPanel>
            <TabPanel value="2"><Form rssUrl="https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml" /></TabPanel>
            <TabPanel value="3"><Form rssUrl="https://www.huffpost.com/section/front-page/feed?x=1" /></TabPanel>
            <TabPanel value="4"><Form rssUrl="https://moxie.foxnews.com/google-publisher/latest.xml" /></TabPanel>
            <TabPanel value="5"><Form rssUrl="https://lifehacker.com/rss" /></TabPanel>
        </TabContext>
    )
}