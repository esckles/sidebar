import Screen from "./Screen";
import BotScreen from "./BotScreen";

const HomeScreen = () => {
  return (
    <div className="relative min-h-[calc(100vh-140px)] bg-stone-100  border rounded-md p-2">
      <Screen />

      <div className="fixed right-2 bottom-0 m-2 ">
        <BotScreen />
      </div>
    </div>
  );
};

export default HomeScreen;
