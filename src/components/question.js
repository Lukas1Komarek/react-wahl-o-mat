import React from "react"
import { Button, Card, Container, Icon } from "semantic-ui-react"

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: null
    }
  }

  render() {
    return (
      <React.Fragment>
        {/*<Card color='yellow' className="my-5" fluid>*/}
        {/*<Image src='/images/avatar/large/matthew.png' wrapped ui={false} />*/}
        <Card.Content className="my-5" style={{'minHeight': '10em' }}>
          {/*<Card.Header>1/{this.props.question.length} Elbvertiefung</Card.Header>*/}
          {/*<Card.Meta>*/}
          {/*  <span className='date'>Kategorie</span>*/}
          {/*</Card.Meta>*/}
          <Card.Description className="text-left"
                            // style={{ "padding": "0 30px 8em 0" }}
          >
                <span className="text-xl text-black">
                  {this.props.question.statement}
                </span>

          </Card.Description>
        </Card.Content>
        {/*<Card.Content extra>*/}
        {/*  <div className='ui buttons'>*/}
        {/*    <div className="px-1">*/}
        {/*      <Button*/}
        {/*        color='black' icon labelPosition="left">*/}
        {/*        stimme zu*/}
        {/*        <Icon name='thumbs up'/>*/}
        {/*      </Button>*/}
        {/*    </div>*/}
        {/*    <div className="px-1">*/}
        {/*      <Button color='black'>*/}
        {/*        neutral*/}
        {/*      </Button>*/}
        {/*    </div>*/}
        {/*    <div className="px-1">*/}
        {/*      <Button color='black' icon labelPosition="left">*/}
        {/*        stimme nicht zu*/}
        {/*        <Icon name='thumbs down'/>*/}
        {/*      </Button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</Card.Content>*/}
        {/*<Card.Content extra>*/}
        {/*  <a>*/}
        {/*    <Icon name='arrow right'/>*/}
        {/*    These Überspringen*/}
        {/*  </a>*/}
        {/*</Card.Content>*/}
        {/*</Card>*/}

      </React.Fragment>

    )
  }
}

export default Question