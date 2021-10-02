import { render, screen } from '@testing-library/react';
//Importando nosso componente
import Login from './Login';

//test - método que nos permite escrever um texto 
test('renderizar o link Registra-se', () => {
  //Renderizando o componente
  render(<Login />);
  //Atribuindo à constante linkElement a query(método) getByText que deve encontrar o elemento que possui o texto /learn react/i.
  //O trecho /learn react/i é um padrão regex que desabilita o case-sensitive, ou seja, ignora a diferença entre letras maiúsculas e minúsculas.
  const linkElement = screen.getByText(/Registre-se/i);
});


