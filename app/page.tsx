'use client';
import styles from './page.module.css'
import Chart from './components/chart';
import Table from './components/table';
import AddWeightForm from './components/add-weight-form';
import { useState } from 'react';
import {
  weightTrackerSlice,
  useSelector,
  useDispatch,
  selectWeightData
} from '@/lib/redux'

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector(selectWeightData);
  const today = new Date();
  const mostRecentDate = data.at(data.length - 1)?.date;
  const [isAddWeightFormDisabled, setAddWeightFormDisabled] = useState(
    mostRecentDate?.getFullYear() === today.getFullYear()
      && mostRecentDate?.getMonth() === today.getMonth()
      && mostRecentDate.getDate() === today.getDate()
      ? true
      : false
  );

  // record a new weight
  const recordWeight = (weight: string) => {
    dispatch(weightTrackerSlice.actions.addWeight({ date: today, weight }));
    setAddWeightFormDisabled(true);
  };
  console.log(mostRecentDate);

  return (
    <main className={styles.main}>
      <div className={styles.title}>Weight Tracker</div>
      <AddWeightForm disabled={isAddWeightFormDisabled} onSubmit={recordWeight} />
      <Chart data={data} />
      <Table data={data} />
    </main>
  )
}
