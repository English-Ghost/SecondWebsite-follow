import React from 'react'
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit
} from './styles/form'


export default function Form({ children, ...restProps}) {
  return (
    <Container { ...restProps}>{children}</Container>
  );
}

Form.Base = function FormBase({ children, ...restProps}) {
  return (
    <Base { ...restProps}>{children}</Base>
  );
}

Form.Error = function FormError({ children, ...restProps}) {
  return (
    <Error { ...restProps}>{children}</Error>
  );
}

Form.Title = function FormBase({ children, ...restProps}) {
  return (
    <Title { ...restProps}>{children}</Title>
  );
}

Form.Text = function FormBase({ children, ...restProps}) {
  return (
    <Text { ...restProps}>{children}</Text>
  );
}

Form.TextSmall = function FormBase({ children, ...restProps}) {
  return (
    <TextSmall { ...restProps}>{children}</TextSmall>
  );
}

Form.Link = function FormBase({ children, ...restProps}) {
  return (
    <Link { ...restProps}>{children}</Link>
  );
}

Form.Input = function FormBase({ children, ...restProps}) {
  return (
    <Input { ...restProps}>{children}</Input>
  );
}

Form.Submit = function FormSubmit({ children, ...restProps}) {
  return (
    <Submit { ...restProps}>{children}</Submit>
  );
}
