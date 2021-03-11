import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './TableContainer.scoped.css';

import Table from '../Table/Table';

export default class TableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data, currentTable, handlePagination } = this.props;

    return (
      <div className="tableContainer">
        <Table
          data={data}
          currentTable={currentTable}
          handlePagination={handlePagination}
        />
      </div>
    );
  }
}

TableContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};