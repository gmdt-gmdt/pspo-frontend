import React, { useEffect, useState } from "react";
import { Alert, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { searchQuizDataByTermAndTypeFromAPI } from "../store/actions/quiz-actions";

import "./Question.css";

const Question = () => {
  const [criteria, setCriteria] = useState("ALL");

  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.quiz);
  const typeQuiz = useSelector((state) => state.questions.type);

  const [formData, setFormData] = useState({
    isQuizMode: true,
    term: "",
  });

  const handleChange = (event) => {
    //check if check element
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: event.target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleKeyPress = async (event) => {
    event.preventDefault();
    setCriteria(formData.term);
    dispatch(searchQuizDataByTermAndTypeFromAPI(formData.term, typeQuiz ?? 1));

    //Reset form
  };

  useEffect(() => {
    dispatch(searchQuizDataByTermAndTypeFromAPI(criteria, typeQuiz ?? 1));
  }, [criteria, dispatch, typeQuiz]);

  return (
    <div className="content">
      <div className="shadow-lg p-3 mb-5 bg-white rounded-pill">
        <Form>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Term
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>Search</InputGroup.Text>
                <Form.Control
                  id="inlineFormInputGroup"
                  name="term"
                  onChange={handleChange}
                  value={formData.term}
                  onKeyUp={handleKeyPress}
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <Form.Check
                type="checkbox"
                className="mb-2"
                label="Hide answer"
                name="isQuizMode"
                onChange={handleChange}
                defaultChecked={formData.isQuizMode}
                value={formData.isQuizMode}
              />
            </Col>
          </Row>
        </Form>
      </div>
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        {questions.length &&
          questions.map((question) => (
            <Accordion key={question.id}>
              <Accordion.Item eventKey={question.id}>
                <Accordion.Header>{question.Title}</Accordion.Header>
                <Accordion.Body>
                  <Card body>
                    <Card.Body>
                      <Card.Text>
                        {question.answersData.map((answer) => (
                          <Alert
                            key={answer.Text}
                            variant={
                              !formData.isQuizMode && answer.Valid
                                ? "success"
                                : "dark"
                            }
                            className="rounded-pill"
                          >
                            {answer.Text}
                          </Alert>
                        ))}
                      </Card.Text>
                      {!formData.isQuizMode && question.Explanations && (
                        <Card bg="light" className="mb-2">
                          <Card.Header>FeedBack</Card.Header>
                          <Card.Body>
                            <Card.Text>{question.Explanations}</Card.Text>
                          </Card.Body>
                        </Card>
                      )}
                    </Card.Body>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
      </div>
    </div>
  );
};

export default Question;
