import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Icon, Header, Container } from "semantic-ui-react"
import Questionnaire from "../components/questionnaire"
import JSONData from "../../content/wahlen/europawahl2019.json"

const IndexPage = () => (
  <Layout classname="bg-yellow">
    <SEO title="Home"/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/*<Image />*/}
    </div>

    <Header as='h2' color={"orange"} icon textAlign='center'>
      <Icon name='heart outline' circular/>
      <Header.Content><span>{JSONData.name}</span></Header.Content>
      <p>Simple react Wahl-O-Mat App</p>
    </Header>

    <Container textAlign='center'>

      {/*<JSONbuildtime />*/}

      <Questionnaire electiondata={JSONData}/>

      {/*<div className="flex justify-center">*/}
      {/*  <div className="">*/}
      {/*    <Card color='yellow' className="my-5" fluid>*/}
      {/*      /!*<Image src='/images/avatar/large/matthew.png' wrapped ui={false} />*!/*/}
      {/*      <Card.Content>*/}
      {/*        <Card.Header>1/38 Elbvertiefung</Card.Header>*/}
      {/*        <Card.Meta>*/}
      {/*          <span className='date'>Kategorie</span>*/}
      {/*        </Card.Meta>*/}
      {/*        <Card.Description style={{ padding: "50px" }}>*/}
      {/*          <p className="text-xl text-black">*/}
      {/*            Die Fahrrinne der Elbe soll für große Containerschiffe weiter vertieft werden*/}
      {/*          </p>*/}

      {/*        </Card.Description>*/}
      {/*      </Card.Content>*/}
      {/*      <Card.Content extra>*/}
      {/*        <div className='ui buttons'>*/}
      {/*          <div className="px-1">*/}
      {/*            <Button*/}
      {/*              color='black' icon labelPosition="left">*/}
      {/*              stimme zu*/}
      {/*              <Icon name='thumbs up'/>*/}
      {/*            </Button>*/}
      {/*          </div>*/}
      {/*          <div className="px-1">*/}
      {/*            <Button color='black'>*/}
      {/*              neutral*/}
      {/*            </Button>*/}
      {/*          </div>*/}
      {/*          <div className="px-1">*/}
      {/*            <Button color='black' icon labelPosition="left">*/}
      {/*              stimme nicht zu*/}
      {/*              <Icon name='thumbs down'/>*/}
      {/*            </Button>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </Card.Content>*/}
      {/*      <Card.Content extra>*/}
      {/*        <a>*/}
      {/*          <Icon name='arrow right'/>*/}
      {/*          These Überspringen*/}
      {/*        </a>*/}
      {/*      </Card.Content>*/}
      {/*    </Card>*/}
      {/*  </div>*/}


      {/*</div>*/}


    </Container>


    {/*<Link to="/result/">Zur Auswertung</Link>*/}
  </Layout>
)

export default IndexPage
