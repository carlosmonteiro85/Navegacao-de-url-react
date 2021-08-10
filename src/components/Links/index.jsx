
import { Link } from 'react-router-dom';

export function Links() {
    return (
        <div>
            {/* O component "Link" subustitui a tag html <a><a/> e para substituir 
            o atributo "href" ultilizamos o atributo "to" */}
            <Link to="/">Page 1</Link>
            <Link to="/page2">Page 2</Link>
            <Link to="page3">Page3</Link>
        </div>
    );
}
