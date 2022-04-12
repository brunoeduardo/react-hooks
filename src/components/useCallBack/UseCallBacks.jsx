import { useState, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";

export default function UseCallBacks() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(1000);

  const increaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const increaseSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title></Title>
      Age: {age}
      <Button handleClick={increaseAge}>Increase age</Button>
      <br />
      <br />
      Salary: {salary}
      <Button handleClick={increaseSalary}>Increase salary</Button>
    </div>
  );
}
