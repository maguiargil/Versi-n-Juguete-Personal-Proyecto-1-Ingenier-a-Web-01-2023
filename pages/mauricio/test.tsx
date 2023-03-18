import { TestComponent, TestComponent2 } from '@/components/TestComponent';
import React from 'react'

const TestPage = () => {
  return <div className='main-content'>

    <span>PÁGINA DE TEST</span>
    <TestComponent name='Gladis' lastName='Caro' email='g@g.com' age = {10}/>
    <TestComponent name='Anastasia' lastName='Caro' email='a@g.com' age = {20}/>

    <TestComponent2 >
        <span>HOLA MUNDO</span>
    </TestComponent2>

    
    <TestComponent2>
        <span>SALUDOS A TODOS</span>
    </TestComponent2>

  </div>;
}

export default TestPage;