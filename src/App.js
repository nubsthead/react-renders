import {StateChangeComponent} from "./Components/StateChangeComponent";
import {ParentRerenderComponent} from "./Components/ParentRerenderComponent";
import {ContextChangeComponent} from "./Components/ContextChangeComponent";
import {HooksChangeComponent} from "./Components/HooksChangeComponent";
import {colors} from "./utils/colors";
import {ParentRerenderMemo} from "./Components/ParentRerenderMemo";

const App = () => {
  // when components re-render itself:
  // - state changes
  // - parent (or children) re-renders
  // - context changes
  // - hooks changes
  // - props changes (be aware if props changes it means parent changed/re-rendered so it can be included in the second option)
  return (
      <div style={{
          backgroundColor: colors.first
      }}>
          <div style={{
              padding: '20px'
          }}>
            <h1>React re-renders examples</h1>
            <p>This is a short project created to visually show what causes re-renders in react apps and the best pattern to avoid it. Keep in mind re-renders are not an issue until some very slow component is affected by it. Please be aware of react strict mode during development mode <a target="_blank" rel="noreferrer" href='https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects'>causing a double render invoke at this link</a></p>
            <StateChangeComponent />
            <ParentRerenderComponent />
            <ContextChangeComponent />
            <HooksChangeComponent />
          </div>
          <div style={{
              padding: '20px'
          }}>
            <h1>Preventing re-renders</h1>
            <p>There are many different method and technique to avoid unnecessary re-renders.</p>
            <ParentRerenderMemo />
          </div>
      </div>
  );
}


export default App;
