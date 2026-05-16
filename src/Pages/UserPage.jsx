import { useEffect, useState } from 'react';
import userLogo from '../Assets/user-logo.png';

const initialProfile = {
  fullName: 'Fitness Kullanıcı',
  email: 'fitness@example.com',
  age: 28,
  height: 172,
  weight: 68,
  goal: 'Kas kütlesini koruyup kondisyonu artırmak',
  activityLevel: 'Orta',
};

export default function UserPage({ onBack }) {
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem('fitnessTracker.profile');
    return savedProfile ? JSON.parse(savedProfile) : initialProfile;
  });
  const [form, setForm] = useState(profile);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setForm(profile);
  }, [profile]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: ['age', 'height', 'weight'].includes(name) ? Number(value) : value,
    }));
    setIsSaved(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setProfile(form);
    localStorage.setItem('fitnessTracker.profile', JSON.stringify(form));
    setIsSaved(true);
  }

  function handleReset() {
    setForm(initialProfile);
    setProfile(initialProfile);
    localStorage.setItem('fitnessTracker.profile', JSON.stringify(initialProfile));
    setIsSaved(false);
  }

  return (
    <main className="app-shell">
      <section className="profile-hero">
        <div className="container py-4 py-lg-5">
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div>
              <span className="brand-pill">FitnessTracker</span>
              <h1 className="h2 fw-bold mt-3 mb-2">Profil yöneticisi</h1>
              <p className="lead mb-0">Kişisel bilgilerini ve fitness hedeflerini buradan düzenle.</p>
            </div>
            <button type="button" className="btn btn-light" onClick={onBack}>
              Dashboard
            </button>
          </div>
        </div>
      </section>

      <div className="container py-4 py-lg-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <aside className="tracker-panel profile-summary">
              <img src={userLogo} alt="Kullanıcı profil görseli" className="profile-summary__image" />
              <h2 className="h4 mt-3 mb-1">{profile.fullName}</h2>
              <p className="text-muted mb-3">{profile.email}</p>
              <div className="profile-goal">
                <span>Aktif hedef</span>
                <strong>{profile.goal}</strong>
              </div>
            </aside>
          </div>

          <div className="col-lg-8">
            <form className="tracker-panel" onSubmit={handleSubmit}>
              <div className="d-flex align-items-start justify-content-between gap-3 mb-4">
                <div>
                  <p className="section-kicker mb-2">Profil</p>
                  <h2 className="h4 mb-0">Bilgileri güncelle</h2>
                </div>
                {isSaved && <span className="badge text-bg-success">Kaydedildi</span>}
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="fullName" className="form-label">Ad Soyad</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="form-control"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">E-posta</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="age" className="form-label">Yaş</label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    min="12"
                    className="form-control"
                    value={form.age}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="height" className="form-label">Boy (cm)</label>
                  <input
                    id="height"
                    name="height"
                    type="number"
                    min="100"
                    className="form-control"
                    value={form.height}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="weight" className="form-label">Kilo (kg)</label>
                  <input
                    id="weight"
                    name="weight"
                    type="number"
                    min="30"
                    className="form-control"
                    value={form.weight}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="activityLevel" className="form-label">Aktivite seviyesi</label>
                  <select
                    id="activityLevel"
                    name="activityLevel"
                    className="form-select"
                    value={form.activityLevel}
                    onChange={handleChange}
                  >
                    <option>Düşük</option>
                    <option>Orta</option>
                    <option>Yüksek</option>
                    <option>Profesyonel</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="goal" className="form-label">Fitness hedefi</label>
                  <textarea
                    id="goal"
                    name="goal"
                    className="form-control"
                    rows="4"
                    value={form.goal}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 mt-4">
                <button type="submit" className="btn btn-primary">
                  Profili kaydet
                </button>
                <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>
                  Varsayılana dön
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
