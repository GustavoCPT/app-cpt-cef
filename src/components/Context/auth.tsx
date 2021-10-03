// contexto de autenticação
// Salvar dados no Storage https://dev.to/rafacdomin/autenticacao-no-react-com-context-api-e-hooks-4bia
import React, { createContext, useState, useEffect } from 'react';
import api from '../../services/api';


interface User {
  name: string;
  email: string;
}

//interface com os dados que estarão no nosso value e adicionaremos o tipo criado ao nosso contexto
interface AuthContextData {
  signed: boolean;
  // quando tem async tem que ser promices
  signIn(): Promise<void>;
  // adicionar o user a interface AuthContextData caso esteja utilizando typescript:
  user: User | null;
  // meu contexto tem uma informação chamada signout
  signOut: void;
}

// parametro de tipagem <> : 
// o formato do createContext agora é AuthContextData
// null ou forçar a tipagem {} as AuthContextData
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// vamos trazer o Provider para dentro do nosso arquivo auth.tsx e o exportá-lo.
export const AuthProvider: React.FC = ({ children }) => {
  // tudo relacionado a autenticação


  //vamos criar um estado para nosso user :  se exsitr usuário , estou autenticado
  const [user, setUser] = useState<User | null>(null);

  

// assim que entrasmo na tela, fazer uma verificação: ptrovider useEffects
  // manter o usuário logado - verificar 
  //Para recuperar esses dados podemos criar um useEffect dentro do nosso componente AuthProvider
  useEffect(() => {
    // bsucar os dados do storage
    const storagedUser = localStorage.getItem('@App:user');
    //const storagedToken = localStorage.getItem('@App:token');

    //if (storagedToken && storagedUser) {
    if (storagedUser) {
      //armzenar no setUser e converter... parser o valor
      setUser(JSON.parse(storagedUser));
      //api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  // função onde será dispara para a autenticação
  // a função login precisa ser retornada no provider / enviar a função Login em AuthContext.Provider 
  async function signIn(obj) {

    console.log(' entrou na função: signIn em auth.tsx ');

    //const response = await api.post('/login/login.php', obj);
    const response = await api.post('/login.php', obj);
    console.log('-------Recuperar a resposta da API----------');
    console.log(response.data);
    
    if (response.data.success === 'Dados Incorretos!') {
      alert('Ops! Dados Incorretos!');
    } else {
      //Precisamos guardar os dados retornados pela API 
      setUser(response.data.result[0]);
      //vamos adicionar nosso token no header das nossas chamadas pelo axios
      //api.defaults.headers.Authorization = `Bearer ${response.data.token}`
      //console.log(response.data.token);
      console.log('-----------------Logado!!!-------------------');
      console.log(response.data.result[0]);
      console.log(response);
      //salvamos os dados como user e token para manter o usuário logado mesmo após sair da aplicação. 
      //como o user é um objeto, precisamos converter em string
      localStorage.setItem('@App:user', JSON.stringify(response.data.result[0]));
      //https://dev.to/rafacdomin/autenticacao-no-react-com-context-api-e-hooks-4bia
      // o token já é uma string
      //localStorage.setItem('@App:token', response.data.token);

    }

  }


  function signOut() {
    localStorage.removeItem('@App:user');
    //sessionStorage.removeItem('App:token');
    
    setUser(null);
    // limpar as infromações do storage
    

  }


  return (
    //Para utilizarmos essa função em outros componentes teremos que adicioná-la ao value do nosso Provider:
    //Boolean(user), user : Com nosso user em mãos podemos adicioná-lo ao Provider e mudar nosso signed para depender de user ; {signed: true, user: Array(3), Login: ƒ}
    // Boolean(user) ou !!user :  se esistir algo dentro do user retorne true se usuário vazio false
    <AuthContext.Provider value={{ signed: Boolean(user), user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;