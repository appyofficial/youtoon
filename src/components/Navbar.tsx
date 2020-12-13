import React from 'react';
import { AppBar } from '@material-ui/core';

function Navbar(): JSX.Element {
  return (
    <>
      <AppBar position='fixed' style={{ padding: '15px 10px', backgroundColor: 'darkorange' }}>
        Youtoon
      </AppBar>
    </>
  );
}

export default Navbar;
