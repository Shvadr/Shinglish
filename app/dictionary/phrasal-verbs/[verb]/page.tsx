import { notFound } from 'next/navigation';
import Link from 'next/link';
import { lookVerbs } from '@/databases/look.verbs';
import { giveVerbs } from '@/databases/give.verbs';
import { takeVerbs } from '@/databases/take.verbs';
import { comeVerbs } from '@/databases/come.verbs';
import { goVerbs } from '@/databases/go.verbs';
import { getVerbs } from '@/databases/get.verbs';
import { putVerbs } from '@/databases/put.verbs';
import { turnVerbs } from '@/databases/turn.verbs';
import { runVerbs } from '@/databases/run.verbs';
import { breakVerbs } from '@/databases/break.verbs';
import Footer from "@/components/FooterComponent/footer";
import Header from "@/components/HeaderComponent/header";
import styles from "./page.module.css"

const verbsDatabase: Record<string, { title: string; data: any[] }> = {
  look: { title: 'look', data: lookVerbs },
  give: { title: 'give', data: giveVerbs },
  take: { title: 'take', data: takeVerbs },
  come: { title: 'come', data: comeVerbs },
  go: { title: 'go', data: goVerbs },
  get: { title: 'get', data: getVerbs },
  put: { title: 'put', data: putVerbs },
  turn: { title: 'turn', data: turnVerbs },
  run: { title: 'run', data: runVerbs },
  break: { title: 'break', data: breakVerbs },
};

interface PageProps {
  params: Promise<{ verb: string }>;
}

export async function generateStaticParams() {
  return Object.keys(verbsDatabase).map((verb) => ({ verb }));
}

export default async function PhrasalVerbDetailPage({ params }: PageProps) {
  const { verb } = await params;
  const verbInfo = verbsDatabase[verb];

  if (!verbInfo) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Header/>
      <div style={{marginTop: "60px", height:"100vh"}}>
        <Link href="/dictionary/phrasal-verbs" className={styles.back}>Назад</Link>
        <h2 className={styles.title}>Фразовые глаголы с основой "{verbInfo.title}"</h2>
        <ul className={styles.verb}>
          {verbInfo.data.map((item) => (
            <li key={item.id}>
              <strong>{item.verb}</strong> — {item.meaning}
              <br />
              <em>Пример:</em> {item.example}
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </main>
  );
}