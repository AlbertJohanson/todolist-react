import React, { useContext, useState } from "react";
import { todoContext } from "../../context/TodoContext";

export const CardToDo = ({ title, description, commentary, id }) => {
  const [commentaryTo, setCommentary] = useState("");

  const { deleteTodo, addCommentary } = useContext(todoContext);

  const handleSubmit = (id, e) => {
    e.preventDefault();
    addCommentary(id, commentaryTo);
    setCommentary("");
  };

  return (
    <div className="card p-4 mb-5">
      <div className="col-5">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="card">
          <div className="card-header">Comentario</div>
          <div className="card-body">
            <h5 className="card-title">Nuevo Comentario</h5>
            <p className="card-text">
              <p>{commentary}</p>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Agregar Comentario</label>
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Escribe un comentario...."
          value={commentaryTo}
          onChange={(e) => setCommentary(e.target.value)}
        ></input>
        <button
          className="btn btn-success"
          onClick={(e) => handleSubmit(id, e)}
        >
          Agregar comentario
        </button>
      </div>
      <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(id)}>
        Borrar To Do
      </button>
    </div>
  );
};
