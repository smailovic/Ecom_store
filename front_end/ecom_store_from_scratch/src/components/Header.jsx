import React from 'react';
import HeaderDsk from './Header/HeaderDsk.jsx';
import HeaderMob from './Header/HeaderMob.jsx';
import ModalSearch from './Header/ModalSearch.jsx';

export default function Header() {
  return (
    <div>
      <HeaderDsk />
      <HeaderMob />
      <ModalSearch />
    </div>
  );
}
