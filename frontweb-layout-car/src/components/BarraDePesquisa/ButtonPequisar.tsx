import 'bootstrap/js/src/collapse.js';
import './styles.css';

const ButtonPesquisar = () => {
  return (
    <>
      <div className="input-group">
        <input
          className="form-control input-content"
          type="text"
          placeholder="Digete sua busca"
        />
        <div className="input-group-append">
          <button type="button" className="btn btn-icon-src">
            <h6>Buscar</h6>
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonPesquisar;
