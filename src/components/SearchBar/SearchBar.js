import React from 'react';
import './SearchBar.css';

let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
  // ravenous III: step 1 - 3
  constructor(props) {
  super(props);

  this.state = {
    term: '',
    location: '',
    sortBy: 'best_match'
  }

  //Ravenous III: step 14
  this.handleSortByChange = this.handleSortByChange.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
  this.handleLocationChange = this.handleLocationChange.bind(this);
//Ravenous III: step 23
  this.handleSearch = this.handleSearch.bind(this);

  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
 let sortByOptionValue = this.sortByOptions[sortByOption];
 // Ravenous III: step 8 (className)
 return <li
 key={sortByOptionValue}>{sortByOption}
 className={this.getSortByClass(sortByOptionValue)}
 onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
  </li>;
    });
  }

//ravenous III: step 5
getSortByClass(sortByOption) {
  if (this.state.sortBy === sortByOption) {
    return 'active';
  } else {
    return '';
  }
}


//ravenous III: step 6 - 7
  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

//Ravenous III: step 10 - 13
  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }
  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  //Ravenous III: step 20 - 22
  handleSearch(event) {
    this.props.searchYelp(this.state.term,
    this.state.location,
    this.state.sortBy)
    event.preventDefault();
  }

  render() {
    return (<div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input
    placeholder="Search Businesses"
    //Ravenous III: step 15
    onChange={this.handleTermChange}
    //Ravenous III: step 19
    searchYelp={this.searchYelp} />
    <input
    placeholder="Where?"
    //Ravenous III: step 15
    onChange={this.handleLocationChange}
    //Ravenous III: step 19
    searchYelp={this.searchYelp} />
  </div>
  <div className="SearchBar-submit">
    <a onClick={this.handleSearch}>Lets Go</a>
  </div>
</div>);
  }
}


export default SearchBar;
