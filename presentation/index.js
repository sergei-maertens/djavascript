// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  S,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  mm: require("../assets/mm.png"),
  hands: require("../assets/hands.jpg"),
  lol: require("../assets/lol.jpg"),
  pony: require("../assets/pony.png"),
};

preloader(images);

const theme = createTheme({
  // primary: "#ff4081"
  primary: "#0C4B33"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1.5} textColor="black">
              Djavascript
            </Heading>

            <Heading size={1} fit caps>
              that doesn't make you cry
            </Heading>

            <Heading size={6} textColor="black">
              Sergei Maertens
            </Heading>

            {/*
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            */}

            {/*<Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>*/}
          </Slide>


          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} lineHeight={1.5} textColor="black">
              @self
            </Heading>

            <List>
              <ListItem>Twitter/IRC: <strong>xBBTx</strong></ListItem>
              <ListItem>github.com/sergei-maertens</ListItem>
            </List>

            <Text margin="40px 0px 0px">work @ Maykin Media (backend dev)</Text>
            <Image src={images.mm.replace("/", "")} margin="0px auto" height="106px"/>

          </Slide>


          <Slide transition={["slide"]} bgColor="black" notes="<ul><li># front end</li><li># backend</li><li># scared of frontend/JS?</li></ul">
            <Image src={images.hands.replace("/", "")} margin="0px auto 40px" height="300px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Phys Ed
            </Heading>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="ES5 long adoption">
            <Heading caps>Minimal history</Heading>

            <Markdown>
              {`
* ES3: December 1999
* ES4: ~~Abandoned~~
* ES5: December 2009
* ES5.1: June 2011
* ES6: June 2015
* ES7: WIP
              `}
            </Markdown>

          </Slide>


          <Slide notes="<ul><li>order matters</li></ul>">

            <Heading size={1}>ES5 problems</Heading>
            <Heading size={4}>...that make you cry (as a Django dev)</Heading>

            <Markdown>
              {`
* (global) scope polution
* loading/bundling files (django-compressor/django-pipeline)
* unit testing? ![LOL](${images.lol.replace("/", "")})
* jQuery != Javascript
              `}
            </Markdown>

          </Slide>


          <Slide notes="let's get to the good bits">
            <Heading size={6}>ES6 features</Heading>
            <Heading size={3} textColor="tertiary">Proper modules</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/modules1.example")}
              margin="20px auto"
            />
            <CodePane
              lang="js"
              source={require("raw!../assets/modules2.example")}
              margin="20px auto"
            />

            <Text textAlign="left">
              <S type="strikethrough">(global) scope polution</S>, <S type="strikethrough">loading files</S>
            </Text>
          </Slide>


          <Slide notes="classes: syntactic sugar over prototype inheritance. <br>Limitation: only methods">
            <Heading size={6}>ES6 features</Heading>
            <Heading size={3} textColor="tertiary">'Native' classes.</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/classes.example")}
              margin="20px auto"
            />

            <Text textAlign="left">OOP more within reach</Text>
            <Text textAlign="left">Spread operator (*args, anyone?), defaults</Text>
          </Slide>


          <Slide notes="async options: <ul><li>callback hell</li><li>promises: flattening</li><li>coroutines (asyncio)</li></ul>">
            <Heading size={6}>ES6 features</Heading>
            <Heading size={3} textColor="tertiary">Promises</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/promises.example")}
              margin="20px auto"
            />
          </Slide>


          <Slide notes="maintain scope">
            <Heading size={6}>ES6 features</Heading>
            <Heading size={3} textColor="tertiary">Arrow functions</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/arrows.example")}
              margin="20px auto"
            />
          </Slide>


          <Slide notes="bunch of smaller features">
            <Heading size={6}>ES6 features (smaller)</Heading>
            <Heading size={3} textColor="tertiary">'let'/'const' keyword</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/let.example")}
              margin="20px auto"
            />
          </Slide>


          <Slide notes="bunch of smaller features">
            <Heading size={6}>ES6 features (smaller)</Heading>
            <Heading size={3} textColor="tertiary">unpacking</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/unpacking.example")}
              margin="20px auto"
            />
            <Text>many more options w/r to objects</Text>
          </Slide>


          <Slide notes="bunch of smaller features">
            <Heading size={6}>ES6 features (smaller)</Heading>
            <Heading size={3} textColor="tertiary">template strings</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/tpl.example")}
              margin="20px auto"
            />
            <Text textAlign="left"><S type="underline">don't overdo it</S></Text>
            <Text textAlign="left">use a proper client side template language if needed</Text>
          </Slide>


          <Slide notes="Google is your friend: plenty of (blog) posts that list the features">
            <Heading size={1}>More features</Heading>
            <Link href="https://github.com/lukehoban/es6features">
              <Text lineHeight={4} textSize="2em">github.com/lukehoban/es6features</Text>
            </Link>
          </Slide>


          <Slide>
            <Heading size={1} caps fit textColor="secondary">
              Enter JSPM
            </Heading>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="tertiary">
                (Yet) A(nother) Javascript package manager?
              </Heading>
            </Appear>
          </Slide>

          <Slide>
            <Heading size={1} caps fit textColor="tertiary">
              YES!
            </Heading>
          </Slide>


          <Slide>
            <Heading size={1} textColor="tertiary">But... why?</Heading>
            <Text textAlign="left"><Code>jspm install jquery</Code></Text>
            <Text textAlign="left"><Code>jspm install ponyjs=github:sergei-maertens/django-ponyjs@0.0.5</Code></Text>

            <Markdown>{`
* supports npm
* supports github
* supports 'xyz' through plugins (e.g. bower)
            `}</Markdown>

          </Slide>


          <Slide notes="mention Guy Bedford amazeness. <br> mention that you can use it NOW">
            <Heading size={1} textColor="secondary">JSPM/SystemJS</Heading>

            <Markdown>{`
author: **Guy Bedford**

* handles transpiling ES6 -> ES5
* handles bundling
* customizable: override dependency 'package.json'
* loads ES6 modules, CommonJS, AMD - all in one codebase
            `}</Markdown>

          </Slide>


          <Slide transition={["slide"]} bgImage={images.pony.replace("/", "")} bgDarken={0.9}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Django integration
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                django-systemjs
              </Heading>
            </Appear>
          </Slide>


          <Slide transition={["slide"]} notes="in development, loads via AJAX.<br>Production: bundle for speed!">
            <Heading size={1} textColor="tertiary">Template tag</Heading>
            <CodePane
              lang="twig"
              source={require("raw!../assets/systemjs.example")}
              margin="20px auto"
            />
            <CodePane
              lang="html"
              source={require("raw!../assets/systemjs2.example")}
              margin="20px auto"
            />
          </Slide>


          <Slide transition={["slide"]}>
            <Heading size={1} textColor="tertiary">Management command</Heading>
            <CodePane
              lang="shell"
              source={require("raw!../assets/mgmt.example")}
              margin="20px auto"
            />
          </Slide>


          <Slide transition={["slide"]} bgImage={images.pony.replace("/", "")} bgDarken={0.9}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                PonyJS
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} lineHeight={3} caps fit textColor="tertiary">
                very work in progress...
              </Heading>
            </Appear>
          </Slide>


          <Slide transition={["slide"]}>
            <Heading size={1} >Preview</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/ponyjs.example")}
              margin="20px auto"
            />
          </Slide>


          <Slide>
            <Heading size={1} caps textColor="tertiary">?</Heading>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
