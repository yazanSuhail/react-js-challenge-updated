import React, { useState } from "react";
import { Button, Container, Form, Input } from "./styles";
import { ISearchFormProps } from "../../interfaces/ISearchFormProps";

function SearchForm({ setSearchQuery, isLoading }: ISearchFormProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  const handleOnChange = (searchParams: string) => {
    setInputValue(searchParams);
  };

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            placeholder="Search a gif"
            value={inputValue}
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </Form>
      )}
    </Container>
  );
}

export default SearchForm;
