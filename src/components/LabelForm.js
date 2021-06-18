function LabelForm() {
  return (
      <label for="" className="Label">
        <span className="Label__title">Nombre del titular:</span>
        <input className="Label__input" type="text" name="" id="" placeholder="Pepito Perez" autocomplete="name" required/>
      </label>    
  );
}

export default LabelForm;