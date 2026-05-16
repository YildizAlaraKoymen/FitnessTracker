import { workoutTypes } from '../Interfaces/workout.js';

export default function WorkoutForm({
  form,
  editingId,
  onChange,
  onSubmit,
  onCancel,
}) {
  return (
    <form className="tracker-panel" onSubmit={onSubmit}>
      <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
        <div>
          <p className="section-kicker mb-1">Antrenman</p>
          <h2 className="h4 mb-0">{editingId ? 'Kaydi güncelle' : 'Yeni kayit ekle'}</h2>
        </div>
        {editingId && (
          <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onCancel}>
            Vazgec
          </button>
        )}
      </div>

      <div className="row g-3">
        <div className="col-12">
          <label htmlFor="title" className="form-label">Başlik</label>
          <input
            id="title"
            name="title"
            type="text"
            className="form-control"
            value={form.title}
            onChange={onChange}
            placeholder="Orn. Aksam yürüyüşü"
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="type" className="form-label">Aktivite</label>
          <select
            id="type"
            name="type"
            className="form-select"
            value={form.type}
            onChange={onChange}
          >
            {workoutTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="date" className="form-label">Tarih</label>
          <input
            id="date"
            name="date"
            type="date"
            className="form-control"
            value={form.date}
            onChange={onChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="duration" className="form-label">Süre (dk)</label>
          <input
            id="duration"
            name="duration"
            type="number"
            min="1"
            className="form-control"
            value={form.duration}
            onChange={onChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="calories" className="form-label">Kalori</label>
          <input
            id="calories"
            name="calories"
            type="number"
            min="1"
            className="form-control"
            value={form.calories}
            onChange={onChange}
            required
          />
        </div>
      </div>

      <button className="btn btn-primary w-100 mt-4" type="submit">
        {editingId ? 'Kaydi kaydet' : 'Antrenman ekle'}
      </button>
    </form>
  );
}
