import { connect } from 'react-redux';
import {
  setSearchString,
  setSearchType,
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
  setSearchString,
  setSearchType,
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
          setSearchString={setSearchString}
          setSearchType={setSearchType}
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
  setSearchString,
  setSearchType,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
