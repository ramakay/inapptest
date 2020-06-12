import Head from "next/head";
import React,{ useState } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Modernizr from "modernizr"; // eslint-disable-line no-unused-vars
import { Suspense } from "react";
import fetcher from "../lib/fetch";
import useSWR from "swr";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {appStyles} from '../style/theme'

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from '@material-ui/core/CardHeader';
import Autocomplete from '@material-ui/lab/Autocomplete';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import db from '../services/firebaseservice';
import {dateFormat} from '../utils/formatters';
import {lightTheme, darkTheme} from '../style/theme'

/* Components */
import {Header} from '../components/header'
import {FeaturesList} from '../components/featuresList'

/* TODO
  1. Format into  /modules
  2. Constants
*/

/* util/themes */
const isServer = typeof window === "undefined";
const identifyUAApi = !isServer
? `https://api.userstack.com/detect?access_key=01ebd9c577763f1efbff8739fe93026f&ua=${navigator.userAgent}`
: null;

const FetchData = () => {
  console.log(identifyUAApi);

  const { data } = useSWR(identifyUAApi, fetcher, { suspense: true });

  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <ThemeProvider theme={lightTheme}>
    <Header data={data} />
    </ThemeProvider>
      <Paper elevation={3}>
            <form noValidate autoComplete="off">
            <Typography gutterBottom variant="h5" component="h2">
              Incorrect?
            </Typography> 
        <TextareaAutosize
          rowsMax={5}
          className={appStyles().uaTextArea}
          id="standard-basic"
          label="Standard"
          value={data.ua}
        />
        <Button variant="contained" color="primary" onClick={() => { packageandSend(data) }} >
          Submit your user-agent
        </Button>
      </form>
      </Paper>
      <div>{/* {JSON.stringify(data)} */}</div>
      </ThemeProvider>
    </>
  );
};

const RetreiveUADetails = () => {
  // const uaRef = useFirestore()
  // .collection('browsers')
  // .doc('capabilities');

  // const subscribeUADetails = useFirestoreDocData(uaRef);
  // console.log(subscribeUADetails)
  // const storedData = subscribeUADetails.uaDetails;
  // return(
  //   <>
  // {storedData}
  // </>
 // )

}
const CheckLocalStorage = () => {
  const localStorageResult = Modernizr.localstorage;
  if (process.browser && Modernizr.localstorage) {
    const localStorageGetItem =
      window.localStorage.getItem("returnValue5") === null
        ? "Not set yet, Reload!"
        : window.localStorage.getItem("returnValue5");
    const localStorageItem =
      localStorageGetItem === null ||
      localStorageGetItem === "" ||
      localStorageGetItem === undefined ||
      localStorageGetItem === "Not set yet, Reload!"
        ? window.localStorage.setItem(
            "returnValue5",
            `your local storage timestamp is  ${dateFormat()}`
          )
        : null;
    ``;
    console.log(localStorageItem, "<<<<");

    return (
      <>
        <div className="localStorage">
          {localStorageGetItem}
          vs the hash &nbsp;
          {dateFormat()}
        </div>
      </>
    );
  }
};


const bootstrap = (ua) => {

  try {
    if (process.browser && Modernizr) {
      /* TODO: This can be via Modernizr's own API */
      const featureDetectClasses = document.getElementsByTagName("html")[0].getAttribute("class");
        let noFeaturesArray = featureDetectClasses.split(" ").filter(noFeature => noFeature.indexOf("no-") > -1); 
        let noFeaturesObject  = {}
        noFeaturesObject["fd"] = Object.assign({},noFeaturesArray)
        noFeaturesObject["time"] = Date.now(),
        noFeaturesObject["ua"]  = ua
      
        return noFeaturesObject;
    }
  } catch (e) {
    console.log("Error occured in running Modernizr tests", e);
  }
};

let bootstrapData = bootstrap() ;



const packageandSend = (ua) => {
  let setDoc = db.collection('browsers')
  .add(bootstrap(ua)).then (ref => {
    console.log("Added document with ID:", ref.id);
  })
}

export default function Home() {
  const [formState,setFormState] = useState(true);
 

  return (
 
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="xl">
        <div className="container">
          <Head>
            <title>In-app browser</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Barlow:wght@300&&display=swap"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
             
          </Head>

          <Box mb={5.5} mt={3.5} >
          <Paper elevation={3} m={0.5} variant="outlined">
        
            {!isServer ? (
              <Suspense fallback={<div>loading...</div>}>
                <FetchData></FetchData>
              </Suspense>
            ) : null}
       
          </Paper>
          </Box>
         
          <Paper elevation={3} m={0.5}>
          <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreSharpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Typography gutterBottom variant="h5" component="h2">
              Supported Features
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails pt={100}>
        <FeaturesList/> 
        </ExpansionPanelDetails>
    
      </ExpansionPanel>
 
      </Paper>
      <Box mb={5.5} mt={5.5} >
      <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreSharpIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography gutterBottom variant="h5" component="h2">
             Entries in the Database
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails pt={100}>
        
          </ExpansionPanelDetails>
          </ExpansionPanel>
          </Box>
         <Box mb={5.5} mt={5.5} >
          <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreSharpIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
           <Typography gutterBottom variant="h6"  component="h5">
              Additional Tests: Local Storage
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Paper elevation={3} m={0.5}>
      
            {!isServer ? (
              <Suspense fallback={<div>loading...</div>}>
                <CheckLocalStorage></CheckLocalStorage>
              </Suspense>
            ) : null}
            </Paper>
            </ExpansionPanelDetails>
            </ExpansionPanel>
            </Box>
       </div>
      </Container>
    </ThemeProvider>
  );
}
