import {
  getKidlingoContent,
  getKidlingoLanguages,
  getKidlingoLevels,
  getKidlingoTopics,
} from "@/actions/kidlingo";
import { ModernKidLingo } from "@/components/modern-kid-lingo";

export default async function Home() {
  const levels = await getKidlingoLevels();
  const topics = await getKidlingoTopics();
  const content = await getKidlingoContent();
  const languages = await getKidlingoLanguages();

  return (
    <main>
      <ModernKidLingo
        levels={levels}
        topics={topics}
        content={content}
        languages={languages}
      />
    </main>
  );
}
