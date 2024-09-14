import {
  getKidlingoContent,
  getKidlingoLevels,
  getKidlingoTopics,
} from "@/actions/kidlingo";
import { ModernKidLingo } from "@/components/modern-kid-lingo";

export default async function Home() {
  const levels = await getKidlingoLevels();
  const topics = await getKidlingoTopics();
  const content = await getKidlingoContent();

  return (
    <main>
      <ModernKidLingo levels={levels} topics={topics} content={content} />
    </main>
  );
}
