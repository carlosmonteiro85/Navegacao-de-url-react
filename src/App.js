import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MensagemStatica } from "./components/Mensagem-Statica";
import { Links } from "./components/Links";

import { Page1 } from "./Pages/page1";
import { Page2 } from "./Pages/page2";
import { Page3 } from "./Pages/page3";


function App() {
  return (

    /*BrowserRouter é a biblioteca padrão de roteamento do React, deve e
    englobar as Rotas no sistema */
    <BrowserRouter>

      {/* Mensagem estática que aparece em todas as paginas */}
      <MensagemStatica />

      {/*Este Componente tera nosso menu de link, que redicionara 
      para as rotas configuradas neles*/}
      <Links />

      {/* O Switch é responsavel por emglobar componentes de rotas*/}
      <Switch>

        {/* O Route define os edereços das paginas, no atributo "path" é 
        definido a url desejado e o atributo "component" define qual o componente
        sera renderizado com a url específica*/}
        <Route path="/" exact component={Page1} /> {/*quando ultilizado apenas o "/" como url, 
        deve se definir o atribulo "exact" para definir o caminho exato de nossa url */}
        <Route path="/page2" exact component={Page2} />
        <Route path="/page3" exact component={Page3} />
      </Switch>

    </BrowserRouter>

  );
}

export default App;
