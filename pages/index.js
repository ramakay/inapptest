import Head from "next/head";
import React, { useState, useEffect } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
//import dynamic from "next/dynamic"
// const { default: Modernizr } = await import('modernizr');

import dynamic from "next/dynamic";

// const Modernizr = dynamic(() => import('modernizr').then((module) => module.NamedExport),{
//   ssr: false
// }) 


import { Suspense } from "react";
import fetcher from "../lib/fetch";
import useSWR from "swr";import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { appStyles } from "../style/theme";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Autocomplete from "@material-ui/lab/Autocomplete";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import db from "../services/firebaseservice";
import { dateFormat } from "../utils/formatters";
import { lightTheme, darkTheme } from "../style/theme";
import CircularIntegration from "../components/button-progress";
import MaterialTable from "material-table";

/* Components */
import { Header } from "../components/header";
import { FeaturesList } from "../components/featuresList";

/* TODO
  1. Format into  /modules
  2. Constants
*/

/* util/themes */
// const isServer = typeof window === "undefined";
const isServer = typeof window === "undefined";
const identifyUAApi = !isServer
  ? `https://api.userstack.com/detect?access_key=01ebd9c577763f1efbff8739fe93026f&ua=${navigator.userAgent}`
  : null;

/* State and Context */
const initialState = {
  status: null,
  documentID: null,
};

/* Reducers */
const SET_UA = "SET_UA";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_UA:
      return {
        status: true,
        documentID: action.documentID,
      };
    default:
      return initialState;
  }
};

function RetreiveUADetails() {
  let collectionDocs = [];
  const [dataTable, setDatatable] = React.useState([]);
  const formatList = (obj) => {
    
    const listString = Object.values(obj).map((item, key) => {
      const noItemClassStr = item.replace('no-','');
      const classStr = `${noItemClassStr} ${item}`;
      return(
      <li className={classStr} key={key}>{item}</li>
      )
    }

   
);
    return (
      <ul className="featureList featureListNone">
        {listString}
      </ul>
    )
  }
  React.useEffect(() => {
    const fetchData = (async () => {
      const uARef = db.collection("browsers");
      const snapshot = await uARef.get();
      if (snapshot.empty) {
        console.log("nothing");
        return;
      }

      let fieldData = [];
      snapshot.forEach((doc) => {
        const formattedData = {
          fd:formatList(doc.data().fd),
          //fd: Object.values(doc.data().fd).toString(),
          //fd: Object.values(doc.data().fd),
          ua: doc.data().ua,
        };
        fieldData.push(formattedData);
      });
      setDatatable(...dataTable, fieldData);
    })();
  }, []);

  return (
    <div>
      {!isServer && dataTable && (
        <MaterialTable
          title="Current Submissions"
          columns={[
            {
              title: "User agent",
              grouping: false,
              field: "ua",
              render: (rowData) => (
                <img src={rowData.ua.os.icon_large} style={{ width: 70 }} />
              ),
            },
            {
              title: "Browser",
              field: "ua.browser.name",
              defaultGroupOrder: 0,
            },
            { title: "Unavailable features", grouping: false, field: "fd" },
          ]}
          options={{
            grouping: true,
            pageSize: 10,
            showTitle: false,
          }}
          data={dataTable}
        />
      )}
    </div>
  );
}

const CheckLocalStorage = () => {
  const localStorageResult = Modernizr.localstorage;
  console.log("localStorageResult =>",localStorageResult);
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
      const featureDetectClasses = document
        .getElementsByTagName("html")[0]
        .getAttribute("class");
      let noFeaturesArray = featureDetectClasses
        .split(" ")
        .filter((noFeature) => noFeature.indexOf("no-") > -1);
      let noFeaturesObject = {};
      noFeaturesObject["fd"] = Object.assign({}, noFeaturesArray);
      (noFeaturesObject["time"] = Date.now()), (noFeaturesObject["ua"] = ua);

      return noFeaturesObject;
    }
  } catch (e) {
    console.log("Error occured in running Modernizr tests", e);
  }
};

let bootstrapData = bootstrap();

const PackageandSend = (props) => {
  const handleDone = () => {
    props.setuAState(true);
  };

  useEffect(() => {
    if (props.uAState === true) {
      handleDone();
    }
  });

  const sendData = () => {
    let setDoc = db
      .collection("browsers")
      .add(bootstrap(props.ua))
      .then((ref) => {
        console.log("Added document with ID:", ref.id);
        props.setuAState(true);
      });
  };
  const label = "Contribute your user agent data";
  return (
    <>
      <CircularIntegration
        onChange={() => {
          sendData();
        }}
        onDone={false}
        uAState={props.uAState}
        btnLabel={props.btnLabel}
      />
    </>
  );
};

