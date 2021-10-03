import React, {useContext} from 'react';
import {  Switch, Route } from 'react-router-dom';
import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';
import AuthContext from '../components/Context/auth'

const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext);
    console.log('5- Signed dentro do Routes.js');
    console.log(signed);
   // qual é a stack de routes que será exibida?
   // se autenticado return as rotas se não o login
   // return signed ? <OtherRoutes /> : <SignRoutes />;
   return <OtherRoutes /> ;
   };
   
   export default Routes;