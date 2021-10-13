import ButtonFill from "./components/ButtonFill";
import ButtonOutline from "./components/ButtonOutline";
import CardProject from "./components/CardProject";
import SkillItem from "./components/SkillItem";

function App() {
  return (
    <main className="flex w-screen h-screen gap-3 flex-col justify-center items-center p-10">
      <ButtonOutline>Click Me</ButtonOutline>
      <ButtonFill>Click Me Also</ButtonFill>
      <SkillItem name="HTML" />
      <CardProject
        title="Traveleo"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis eaque nesciunt velit voluptate delectus totam minima, explicabo perspiciatis ex et eos magnam blanditiis culpa aliquid fuga obcaecati, hic vero nihil!"
      />
    </main>
  );
}
export default App;
