// Import React
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
  ComponentPlayground,
  CodePane,
  Code,
  Markdown,
  Typeface,
  Layout,
  Magic
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import ImageSlide from "spectacle-image-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import ErrorBoundary from "../assets/ErrorBoundary";
import PortalDemo from "../assets/windowportal";

const code = {
  fragment: require("raw-loader!../assets/fragment.example"),
  fragment1: require("raw-loader!../assets/fragment1.example"),
  fragment2: require("raw-loader!../assets/fragment2.example"),
  errorBoundary: require("!!raw-loader!../assets/ErrorBoundary.example"),
  buggyCounter: require("raw-loader!../assets/BuggyCounter.example"),
  portal: require("raw-loader!../assets/portal.example"),
  eventbubbling: require("raw-loader!../assets/eventbubbling.example"),
  renderpropsBasic: require("raw-loader!../assets/renderprops_basic.example"),
  renderProps: require("raw-loader!../assets/renderprops.example"),
  basicContext: require("raw-loader!../assets/basic_context.example"),
  contextProvider: require("raw-loader!../assets/contextProvider.example"),
  contextConsumer: require("raw-loader!../assets/contextConsumer.example"),
  context: require("raw-loader!../assets/context.example"),
  getDerivedStateFromProps: require("raw-loader!../assets/getDerivedStateFromProps.example"),
  strictMode: require("raw-loader!../assets/strictmode.example"),
  errorboundaryUsage: require("raw-loader!../assets/errorboundaryUsage.example"),
  portals: require("raw-loader!../assets/portals.example"),
  getDerivedStateFromPropsUsage: require("raw-loader!../assets/getDerivedStateFromPropsUsage.example")
};

const images = {
  chakri: require("../assets/chakri.jpg"),
  reactLogo: require("../assets/react-hexagon.png"),
  errorBoundary: require("../assets/error_boundaries.jpg"),
  portals: require("../assets/portal.jpg"),
  strictMode: require("../assets/stricmode.png"),
  question: require("../assets/question.jpg"),
  fragmentError: require("../assets/fragmentError.png"),
  wow1: require("../assets/wow1.gif"),
  wow2: require("../assets/wow2.gif"),
  handle: require("../assets/handle.gif"),
  smart: require("../assets/smart.gif"),
  wow3: require("../assets/wow3.gif"),
  skull: require("../assets/skull.png"),
  basic: require("../assets/basic.png")
};

const styles = {
  ul_li: {
    listStylePosition: "outside",
    marginLeft: "1em"
  },
  listSkull: {
    listStyleImage: `url("${images.skull}")`
  }
};

