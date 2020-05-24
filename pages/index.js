import Head from "next/head";
import React from "react";
import Input from "@material-ui/core/Input";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Modernizr from "modernizr"; // eslint-disable-line no-unused-vars
import { Suspense } from "react";
import fetcher from "../lib/fetch";
import useSWR from "swr";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";

/* TODO
  1. Format into  tests/modules
  2. Constants
*/
const dateFormat = () => {
  var d = new Date();

  var datestring =
    d.getDate() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes();
  return datestring;
};

const isServer = typeof window === "undefined";
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const FetchData = () => {
  const identifyUAApi = !isServer
    ? `https://api.userstack.com/detect?access_key=01ebd9c577763f1efbff8739fe93026f&ua=${navigator.userAgent}`
    : null;

  console.log(identifyUAApi);
  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    formStyles: {
      width: "90%",
      display: "flex",
    },
    cardStyles: {
      maxWidth: 345,
    },
  });
  const classes = useStyles();
  const { data } = useSWR(identifyUAApi, fetcher, { suspense: true });

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={data.os.engine}
            height="140"
            image={data.os.icon_large}
            title={data.os.engine}
            width="100px"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {data.browser.name}
            
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             Your browser is {data.type}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <form className={classes.formStyles} noValidate autoComplete="off">
        <h2> Incorrect?  </h2> <br/>
        <TextareaAutosize
         rowsMax={4}
         rowsMin={3}
          className={classes.root}
          id="standard-basic"
          label="Standard"
          value={data.ua}
        />
        <Button variant="contained" color="primary">
          Submit your user-agent
        </Button>
      </form>
      <div>
        {/* {JSON.stringify(data)} */}
      </div>
    </>
  );
};

