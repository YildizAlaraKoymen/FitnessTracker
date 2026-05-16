export default function WorkoutList({ workouts, onEdit, onDelete }) {
  return (
    <section className="tracker-panel">
      <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
        <div>
          <h2 className="h4 mb-0">Antrenman kayitlari</h2>
        </div>
        <span className="badge text-bg-light">{workouts.length} kayit</span>
      </div>

      {workouts.length === 0 ? (
        <div className="empty-state">
          Henuz antrenman yok. Ilk kaydi ekleyerek takibe baslayin.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th>Başlık</th>
                <th>Aktivite</th>
                <th>Tarih</th>
                <th className="text-end">Süre</th>
                <th className="text-end">Kalori</th>
                <th className="text-end">İşlem</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout) => (
                <tr key={workout.id}>
                  <td className="fw-semibold" data-label="Baslik">{workout.title}</td>
                  <td data-label="Aktivite"><span className="activity-chip">{workout.type}</span></td>
                  <td data-label="Tarih">{new Date(workout.date).toLocaleDateString('tr-TR')}</td>
                  <td className="text-end" data-label="Sure">{workout.duration} dk</td>
                  <td className="text-end" data-label="Kalori">{workout.calories} kcal</td>
                  <td data-label="Islem">
                    <div className="d-flex justify-content-end gap-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => onEdit(workout)}
                      >
                        Güncelle
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => onDelete(workout.id)}
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