// Require CSS
require("normalize.css");
const MainStyle = require("../assets/main.css");

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide bgImage={images.chakri} bgDarken={0.3} transition={["fade"]}>
          <Heading textColor="primary" size={3}>
            Hi I am
          </Heading>
          <Heading textColor="primary" size={1} caps>
            Chakravarthy
          </Heading>
          <Heading textColor="primary"> &middot; &middot; &middot; </Heading>
          <Heading textColor="primary"> @chakrihacker </Heading>
        </Slide>
        <Slide bgColor="black" transition={["fade"]}>
          <Image src={images.reactLogo} width={300} />
          <Heading
            size={1}
            textColor="tomato"
            bold
            style={{
              backgroundColor: "white"
            }}
          >
            Future of React
          </Heading>
        </Slide>
        <Slide bgColor="black" transition={["fade"]}>
          <List>
            <ListItem textColor="primary"> What is this Talk About ? </ListItem>
            <Appear>
              <ListItem textColor="primary"> Why ? </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="black" transition={["zoom"]}>
          <Heading textColor="primary"> Agenda </Heading>
          <List>
            <Appear>
              <ListItem textColor="primary"> Fragments </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary"> Error Boundaries </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary"> Portals </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary"> Context API </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary"> render props </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary">Migrating to new versions</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="black" transition={["fade"]}>
          <Heading textColor="primary"> Fragments </Heading>
          <Heading textColor="tomato" size="4">
            Rendering multiple elements without a wrapper
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading textColor="white" textAlign="center" margin="30">
            Understand how JSX compilation works
          </Heading>
          <Image src={images.basic} />
        </Slide>
        <Slide bgColor="black">
          <Heading textColor="white" textAlign="center" margin="30">
            Problem
          </Heading>
          <CodePane lang="jsx" source={code.fragment1} textSize="30" />
          <Image src={images.fragmentError} width="100%" height="100%" />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.fragment2}
          ranges={[
            {
              loc: [0, 4],
              title: "Nope #1"
            },
            {
              loc: [5, 11],
              title: "Nope #2"
            },
            {
              loc: [12, 18],
              title: "yep, but ugly"
            },
            {
              loc: [19, 25],
              title: "Fragments"
            },
            {
              loc: [26, 32],
              title: "JSX Fragment syntax"
            }
          ]}
        />
        <Slide bgColor="black">
          <ComponentPlayground
            code={code.fragment}
            scope={{
              React,
              Fragment,
              MainStyle
            }}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="black">
          <Heading textColor="tomato"> Error Boundaries </Heading>
          <Text textColor="tomato">
            Handling JavaScript errors in components
          </Text>
        </Slide>
        <Slide bgColor="black">
          <Heading size="3" textColor="white">
            React is like
          </Heading>
          <Image src={images.handle} width="50%" />
        </Slide>
        <Magic>
          <Slide bgImage={images.smart} bgDarken="0.5">
            <Text textColor="white"> Method #1</Text>
            <Text bold textColor="white">
              Don 't have any errors in components
            </Text>
          </Slide>
          <Slide bgImage={images.smart} bgDarken="0.5">
            <Text textColor="white"> Method #2</Text>
            <Text bold textColor="white">
              Don 't open the console, and you won' t see errors
            </Text>
          </Slide>
          <Slide bgImage={images.smart} bgDarken="0.5">
            <Text textColor="white"> Method #3</Text>
            <Text bold textColor="white">
              componentDidCatch
            </Text>
          </Slide>
        </Magic>
        <Slide bgColor="black">
          <Heading textColor="white" size="4">
            componentDidCatch
          </Heading>
          <List textColor="white">
            <ListItem style={styles.ul_li}>
              If a class component defines this method it becomes an error
              boundary.
            </ListItem>
            <ListItem style={styles.ul_li}>
              Error boundaries can catch errors below them in the tree.
            </ListItem>
            <ListItem style={styles.ul_li}>
              An error boundary can 't catch an error within itself.
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="black">
          <CodePane lang="js" source={code.errorBoundary} textSize="20" />
        </Slide>
        <Slide bgColor="black">
          <Heading textColor="white" padding="20px">
            Usage
          </Heading>
          <CodePane lang="js" source={code.errorboundaryUsage} textSize="30" />
        </Slide>
        <Slide bgImage={images.smart} bgDarken="0.5">
          <Text textColor="white">
            Wrap the entire app in &lt;ErrorBoundary /&gt;
          </Text>
        </Slide>
        <Slide transition={["zoom"]}>
          <Image src={images.errorBoundary} height="100%" />
        </Slide>
        <Slide bgColor="black">
          <ComponentPlayground
            code={code.buggyCounter}
            scope={{
              ErrorBoundary,
              Fragment
            }}
          />
        </Slide>
        <Slide bgDarken="0.4" bgImage={images.portals}>
          <Heading textColor="white" padding="60">
            Portals
          </Heading>
          <Text textColor="white">
            provide a first - class way to render children into a DOM node that
            exists outside the DOM hierarchy of the parent component.
          </Text>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.portals}
          ranges={[
            {
              loc: [0, 4]
            }
          ]}
        />
        <Slide bgColor="black">
          <ComponentPlayground
            code={code.portal}
            scope={{
              ReactDOM,
              React,
              MainStyle
            }}
          />
        </Slide>
        <Slide bgColor="black" color="white">
          <PortalDemo />
        </Slide>
        <Slide bgColor="black">
          <Heading size="6" textColor="white">
            Thinking of practical use - cases of Portals
          </Heading>
          <Layout>
            <Image src={images.wow1} /> <Image src={images.wow2} />
          </Layout>
        </Slide>
        <Slide bgColor="black">
          <Heading textColor="gold"> Event Bubbling </Heading>
        </Slide>
        <Slide bgColor="black">
          <ComponentPlayground
            code={code.eventbubbling}
            scope={{
              ReactDOM,
              React,
              MainStyle
            }}
          />
        </Slide>
        <Slide bgColor="black">
          <Heading textColor="lightseagreen"> Render props </Heading>
        </Slide>
        <Slide bgColor="lightseagreen">
          <ComponentPlayground
            code={code.renderpropsBasic}
            scope={{
              React
            }}
          />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.renderProps}
          ranges={[
            {
              loc: [7, 11]
            },
            {
              loc: [14, 20]
            },
            {
              loc: [22, 28]
            }
          ]}
        />
        <Slide bgColor="lightseagreen">
          <ComponentPlayground
            code={code.renderProps}
            scope={{
              React,
              Fragment
            }}
          />
        </Slide>
        <Slide bgColor="slateblue">
          <Heading size="3" textColor="white" padding="0.5em">
            New Context API
          </Heading>
          <Image src={images.wow3} />
        </Slide>
        <Slide bgColor="slateblue">
          <CodePane lang="jsx" source={code.basicContext} textSize="30" />
          <Appear>
            <List
              textColor="white"
              style={{
                textAlign: "center"
              }}
            >
              <ListItem> Provider </ListItem> <ListItem> Consumer </ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide bgColor="slateblue">
          <CodePane lang="jsx" source={code.contextProvider} textSize="25" />
        </Slide>
        <Slide bgColor="slateblue">
          <CodePane lang="jsx" source={code.contextConsumer} textSize="25" />
        </Slide>
        <Slide bgColor="slateblue">
          <ComponentPlayground code={code.context} />
        </Slide>
        <Slide bgColor="black" textColor="white">
          <Heading textColor="white" size="4">
            getDerivedStateFromProps
          </Heading>
          <Appear>
            <List>
              <ListItem>A static method</ListItem>
              <ListItem>Exists on the class, not on the instance</ListItem>
              <ListItem>Updates state based on change of prop</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide bgColor="black" textColor="white">
          <Heading textColor="white" size="4">
            getDerivedStateFromProps
          </Heading>
          <CodePane
            lang="js"
            source={code.getDerivedStateFromPropsUsage}
            textSize="20"
          />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.getDerivedStateFromProps}
          ranges={[
            {
              loc: [3, 6],
              title: "Parent Component"
            },
            {
              loc: [9, 14],
              title: "Handle Click"
            },
            {
              loc: [24, 25],
              title: "Child Component"
            },
            {
              loc: [39, 43],
              title: "initialize state"
            },
            {
              loc: [31, 36],
              title: "getDerivedState"
            }
          ]}
        />
        <Slide bgColor="salmon">
          <ComponentPlayground
            code={code.getDerivedStateFromProps}
            scope={{
              React
            }}
          />
        </Slide>
        <Slide bgColor="black" textColor="white">
          <Heading textColor="white" size="3">
            Will be deprecated
          </Heading>
          <List style={styles.listSkull}>
            <ListItem>
              <span style={{ top: "-15px", position: "relative" }}>
                componetWillMount
              </span>
            </ListItem>
            <ListItem>
              <span style={{ top: "-15px", position: "relative" }}>
                componentWillReceiveProps
              </span>
            </ListItem>
            <ListItem>
              <span style={{ top: "-15px", position: "relative" }}>
                componentWillUpdate
              </span>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="mediumpurple">
          <Heading size="3" textColor="white">
            Strict Mode
          </Heading>
          <CodePane lang="jsx" source={code.strictMode} textSize="20" />
        </Slide>
        <Slide bgColor="mediumpurple">
          <Heading textColor="white"> Warnings </Heading>
          <Image src={images.strictMode} width="100%" />
        </Slide>
        <Slide bgColor="indianred">
          <Heading textColor="white" margin="30">
            Migration
          </Heading>
          <Code textSize="30" textColor="white">
            jscodeshift - t & lt; codemod - script & gt; & lt; path & gt;
          </Code>
        </Slide>
        <Slide bgColor="black">
          <Heading textColor="red"> Questions </Heading>
          <Image src={images.question} width="300" />
        </Slide>
        <Slide bgColor="black" textColor="white">
          <Heading textColor="white"> Future of React </Heading>
          <Heading textColor="white" size="3">
            The Conclusion
          </Heading>
          <List>
            <ListItem> Suspense </ListItem>
            <ListItem> Simple Cache Provider </ListItem>
            <ListItem> Async Rendering </ListItem>
          </List>
        </Slide>
        {/* <Slide>
                  <Interactive />
                </Slide>
                <Slide transition={["zoom"]} bgColor="primary">
                  <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                    Spectacle Boilerplate
                  </Heading>
                  <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                    open the presentation/index.js file to get started
                  </Text>
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                  <Heading size={6} textColor="primary" caps>
                    Typography
                  </Heading>
                  <Heading size={1} textColor="secondary">
                    Heading 1
                  </Heading>
                  <Heading size={2} textColor="secondary">
                    Heading 2
                  </Heading>
                  <Heading size={3} textColor="secondary">
                    Heading 3
                  </Heading>
                  <Heading size={4} textColor="secondary">
                    Heading 4
                  </Heading>
                  <Heading size={5} textColor="secondary">
                    Heading 5
                  </Heading>
                  <Text size={6} textColor="secondary">
                    Standard text
                  </Text>
                </Slide>
                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                  <Heading size={6} textColor="secondary" caps>
                    Standard List
                  </Heading>
                  <List>
                    <ListItem>Item 1</ListItem>
                    <ListItem>Item 2</ListItem>
                    <ListItem>Item 3</ListItem>
                    <ListItem>Item 4</ListItem>
                  </List>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                  <BlockQuote>
                    <Quote>Example Quote</Quote>
                    <Cite>Author</Cite>
                  </BlockQuote>
                </Slide> */}
      </Deck>
    );
  }
}
