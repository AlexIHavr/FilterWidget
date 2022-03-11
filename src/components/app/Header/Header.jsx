import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="filterWidgetWrapper card blue">
        <a className="filterWidgetBtn btn-floating btn-large waves-effect waves-light blue darken-4">
          <i className="material-icons">filter_list</i>
        </a>
        <div className="filterWidget card">
          <div className="filterHeader row">
            <div className="col">
              <i className="material-icons grey-text">filter_list</i>
            </div>
            <div className="col filterName">
              <span>FILTERS</span>
            </div>
            <div className="col clickable">
              <i className="material-icons grey-text">clear</i>
            </div>
          </div>
          <div className="contexts row">
            <div className="col clickable">
              <i className="material-icons">keyboard_arrow_down</i>
            </div>
            <div className="col filterName">
              <span>CONTEXTS</span>
            </div>
            <div className="selectedFilter col">
              <span>Lorem, ipsum dolor.</span>
            </div>
            <div className="innerFilter col">
              <div className="row">
                <div className="col clickable">
                  <div className="selectedResult"></div>
                </div>
                <div className="col filterName">
                  <span className="showAll">hello</span>
                </div>
              </div>
              <div className="row">
                <div className="col clickable">
                  <div className="selectedResult"></div>
                </div>
                <div className="col filterName">
                  <span className="showAll">hello</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dimensions row">
            <div className="col clickable">
              <i className="material-icons">keyboard_arrow_down</i>
            </div>
            <div className="col filterName">
              <span>DIMENSIONS</span>
            </div>
            <div className="selectedFilter col ">
              <span>Lorem, ipsum dolor.</span>
            </div>
            <div className="innerFilter col">
              <div className="row">
                <div className="col clickable">
                  <div className="selectedResult"></div>
                </div>
                <div className="col filterName">
                  <span className="showAll">hello</span>
                </div>
              </div>
              <div className="row">
                <div className="col clickable">
                  <div className="selectedResult"></div>
                </div>
                <div className="col filterName">
                  <span className="showAll">hello</span>
                </div>
              </div>
            </div>
          </div>
          <div className="searchFilter row">
            <div className="row">
              <div className="col">
                <form className="filterForm">
                  <button className="btn" type="submit">
                    <i className="material-icons clickable">search</i>
                  </button>
                  <input className="searchString" type="text" />
                </form>
              </div>
            </div>
            <div className="row sorts">
              <div className="col matches">
                <div className="exact clickable">..</div>
                <div className="partial clickable">.</div>
                <div className="startsWith clickable">._</div>
              </div>
              <div className="col clickable alphabet">
                <span>A-Z</span>
              </div>
            </div>
          </div>
          <div className="results row">
            <div className="row">
              <div className="col clickable">
                <div className="selectedResult"></div>
              </div>
              <div className="col filterName">
                <span className="showAll">(All)</span>
              </div>
            </div>
            <div className="row">
              <div className="col clickable">
                <i className="material-icons">check_box</i>
              </div>
              <div className="col filterName">
                <span>fsfsfsdf</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
