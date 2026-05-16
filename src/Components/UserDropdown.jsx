export default function UserDropdown({ isOpen, onOpenProfile }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="user-dropdown" role="menu" aria-label="Kullanici menusu">
      <div className="user-dropdown__header">
        <span className="user-dropdown__avatar">FT</span>
        <div>
          <strong>Fitness Kullanici</strong>
          <small>fitness@example.com</small>
        </div>
      </div>

      <div className="user-dropdown__section">
        <button
          type="button"
          className="user-dropdown__item"
          role="menuitem"
          onClick={onOpenProfile}
        >
          Profilim
        </button>
      </div>
    </div>
  );
}
