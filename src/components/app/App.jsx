import { connect } from 'react-redux';
import {
  setMatchValues,
  setSelectedAllValues,
  toggleAlphabetSort,
  toggleSelectedContext,
  toggleSelectedDimension,
  toggleSelectedValue,
} from '../../redux/FilterWidget/actions';
import Content from './Content/Content';
import FilterWidget from './FilterWidget/FilterWidget';

const App = ({
  state,
  toggleAlphabetSort,
  toggleSelectedContext,
  toggleSelectedDimension,
  toggleSelectedValue,
  setSelectedAllValues,
  setMatchValues,
}) => {
  return (
    <div className="wrapper">
      <header>
        <FilterWidget
          state={state}
          toggleAlphabetSort={toggleAlphabetSort}
          toggleSelectedContext={toggleSelectedContext}
          toggleSelectedDimension={toggleSelectedDimension}
          toggleSelectedValue={toggleSelectedValue}
          setSelectedAllValues={setSelectedAllValues}
          setMatchValues={setMatchValues}
        />
      </header>
      <Content filters={state.filters} />
    </div>
  );
};

const mapStateToProps = ({ filterWidget }) => ({ state: filterWidget });
const mapDispatchToProps = {
  toggleAlphabetSort,
  toggleSelectedContext,
  toggleSelectedDimension,
  toggleSelectedValue,
  setSelectedAllValues,
  setMatchValues,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