export default function Home() {
  const [uAState, setuAState] = React.useState(false);
  const [formState, setFormState] = useState(true);
  const [uaSubmitState, dispatch] = React.useReducer(reducer, initialState);
  const MyContext = React.createContext(null);

  const FetchData = () => {
    const { data } = useSWR(identifyUAApi, fetcher, { suspense: true });

    return (
      <>
        <MyContext.Provider value={{ uaSubmitState, dispatch }}>
          <ThemeProvider theme={darkTheme}>
            <ThemeProvider theme={lightTheme}>
              <Header data={data} />
            </ThemeProvider>
            <Paper elevation={3}>
              <form noValidate autoComplete="off">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                ></Typography>
                <TextareaAutosize
                  rowsMax={5}
                  className={appStyles().uaTextArea}
                  id="standard-basic"
                  label="Standard"
                  value={data.ua}
                />
                <>
                  {!uAState ? (
                    <PackageandSend
                      ua={data}
                      uAState={uAState}
                      setuAState={setuAState}
                      btnLabel={"Contribute your user agent data "}
                    />
                  ) : (
                    <PackageandSend
                      ua={data}
                      uAState={uAState}
                      setuAState={setuAState}
                      disabled={true}
                      btnLabel={"Thanks"}
                    />
                  )}
                </>
              </form>
            </Paper>
            <div>{/* {JSON.stringify(data)} */}</div>
          </ThemeProvider>
        </MyContext.Provider>
      </>
    );
  };

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
            <script type="text/javascript" src="js/fTwelve.js"></script>
          </Head>

          <Box mb={5.5} mt={3.5}>
            <Paper elevation={3} m={0.5} variant="outlined">
              {!isServer ? (
                <Suspense fallback={<div>loading...</div>}>
                  <FetchData></FetchData>
                </Suspense>
              ) : null}
            </Paper>
          </Box>

          <Paper elevation={3} m={0.5}>
            <Accordion expanded={true} width="100%">
              <AccordionSummary
                expandIcon={<ExpandMoreSharpIcon />}
                aria-controls="panel0a-content"
                id="panel0a-header"
              >
                <Typography gutterBottom variant="h5" component="h2">
                  Your browser
                </Typography>
              </AccordionSummary>
              <AccordionDetails pt={100} width="100%" className={appStyles().nestedMui} >
                <div style={{ width: 100 + "%" }}>
                  <Accordion width="100%">
                    <AccordionSummary
                      expandIcon={<ExpandMoreSharpIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography gutterBottom variant="h5" component="h2">
                        Supported Features
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails pt={100}>
                      <div style={{ width: 100 + "%" }}>
                        <FeaturesList />
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div style={{ width: 100 + "%" }}>
                  <Accordion width="100%">
                    <AccordionSummary
                      expandIcon={<ExpandMoreSharpIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography gutterBottom variant="h6" component="h5">
                        Additional Tests: Local Storage
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Paper elevation={3} m={0.5}>
                        {!isServer ? (
                          <Suspense fallback={<div>loading...</div>}>
                            <CheckLocalStorage></CheckLocalStorage>
                          </Suspense>
                        ) : null}
                      </Paper>
                    </AccordionDetails>
                  </Accordion>
                </div>

                <Accordion
                  onChange={() => {
                    fTwelve.enable({ show: true });
                    try {
                      document.querySelector("#f-twelve").childNodes[0].click();
                    } catch (e) {
                      console.log("Couldnt show console");
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreSharpIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography gutterBottom variant="h5" component="h2">
                      Console
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails pt={100}></AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          </Paper>

          <Paper elevation={3} m={0.5}></Paper>
          <Box mb={5.5} mt={5.5}>
            <Accordion expanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreSharpIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography gutterBottom variant="h5" component="h2">
                  Current Submissions
                </Typography>
              </AccordionSummary>
              <AccordionDetails pt={100}>
                <div style={{ width: 100 + "%" }}>
                  <RetreiveUADetails />
                </div>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box mb={5.5} mt={5.5}></Box>
        </div>
      </Container>
    </ThemeProvider>
  );
}
