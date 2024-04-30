import Image from "next/image";
import Gallery from "./components/Gallery";
import Tab from "./components/Tab";
import TodoList from "./components/TodoList";
import Profile from "./components/prop";


export default function Home() {
  return (
    <main>
      <Tab />
      <Gallery />
      <TodoList />
      <Profile />
    </main>
  );
}
