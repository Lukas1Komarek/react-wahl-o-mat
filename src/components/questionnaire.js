import React from "react"
import Question from "./question"
import { Button, Card, Icon } from "semantic-ui-react"
import { Link, navigate } from "gatsby"
import { Pagination } from "semantic-ui-react"


class Questionnaire extends React.Component {

  constructor(props) {
    super(props)
    let arr = Object.assign({}, props.electiondata)
    console.log(arr)
    // let arr = []
    // arr[0] = {
    //   question: "Die Fahrrinne der Elbe soll für große Containerschiffe weiter vertieft werden.",
    //   category: "Hafen",
    //   title: "Elbvertiefung"
    // }
    // arr[1] = {
    //   question: "In Hamburg soll die Mietpreisbremse wieder abgeschafft werden.",
    //   category: "Mietpreise",
    //   title: "Abschaffung der Mietpreisbremse"
    // }

    let answers = []
    this.state = {
      questions: arr.theses,
      answers: answers,
      currentQuestion: 0,
      electiontitle: arr.name
    }
  }

  getCurrentQuestion() {

    return this.state.questions[this.state.currentQuestion]
  }

  getQuestionsCount() {
    return this.state.questions.length
  }

  handleSkipQuestion(i) {
    if (this.getCurrentQuestionNumber() === this.state.questions.length) {
      alert("end reached")
      navigate("result")
      return
    }
    this.setState({ currentQuestion: this.state.currentQuestion + 1 })
  }


  getCurrentQuestionNumber() {
    return this.state.currentQuestion + 1
  }

  getCurrentQuestionIndex() {
    return this.state.currentQuestion
  }

  goToNextQuestion() {
    if (this.getCurrentQuestionNumber() === this.state.questions.length) {
      alert("end reached")
      navigate("result")
      return
    }
    this.setState({ currentQuestion: this.state.currentQuestion + 1 })
  }

  addAnswer(i, flag) {
    var newAnswers = Object.assign({}, this.state.answers)
    newAnswers[i] = {}
    newAnswers[i].opinion = flag
    this.setState({ answers: newAnswers })
  }

  agreeWith(i) {
    this.addAnswer(i, "AGREE")
    this.goToNextQuestion()
  }

  neutralWith(i) {
    this.addAnswer(i, "NEUTRAL")
    this.goToNextQuestion()
  }


  disagreeWith(i) {
    this.addAnswer(i, "DISAGREE")
    this.goToNextQuestion()
  }

  isAgreeWithCurrentQuestion() {
    if (this.state.answers[this.getCurrentQuestionIndex()] !== undefined) {
      return this.state.answers[this.getCurrentQuestionIndex()].opinion === "AGREE"
    }
    return false
  }

  getAnswer(index) {
    if (this.state.answers[index] !== undefined) {
      return this.state.answers[index]
    }
    return this.state.answers[index]
  }

  getColorFromAnswer(index) {
    let answer = this.getAnswer(index)
    console.log(answer)
    if (answer !== undefined) {
      switch (answer.opinion) {
        case "AGREE":
          return "green"
        case "DISAGREE":
          return "red"
        case "NEUTRAL":
          return "grey"
      }
    }
  }


  isDisAgreeWithCurrentQuestion() {
    if (this.state.answers[this.getCurrentQuestionIndex()] !== undefined) {
      return this.state.answers[this.getCurrentQuestionIndex()].opinion === "DISAGREE"
    }
    return false
  }

  isNeutralWithCurrentQUestion() {
    if (this.state.answers[this.getCurrentQuestionIndex()] !== undefined) {
      return this.state.answers[this.getCurrentQuestionIndex()].opinion === "NEUTRAL"
    }
    return false
  }

  handlePaginationChange = (e, { activePage }) => this.setState({ currentQuestion: activePage - 1 })

  render() {
    return (
      <React.Fragment>
        <div className="flex justify-center">
          <div className="shadow-lg lg:w-4/5 md:w-4/5 ">
            <Card color='orange' fluid>
              <Card.Content>
                <Card.Header className="text-left">
                  {this.getCurrentQuestionNumber()}/{this.state.questions.length} {this.getCurrentQuestion().topic}</Card.Header>
                {/*<Card.Meta>*/}
                {/*  <span className='date'>Kategorie</span>*/}
                {/*</Card.Meta>*/}
              </Card.Content>


              <Question question={this.state.questions[this.state.currentQuestion]}/>

              {/*{this.state.questions.map(question => <Question question={question}/>)}*/}
              <Card.Content extra>
                <div className='ui three buttons'>
                  <div className="px-1">
                    <Button
                      onClick={() => this.agreeWith(this.getCurrentQuestionIndex())}
                      color={this.isAgreeWithCurrentQuestion() ? "green" : "black"}
                      icon labelPosition="left"
                    >
                      stimme zu
                      <Icon name='thumbs up'/>
                    </Button>
                  </div>
                  <div className="px-1">
                    <Button
                      basic={this.isNeutralWithCurrentQUestion()}
                      color='black'
                      onClick={() => this.neutralWith(this.getCurrentQuestionIndex())}
                    >
                      neutral
                    </Button>
                  </div>
                  <div className="px-1">
                    <Button
                      onClick={() => this.disagreeWith(this.getCurrentQuestionIndex())}
                      color={this.isDisAgreeWithCurrentQuestion() ? "red" : "black"}
                      icon labelPosition="left">
                      stimme nicht zu
                      <Icon name='thumbs down'/>
                    </Button>
                  </div>
                </div>
              </Card.Content>

              <Card.Content extra>
                <a onClick={() => this.handleSkipQuestion(1)}>
                  <Icon name='arrow right'/>
                  These Überspringen
                </a>
              </Card.Content>
              <Pagination
                style={{ "flexWrap": "wrap" }}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                prevItem={null}
                nextItem={null}
                activePage={this.getCurrentQuestionNumber()}
                onPageChange={this.handlePaginationChange}
                boundaryRange={50}
                pageItem={(component, props) => {
                  return <Pagination.Item
                    style={{ "color": this.getColorFromAnswer(props.value - 1) }}
                    {...props}
                  />
                }}
                // pageItem={
                //   <Pagination.Item
                //     style={this.state.value === 2 ? { "color": "red" } : null}
                //     active={true}></Pagination.Item>
                // }
                // pageItem={(component, props) =>
                //   (<Pagination.Item  />)
                // }
                // pageItem={(component, props) => {<Pagination.Item/>}}

                // pageItem={null}
                // size='mini'
                totalPages={this.getQuestionsCount()}
              >
              </Pagination>
              <Card.Content extra>
                <Link to="/result/">Zur Auswertung</Link>
              </Card.Content>


            </Card>
          </div>


        </div>

        {/*<div>Questions: {this.state.questions.length}</div>*/}
        {/*<div>*/}
        {/*  {this.state.questions.map(question => <Question question={question}/>)}*/}
        {/*</div>*/}
      </React.Fragment>
    )
  }
}

export default Questionnaire