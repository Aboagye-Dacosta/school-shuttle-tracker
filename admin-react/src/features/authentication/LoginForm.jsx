import { useState } from "react";
import { toast } from "react-hot-toast";
import styled from "styled-components";

import { useAuth } from "../../context/AuthProvider";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import { useAuthLogin } from "./useAuthLogin";
import { useNavigate } from "react-router-dom";

const StyledForm = styled(Form)`
  background-color: var(--color-grey-0);
  width: 40rem;
  padding: 3rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;
`;

function LoginForm ()
{
  const navigate = useNavigate("/");
  const { isLoggingInUser, login } = useAuthLogin();
  const { setAuthenticated, setUserRole,setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);

    if (!email || !password)
      return toast.error("email and password are required");
    login(
      { email, password },
      {
        onSuccess: (data) =>
        {
          console.log(data);
          if (data) {
            const { role } = data;
            if (["manager", "admin"].includes(role)) {
              setAuthenticated(true);
              setUserRole(role);
              setUser(data);
              navigate("/")
            }
          }
        },
      }
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          disabled={isLoggingInUser}
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          disabled={isLoggingInUser}
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="medium" disabled={isLoggingInUser} onClick={handleSubmit}>
          {isLoggingInUser ? (
            <>
              <SpinnerMini />
              Logging in
            </>
          ) : (
            "Login"
          )}
        </Button>
      </FormRowVertical>
    </StyledForm>
  );
}

export default LoginForm;
