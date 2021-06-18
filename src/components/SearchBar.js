function SearchBar() {
  return (
    <div className="SearchBar">
      <input className="SearchBar__input" type="text" placeholder="Escribe el número de casa "/>
      <button className="SearchBar__buttom" type="submit" > Buscar</button>
    </div>
  );
}

export default SearchBar;