/** @jsx h */
import { h } from "preact";

import {data} from "../utils/data.ts"; //assert { type: "json" };

export default function Home() {
  return (
    <body class="body">
      <div
        data-w-id="41b39f2a-3cc6-0436-9059-9418e7f2bdc5"
        style="display:flex;opacity:1"
        class="loading"
      >
        <div class="loading-wrapper">
          <h2>{data.title}</h2>
        </div>
      </div>
      <div class="site-wrapper">
        <div class="hero-section">
          <div class="navbar">
            <div class="content-wrapper nav">
              <a href="#" class="logo w-inline-block">
                <div class="mntn-logo w-embed">
                  <h3>{data.title}</h3>
                </div>
              </a>
              <div class="nav-link-wrapper" style="display:none">
                <a href="#" class="nav-link nav w-inline-block">
                  <div>Equipment</div>
                </a>
                <a href="#" class="nav-link nav w-inline-block">
                  <div>About us</div>
                </a>
                <a href="#" class="nav-link nav w-inline-block">
                  <div>Blog</div>
                </a>
              </div>
              <div class="account">
                <a href="#" class="link-to hero w-inline-block">
                  <div class="icon margin-right w-embed">
                    <svg
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14ZM12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.9261 20.0557C20.397 18.235 22 15.3047 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.3047 3.60301 18.235 6.07388 20.0557C6.11934 20.0892 6.16509 20.1223 6.21112 20.1551C6.65997 20.4742 7.1363 20.7573 7.63587 21C8.95464 21.6407 10.4354 22 12 22C13.5646 22 15.0454 21.6407 16.3641 21C16.3909 20.987 16.4177 20.9738 16.4443 20.9606C16.9657 20.7015 17.4613 20.3982 17.9261 20.0557ZM17.2287 18.055C18.926 16.588 20 14.4194 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 14.4194 5.07401 16.588 6.77128 18.055C7.80066 16.2313 9.75654 15 12 15C14.2435 15 16.1993 16.2313 17.2287 18.055ZM15.5567 19.1679C14.8921 17.8803 13.5488 17 12 17C10.4512 17 9.10792 17.8803 8.44332 19.1679C9.51467 19.7005 10.7224 20 12 20C13.2776 20 14.4853 19.7005 15.5567 19.1679Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>Account</div>
                </a>
              </div>
            </div>
          </div>
          <div
            data-w-id="3f00c438-a0f3-3091-6407-ce77cd80edd8"
            class="content-wrapper hero"
          >
            <div class="social-links">
              <div class="text-block">Follow us</div>
              <div class="icon social w-embed">
                <svg
                  width="25"
                  height="25"
                  viewbox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 16.7L2.5 8.3C2.5 5.0968 5.09675 2.5 8.3 2.5L16.7 2.5C19.9033 2.5 22.5 5.0968 22.5 8.29999L22.5 16.7C22.5 19.9032 19.9033 22.5 16.7 22.5L8.3 22.5C5.09675 22.5 2.5 19.9032 2.5 16.7ZM4.49998 16.9C4.49998 18.8882 6.11176 20.5 8.09998 20.5L16.9 20.5C18.8882 20.5 20.5 18.8882 20.5 16.9L20.5 8.1C20.5 6.1118 18.8882 4.5 16.9 4.5L8.09998 4.5C6.11176 4.5 4.49998 6.1118 4.49998 8.1L4.49998 16.9ZM5.99998 7.25C5.99998 6.5596 6.55963 6 7.24998 6C7.94034 6 8.49998 6.5596 8.49998 7.25C8.49998 7.9404 7.94034 8.5 7.24998 8.5C6.55963 8.5 5.99998 7.9404 5.99998 7.25ZM7.49998 12.5C7.49998 9.7386 9.73856 7.5 12.5 7.5C15.2614 7.5 17.5 9.7386 17.5 12.5C17.5 15.2614 15.2614 17.5 12.5 17.5C9.73856 17.5 7.49998 15.2614 7.49998 12.5ZM9.49998 12.5C9.49998 14.1569 10.8432 15.5 12.5 15.5C14.1569 15.5 15.5 14.1569 15.5 12.5C15.5 10.8431 14.1569 9.5 12.5 9.5C10.8432 9.5 9.49998 10.8431 9.49998 12.5Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="icon social w-embed">
                <svg
                  width="25"
                  height="25"
                  viewbox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.51238 2.04079C6.85373 2.81039 7.08442 3.63759 7.18815 4.50559C6.65701 3.61969 5.81598 2.93909 4.81378 2.61869C5.30564 3.44799 5.66278 4.36639 5.8552 5.34399C5.02112 6.12679 4.5 7.24209 4.5 8.47649C4.5 10.8466 6.42147 12.7683 8.79155 12.7683C9.1279 12.7683 9.45546 12.7303 9.7696 12.6571C9.5906 16.2239 7.88203 19.3862 5.28551 21.5029C5.91935 21.8723 6.65656 22.084 7.44309 22.084C8.93204 22.084 10.2456 21.3263 11.0153 20.1748C10.9929 20.8782 10.7999 21.54 10.4785 22.1186C10.4964 22.119 10.5143 22.119 10.5324 22.119C12.6118 22.119 14.3463 20.6397 14.7406 18.6764C14.8387 19.0365 14.8912 19.4156 14.8912 19.807C14.8912 20.0836 14.8642 20.3524 14.8142 20.6145C16.5191 20.0684 17.76 18.4835 17.7945 16.6054C18.9457 18.0742 19.6318 19.9247 19.6318 21.9355C19.6318 22.2819 19.6114 22.6235 19.5717 22.9592C20.7894 21.06 21.5 18.8041 21.5 16.3805C21.5 8.48659 14.9605 4.16979 9.28918 4.16979C9.10314 4.16979 8.91805 4.17399 8.73395 4.18229C8.12886 3.34369 7.37302 2.61609 6.51238 2.04079Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="content-hero">
              <div class="tagline">
                <div class="tagline-line"></div>
              </div>
              <h1 class="h1-title">{data.description}</h1>
              <a href="#Content" class="link-to hero w-inline-block">
                <div>scroll </div>
                <div class="icon-scroll w-embed">
                  <svg
                    width="16"
                    height="24"
                    viewbox="0 0 16 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div class="nav-slider">
              <div class="nav-slider-links">
                <a href="#" class="slider-link">
                  Start
                </a>
                <a href="#" class="slider-link">
                  01
                </a>
                <a href="#" class="slider-link">
                  02
                </a>
                <a href="#" class="slider-link">
                  03
                </a>
              </div>
              <div class="indicator-line">
                <div class="indicator"></div>
              </div>
            </div>
          </div>
          <img
            src="images/HG.png"
            srcset="images/HG-p-500.png 500w, images/HG-p-800.png 800w, images/HG-p-1080.png 1080w, images/HG.png 1920w"
            sizes="(max-width: 1920px) 100vw, 1920px"
            data-w-id="8d820f2d-52d3-8c4b-4f71-33c5de2cc9e6"
            alt=""
            class="hg"
          />
          <img
            src="images/MG.png"
            srcset="images/MG-p-500.png 500w, images/MG-p-800.png 800w, images/MG-p-1080.png 1080w, images/MG-p-1600.png 1600w, images/MG.png 1920w"
            sizes="(max-width: 1920px) 100vw, 1920px"
            data-w-id="f095a42a-d5ae-6b01-3de8-4dbc899a5b17"
            alt=""
            class="mg"
          />
          <img
            src="images/VG.png"
            srcset="images/VG-p-500.png 500w, images/VG-p-800.png 800w, images/VG.png 1920w"
            sizes="(max-width: 1920px) 100vw, 1920px"
            data-w-id="cf7ed2c0-d483-b1c6-05ca-2bc9dfa8c5a5"
            alt=""
            class="vg"
          />
          <div class="gradient-hero"></div>
        </div>
        <div id="Content" class="content-section">
          {data.contents?.map(
            ({ count, title, subTitle, text, link, image, types }, index) => (
              <div class="content-wrapper content">
                <div class="grid">
                  <div id="w-node-435c3832b714-0b7ceb38" class="content-text">
                    <div class="count">{count}</div>
                    <div class="tagline">
                      <div class="tagline-line"></div>
                      <h5 class="heading-tagline">{subTitle}</h5>
                    </div>
                    <h2 class="head">{title}</h2>
                    <span>{text.replaceAll(";","\n")}</span>
                    <a href={link} class="link-to hero more w-inline-block">
                      <div></div>
                      <div class="icon-scroll more w-embed">
                        <svg
                          width="16"
                          height="24"
                          viewbox="0 0 16 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  {types === "agenda" && (
                    <iframe
                      width="100%"
                      height="400"
                      src="https://calendar.google.com/calendar/embed?title=Agenda%20Rouler&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=8d3fc8l9g04n7r9im45fsn08ak%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FNew_York"
                      style="border-width:0"
                      frameborder="0"
                      scrolling="no"
                      id={
                        index % 2
                          ? "w-node-12f012158464-0b7ceb38"
                          : "w-node-39e02eb8b346-0b7ceb38"
                      }
                    ></iframe>
                  )}
                  {types === "maps" && (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1401.4324977477188!2d7.203279940663153!3d43.689864651605276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd1bd1b511f95%3A0xfcbe635c9a04548c!2s19%20Imp.%20de%20la%20Gaiet%C3%A9%2C%2006200%20Nice%2C%20France!5e0!3m2!1sen!2sma!4v1666305462963!5m2!1sen!2sma"
                      width="600"
                      height="450"
                      style="border:0;"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      id={
                        index % 2
                          ? "w-node-12f012158464-0b7ceb38"
                          : "w-node-39e02eb8b346-0b7ceb38"
                      }
                    ></iframe>
                  )}
                  {image && (
                    <img
                      src={image}
                      id={
                        index % 2
                          ? "w-node-12f012158464-0b7ceb38"
                          : "w-node-39e02eb8b346-0b7ceb38"
                      }
                      alt={title}
                      class="image _01"
                    />
                  )}
                </div>
              </div>
            )
          )}
        </div>
        <div class="footer">
          <div class="content-wrapper content footer">
            <div class="grid footer">
              <div id="w-node-1aa862d1e6f1-0b7ceb38" class="footer-left">
                <div class="top">
                  <a href="#" class="logo footer w-inline-block">
                    <div class="mntn-logo w-embed">
                      <h3>{data.title}</h3>
                    </div>
                  </a>
                  <div class="footer-text">
                    Get out there &amp; discover your next slope, mountain &amp;
                    destination!
                  </div>
                </div>
                <div class="copyright">
                  Copyright 2022 {data.title}, Inc. Terms &amp; Privacy
                  <br />A concept by{" "}
                  <a href={data.url} target="_blank" class="author">
                    Kryston Schwarze
                  </a>
                </div>
              </div>
              <div id="w-node-4532b953dd02-0b7ceb38" class="footer-right">
                <div class="links">
                  <div id="w-node-bec01f52c19d-0b7ceb38" class="footer-links">
                    <h4>More on The Blog</h4>
                    <a href="#" class="footer-link">
                      About {data.title}
                    </a>
                    <a href="#" class="footer-link">
                      Contributors &amp; Writers
                    </a>
                    <a href="#" class="footer-link">
                      Write For Us
                    </a>
                    <a href="#" class="footer-link">
                      Contact Us
                    </a>
                    <a href="#" class="footer-link">
                      Privacy Policy
                    </a>
                  </div>
                  <div
                    id="w-node-98e738a28e3d-0b7ceb38"
                    class="footer-links _02"
                  >
                    <h4>More on {data.title}</h4>
                    <a href="#" class="footer-link">
                      The Team
                    </a>
                    <a href="#" class="footer-link">
                      Jobs
                    </a>
                    <a href="#" class="footer-link">
                      Press
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e2d678660dc1a91f8ef1b43"
        type="text/javascript"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"
      ></script>
      <script src="js/webflow.js" type="text/javascript"></script>
    </body>
  );
}
