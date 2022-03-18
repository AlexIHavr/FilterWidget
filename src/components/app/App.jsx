import Content from './Content/Content';
import FilterWidget from './FilterWidget/FilterWidget';

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
