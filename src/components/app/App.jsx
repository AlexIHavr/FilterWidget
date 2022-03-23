import Content from './content/Content';
import FilterWidget from './filterWidget/FilterWidget';

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <FilterWidget />
      </header>
      <Content />
    </div>
  );
};

export default App;
