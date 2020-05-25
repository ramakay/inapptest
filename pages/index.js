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
      for (var i = 0; i < Modernizr._q.length; i++) {
        console.log(Modernizr._q[i])
        Modernizr._q[i]();
      }
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
      <ul className="root">
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
        :global(.no-MessageChannel li.MessageChannel) {
          color: red;
        }
        :global(.no-adownload li.adownload) {
          color: red;
        }
        :global(.no-ambientlight li.ambientlight) {
          color: red;
        }
        :global(.no-animation li.animation) {
          color: red;
        }
        :global(.no-apng li.apng) {
          color: red;
        }
        :global(.no-appearance li.appearance) {
          color: red;
        }
        :global(.no-applicationcache li.applicationcache) {
          color: red;
        }
        :global(.no-arrow li.arrow) {
          color: red;
        }
        :global(.no-atobbtoa li.atobbtoa) {
          color: red;
        }
        :global(.no-audio li.audio) {
          color: red;
        }
        :global(.no-audioloop li.audioloop) {
          color: red;
        }
        :global(.no-audiopreload li.audiopreload) {
          color: red;
        }
        :global(.no-backdropfilter li.backdropfilter) {
          color: red;
        }
        :global(.no-backgroundblendmode li.backgroundblendmode) {
          color: red;
        }
        :global(.no-backgroundcliptext li.backgroundcliptext) {
          color: red;
        }
        :global(.no-backgroundsize li.backgroundsize) {
          color: red;
        }
        :global(.no-batteryapi li.batteryapi) {
          color: red;
        }
        :global(.no-bdi li.bdi) {
          color: red;
        }
        :global(.no-beacon li.beacon) {
          color: red;
        }
        :global(.no-bgpositionshorthand li.bgpositionshorthand) {
          color: red;
        }
        :global(.no-bgpositionxy li.bgpositionxy) {
          color: red;
        }
        :global(.no-bgrepeatspace li.bgrepeatspace) {
          color: red;
        }
        :global(.no-bgrepeatround li.bgrepeatround) {
          color: red;
        }
        :global(.no-bgsizecover li.bgsizecover) {
          color: red;
        }
        :global(.no-blobconstructor li.blobconstructor) {
          color: red;
        }
        :global(.no-bloburls li.bloburls) {
          color: red;
        }
        :global(.no-blobworkers li.blobworkers) {
          color: red;
        }
        :global(.no-borderimage li.borderimage) {
          color: red;
        }
        :global(.no-borderradius li.borderradius) {
          color: red;
        }
        :global(.no-boxshadow li.boxshadow) {
          color: red;
        }
        :global(.no-boxsizing li.boxsizing) {
          color: red;
        }
        :global(.no-canvas li.canvas) {
          color: red;
        }
        :global(.no-canvasblending li.canvasblending) {
          color: red;
        }
        :global(.no-canvastext li.canvastext) {
          color: red;
        }
        :global(.no-canvaswinding li.canvaswinding) {
          color: red;
        }
        :global(.no-capture li.capture) {
          color: red;
        }
        :global(.no-checked li.checked) {
          color: red;
        }
        :global(.no-classlist li.classlist) {
          color: red;
        }
        :global(.no-contains li.contains) {
          color: red;
        }
        :global(.no-contenteditable li.contenteditable) {
          color: red;
        }
        :global(.no-contextmenu li.contextmenu) {
          color: red;
        }
        :global(.no-cookies li.cookies) {
          color: red;
        }
        :global(.no-cors li.cors) {
          color: red;
        }
        :global(.no-createelementattrs li.createelementattrs) {
          color: red;
        }
        :global(.no-createelement li.createelement) {
          color: red;
        }
        :global(.no-attrs li.attrs) {
          color: red;
        }
        :global(.no-cryptography li.cryptography) {
          color: red;
        }
        :global(.no-cssall li.cssall) {
          color: red;
        }
        :global(.no-cssanimations li.cssanimations) {
          color: red;
        }
        :global(.no-csscalc li.csscalc) {
          color: red;
        }
        :global(.no-csschunit li.csschunit) {
          color: red;
        }
        :global(.no-csscolumns li.csscolumns) {
          color: red;
        }
        :global(.no-cssescape li.cssescape) {
          color: red;
        }
        :global(.no-cssexunit li.cssexunit) {
          color: red;
        }
        :global(.no-cssfilters li.cssfilters) {
          color: red;
        }
        :global(.no-cssgradients li.cssgradients) {
          color: red;
        }
        :global(.no-cssgrid li.cssgrid) {
          color: red;
        }
        :global(.no-cssgridlegacy li.cssgridlegacy) {
          color: red;
        }
        :global(.no-csshyphens li.csshyphens) {
          color: red;
        }
        :global(.no-softhyphens li.softhyphens) {
          color: red;
        }
        :global(.no-softhyphensfind li.softhyphensfind) {
          color: red;
        }
        :global(.no-cssinvalid li.cssinvalid) {
          color: red;
        }
        :global(.no-cssmask li.cssmask) {
          color: red;
        }
        :global(.no-csspointerevents li.csspointerevents) {
          color: red;
        }
        :global(.no-csspositionsticky li.csspositionsticky) {
          color: red;
        }
        :global(.no-csspseudoanimations li.csspseudoanimations) {
          color: red;
        }
        :global(.no-csspseudotransitions li.csspseudotransitions) {
          color: red;
        }
        :global(.no-cssreflections li.cssreflections) {
          color: red;
        }
        :global(.no-cssremunit li.cssremunit) {
          color: red;
        }
        :global(.no-cssresize li.cssresize) {
          color: red;
        }
        :global(.no-cssscrollbar li.cssscrollbar) {
          color: red;
        }
        :global(.no-csstransforms li.csstransforms) {
          color: red;
        }
        :global(.no-csstransforms3d li.csstransforms3d) {
          color: red;
        }
        :global(.no-csstransformslevel2 li.csstransformslevel2) {
          color: red;
        }
        :global(.no-csstransitions li.csstransitions) {
          color: red;
        }
        :global(.no-cssvalid li.cssvalid) {
          color: red;
        }
        :global(.no-cssvhunit li.cssvhunit) {
          color: red;
        }
        :global(.no-cssvmaxunit li.cssvmaxunit) {
          color: red;
        }
        :global(.no-cssvminunit li.cssvminunit) {
          color: red;
        }
        :global(.no-cssvwunit li.cssvwunit) {
          color: red;
        }
        :global(.no-cubicbezierrange li.cubicbezierrange) {
          color: red;
        }
        :global(.no-customelements li.customelements) {
          color: red;
        }
        :global(.no-customevent li.customevent) {
          color: red;
        }
        :global(.no-customprotocolhandler li.customprotocolhandler) {
          color: red;
        }
        :global(.no-dart li.dart) {
          color: red;
        }
        :global(.no-datachannel li.datachannel) {
          color: red;
        }
        :global(.no-datalistelem li.datalistelem) {
          color: red;
        }
        :global(.no-dataset li.dataset) {
          color: red;
        }
        :global(.no-datauri li.datauri) {
          color: red;
        }
        :global(.no-dataview li.dataview) {
          color: red;
        }
        :global(.no-dataworkers li.dataworkers) {
          color: red;
        }
        :global(.no-details li.details) {
          color: red;
        }
        :global(.no-devicemotion li.devicemotion) {
          color: red;
        }
        :global(.no-deviceorientation li.deviceorientation) {
          color: red;
        }
        :global(.no-directory li.directory) {
          color: red;
        }
        :global(.no-display li.display) {
          color: red;
        }
        :global(.no-runin li.runin) {
          color: red;
        }
        :global(.no-displaytable li.displaytable) {
          color: red;
        }
        :global(.no-documentfragment li.documentfragment) {
          color: red;
        }
        :global(.no-ellipsis li.ellipsis) {
          color: red;
        }
        :global(.no-emoji li.emoji) {
          color: red;
        }
        :global(.no-es5 li.es5) {
          color: red;
        }
        :global(.no-es5array li.es5array) {
          color: red;
        }
        :global(.no-es5date li.es5date) {
          color: red;
        }
        :global(.no-es5function li.es5function) {
          color: red;
        }
        :global(.no-es5object li.es5object) {
          color: red;
        }
        :global(.no-es5string li.es5string) {
          color: red;
        }
        :global(.no-es5syntax li.es5syntax) {
          color: red;
        }
        :global(.no-es5undefined li.es5undefined) {
          color: red;
        }
        :global(.no-es6array li.es6array) {
          color: red;
        }
        :global(.no-es6collections li.es6collections) {
          color: red;
        }
        :global(.no-es6math li.es6math) {
          color: red;
        }
        :global(.no-es6number li.es6number) {
          color: red;
        }
        :global(.no-es6object li.es6object) {
          color: red;
        }
        :global(.no-es6string li.es6string) {
          color: red;
        }
        :global(.no-eventlistener li.eventlistener) {
          color: red;
        }
        :global(.no-eventsource li.eventsource) {
          color: red;
        }
        :global(.no-exiforientation li.exiforientation) {
          color: red;
        }
        :global(.no-fetch li.fetch) {
          color: red;
        }
        :global(.no-fileinput li.fileinput) {
          color: red;
        }
        :global(.no-filereader li.filereader) {
          color: red;
        }
        :global(.no-filesystem li.filesystem) {
          color: red;
        }
        :global(.no-flash li.flash) {
          color: red !important;
        }
        :global(.no-flexbox li.flexbox) {
          color: red;
        }
        :global(.no-flexboxlegacy li.flexboxlegacy) {
          color: red;
        }
        :global(.no-flexboxtweener li.flexboxtweener) {
          color: red;
        }
        :global(.no-flexwrap li.flexwrap) {
          color: red;
        }
        :global(.no-focuswithin li.focuswithin) {
          color: red;
        }
        :global(.no-fontface li.fontface) {
          color: red;
        }
        :global(.no-forcetouch li.forcetouch) {
          color: red;
        }
        :global(.no-formattribute li.formattribute) {
          color: red;
        }
        :global(.no-formvalidation li.formvalidation) {
          color: red;
        }
        :global(.no-framed li.framed) {
          color: red;
        }
        :global(.no-fullscreen li.fullscreen) {
          color: red;
        }
        :global(.no-gamepads li.gamepads) {
          color: red;
        }
        :global(.no-generatedcontent li.generatedcontent) {
          color: red;
        }
        :global(.no-generators li.generators) {
          color: red;
        }
        :global(.no-geolocation li.geolocation) {
          color: red;
        }
        :global(.no-getrandomvalues li.getrandomvalues) {
          color: red;
        }
        :global(.no-getusermedia li.getusermedia) {
          color: red;
        }
        :global(.no-hairline li.hairline) {
          color: red;
        }
        :global(.no-hashchange li.hashchange) {
          color: red;
        }
        :global(.no-hidden li.hidden) {
          color: red;
        }
        :global(.no-hiddenscroll li.hiddenscroll) {
          color: red;
        }
        :global(.no-history li.history) {
          color: red;
        }
        :global(.no-hovermq li.hovermq) {
          color: red;
        }
        :global(.no-hsla li.hsla) {
          color: red;
        }
        :global(.no-htmlimports li.htmlimports) {
          color: red;
        }
        :global(.no-ie8compat li.ie8compat) {
          color: red;
        }
        :global(.no-imgcrossorigin li.imgcrossorigin) {
          color: red;
        }
        :global(.no-indexeddb li.indexeddb) {
          color: red;
        }
        :global(.no-indexeddbblob li.indexeddbblob) {
          color: red;
        }
        :global(.no-inlinesvg li.inlinesvg) {
          color: red;
        }
        :global(.no-input li.input) {
          color: red;
        }
        :global(.no-inputformaction li.inputformaction) {
          color: red;
        }
        :global(.no-inputformenctype li.inputformenctype) {
          color: red;
        }
        :global(.no-inputformmethod li.inputformmethod) {
          color: red;
        }
        :global(.no-inputformtarget li.inputformtarget) {
          color: red;
        }
        :global(.no-inputtypes li.inputtypes) {
          color: red;
        }
        :global(.no-intl li.intl) {
          color: red;
        }
        :global(.no-jpeg2000 li.jpeg2000) {
          color: red;
        }
        :global(.no-jpegxr li.jpegxr) {
          color: red;
        }
        :global(.no-json li.json) {
          color: red;
        }
        :global(.no-lastchild li.lastchild) {
          color: red;
        }
        :global(.no-ligatures li.ligatures) {
          color: red;
        }
        :global(.no-localizednumber li.localizednumber) {
          color: red;
        }
        :global(.no-localstorage li.localstorage) {
          color: red;
        }
        :global(.no-lowbandwidth li.lowbandwidth) {
          color: red;
        }
        :global(.no-lowbattery li.lowbattery) {
          color: red;
        }
        :global(.no-matchmedia li.matchmedia) {
          color: red;
        }
        :global(.no-mathml li.mathml) {
          color: red;
        }
        :global(.no-mediaqueries li.mediaqueries) {
          color: red;
        }
        :global(.no-microdata li.microdata) {
          color: red;
        }
        :global(.no-multiplebgs li.multiplebgs) {
          color: red;
        }
        :global(.no-mutationobserver li.mutationobserver) {
          color: red;
        }
        :global(.no-notification li.notification) {
          color: red;
        }
        :global(.no-nthchild li.nthchild) {
          color: red;
        }
        :global(.no-objectfit li.objectfit) {
          color: red;
        }
        :global(.no-olreversed li.olreversed) {
          color: red;
        }
        :global(.no-oninput li.oninput) {
          color: red;
        }
        :global(.no-opacity li.opacity) {
          color: red;
        }
        :global(.no-outputelem li.outputelem) {
          color: red;
        }
        :global(.no-overflowscrolling li.overflowscrolling) {
          color: red;
        }
        :global(.no-pagevisibility li.pagevisibility) {
          color: red;
        }
        :global(.no-passiveeventlisteners li.passiveeventlisteners) {
          color: red;
        }
        :global(.no-peerconnection li.peerconnection) {
          color: red;
        }
        :global(.no-performance li.performance) {
          color: red;
        }
        :global(.no-picture li.picture) {
          color: red;
        }
        :global(.no-placeholder li.placeholder) {
          color: red;
        }
        :global(.no-pointerevents li.pointerevents) {
          color: red;
        }
        :global(.no-pointerlock li.pointerlock) {
          color: red;
        }
        :global(.no-pointermq li.pointermq) {
          color: red;
        }
        :global(.no-postmessage li.postmessage) {
          color: red;
        }
        :global(.no-preserve3d li.preserve3d) {
          color: red;
        }
        :global(.no-progressbar li.progressbar) {
          color: red;
        }
        :global(.no-meter li.meter) {
          color: red;
        }
        :global(.no-promises li.promises) {
          color: red;
        }
        :global(.no-proximity li.proximity) {
          color: red;
        }
        :global(.no-queryselector li.queryselector) {
          color: red;
        }
        :global(.no-quotamanagement li.quotamanagement) {
          color: red;
        }
        :global(.no-regions li.regions) {
          color: red;
        }
        :global(.no-requestanimationframe li.requestanimationframe) {
          color: red;
        }
        :global(.no-requestautocomplete li.requestautocomplete) {
          color: red;
        }
        :global(.no-rgba li.rgba) {
          color: red;
        }
        :global(.no-ruby li.ruby) {
          color: red;
        }
        :global(.no-sandbox li.sandbox) {
          color: red;
        }
        :global(.no-scriptasync li.scriptasync) {
          color: red;
        }
        :global(.no-scriptdefer li.scriptdefer) {
          color: red;
        }
        :global(.no-scrollsnappoints li.scrollsnappoints) {
          color: red;
        }
        :global(.no-seamless li.seamless) {
          color: red;
        }
        :global(.no-search li.search) {
          color: red;
        }
        :global(.no-serviceworker li.serviceworker) {
          color: red;
        }
        :global(.no-sessionstorage li.sessionstorage) {
          color: red;
        }
        :global(.no-shapes li.shapes) {
          color: red;
        }
        :global(.no-sharedworkers li.sharedworkers) {
          color: red;
        }
        :global(.no-siblinggeneral li.siblinggeneral) {
          color: red;
        }
        :global(.no-sizes li.sizes) {
          color: red;
        }
        :global(.no-smil li.smil) {
          color: red;
        }
        :global(.no-speechrecognition li.speechrecognition) {
          color: red;
        }
        :global(.no-speechsynthesis li.speechsynthesis) {
          color: red;
        }
        :global(.no-srcdoc li.srcdoc) {
          color: red;
        }
        :global(.no-srcset li.srcset) {
          color: red;
        }
        :global(.no-strictmode li.strictmode) {
          color: red;
        }
        :global(.no-stylescoped li.stylescoped) {
          color: red;
        }
        :global(.no-subpixelfont li.subpixelfont) {
          color: red;
        }
        :global(.no-supports li.supports) {
          color: red;
        }
        :global(.no-svg li.svg) {
          color: red;
        }
        :global(.no-svgasimg li.svgasimg) {
          color: red;
        }
        :global(.no-svgclippaths li.svgclippaths) {
          color: red;
        }
        :global(.no-svgfilters li.svgfilters) {
          color: red;
        }
        :global(.no-svgforeignobject li.svgforeignobject) {
          color: red;
        }
        :global(.no-target li.target) {
          color: red;
        }
        :global(.no-template li.template) {
          color: red;
        }
        :global(.no-templatestrings li.templatestrings) {
          color: red;
        }
        :global(.no-textalignlast li.textalignlast) {
          color: red;
        }
        :global(.no-textareamaxlength li.textareamaxlength) {
          color: red;
        }
        :global(.no-textshadow li.textshadow) {
          color: red;
        }
        :global(.no-texttrackapi li.texttrackapi) {
          color: red;
        }
        :global(.no-track li.track) {
          color: red;
        }
        :global(.no-time li.time) {
          color: red;
        }
        :global(.no-todataurljpeg li.todataurljpeg) {
          color: red;
        }
        :global(.no-todataurlpng li.todataurlpng) {
          color: red;
        }
        :global(.no-todataurlwebp li.todataurlwebp) {
          color: red;
        }
        :global(.no-touchevents li.touchevents) {
          color: red;
        }
        :global(.no-transferables li.transferables) {
          color: red;
        }
        :global(.no-typedarrays li.typedarrays) {
          color: red;
        }
        :global(.no-unicode li.unicode) {
          color: red;
        }
        :global(.no-unicoderange li.unicoderange) {
          color: red;
        }
        :global(.no-unknownelements li.unknownelements) {
          color: red;
        }
        :global(.no-urlparser li.urlparser) {
          color: red;
        }
        :global(.no-urlsearchparams li.urlsearchparams) {
          color: red;
        }
        :global(.no-userdata li.userdata) {
          color: red;
        }
        :global(.no-userselect li.userselect) {
          color: red;
        }
        :global(.no-variablefonts li.variablefonts) {
          color: red;
        }
        :global(.no-vibrate li.vibrate) {
          color: red;
        }
        :global(.no-video li.video) {
          color: red;
        }
        :global(.no-videoautoplay li.videoautoplay) {
          color: red;
        }
        :global(.no-videocrossorigin li.videocrossorigin) {
          color: red;
        }
        :global(.no-videoloop li.videoloop) {
          color: red;
        }
        :global(.no-videopreload li.videopreload) {
          color: red;
        }
        :global(.no-vml li.vml) {
          color: red;
        }
        :global(.no-webaudio li.webaudio) {
          color: red;
        }
        :global(.no-webgl li.webgl) {
          color: red;
        }
        :global(.no-webglextensions li.webglextensions) {
          color: red;
        }
        :global(.no-webintents li.webintents) {
          color: red;
        }
        :global(.no-webp li.webp) {
          color: red;
        }
        :global(.no-webpalpha li.webpalpha) {
          color: red;
        }
        :global(.no-webpanimation li.webpanimation) {
          color: red;
        }
        :global(.no-webplossless li.webplossless) {
          color: red;
        }
        :global(.no-webp li.webp) {
          color: red;
        }
        :global(.no-lossless li.lossless) {
          color: red;
        }
        :global(.no-websockets li.websockets) {
          color: red;
        }
        :global(.no-websocketsbinary li.websocketsbinary) {
          color: red;
        }
        :global(.no-websqldatabase li.websqldatabase) {
          color: red;
        }
        :global(.no-webworkers li.webworkers) {
          color: red;
        }
        :global(.no-willchange li.willchange) {
          color: red;
        }
        :global(.no-wrapflow li.wrapflow) {
          color: red;
        }
        :global(.no-xdomainrequest li.xdomainrequest) {
          color: red;
        }
        :global(.no-xhr2 li.xhr2) {
          color: red;
        }
        :global(.no-xhrresponsetype li.xhrresponsetype) {
          color: red;
        }
        :global(.no-xhrresponsetypearraybuffer li.xhrresponsetypearraybuffer) {
          color: red;
        }
        :global(.no-xhrresponsetypeblob li.xhrresponsetypeblob) {
          color: red;
        }
        :global(.no-xhrresponsetypedocument li.xhrresponsetypedocument) {
          color: red;
        }
        :global(.no-xhrresponsetypejson li.xhrresponsetypejson) {
          color: red;
        }
        :global(.no-xhrresponsetypetext li.xhrresponsetypetext) {
          color: red;
        }
        :global(.no-addtest li.addtest) {
          color: red;
        }
        :global(.no-atrule li.atrule) {
          color: red;
        }
        :global(.no-domprefixes li.domprefixes) {
          color: red;
        }
        :global(.no-hasevent li.hasevent) {
          color: red;
        }
        :global(.no-mq li.mq) {
          color: red;
        }
        :global(.no-prefixed li.prefixed) {
          color: red;
        }
        :global(.no-prefixedcss li.prefixedcss) {
          color: red;
        }
        :global(.no-prefixedcssvalue li.prefixedcssvalue) {
          color: red;
        }
        :global(.no-prefixes li.prefixes) {
          color: red;
        }
        :global(.no-setclasses li.setclasses) {
          color: red;
        }
        :global(.no-shiv li.shiv) {
          color: red;
        }
        :global(.no-testallprops li.testallprops) {
          color: red;
        }
        :global(.no-testprop li.testprop) {
          color: red;
        }
        :global(.no-teststyles li.teststyles) {
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
