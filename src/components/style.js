import { createGlobalStyle } from "styled-components"
import configs from "../../site-config"

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: ${configs.font};
    line-height: 1;
  }

  body {
    font-size: 2rem;
    background-color: ${configs.body_background_color};
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 2rem;
  }

  // Better font rendering
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${configs.body_background_color};
  }

  a:link,
  a:hover,
  a:visited,
  a:active {
    color: ${configs.link_color};
    text-decoration: none;
  }

  // Various resets
  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  .imageWrapper {
    // Sets the background image in the header area
    height: 714px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    border-radius: 0px 0px 40px 40px;
  }

  .headerImage {
    position: unset !important;
    height: 0 !important;
    display: block !important;
    
  }
  .headerImage > div{
    padding-bottom: 0 !important;
  }
  .headerImage img {
    z-index: -1;
    border-radius: 0px 0px 40px 40px;
  }

  .headerBackground {
    height: 115px;
    background-color: ${configs.header_background};
  }

  .container {
    // Set up the container for the site content
    display: grid;
    margin: auto;
    max-width: ${configs.content_width};
    padding-left: 15px;
    padding-right: 15px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 115px 876px auto auto auto;
    grid-column-gap: 30px;
    grid-template-areas:
      "h h h h h h h h h h h h"
      "p p p p p i i i i i i i"
      "c c c c c c c c c c c c"
      "s s s s s s s s s s s s"
      "f f f f f f f f f f f f";
  }

  @media only screen and (max-width: 1070px) {
    .container {
      // Set up the container for the site content
      grid-template-rows: 115px 811px auto auto auto;
    }
  }

  @media only screen and (max-width: 992px) {
    .container {
      grid-column-gap: 0px;
      grid-template-columns: 1;
      grid-template-rows: 115px auto auto auto auto auto;
      grid-template-areas:
        "h h h h h h h h h h h h"
        "i i i i i i i i i i i i"
        "p p p p p p p p p p p p"
        "c c c c c c c c c c c c"
        "s s s s s s s s s s s s"
        "f f f f f f f f f f f f";
    }
  }

  header {
    grid-area: h;
    display: flex;
  }

  .logo {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    height: 115px;
  }

  .logo > p {
    color: ${configs.topbar_title_color};
    display: flex;
    font-weight: bold;
    padding-bottom: 1px;
  }

  .headerIcon {
    width: 50px;
    height: 50px;
    -webkit-clip-path: url(#shape);
    clip-path: url(#shape);
    margin-right: 15px;
  }

  // Navigation Links
  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 115px;
  }

  nav > ul {
    color: #fff;
    display: flex;
    list-style-type: none;
  }

  nav > ul li {
    padding-left: 50px;
    text-align: right;
  }

  nav > ul li:first-child {
    padding-left: 0px;
  }

  nav > ul li a:link,
  nav > ul li a:visited {
    text-decoration: none;
    color: rgba(${configs.topbar_title_color}, 0.6);
  }

  nav > ul li a:hover,
  nav > ul li a:active {
    text-decoration: none;
    color: rgba(${configs.topbar_title_color}, 1);
  }

  // App Title, Price, Description and Links

  .appInfo {
    grid-area: i;
    display: flex;
    flex-wrap: wrap;
    padding-top: 140px;
    align-content: flex-start;
  }

  @media only screen and (max-width: 992px) {
    .appInfo {
      padding-top: 50px;
      justify-content: center;
    }
  }

  .appIconShadow {
    display: flex;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
  }

  .appIconLarge {
    width: 120px;
    height: 120px;
    -webkit-clip-path: url(#shape120);
    clip-path: url(#shape120);
  }

  .appNamePriceContainer {
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-left: 30px;
  }

  .appName {
    color: ${configs.app_title_color};
  }

  .appPrice {
    color: ${configs.app_price_color};
    font-weight: normal;
    margin-top: 13px;
  }

  @media only screen and (max-width: 768px) {
    .appNamePriceContainer {
      width: 100%;
      margin-left: 0px;
      align-items: center;
      justify-content: center;
    }

    .appName {
      margin-top: 30px;
      text-align: center;
    }

    .appPrice {
      margin-top: 13px;
      text-align: center;
    }
  }

  .appDescriptionContainer {
    font-size: 2.5rem;
    font-weight: normal;
    width: 100%;
    align-items: flex-start;
    margin-top: 45px;
    flex: 0 1 auto;
    line-height: 1.5;
  }

  .appDescription {
    color: ${configs.app_description_color};
  }

  @media only screen and (max-width: 992px) {
    .appDescription {
      text-align: center;
    }
  }

  .downloadButtonsContainer {
    display: inline-block;
    margin-top: 42px;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
  }

  @media only screen and (max-width: 992px) {
    .downloadButtonsContainer {
      text-align: center;
    }
  }

  .playStore {
    height: 75px;
    margin-right: 24px;
  }

  @media only screen and (max-width: 992px) {
    .playStore {
      margin-right: 24px;
      margin-bottom: 0px;
    }
  }

  @media only screen and (max-width: 528px) {
    .playStore {
      margin-right: 0px;
      margin-bottom: 24px;
    }
  }

  .appStore {
    height: 75px;
  }

  // iPhone Device Preview

  .iphonePreview {
    grid-area: p;
    background-size: 400px auto;
    background-repeat: no-repeat;
    margin-top: 68px;
  }

  .iphoneScreen {
    width: 349px;
    -webkit-clip-path: url(#screenMask);
    clip-path: url(#screenMask);
    margin-left: 26px;
    margin-top: 23px;
  }

  .videoContainer {
    width: 349px;
    height: 755px;
    -webkit-clip-path: url(#screenMask);
    clip-path: url(#screenMask);
    margin-left: 26px;
    margin-top: 23px;
  }

  .videoContainer > video {
    width: 349px;
    height: 755px;
  }

  @media only screen and (max-width: 1070px) {
    .iphonePreview {
      background-size: 370px auto;
    }

    .iphoneScreen {
      width: 322px;
      margin-left: 24px;
      margin-top: 22px;
    }

    .videoContainer {
      width: 322px;
      height: 698px;
      margin-left: 24px;
      margin-top: 22px;
    }

    .videoContainer > video {
      width: 322px;
      height: 698px;
    }
  }

  @media only screen and (max-width: 992px) {
    .iphonePreview {
      display: flex;
      background-size: 260px auto;
      background-position: center 0;
      margin-top: 47px;
      justify-content: center;
      padding-bottom: 75px;
    }

    .iphoneScreen {
      width: 226px;
      height: 488px;
      -webkit-clip-path: url(#screenMask);
      clip-path: url(#screenMask);
      margin: 0px;
      margin-top: 17px;
    }

    .videoContainer {
      width: 226px;
      height: 488px;
      margin-left: 0px;
      margin-top: 17px;
    }

    .videoContainer > video {
      width: 226px;
      height: 488px;
    }
  }

  // Feature List

  .features {
    grid-area: c;
    display: flex;
    flex: 0 1 auto;
    align-content: flex-start;
    justify-content: flex-start;
    flex-grow: 1;
    flex-wrap: wrap;
    margin-top: 93px;
  }

  // Screenshots Section
  .screenshots {
    grid-area: s;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 93px;
    width: 100%;
    overflow: hidden;
  }

  .screenshots h2 {
    color: ${configs.feature_title_color};
    text-align: center;
    margin-bottom: 40px;
    width: 100%;
  }

  .screenshots-grid {
    display: flex;
    overflow-x: auto;
    gap: 30px;
    width: 100%;
    padding: 20px 0;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .screenshots-grid::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  .screenshot-item {
    flex: 0 0 300px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
  }

  .screenshot-item:hover {
    transform: translateY(-5px);
  }

  .screenshot-image {
    width: 100%;
    height: auto;
    display: block;
  }

  .screenshot-info {
    padding: 15px;
    background: white;
  }

  .screenshot-info h3 {
    color: ${configs.feature_title_color};
    font-size: 1.6rem;
    margin-bottom: 8px;
  }

  .screenshot-info p {
    color: ${configs.feature_text_color};
    font-size: 1.4rem;
    line-height: 1.4;
  }

  @media only screen and (max-width: 992px) {
    .screenshots {
      margin-top: 11px;
    }

    .screenshot-item {
      flex: 0 0 250px;
    }
  }

  @media only screen and (max-width: 528px) {
    .screenshot-item {
      flex: 0 0 200px;
    }
  }

  .feature {
    display: flex;
    padding-top: 63px;
    padding-left: 15px;
    padding-right: 15px;
    width: calc(100% / 3);
  }

  .feature:nth-child(-n + 3) {
    padding-top: 0px;
  }

  .feature:nth-child(3n) {
    padding-right: 0px;
  }

  .feature:nth-child(3n + 1) {
    padding-left: 0px;
  }

  .iconBack {
    color: ${configs.feature_icons_background_color};
  }

  .iconTop {
    color: ${configs.feature_icons_foreground_color};
  }

  .socialIconBack {
    color: ${configs.social_icons_background_color};
  }

  .socialIconTop {
    color: ${configs.social_icons_foreground_color};
  }

  .featureText {
    margin-left: 18px;
  }

  .featureText > h3 {
    color: ${configs.feature_title_color};
  }

  .featureText > p {
    color: ${configs.feature_text_color};
    margin-top: 8px;
    line-height: 1.5;
  }

  @media only screen and (max-width: 992px) {
    .features {
      flex-grow: 1;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 11px;
    }

    .feature {
      display: flex;
      padding-top: 41px;
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
    }

    .feature:nth-child(-n + 3) {
      padding-top: 41px;
    }

    .feature:nth-child(1) {
      padding-top: 0px;
    }

    .feature:nth-child(3n) {
      padding-right: 15px;
    }

    .feature:nth-child(3n + 1) {
      padding-left: 15px;
    }
  }

  // Footer

  footer {
    grid-area: f;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding: 50px 0;
    background-color: ${configs.body_background_color};
  }

  .contact-support {
    width: 100%;
    max-width: ${configs.content_width};
    padding: 0 15px;
  }

  .contact-support h2 {
    text-align: center;
    color: ${configs.feature_title_color};
    margin-bottom: 50px;
    font-size: 3.2rem;
  }

  .support-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 30px;
  }

  .support-item {
    background: white;
    padding: 30px;
    border-radius: 12px;
    text-align: center;
  }

  .support-item h3 {
    color: ${configs.feature_title_color};
    margin-bottom: 15px;
    font-size: 2.4rem;
  }

  .support-item p {
    color: ${configs.feature_text_color};
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 1.6rem;
    display: inline-block;
  }

  .support-button {
    display: inline-block;
    color: ${configs.link_color};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    border-bottom: 1px solid transparent;
    margin-left: 5px;
  }

  .support-button:hover {
    color: ${configs.link_color}dd;
    border-bottom-color: ${configs.link_color}dd;
  }

  @media only screen and (max-width: 992px) {
    .support-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .contact-support h2 {
      font-size: 2.8rem;
      margin-bottom: 40px;
    }

    .support-item {
      padding: 25px;
    }
  }

  @media only screen and (max-width: 528px) {
    footer {
      padding: 50px 0;
    }

    .contact-support h2 {
      font-size: 2.4rem;
      margin-bottom: 30px;
    }

    .support-item {
      padding: 20px;
    }

    .support-item h3 {
      font-size: 2rem;
    }

    .support-item p {
      font-size: 1.4rem;
    }
  }

  .hidden {
    display: none;
  }

  .support-header {
    display: inline-block;
    color: ${configs.feature_title_color};
    margin-bottom: 16px;
    font-size: 2.4rem;
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: bold;
  }

  .support-header:hover {
    color: ${configs.link_color};
  }

  .support-item p {
    color: ${configs.feature_text_color};
    line-height: 1.5;
    font-size: 1.6rem;
  }
`