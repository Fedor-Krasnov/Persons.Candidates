import React from 'react';
import './UserPanel.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { headerData } from '../../../mocks/index.js';
import { Button } from '../../units';

const userPanelClassName = 'user-panel';
const user = 'Fedor Krasnov';

const UserPanel = ({ isLogged }) => {
  const { linkModalProfile, linkModalExit } = headerData;
  const getAbbrUser = (user) => {
    const userArray = user.split(' ');

    return userArray.length > 1 ? `${userArray[0].slice(0, 1)}${userArray[1].slice(0, 1)}` : user.slice(0, 1);
  };

  return (
    <div className={classNames(userPanelClassName, { [`${userPanelClassName}__is-logged`]: isLogged })}>
      {isLogged ? (
        <>
          <div className={`${userPanelClassName}__user`}>
            <span>{getAbbrUser(user)}</span>
            <span>{user}</span>
          </div>
          <div className={`${userPanelClassName}__popup`}>
            <Link to={linkModalProfile}>Посмотреть профиль</Link>
            <Link to={linkModalExit}>Выйти</Link>
          </div>
        </>
      ) : (
        <Button title="Войти" />
      )}
    </div>
  );
};

export { UserPanel };
