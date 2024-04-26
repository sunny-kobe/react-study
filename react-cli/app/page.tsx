import Image from "next/image";
import Gallery from "./components/Gallery";
import Tab from "./components/Tab";
import TodoList from "./components/TodoList";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tab />
      <Gallery />
      <TodoList />
    </main>
  );
}