const CheckLocalStorage = () => {
  const localStorageResult = Modernizr.localstorage;
  if (process.browser && Modernizr.localstorage) {

    const localStorageGetItem =
    window.localStorage.getItem("returnValue5") === null ? "Not set yet, Reload!" :  window.localStorage.getItem("returnValue5");
    const localStorageItem =
    localStorageGetItem === null ||  localStorageGetItem === "" ||localStorageGetItem===undefined || localStorageGetItem=== "Not set yet, Reload!"
      ? window.localStorage.setItem(
          "returnValue5",
          `your local storage timestamp is  ${dateFormat()}`
        )
      : null;``
      console.log(localStorageItem , "<<<<")


    
    

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

const bootstrap = () => {
  try {
    if (process.browser && Modernizr) {
      for (var i = 0; i < Modernizr._q.length; i++) Modernizr._q[i]();
    }
  } catch (e) {
    console.log("Error occured in running Modernizr tests", e);
  }
};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>In-app browser</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        {bootstrap()}
      </Head>
      <main>
        {!isServer ? (
          <Suspense fallback={<div>loading...</div>}>
            <FetchData></FetchData>
          </Suspense>
        ) : null}

        {!isServer ? (
          <Suspense fallback={<div>loading...</div>}>
            <CheckLocalStorage></CheckLocalStorage>
          </Suspense>
        ) : null}
      </main>
      <ul>
        <li className="MessageChannel">MessageChannel</li>
        <li className="adownload">adownload</li>
        <li className="ambientlight">ambientlight</li>
        <li className="animation">animation</li>
        <li className="apng">apng</li>
        <li className="appearance">appearance</li>
        <li className="applicationcache">applicationcache</li>
        <li className="arrow">arrow</li>
        <li className="atobbtoa">atobbtoa</li>
        <li className="audio">audio</li>
        <li className="audioloop">audioloop</li>
        <li className="audiopreload">audiopreload</li>
        <li className="backdropfilter">backdropfilter</li>
        <li className="backgroundblendmode">backgroundblendmode</li>
        <li className="backgroundcliptext">backgroundcliptext</li>
        <li className="backgroundsize">backgroundsize</li>
        <li className="batteryapi">batteryapi</li>
        <li className="bdi">bdi</li>
        <li className="beacon">beacon</li>
        <li className="bgpositionshorthand">bgpositionshorthand</li>
        <li className="bgpositionxy">bgpositionxy</li>
        <li className="bgrepeatspace">bgrepeatspace</li>
        <li className="bgrepeatround">bgrepeatround</li>
        <li className="bgsizecover">bgsizecover</li>
        <li className="blobconstructor">blobconstructor</li>
        <li className="bloburls">bloburls</li>
        <li className="blobworkers">blobworkers</li>
        <li className="borderimage">borderimage</li>
        <li className="borderradius">borderradius</li>
        <li className="boxshadow">boxshadow</li>
        <li className="boxsizing">boxsizing</li>
        <li className="canvas">canvas</li>
        <li className="canvasblending">canvasblending</li>
        <li className="canvastext">canvastext</li>
        <li className="canvaswinding">canvaswinding</li>
        <li className="capture">capture</li>
        <li className="checked">checked</li>
        <li className="classNamelist">classNamelist</li>
        <li className="contains">contains</li>
        <li className="contenteditable">contenteditable</li>
        <li className="contextmenu">contextmenu</li>
        <li className="cookies">cookies</li>
        <li className="cors">cors</li>
        <li className="createelementattrs">createelementattrs</li>
        <li className="createelement">createelement</li>
        <li className="attrs">attrs</li>
        <li className="cryptography">cryptography</li>
        <li className="cssall">cssall</li>
        <li className="cssanimations">cssanimations</li>
        <li className="csscalc">csscalc</li>
        <li className="csschunit">csschunit</li>
        <li className="csscolumns">csscolumns</li>
        <li className="cssescape">cssescape</li>
        <li className="cssexunit">cssexunit</li>
        <li className="cssfilters">cssfilters</li>
        <li className="cssgradients">cssgradients</li>
        <li className="cssgrid">cssgrid</li>
        <li className="cssgridlegacy">cssgridlegacy</li>
        <li className="csshyphens">csshyphens</li>
        <li className="softhyphens">softhyphens</li>
        <li className="softhyphensfind">softhyphensfind</li>
        <li className="cssinvalid">cssinvalid</li>
        <li className="cssmask">cssmask</li>
        <li className="csspointerevents">csspointerevents</li>
        <li className="csspositionsticky">csspositionsticky</li>
        <li className="csspseudoanimations">csspseudoanimations</li>
        <li className="csspseudotransitions">csspseudotransitions</li>
        <li className="cssreflections">cssreflections</li>
        <li className="cssremunit">cssremunit</li>
        <li className="cssresize">cssresize</li>
        <li className="cssscrollbar">cssscrollbar</li>
        <li className="csstransforms">csstransforms</li>
        <li className="csstransforms3d">csstransforms3d</li>
        <li className="csstransformslevel2">csstransformslevel2</li>
        <li className="csstransitions">csstransitions</li>
        <li className="cssvalid">cssvalid</li>
        <li className="cssvhunit">cssvhunit</li>
        <li className="cssvmaxunit">cssvmaxunit</li>
        <li className="cssvminunit">cssvminunit</li>
        <li className="cssvwunit">cssvwunit</li>
        <li className="cubicbezierrange">cubicbezierrange</li>
        <li className="customelements">customelements</li>
        <li className="customevent">customevent</li>
        <li className="customprotocolhandler">customprotocolhandler</li>
        <li className="dart">dart</li>
        <li className="datachannel">datachannel</li>
        <li className="datalistelem">datalistelem</li>
        <li className="dataset">dataset</li>
        <li className="datauri">datauri</li>
        <li className="dataview">dataview</li>
        <li className="dataworkers">dataworkers</li>
        <li className="details">details</li>
        <li className="devicemotion">devicemotion</li>
        <li className="deviceorientation">deviceorientation</li>
        <li className="directory">directory</li>
        <li className="display">display</li>
        <li className="runin">runin</li>
        <li className="displaytable">displaytable</li>
        <li className="documentfragment">documentfragment</li>
        <li className="ellipsis">ellipsis</li>
        <li className="emoji">emoji</li>
        <li className="es5">es5</li>
        <li className="es5array">es5array</li>
        <li className="es5date">es5date</li>
        <li className="es5function">es5function</li>
        <li className="es5object">es5object</li>
        <li className="es5string">es5string</li>
        <li className="es5syntax">es5syntax</li>
        <li className="es5undefined">es5undefined</li>
        <li className="es6array">es6array</li>
        <li className="es6collections">es6collections</li>
        <li className="es6math">es6math</li>
        <li className="es6number">es6number</li>
        <li className="es6object">es6object</li>
        <li className="es6string">es6string</li>
        <li className="eventlistener">eventlistener</li>
        <li className="eventsource">eventsource</li>
        <li className="exiforientation">exiforientation</li>
        <li className="fetch">fetch</li>
        <li className="fileinput">fileinput</li>
        <li className="filereader">filereader</li>
        <li className="filesystem">filesystem</li>
        <li className="flash">flash</li>
        <li className="flexbox">flexbox</li>
        <li className="flexboxlegacy">flexboxlegacy</li>
        <li className="flexboxtweener">flexboxtweener</li>
        <li className="flexwrap">flexwrap</li>
        <li className="focuswithin">focuswithin</li>
        <li className="fontface">fontface</li>
        <li className="forcetouch">forcetouch</li>
        <li className="formattribute">formattribute</li>
        <li className="formvalidation">formvalidation</li>
        <li className="framed">framed</li>
        <li className="fullscreen">fullscreen</li>
        <li className="gamepads">gamepads</li>
        <li className="generatedcontent">generatedcontent</li>
        <li className="generators">generators</li>
        <li className="geolocation">geolocation</li>
        <li className="getrandomvalues">getrandomvalues</li>
        <li className="getusermedia">getusermedia</li>
        <li className="hairline">hairline</li>
        <li className="hashchange">hashchange</li>
        <li className="hidden">hidden</li>
        <li className="hiddenscroll">hiddenscroll</li>
        <li className="history">history</li>
        <li className="hovermq">hovermq</li>
        <li className="hsla">hsla</li>
        <li className="htmlimports">htmlimports</li>
        <li className="ie8compat">ie8compat</li>
        <li className="imgcrossorigin">imgcrossorigin</li>
        <li className="indexeddb">indexeddb</li>
        <li className="indexeddbblob">indexeddbblob</li>
        <li className="inlinesvg">inlinesvg</li>
        <li className="input">input</li>
        <li className="inputformaction">inputformaction</li>
        <li className="inputformenctype">inputformenctype</li>
        <li className="inputformmethod">inputformmethod</li>
        <li className="inputformtarget">inputformtarget</li>
        <li className="inputtypes">inputtypes</li>
        <li className="intl">intl</li>
        <li className="jpeg2000">jpeg2000</li>
        <li className="jpegxr">jpegxr</li>
        <li className="json">json</li>
        <li className="lastchild">lastchild</li>
        <li className="ligatures">ligatures</li>
        <li className="localizednumber">localizednumber</li>
        <li className="localstorage">localstorage</li>
        <li className="lowbandwidth">lowbandwidth</li>
        <li className="lowbattery">lowbattery</li>
        <li className="matchmedia">matchmedia</li>
        <li className="mathml">mathml</li>
        <li className="mediaqueries">mediaqueries</li>
        <li className="microdata">microdata</li>
        <li className="multiplebgs">multiplebgs</li>
        <li className="mutationobserver">mutationobserver</li>
        <li className="notification">notification</li>
        <li className="nthchild">nthchild</li>
        <li className="objectfit">objectfit</li>
        <li className="olreversed">olreversed</li>
        <li className="oninput">oninput</li>
        <li className="opacity">opacity</li>
        <li className="outputelem">outputelem</li>
        <li className="overflowscrolling">overflowscrolling</li>
        <li className="pagevisibility">pagevisibility</li>
        <li className="passiveeventlisteners">passiveeventlisteners</li>
        <li className="peerconnection">peerconnection</li>
        <li className="performance">performance</li>
        <li className="picture">picture</li>
        <li className="placeholder">placeholder</li>
        <li className="pointerevents">pointerevents</li>
        <li className="pointerlock">pointerlock</li>
        <li className="pointermq">pointermq</li>
        <li className="postmessage">postmessage</li>
        <li className="preserve3d">preserve3d</li>
        <li className="progressbar">progressbar</li>
        <li className="meter">meter</li>
        <li className="promises">promises</li>
        <li className="proximity">proximity</li>
        <li className="queryselector">queryselector</li>
        <li className="quotamanagement">quotamanagement</li>
        <li className="regions">regions</li>
        <li className="requestanimationframe">requestanimationframe</li>
        <li className="requestautocomplete">requestautocomplete</li>
        <li className="rgba">rgba</li>
        <li className="ruby">ruby</li>
        <li className="sandbox">sandbox</li>
        <li className="scriptasync">scriptasync</li>
        <li className="scriptdefer">scriptdefer</li>
        <li className="scrollsnappoints">scrollsnappoints</li>
        <li className="seamless">seamless</li>
        <li className="search">search</li>
        <li className="serviceworker">serviceworker</li>
        <li className="sessionstorage">sessionstorage</li>
        <li className="shapes">shapes</li>
        <li className="sharedworkers">sharedworkers</li>
        <li className="siblinggeneral">siblinggeneral</li>
        <li className="sizes">sizes</li>
        <li className="smil">smil</li>
        <li className="speechrecognition">speechrecognition</li>
        <li className="speechsynthesis">speechsynthesis</li>
        <li className="srcdoc">srcdoc</li>
        <li className="srcset">srcset</li>
        <li className="strictmode">strictmode</li>
        <li className="stylescoped">stylescoped</li>
        <li className="subpixelfont">subpixelfont</li>
        <li className="supports">supports</li>
        <li className="svg">svg</li>
        <li className="svgasimg">svgasimg</li>
        <li className="svgclippaths">svgclippaths</li>
        <li className="svgfilters">svgfilters</li>
        <li className="svgforeignobject">svgforeignobject</li>
        <li className="target">target</li>
        <li className="template">template</li>
        <li className="templatestrings">templatestrings</li>
        <li className="textalignlast">textalignlast</li>
        <li className="textareamaxlength">textareamaxlength</li>
        <li className="textshadow">textshadow</li>
        <li className="texttrackapi">texttrackapi</li>
        <li className="track">track</li>
        <li className="time">time</li>
        <li className="todataurljpeg">todataurljpeg</li>
        <li className="todataurlpng">todataurlpng</li>
        <li className="todataurlwebp">todataurlwebp</li>
        <li className="touchevents">touchevents</li>
        <li className="transferables">transferables</li>
        <li className="typedarrays">typedarrays</li>
        <li className="unicode">unicode</li>
        <li className="unicoderange">unicoderange</li>
        <li className="unknownelements">unknownelements</li>
        <li className="urlparser">urlparser</li>
        <li className="urlsearchparams">urlsearchparams</li>
        <li className="userdata">userdata</li>
        <li className="userselect">userselect</li>
        <li className="variablefonts">variablefonts</li>
        <li className="vibrate">vibrate</li>
        <li className="video">video</li>
        <li className="videoautoplay">videoautoplay</li>
        <li className="videocrossorigin">videocrossorigin</li>
        <li className="videoloop">videoloop</li>
        <li className="videopreload">videopreload</li>
        <li className="vml">vml</li>
        <li className="webaudio">webaudio</li>
        <li className="webgl">webgl</li>
        <li className="webglextensions">webglextensions</li>
        <li className="webintents">webintents</li>
        <li className="webp">webp</li>
        <li className="webpalpha">webpalpha</li>
        <li className="webpanimation">webpanimation</li>
        <li className="webplossless">webplossless</li>
        <li className="webp">webp</li>
        <li className="lossless">lossless</li>
        <li className="websockets">websockets</li>
        <li className="websocketsbinary">websocketsbinary</li>
        <li className="websqldatabase">websqldatabase</li>
        <li className="webworkers">webworkers</li>

        <li className="willchange">willchange</li>
        <li className="wrapflow">wrapflow</li>
        <li className="xdomainrequest">xdomainrequest</li>
        <li className="xhr2">xhr2</li>
        <li className="xhrresponsetype">xhrresponsetype</li>
        <li className="xhrresponsetypearraybuffer">
          xhrresponsetypearraybuffer
        </li>
        <li className="xhrresponsetypeblob">xhrresponsetypeblob</li>
        <li className="xhrresponsetypedocument">xhrresponsetypedocument</li>
        <li className="xhrresponsetypejson">xhrresponsetypejson</li>
        <li className="xhrresponsetypetext">xhrresponsetypetext</li>
        <li className="addtest">addtest</li>
        <li className="atrule">atrule</li>
        <li className="domprefixes">domprefixes</li>
        <li className="hasevent">hasevent</li>
        <li className="mq">mq</li>
        <li className="prefixed">prefixed</li>
        <li className="prefixedcss">prefixedcss</li>
        <li className="prefixedcssvalue">prefixedcssvalue</li>
        <li className="prefixes">prefixes</li>
        <li className="setclassNamees">setclassNamees</li>
        <li className="shiv">shiv</li>
        <li className="testallprops">testallprops</li>
        <li className="testprop">testprop</li>
        <li className="teststyles">teststyles</li>
      </ul>
      `
      <style jsx>{`
        ul {
          -webkit-column-count: 3;
          -moz-column-count: 3;
          column-count: 3;
        }
        li {
          color: green;
        }
        .no-MessageChannel li.MessageChannel {
          color: red;
        }
        .no-adownload li.adownload {
          color: red;
        }
        .no-ambientlight li.ambientlight {
          color: red;
        }
        .no-animation li.animation {
          color: red;
        }
        .no-apng li.apng {
          color: red;
        }
        .no-appearance li.appearance {
          color: red;
        }
        .no-applicationcache li.applicationcache {
          color: red;
        }
        .no-arrow li.arrow {
          color: red;
        }
        .no-atobbtoa li.atobbtoa {
          color: red;
        }
        .no-audio li.audio {
          color: red;
        }
        .no-audioloop li.audioloop {
          color: red;
        }
        .no-audiopreload li.audiopreload {
          color: red;
        }
        .no-backdropfilter li.backdropfilter {
          color: red;
        }
        .no-backgroundblendmode li.backgroundblendmode {
          color: red;
        }
        .no-backgroundcliptext li.backgroundcliptext {
          color: red;
        }
        .no-backgroundsize li.backgroundsize {
          color: red;
        }
        .no-batteryapi li.batteryapi {
          color: red;
        }
        .no-bdi li.bdi {
          color: red;
        }
        .no-beacon li.beacon {
          color: red;
        }
        .no-bgpositionshorthand li.bgpositionshorthand {
          color: red;
        }
        .no-bgpositionxy li.bgpositionxy {
          color: red;
        }
        .no-bgrepeatspace li.bgrepeatspace {
          color: red;
        }
        .no-bgrepeatround li.bgrepeatround {
          color: red;
        }
        .no-bgsizecover li.bgsizecover {
          color: red;
        }
        .no-blobconstructor li.blobconstructor {
          color: red;
        }
        .no-bloburls li.bloburls {
          color: red;
        }
        .no-blobworkers li.blobworkers {
          color: red;
        }
        .no-borderimage li.borderimage {
          color: red;
        }
        .no-borderradius li.borderradius {
          color: red;
        }
        .no-boxshadow li.boxshadow {
          color: red;
        }
        .no-boxsizing li.boxsizing {
          color: red;
        }
        .no-canvas li.canvas {
          color: red;
        }
        .no-canvasblending li.canvasblending {
          color: red;
        }
        .no-canvastext li.canvastext {
          color: red;
        }
        .no-canvaswinding li.canvaswinding {
          color: red;
        }
        .no-capture li.capture {
          color: red;
        }
        .no-checked li.checked {
          color: red;
        }
        .no-classlist li.classlist {
          color: red;
        }
        .no-contains li.contains {
          color: red;
        }
        .no-contenteditable li.contenteditable {
          color: red;
        }
        .no-contextmenu li.contextmenu {
          color: red;
        }
        .no-cookies li.cookies {
          color: red;
        }
        .no-cors li.cors {
          color: red;
        }
        .no-createelementattrs li.createelementattrs {
          color: red;
        }
        .no-createelement li.createelement {
          color: red;
        }
        .no-attrs li.attrs {
          color: red;
        }
        .no-cryptography li.cryptography {
          color: red;
        }
        .no-cssall li.cssall {
          color: red;
        }
        .no-cssanimations li.cssanimations {
          color: red;
        }
        .no-csscalc li.csscalc {
          color: red;
        }
        .no-csschunit li.csschunit {
          color: red;
        }
        .no-csscolumns li.csscolumns {
          color: red;
        }
        .no-cssescape li.cssescape {
          color: red;
        }
        .no-cssexunit li.cssexunit {
          color: red;
        }
        .no-cssfilters li.cssfilters {
          color: red;
        }
        .no-cssgradients li.cssgradients {
          color: red;
        }
        .no-cssgrid li.cssgrid {
          color: red;
        }
        .no-cssgridlegacy li.cssgridlegacy {
          color: red;
        }
        .no-csshyphens li.csshyphens {
          color: red;
        }
        .no-softhyphens li.softhyphens {
          color: red;
        }
        .no-softhyphensfind li.softhyphensfind {
          color: red;
        }
        .no-cssinvalid li.cssinvalid {
          color: red;
        }
        .no-cssmask li.cssmask {
          color: red;
        }
        .no-csspointerevents li.csspointerevents {
          color: red;
        }
        .no-csspositionsticky li.csspositionsticky {
          color: red;
        }
        .no-csspseudoanimations li.csspseudoanimations {
          color: red;
        }
        .no-csspseudotransitions li.csspseudotransitions {
          color: red;
        }
        .no-cssreflections li.cssreflections {
          color: red;
        }
        .no-cssremunit li.cssremunit {
          color: red;
        }
        .no-cssresize li.cssresize {
          color: red;
        }
        .no-cssscrollbar li.cssscrollbar {
          color: red;
        }
        .no-csstransforms li.csstransforms {
          color: red;
        }
        .no-csstransforms3d li.csstransforms3d {
          color: red;
        }
        .no-csstransformslevel2 li.csstransformslevel2 {
          color: red;
        }
        .no-csstransitions li.csstransitions {
          color: red;
        }
        .no-cssvalid li.cssvalid {
          color: red;
        }
        .no-cssvhunit li.cssvhunit {
          color: red;
        }
        .no-cssvmaxunit li.cssvmaxunit {
          color: red;
        }
        .no-cssvminunit li.cssvminunit {
          color: red;
        }
        .no-cssvwunit li.cssvwunit {
          color: red;
        }
        .no-cubicbezierrange li.cubicbezierrange {
          color: red;
        }
        .no-customelements li.customelements {
          color: red;
        }
        .no-customevent li.customevent {
          color: red;
        }
        .no-customprotocolhandler li.customprotocolhandler {
          color: red;
        }
        .no-dart li.dart {
          color: red;
        }
        .no-datachannel li.datachannel {
          color: red;
        }
        .no-datalistelem li.datalistelem {
          color: red;
        }
        .no-dataset li.dataset {
          color: red;
        }
        .no-datauri li.datauri {
          color: red;
        }
        .no-dataview li.dataview {
          color: red;
        }
        .no-dataworkers li.dataworkers {
          color: red;
        }
        .no-details li.details {
          color: red;
        }
        .no-devicemotion li.devicemotion {
          color: red;
        }
        .no-deviceorientation li.deviceorientation {
          color: red;
        }
        .no-directory li.directory {
          color: red;
        }
        .no-display li.display {
          color: red;
        }
        .no-runin li.runin {
          color: red;
        }
        .no-displaytable li.displaytable {
          color: red;
        }
        .no-documentfragment li.documentfragment {
          color: red;
        }
        .no-ellipsis li.ellipsis {
          color: red;
        }
        .no-emoji li.emoji {
          color: red;
        }
        .no-es5 li.es5 {
          color: red;
        }
        .no-es5array li.es5array {
          color: red;
        }
        .no-es5date li.es5date {
          color: red;
        }
        .no-es5function li.es5function {
          color: red;
        }
        .no-es5object li.es5object {
          color: red;
        }
        .no-es5string li.es5string {
          color: red;
        }
        .no-es5syntax li.es5syntax {
          color: red;
        }
        .no-es5undefined li.es5undefined {
          color: red;
        }
        .no-es6array li.es6array {
          color: red;
        }
        .no-es6collections li.es6collections {
          color: red;
        }
        .no-es6math li.es6math {
          color: red;
        }
        .no-es6number li.es6number {
          color: red;
        }
        .no-es6object li.es6object {
          color: red;
        }
        .no-es6string li.es6string {
          color: red;
        }
        .no-eventlistener li.eventlistener {
          color: red;
        }
        .no-eventsource li.eventsource {
          color: red;
        }
        .no-exiforientation li.exiforientation {
          color: red;
        }
        .no-fetch li.fetch {
          color: red;
        }
        .no-fileinput li.fileinput {
          color: red;
        }
        .no-filereader li.filereader {
          color: red;
        }
        .no-filesystem li.filesystem {
          color: red;
        }
        .no-flash li.flash {
          color: red;
        }
        .no-flexbox li.flexbox {
          color: red;
        }
        .no-flexboxlegacy li.flexboxlegacy {
          color: red;
        }
        .no-flexboxtweener li.flexboxtweener {
          color: red;
        }
        .no-flexwrap li.flexwrap {
          color: red;
        }
        .no-focuswithin li.focuswithin {
          color: red;
        }
        .no-fontface li.fontface {
          color: red;
        }
        .no-forcetouch li.forcetouch {
          color: red;
        }
        .no-formattribute li.formattribute {
          color: red;
        }
        .no-formvalidation li.formvalidation {
          color: red;
        }
        .no-framed li.framed {
          color: red;
        }
        .no-fullscreen li.fullscreen {
          color: red;
        }
        .no-gamepads li.gamepads {
          color: red;
        }
        .no-generatedcontent li.generatedcontent {
          color: red;
        }
        .no-generators li.generators {
          color: red;
        }
        .no-geolocation li.geolocation {
          color: red;
        }
        .no-getrandomvalues li.getrandomvalues {
          color: red;
        }
        .no-getusermedia li.getusermedia {
          color: red;
        }
        .no-hairline li.hairline {
          color: red;
        }
        .no-hashchange li.hashchange {
          color: red;
        }
        .no-hidden li.hidden {
          color: red;
        }
        .no-hiddenscroll li.hiddenscroll {
          color: red;
        }
        .no-history li.history {
          color: red;
        }
        .no-hovermq li.hovermq {
          color: red;
        }
        .no-hsla li.hsla {
          color: red;
        }
        .no-htmlimports li.htmlimports {
          color: red;
        }
        .no-ie8compat li.ie8compat {
          color: red;
        }
        .no-imgcrossorigin li.imgcrossorigin {
          color: red;
        }
        .no-indexeddb li.indexeddb {
          color: red;
        }
        .no-indexeddbblob li.indexeddbblob {
          color: red;
        }
        .no-inlinesvg li.inlinesvg {
          color: red;
        }
        .no-input li.input {
          color: red;
        }
        .no-inputformaction li.inputformaction {
          color: red;
        }
        .no-inputformenctype li.inputformenctype {
          color: red;
        }
        .no-inputformmethod li.inputformmethod {
          color: red;
        }
        .no-inputformtarget li.inputformtarget {
          color: red;
        }
        .no-inputtypes li.inputtypes {
          color: red;
        }
        .no-intl li.intl {
          color: red;
        }
        .no-jpeg2000 li.jpeg2000 {
          color: red;
        }
        .no-jpegxr li.jpegxr {
          color: red;
        }
        .no-json li.json {
          color: red;
        }
        .no-lastchild li.lastchild {
          color: red;
        }
        .no-ligatures li.ligatures {
          color: red;
        }
        .no-localizednumber li.localizednumber {
          color: red;
        }
        .no-localstorage li.localstorage {
          color: red;
        }
        .no-lowbandwidth li.lowbandwidth {
          color: red;
        }
        .no-lowbattery li.lowbattery {
          color: red;
        }
        .no-matchmedia li.matchmedia {
          color: red;
        }
        .no-mathml li.mathml {
          color: red;
        }
        .no-mediaqueries li.mediaqueries {
          color: red;
        }
        .no-microdata li.microdata {
          color: red;
        }
        .no-multiplebgs li.multiplebgs {
          color: red;
        }
        .no-mutationobserver li.mutationobserver {
          color: red;
        }
        .no-notification li.notification {
          color: red;
        }
        .no-nthchild li.nthchild {
          color: red;
        }
        .no-objectfit li.objectfit {
          color: red;
        }
        .no-olreversed li.olreversed {
          color: red;
        }
        .no-oninput li.oninput {
          color: red;
        }
        .no-opacity li.opacity {
          color: red;
        }
        .no-outputelem li.outputelem {
          color: red;
        }
        .no-overflowscrolling li.overflowscrolling {
          color: red;
        }
        .no-pagevisibility li.pagevisibility {
          color: red;
        }
        .no-passiveeventlisteners li.passiveeventlisteners {
          color: red;
        }
        .no-peerconnection li.peerconnection {
          color: red;
        }
        .no-performance li.performance {
          color: red;
        }
        .no-picture li.picture {
          color: red;
        }
        .no-placeholder li.placeholder {
          color: red;
        }
        .no-pointerevents li.pointerevents {
          color: red;
        }
        .no-pointerlock li.pointerlock {
          color: red;
        }
        .no-pointermq li.pointermq {
          color: red;
        }
        .no-postmessage li.postmessage {
          color: red;
        }
        .no-preserve3d li.preserve3d {
          color: red;
        }
        .no-progressbar li.progressbar {
          color: red;
        }
        .no-meter li.meter {
          color: red;
        }
        .no-promises li.promises {
          color: red;
        }
        .no-proximity li.proximity {
          color: red;
        }
        .no-queryselector li.queryselector {
          color: red;
        }
        .no-quotamanagement li.quotamanagement {
          color: red;
        }
        .no-regions li.regions {
          color: red;
        }
        .no-requestanimationframe li.requestanimationframe {
          color: red;
        }
        .no-requestautocomplete li.requestautocomplete {
          color: red;
        }
        .no-rgba li.rgba {
          color: red;
        }
        .no-ruby li.ruby {
          color: red;
        }
        .no-sandbox li.sandbox {
          color: red;
        }
        .no-scriptasync li.scriptasync {
          color: red;
        }
        .no-scriptdefer li.scriptdefer {
          color: red;
        }
        .no-scrollsnappoints li.scrollsnappoints {
          color: red;
        }
        .no-seamless li.seamless {
          color: red;
        }
        .no-search li.search {
          color: red;
        }
        .no-serviceworker li.serviceworker {
          color: red;
        }
        .no-sessionstorage li.sessionstorage {
          color: red;
        }
        .no-shapes li.shapes {
          color: red;
        }
        .no-sharedworkers li.sharedworkers {
          color: red;
        }
        .no-siblinggeneral li.siblinggeneral {
          color: red;
        }
        .no-sizes li.sizes {
          color: red;
        }
        .no-smil li.smil {
          color: red;
        }
        .no-speechrecognition li.speechrecognition {
          color: red;
        }
        .no-speechsynthesis li.speechsynthesis {
          color: red;
        }
        .no-srcdoc li.srcdoc {
          color: red;
        }
        .no-srcset li.srcset {
          color: red;
        }
        .no-strictmode li.strictmode {
          color: red;
        }
        .no-stylescoped li.stylescoped {
          color: red;
        }
        .no-subpixelfont li.subpixelfont {
          color: red;
        }
        .no-supports li.supports {
          color: red;
        }
        .no-svg li.svg {
          color: red;
        }
        .no-svgasimg li.svgasimg {
          color: red;
        }
        .no-svgclippaths li.svgclippaths {
          color: red;
        }
        .no-svgfilters li.svgfilters {
          color: red;
        }
        .no-svgforeignobject li.svgforeignobject {
          color: red;
        }
        .no-target li.target {
          color: red;
        }
        .no-template li.template {
          color: red;
        }
        .no-templatestrings li.templatestrings {
          color: red;
        }
        .no-textalignlast li.textalignlast {
          color: red;
        }
        .no-textareamaxlength li.textareamaxlength {
          color: red;
        }
        .no-textshadow li.textshadow {
          color: red;
        }
        .no-texttrackapi li.texttrackapi {
          color: red;
        }
        .no-track li.track {
          color: red;
        }
        .no-time li.time {
          color: red;
        }
        .no-todataurljpeg li.todataurljpeg {
          color: red;
        }
        .no-todataurlpng li.todataurlpng {
          color: red;
        }
        .no-todataurlwebp li.todataurlwebp {
          color: red;
        }
        .no-touchevents li.touchevents {
          color: red;
        }
        .no-transferables li.transferables {
          color: red;
        }
        .no-typedarrays li.typedarrays {
          color: red;
        }
        .no-unicode li.unicode {
          color: red;
        }
        .no-unicoderange li.unicoderange {
          color: red;
        }
        .no-unknownelements li.unknownelements {
          color: red;
        }
        .no-urlparser li.urlparser {
          color: red;
        }
        .no-urlsearchparams li.urlsearchparams {
          color: red;
        }
        .no-userdata li.userdata {
          color: red;
        }
        .no-userselect li.userselect {
          color: red;
        }
        .no-variablefonts li.variablefonts {
          color: red;
        }
        .no-vibrate li.vibrate {
          color: red;
        }
        .no-video li.video {
          color: red;
        }
        .no-videoautoplay li.videoautoplay {
          color: red;
        }
        .no-videocrossorigin li.videocrossorigin {
          color: red;
        }
        .no-videoloop li.videoloop {
          color: red;
        }
        .no-videopreload li.videopreload {
          color: red;
        }
        .no-vml li.vml {
          color: red;
        }
        .no-webaudio li.webaudio {
          color: red;
        }
        .no-webgl li.webgl {
          color: red;
        }
        .no-webglextensions li.webglextensions {
          color: red;
        }
        .no-webintents li.webintents {
          color: red;
        }
        .no-webp li.webp {
          color: red;
        }
        .no-webpalpha li.webpalpha {
          color: red;
        }
        .no-webpanimation li.webpanimation {
          color: red;
        }
        .no-webplossless li.webplossless {
          color: red;
        }
        .no-webp li.webp {
          color: red;
        }
        .no-lossless li.lossless {
          color: red;
        }
        .no-websockets li.websockets {
          color: red;
        }
        .no-websocketsbinary li.websocketsbinary {
          color: red;
        }
        .no-websqldatabase li.websqldatabase {
          color: red;
        }
        .no-webworkers li.webworkers {
          color: red;
        }
        .no-willchange li.willchange {
          color: red;
        }
        .no-wrapflow li.wrapflow {
          color: red;
        }
        .no-xdomainrequest li.xdomainrequest {
          color: red;
        }
        .no-xhr2 li.xhr2 {
          color: red;
        }
        .no-xhrresponsetype li.xhrresponsetype {
          color: red;
        }
        .no-xhrresponsetypearraybuffer li.xhrresponsetypearraybuffer {
          color: red;
        }
        .no-xhrresponsetypeblob li.xhrresponsetypeblob {
          color: red;
        }
        .no-xhrresponsetypedocument li.xhrresponsetypedocument {
          color: red;
        }
        .no-xhrresponsetypejson li.xhrresponsetypejson {
          color: red;
        }
        .no-xhrresponsetypetext li.xhrresponsetypetext {
          color: red;
        }
        .no-addtest li.addtest {
          color: red;
        }
        .no-atrule li.atrule {
          color: red;
        }
        .no-domprefixes li.domprefixes {
          color: red;
        }
        .no-hasevent li.hasevent {
          color: red;
        }
        .no-mq li.mq {
          color: red;
        }
        .no-prefixed li.prefixed {
          color: red;
        }
        .no-prefixedcss li.prefixedcss {
          color: red;
        }
        .no-prefixedcssvalue li.prefixedcssvalue {
          color: red;
        }
        .no-prefixes li.prefixes {
          color: red;
        }
        .no-setclasses li.setclasses {
          color: red;
        }
        .no-shiv li.shiv {
          color: red;
        }
        .no-testallprops li.testallprops {
          color: red;
        }
        .no-testprop li.testprop {
          color: red;
        }
        .no-teststyles li.teststyles {
          color: red;
        }
        .inputWhalf {
          width: 0.5vw;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
