//Componente de buscador

import Button from "react-bootstrap/Button";

function Buscador({ inputFiltro, filtrar, selectFiltro }) {
  return (
    <div className="d-flex justify-content-around bg-dark text-light p-3 mediaQ">
      <h1>Buscador</h1>
      <div className="d-flex justify-content-end">
        <input
          type="text"
          placeholder="Buscar por nombre"
          onChange={inputFiltro}
        />
        <select name="select" onChange={selectFiltro}>
          <option value="" selected disabled="disabled">
            Selecciona el estado
          </option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">unknown</option>
        </select>
        <Button variant="primary" className="ps-3 ms-2" onClick={filtrar}>
          Buscar
        </Button>
      </div>
    </div>
  );
}

export default Buscador;
