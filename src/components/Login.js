import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container, Box, TextField,CircularProgress } from "@material-ui/core";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Container>
        <Card>
          <Card.Body>
            <Box bgcolor="white" boxShadow="2" borderRadius="12px" p="24px">
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  {/* <TextField
                    label="Email"
                    id="outlined-size-small"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                  ></TextField> */}

                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Form.Group id="password">
                  {/* <TextField
                    label="Password"
                                      id="outlined-size-small"
                                      type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                  ></TextField> */}
                                  {/* <CircularProgress size={24} color="secondary"/> */}
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Button disabled={loading} className="w-100" type="submit">
                  Log In
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Box>
          </Card.Body>
        </Card>
      </Container>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
