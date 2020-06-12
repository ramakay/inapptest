import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

export const lightTheme = createMuiTheme();
export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#37474f",
      main: "#62727b",
      dark: "#102027",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#707474",
      main: "#454949",
      dark: "#1e2222",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: ['"Barlow"', '"Helvetica Neue"', "Arial", "sans-serif"].join(
      ","
    ),
  },
});

export const appStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#1c1c1c",
  },
  formStyles: {
    width: "90%",
    display: "flex",
  },
  cardStyles: {
    maxWidth: 345,
  },
  uaTextArea: {
    color: "#fff",
    backgroundColor: "#1c1c1c",
    width: "100%",
    padding: "10px",
  },

  MuiCardMediaimg: {
  width: "auto !important",
    height: "96px",
  },
});

export const StyledGlobalClasses = () => {
  return (
    <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Barlow, -apple-system, BlinkMacSystemFont, Segoe UI,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #333;
        }

        * {
          box-sizing: border-box;
        }

        :global(ul.featureList) {
          -webkit-column-count: 2;
          -moz-column-count: 2;
          column-count: 2;
          padding: 10px;
          margin-top: 10px;
          font-size: 0.5 rem;
        }
        :global(ul.featureList li) {
          margin: 0;
          padding: 10px 0 16px 28px;
          list-style: none;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/2705.svg");
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 20px;
          color: #8dc891;
          font-size: 10px;
        }
        :global(.no-MessageChannel li.MessageChannel) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-adownload li.adownload) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-ambientlight li.ambientlight) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-animation li.animation) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-apng li.apng) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-appearance li.appearance) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-applicationcache li.applicationcache) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-arrow li.arrow) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-atobbtoa li.atobbtoa) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-audio li.audio) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-audioloop li.audioloop) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-audiopreload li.audiopreload) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-backdropfilter li.backdropfilter) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-backgroundblendmode li.backgroundblendmode) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-backgroundcliptext li.backgroundcliptext) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-backgroundsize li.backgroundsize) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-batteryapi li.batteryapi) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-bdi li.bdi) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-beacon li.beacon) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-bgpositionshorthand li.bgpositionshorthand) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-bgpositionxy li.bgpositionxy) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-bgrepeatspace li.bgrepeatspace) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-bgrepeatround li.bgrepeatround) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-bgsizecover li.bgsizecover) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-blobconstructor li.blobconstructor) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-bloburls li.bloburls) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-blobworkers li.blobworkers) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-borderimage li.borderimage) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-borderradius li.borderradius) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-boxshadow li.boxshadow) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-boxsizing li.boxsizing) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-canvas li.canvas) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-canvasblending li.canvasblending) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-canvastext li.canvastext) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-canvaswinding li.canvaswinding) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-capture li.capture) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-checked li.checked) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-classlist li.classlist) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-contains li.contains) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-contenteditable li.contenteditable) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-contextmenu li.contextmenu) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cookies li.cookies) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cors li.cors) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-createelementattrs li.createelementattrs) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-createelement li.createelement) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-attrs li.attrs) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cryptography li.cryptography) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssall li.cssall) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssanimations li.cssanimations) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-csscalc li.csscalc) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-csschunit li.csschunit) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-csscolumns li.csscolumns) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssescape li.cssescape) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssexunit li.cssexunit) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssfilters li.cssfilters) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssgradients li.cssgradients) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssgrid li.cssgrid) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssgridlegacy li.cssgridlegacy) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-csshyphens li.csshyphens) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-softhyphens li.softhyphens) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-softhyphensfind li.softhyphensfind) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssinvalid li.cssinvalid) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssmask li.cssmask) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-csspointerevents li.csspointerevents) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-csspositionsticky li.csspositionsticky) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-csspseudoanimations li.csspseudoanimations) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-csspseudotransitions li.csspseudotransitions) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssreflections li.cssreflections) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssremunit li.cssremunit) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssresize li.cssresize) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssscrollbar li.cssscrollbar) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-csstransforms li.csstransforms) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-csstransforms3d li.csstransforms3d) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-csstransformslevel2 li.csstransformslevel2) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-csstransitions li.csstransitions) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssvalid li.cssvalid) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssvhunit li.cssvhunit) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssvmaxunit li.cssvmaxunit) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssvminunit li.cssvminunit) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cssvwunit li.cssvwunit) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-cubicbezierrange li.cubicbezierrange) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-customelements li.customelements) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-customevent li.customevent) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-customprotocolhandler li.customprotocolhandler) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-dart li.dart) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-datachannel li.datachannel) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-datalistelem li.datalistelem) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-dataset li.dataset) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-datauri li.datauri) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-dataview li.dataview) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-dataworkers li.dataworkers) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-details li.details) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-devicemotion li.devicemotion) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-deviceorientation li.deviceorientation) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-directory li.directory) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-display li.display) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-runin li.runin) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-displaytable li.displaytable) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-documentfragment li.documentfragment) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-ellipsis li.ellipsis) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-emoji li.emoji) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es5 li.es5) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es5array li.es5array) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es5date li.es5date) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es5function li.es5function) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es5object li.es5object) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es5string li.es5string) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es5syntax li.es5syntax) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es5undefined li.es5undefined) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es6array li.es6array) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es6collections li.es6collections) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es6math li.es6math) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es6number li.es6number) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es6object li.es6object) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-es6string li.es6string) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-eventlistener li.eventlistener) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-eventsource li.eventsource) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-exiforientation li.exiforientation) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-fetch li.fetch) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-fileinput li.fileinput) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-filereader li.filereader) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-filesystem li.filesystem) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-flash li.flash) {
          color: #f48fb1 !important;
        }
        :global(.no-flexbox li.flexbox) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-flexboxlegacy li.flexboxlegacy) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-flexboxtweener li.flexboxtweener) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-flexwrap li.flexwrap) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-focuswithin li.focuswithin) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-fontface li.fontface) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-forcetouch li.forcetouch) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-formattribute li.formattribute) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-formvalidation li.formvalidation) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-framed li.framed) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-fullscreen li.fullscreen) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-gamepads li.gamepads) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-generatedcontent li.generatedcontent) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-generators li.generators) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-geolocation li.geolocation) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-getrandomvalues li.getrandomvalues) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-getusermedia li.getusermedia) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-hairline li.hairline) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-hashchange li.hashchange) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-hidden li.hidden) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-hiddenscroll li.hiddenscroll) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-history li.history) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-hovermq li.hovermq) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-hsla li.hsla) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-htmlimports li.htmlimports) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-ie8compat li.ie8compat) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-imgcrossorigin li.imgcrossorigin) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-indexeddb li.indexeddb) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-indexeddbblob li.indexeddbblob) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-inlinesvg li.inlinesvg) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-input li.input) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-inputformaction li.inputformaction) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-inputformenctype li.inputformenctype) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-inputformmethod li.inputformmethod) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-inputformtarget li.inputformtarget) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-inputtypes li.inputtypes) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-intl li.intl) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-jpeg2000 li.jpeg2000) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-jpegxr li.jpegxr) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-json li.json) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-lastchild li.lastchild) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-ligatures li.ligatures) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-localizednumber li.localizednumber) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-localstorage li.localstorage) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-lowbandwidth li.lowbandwidth) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-lowbattery li.lowbattery) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-matchmedia li.matchmedia) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-mathml li.mathml) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-mediaqueries li.mediaqueries) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-microdata li.microdata) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-multiplebgs li.multiplebgs) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-mutationobserver li.mutationobserver) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-notification li.notification) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-nthchild li.nthchild) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-objectfit li.objectfit) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-olreversed li.olreversed) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-oninput li.oninput) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-opacity li.opacity) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-outputelem li.outputelem) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-overflowscrolling li.overflowscrolling) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-pagevisibility li.pagevisibility) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-passiveeventlisteners li.passiveeventlisteners) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-peerconnection li.peerconnection) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-performance li.performance) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-picture li.picture) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-placeholder li.placeholder) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-pointerevents li.pointerevents) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-pointerlock li.pointerlock) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-pointermq li.pointermq) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-postmessage li.postmessage) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-preserve3d li.preserve3d) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-progressbar li.progressbar) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-meter li.meter) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-promises li.promises) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-proximity li.proximity) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-queryselector li.queryselector) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-quotamanagement li.quotamanagement) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-regions li.regions) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-requestanimationframe li.requestanimationframe) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-requestautocomplete li.requestautocomplete) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-rgba li.rgba) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-ruby li.ruby) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-sandbox li.sandbox) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-scriptasync li.scriptasync) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-scriptdefer li.scriptdefer) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-scrollsnappoints li.scrollsnappoints) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-seamless li.seamless) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-search li.search) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-serviceworker li.serviceworker) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-sessionstorage li.sessionstorage) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-shapes li.shapes) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-sharedworkers li.sharedworkers) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-siblinggeneral li.siblinggeneral) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-sizes li.sizes) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-smil li.smil) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-speechrecognition li.speechrecognition) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-speechsynthesis li.speechsynthesis) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-srcdoc li.srcdoc) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-srcset li.srcset) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-strictmode li.strictmode) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-stylescoped li.stylescoped) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-subpixelfont li.subpixelfont) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-supports li.supports) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-svg li.svg) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-svgasimg li.svgasimg) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-svgclippaths li.svgclippaths) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-svgfilters li.svgfilters) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-svgforeignobject li.svgforeignobject) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-target li.target) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-template li.template) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-templatestrings li.templatestrings) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-textalignlast li.textalignlast) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-textareamaxlength li.textareamaxlength) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-textshadow li.textshadow) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-texttrackapi li.texttrackapi) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-track li.track) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-time li.time) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-todataurljpeg li.todataurljpeg) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-todataurlpng li.todataurlpng) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-todataurlwebp li.todataurlwebp) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-touchevents li.touchevents) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-transferables li.transferables) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-typedarrays li.typedarrays) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-unicode li.unicode) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-unicoderange li.unicoderange) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-unknownelements li.unknownelements) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-urlparser li.urlparser) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-urlsearchparams li.urlsearchparams) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-userdata li.userdata) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-userselect li.userselect) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-variablefonts li.variablefonts) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-vibrate li.vibrate) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-video li.video) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-videoautoplay li.videoautoplay) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-videocrossorigin li.videocrossorigin) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-videoloop li.videoloop) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-videopreload li.videopreload) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-vml li.vml) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-webaudio li.webaudio) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-webgl li.webgl) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-webglextensions li.webglextensions) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-webintents li.webintents) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-webp li.webp) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-webpalpha li.webpalpha) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-webpanimation li.webpanimation) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-webplossless li.webplossless) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-webp li.webp) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-lossless li.lossless) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-websockets li.websockets) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-websocketsbinary li.websocketsbinary) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-websqldatabase li.websqldatabase) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-webworkers li.webworkers) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-willchange li.willchange) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-wrapflow li.wrapflow) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-xdomainrequest li.xdomainrequest) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-xhr2 li.xhr2) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-xhrresponsetype li.xhrresponsetype) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-xhrresponsetypearraybuffer li.xhrresponsetypearraybuffer) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-xhrresponsetypeblob li.xhrresponsetypeblob) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-xhrresponsetypedocument li.xhrresponsetypedocument) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-xhrresponsetypejson li.xhrresponsetypejson) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-xhrresponsetypetext li.xhrresponsetypetext) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-addtest li.addtest) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-atrule li.atrule) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-domprefixes li.domprefixes) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-hasevent li.hasevent) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-mq li.mq) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-prefixed li.prefixed) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-prefixedcss li.prefixedcss) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-prefixedcssvalue li.prefixedcssvalue) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-prefixes li.prefixes) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-setclasses li.setclasses) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-shiv li.shiv) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-testallprops li.testallprops) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-testprop li.testprop) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
        :global(.no-teststyles li.teststyles) {
          color: #f48fb1;
          background-image: url("https://s.w.org/images/core/emoji/11/svg/274c.svg");
        }
      `}
    </style>
  );
};
