import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import SummaryView from '../summaryView';
import ListView from '../listView';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const ListItemLink=(props)=> {
    return <ListItem button component="a" {...props} />;
  }

const SimpleTabs = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [searchValue, setSearchValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <><div className={classes.root}><AppBar position="static">
            <Toolbar className={classes.toolBar}>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    Today's Deals
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => { setSearchValue(e.target.value) }}
                    />
                </div>
            </Toolbar>
        </AppBar>
        </div>
            <div className={classes.verticalBar}>

                <Tabs value={value} onChange={handleChange} variant="scrollable"
                    aria-label="app tabs"
                    className={classes.tabs} orientation="vertical">
                    <Tab label="Summary View" {...a11yProps(0)} />
                    <Tab label="List of Deals" {...a11yProps(1)} >
                        </Tab>
                        <List component="nav" aria-label="secondary mailbox folders">
                            <ListItem button>
                                <ListItemText primary="Science" />
                            </ListItem>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Education" />
                            </ListItemLink>
                        </List>
                </Tabs>

                <TabPanel value={value} index={0}>
                    <SummaryView searchValue={searchValue} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ListView searchValue={searchValue} />
                </TabPanel>

            </div></>
    );
}

export default SimpleTabs;
