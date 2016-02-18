// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
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

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  mm: require("../assets/mm.png"),
  hands: require("../assets/hands.jpg"),
  lol: require("../assets/lol.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
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

            <Text>
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

            <Text>OOP more within reach</Text>
            <Text>Spread operator (*args, anyone?), defaults</Text>
          </Slide>





          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>


          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>


          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>


          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>


          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>


          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>


          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>


          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
