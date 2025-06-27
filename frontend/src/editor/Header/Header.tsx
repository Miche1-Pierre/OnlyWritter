const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Mon Word</h1>
      <input
        type="text"
        placeholder="Nom du document..."
        className="doc-title"
      />
      <div className="header-actions">
        <button className="save-btn">Enregistrer</button>
        <button className="export-btn">Exporter</button>
      </div>
    </header>
  );
};

export default Header;
