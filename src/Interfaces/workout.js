export const workoutTypes = [
  'Koşu',
  'Yürüyüş',
  'Bisiklet',
  'Ağırlık',
  'Yoga',
  'Yüzme',
];

export const initialWorkouts = [
  {
    id: 1,
    title: 'Sabah kardiyosu',
    type: 'Koşu',
    duration: 35,
    calories: 310,
    date: '2026-05-13',
  },
  {
    id: 2,
    title: 'Üst vücut ağırlık',
    type: 'Ağırlık',
    duration: 50,
    calories: 420,
    date: '2026-05-14',
  },
  {
    id: 3,
    title: 'Esneme ve nefes',
    type: 'Yoga',
    duration: 25,
    calories: 110,
    date: '2026-05-15',
  },
];

export const emptyWorkout = {
  title: '',
  type: workoutTypes[0],
  duration: 30,
  calories: 200,
  date: new Date().toISOString().slice(0, 10),
};
