import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio'
import SobreMim from './paginas/sobremim'
import Menu from './componentes/Menu';
import Rodape from 'componentes/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from 'paginas/post';
import NaoEncontrada from 'paginas/naoencontrada';
import ScrollToTop from 'componentes/ScrollToTop';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route path='/' element={<Inicio />} />
          <Route path='/sobremim' element={<SobreMim />} />
        </Route>

        <Route path='posts/:id' element={<Post />} />
        <Route path='*' element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
