import React, { Children } from 'react'

interface TestComponentProps{
    name:string;
    lastName:string;
    email:string;
    age:number;
}

const TestComponent = ({name, lastName, email, age}:TestComponentProps) => {
  return <div>
    <span>Nombre: {name}</span>
    <span>Apellido: {lastName}</span>
    <span>Correo: {email}</span>
    <span>Edad: {age}</span>
    </div>
};

interface TestComponent2Props{
    children:JSX.Element;
}

const TestComponent2 = ({ children }:TestComponent2Props) => {
    return(
        <div>{children}</div>
    )
};

export { TestComponent, TestComponent2 }; 