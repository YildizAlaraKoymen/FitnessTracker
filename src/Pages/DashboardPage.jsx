import { useEffect, useMemo, useState } from 'react';
import StatsSummary from '../Components/StatsSummary.jsx';
import UserDropdown from '../Components/UserDropdown.jsx';
import WorkoutForm from '../Components/WorkoutForm.jsx';
import WorkoutList from '../Components/WorkoutList.jsx';
import userLogo from '../Assets/user-logo.png';
import { emptyWorkout, initialWorkouts } from '../Interfaces/workout.js';

export default function DashboardPage({ onOpenProfile }) {
  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = localStorage.getItem('fitnessTracker.workouts');
    return savedWorkouts ? JSON.parse(savedWorkouts) : initialWorkouts;
  });
  const [form, setForm] = useState(emptyWorkout);
  const [editingId, setEditingId] = useState(null);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('fitnessTracker.workouts', JSON.stringify(workouts));
  }, [workouts]);

  const latestWorkout = useMemo(() => {
    return [...workouts].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  }, [workouts]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: name === 'duration' || name === 'calories' ? Number(value) : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (editingId) {
      setWorkouts((currentWorkouts) =>
        currentWorkouts.map((workout) =>
          workout.id === editingId ? { ...form, id: editingId } : workout,
        ),
      );
    } else {
      setWorkouts((currentWorkouts) => [
        { ...form, id: Date.now() },
        ...currentWorkouts,
      ]);
    }

    resetForm();
  }

  function handleEdit(workout) {
    setEditingId(workout.id);
    setForm({
      title: workout.title,
      type: workout.type,
      duration: workout.duration,
      calories: workout.calories,
      date: workout.date,
    });
  }

  function handleDelete(id) {
    setWorkouts((currentWorkouts) => currentWorkouts.filter((workout) => workout.id !== id));
    if (editingId === id) {
      resetForm();
    }
  }

  function resetForm() {
    setForm(emptyWorkout);
    setEditingId(null);
  }

  return (
    <main className="app-shell">
      <section className="hero-band">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="brand-pill">FitnessTracker</span>
              <h1 className="display-5 fw-bold mt-3 mb-3">Antrenmanlarini düzenli takip et.</h1>
              <p className="lead mb-0">
                Günlük aktivitelerini kaydet, ilerlemeyi gör ve fitness hedeflerini tek panelde yönet.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="user-menu">
                <button
                  type="button"
                  className="user-logo"
                  aria-label="Kullanici menusunu ac"
                  aria-expanded={isUserDropdownOpen}
                  onClick={() => setIsUserDropdownOpen((isOpen) => !isOpen)}
                >
                  <img src={userLogo} alt="" />
                </button>
                <UserDropdown isOpen={isUserDropdownOpen} onOpenProfile={onOpenProfile} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-4 py-lg-5">
        <StatsSummary workouts={workouts} />

        <div className="row g-4 mt-1">
          <div className="col-lg-4">
            <WorkoutForm
              form={form}
              editingId={editingId}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onCancel={resetForm}
            />
          </div>
          <div className="col-lg-8">
            <WorkoutList workouts={workouts} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </main>
  );
}
