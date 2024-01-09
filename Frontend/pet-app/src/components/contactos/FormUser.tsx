const FormUser = ({}) => {
  return (
    <div className="form">
      <form className="form__box">
        <label>
          Nombre de contacto: <input type="email" required />
        </label>
        <label>
          Categoria: <input type="password" required />
        </label>
        <label>
          Telefono: <input type="text" required />
        </label>
        <label>
          Direccion: <input type="text" required />
        </label>
        <label>
          Horarios: <input type="text" required />
        </label>
        <label>
          Mascotas Asignadas: <input type="text" required />
        </label>
        <label>
          Notas: <br />{" "}
          <textarea rows={3} required>
            {" "}
          </textarea>
        </label>
        <button className="form__btn">
          {/* <i className='bx bx-message-square-add'> */}{" "}
          <span className="aus"> Add Contact </span>
          {/* </i>   */}
        </button>
      </form>
    </div>
  );
};

export default FormUser;
